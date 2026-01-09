import React, { useState } from 'react'
import Header from './components/Header'
import ComparisonForm from './components/ComparisonForm'
import ComparisonResults from './components/ComparisonResults'
import PresetComparisons from './components/PresetComparisons'
import LoadingSpinner from './components/LoadingSpinner'
import { generateDetailedComparison, generateContextualRecommendation } from './utils/comparisonEngine'

function App() {
  const [comparison, setComparison] = useState(null)
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([])

  const handleComparisonSubmit = async (formData) => {
    setLoading(true)
    // Simulate API call delay for realistic UX
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const result = generateComparison(formData)
    setComparison(result)
    
    // Add to history
    setHistory(prev => [result, ...prev.slice(0, 4)]) // Keep last 5 comparisons
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
      timestamp: new Date().toISOString()
    }
  }

  return (
    <div className="container">
      <Header />
      {loading && <LoadingSpinner message="Analyzing your options and generating insights..." />}
      {!loading && (
        <div className="grid">
          <ComparisonForm 
            onSubmit={handleComparisonSubmit} 
            loading={loading} 
          />
          <PresetComparisons onSelect={handleComparisonSubmit} />
          {comparison && (
            <ComparisonResults 
              comparison={comparison} 
              onReset={() => setComparison(null)}
              history={history}
              onSelectFromHistory={setComparison}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default App