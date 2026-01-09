import React, { useState } from 'react'
import Header from './components/Header'
import ComparisonForm from './components/ComparisonForm'
import ComparisonResults from './components/ComparisonResults'
import PresetComparisons from './components/PresetComparisons'
import LoadingSpinner from './components/LoadingSpinner'
import AIAnalysisEngine from './components/AIAnalysisEngine'
import VoiceInterface from './components/VoiceInterface'
import CollaborationHub from './components/CollaborationHub'
import Advanced3DVisualization from './components/Advanced3DVisualization'
import AdvancedAnalyticsDashboard from './components/AdvancedAnalyticsDashboard'
import { generateDetailedComparison, generateContextualRecommendation } from './utils/comparisonEngine'

function App() {
  const [comparison, setComparison] = useState(null)
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])
  const [aiAnalysis, setAiAnalysis] = useState(null)
  const [activeTab, setActiveTab] = useState('analysis') // analysis, collaboration, 3d

  const handleComparisonSubmit = async (formData) => {
    setLoading(true)
    setAiAnalysis(null)
    
    // Enhanced loading simulation with multiple phases
    const phases = [
      'Initializing comparison engine...',
      'Analyzing market data...',
      'Processing community insights...',
      'Calculating risk factors...',
      'Generating visualizations...',
      'Finalizing recommendations...'
    ]
    
    for (let i = 0; i < phases.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800))
    }
    
    const result = generateComparison(formData)
    setComparison(result)
    
    // Add to history
    setHistory(prev => [result, ...prev.slice(0, 9)]) // Keep last 10 comparisons
    setLoading(false)
  }

  const generateComparison = (formData) => {
    const { option1, option2, criteria, context } = formData
    
    const analysis = generateDetailedComparison(option1, option2, criteria, context)
    const recommendation = generateContextualRecommendation(option1, option2, context, analysis)
    
    return {
      id: Date.now(),
      options: [option1, option2],
      criteria: criteria.split(',').map(c => c.trim()),
      context,
      analysis,
      recommendation,
      timestamp: new Date().toISOString(),
      metadata: {
        complexity: analysis.length > 4 ? 'high' : 'medium',
        confidence: Math.floor(Math.random() * 20) + 80,
        processingTime: Math.floor(Math.random() * 2000) + 1000
      }
    }
  }

  const handleVoiceCommand = (command) => {
    switch (command) {
      case 'export':
        // Trigger export functionality
        break
      case 'new':
        setComparison(null)
        setAiAnalysis(null)
        break
      default:
        console.log('Voice command:', command)
    }
  }

  const handleAIAnalysisComplete = (analysis) => {
    setAiAnalysis(analysis)
  }

  const handle3DInteraction = (type, data) => {
    console.log('3D Interaction:', type, data)
    // Handle 3D visualization interactions
  }

  return (
    <div className="app-container">
      <Header />
      
      {/* Voice Interface - Always visible */}
      <VoiceInterface 
        onVoiceCommand={handleVoiceCommand}
        onComparisonCreate={handleComparisonSubmit}
      />
      
      {loading && (
        <LoadingSpinner message="Running advanced AI analysis and generating insights..." />
      )}
      
      {!loading && (
        <div className="main-content">
          {!comparison ? (
            <div className="input-section">
              <ComparisonForm 
                onSubmit={handleComparisonSubmit} 
                loading={loading} 
              />
              <PresetComparisons onSelect={handleComparisonSubmit} />
            </div>
          ) : (
            <div className="results-section">
              {/* Tab Navigation */}
              <div className="tab-navigation">
                <button 
                  className={`tab-btn ${activeTab === 'analysis' ? 'active' : ''}`}
                  onClick={() => setActiveTab('analysis')}
                >
                  🧠 AI Analysis
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'collaboration' ? 'active' : ''}`}
                  onClick={() => setActiveTab('collaboration')}
                >
                  👥 Team Collaboration
                </button>
                <button 
                  className={`tab-btn ${activeTab === '3d' ? 'active' : ''}`}
                  onClick={() => setActiveTab('3d')}
                >
                  🌐 3D Visualization
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
                  onClick={() => setActiveTab('analytics')}
                >
                  📊 Analytics Dashboard
                </button>
                <button 
                  className={`tab-btn ${activeTab === 'results' ? 'active' : ''}`}
                  onClick={() => setActiveTab('results')}
                >
                  📋 Detailed Results
                </button>
              </div>

              {/* Tab Content */}
              <div className="tab-content">
                {activeTab === 'analysis' && (
                  <AIAnalysisEngine 
                    comparison={comparison}
                    onAnalysisComplete={handleAIAnalysisComplete}
                  />
                )}
                
                {activeTab === 'collaboration' && (
                  <CollaborationHub 
                    comparison={comparison}
                    onCollaborativeDecision={(decision) => console.log('Collaborative decision:', decision)}
                  />
                )}
                
                {activeTab === '3d' && (
                  <Advanced3DVisualization 
                    comparison={comparison}
                    onInteraction={handle3DInteraction}
                  />
                )}
                
                {activeTab === 'analytics' && (
                  <AdvancedAnalyticsDashboard 
                    comparisons={history}
                    teamData={{}}
                  />
                )}
                
                {activeTab === 'results' && (
                  <ComparisonResults 
                    comparison={comparison} 
                    onReset={() => {
                      setComparison(null)
                      setAiAnalysis(null)
                      setActiveTab('analysis')
                    }}
                    history={history}
                    onSelectFromHistory={(item) => {
                      setComparison(item)
                      setActiveTab('analysis')
                    }}
                    aiAnalysis={aiAnalysis}
                  />
                )}
              </div>
              
              {/* Quick Actions */}
              <div className="quick-actions">
                <button 
                  className="action-btn primary"
                  onClick={() => {
                    setComparison(null)
                    setAiAnalysis(null)
                    setActiveTab('analysis')
                  }}
                >
                  🆕 New Comparison
                </button>
                <button 
                  className="action-btn secondary"
                  onClick={() => {
                    // Export all data
                    const exportData = {
                      comparison,
                      aiAnalysis,
                      timestamp: new Date().toISOString()
                    }
                    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
                    const url = URL.createObjectURL(blob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = `referee-pro-analysis-${Date.now()}.json`
                    a.click()
                    URL.revokeObjectURL(url)
                  }}
                >
                  💾 Export Analysis
                </button>
                <button 
                  className="action-btn secondary"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'The Referee Pro - Decision Analysis',
                        text: `Check out this comparison: ${comparison.options[0]} vs ${comparison.options[1]}`,
                        url: window.location.href
                      })
                    } else {
                      navigator.clipboard.writeText(window.location.href)
                      alert('Link copied to clipboard!')
                    }
                  }}
                >
                  🔗 Share Results
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      
      <style jsx>{`
        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }
        
        .main-content {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .input-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .results-section {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }
        
        .tab-navigation {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
          background: #f8fafc;
          padding: 4px;
          border-radius: 12px;
        }
        
        .tab-btn {
          flex: 1;
          padding: 12px 16px;
          border: none;
          background: transparent;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
          color: #64748b;
        }
        
        .tab-btn:hover {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
        }
        
        .tab-btn.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .tab-content {
          min-height: 400px;
        }
        
        .quick-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #e2e8f0;
        }
        
        .action-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .action-btn.primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .action-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }
        
        .action-btn.secondary {
          background: #f8fafc;
          color: #4a5568;
          border: 1px solid #e2e8f0;
        }
        
        .action-btn.secondary:hover {
          background: #edf2f7;
          transform: translateY(-1px);
        }
        
        @media (max-width: 1024px) {
          .input-section {
            grid-template-columns: 1fr;
          }
          
          .tab-navigation {
            flex-wrap: wrap;
          }
          
          .tab-btn {
            min-width: 120px;
          }
          
          .quick-actions {
            flex-wrap: wrap;
          }
        }
        
        @media (max-width: 768px) {
          .app-container {
            padding: 10px;
          }
          
          .results-section {
            padding: 16px;
          }
          
          .tab-btn {
            font-size: 14px;
            padding: 10px 12px;
          }
        }
      `}</style>
    </div>
  )
}

export default App