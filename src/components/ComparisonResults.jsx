import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { CheckCircle, XCircle, RotateCcw, Download, History, Eye } from 'lucide-react'

const ComparisonResults = ({ comparison, onReset, history, onSelectFromHistory }) => {
  const [showHistory, setShowHistory] = useState(false)
  const [chartType, setChartType] = useState('bar')
  
  const { options, analysis, recommendation, timestamp } = comparison

  const chartData = analysis.map(item => ({
    criterion: item.criterion,
    [options[0]]: item.option1Score,
    [options[1]]: item.option2Score
  }))

  const radarData = analysis.map(item => ({
    criterion: item.criterion.substring(0, 10) + (item.criterion.length > 10 ? '...' : ''),
    [options[0]]: item.option1Score,
    [options[1]]: item.option2Score,
    fullMax: 5
  }))

  const exportReport = () => {
    const report = {
      comparison: `${options[0]} vs ${options[1]}`,
      timestamp,
      summary: {
        option1Total: analysis.reduce((sum, item) => sum + item.option1Score, 0),
        option2Total: analysis.reduce((sum, item) => sum + item.option2Score, 0),
        criteriaCount: analysis.length
      },
      analysis,
      recommendation,
      generatedBy: 'The Referee - Decision Comparison Tool'
    }
    
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `referee-comparison-${options[0].replace(/\s+/g, '-')}-vs-${options[1].replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2>Comparison Results: {options[0]} vs {options[1]}</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          {history.length > 0 && (
            <button 
              className="btn btn-secondary" 
              onClick={() => setShowHistory(!showHistory)}
            >
              <History size={16} />
              History ({history.length})
            </button>
          )}
          <button className="btn btn-secondary" onClick={exportReport}>
            <Download size={16} />
            Export
          </button>
          <button className="btn btn-secondary" onClick={onReset}>
            <RotateCcw size={16} />
            New Comparison
          </button>
        </div>
      </div>

      {/* History Panel */}
      {showHistory && (
        <div className="card" style={{ margin: '0 0 24px 0', backgroundColor: '#f8f9fa' }}>
          <h3 style={{ marginBottom: '16px' }}>Recent Comparisons</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {history.map((item, index) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectFromHistory(item)
                  setShowHistory(false)
                }}
                style={{
                  padding: '12px',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: '500' }}>
                    {item.options[0]} vs {item.options[1]}
                  </span>
                  <span style={{ fontSize: '12px', color: '#666' }}>
                    {new Date(item.timestamp).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chart Type Toggle */}
      <div style={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
        <button 
          className={`btn ${chartType === 'bar' ? '' : 'btn-secondary'}`}
          onClick={() => setChartType('bar')}
          style={{ fontSize: '12px', padding: '8px 16px' }}
        >
          Bar Chart
        </button>
        <button 
          className={`btn ${chartType === 'radar' ? '' : 'btn-secondary'}`}
          onClick={() => setChartType('radar')}
          style={{ fontSize: '12px', padding: '8px 16px' }}
        >
          Radar Chart
        </button>
      </div>

      {/* Score Chart */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '16px' }}>Score Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          {chartType === 'bar' ? (
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="criterion" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Bar dataKey={options[0]} fill="#667eea" />
              <Bar dataKey={options[1]} fill="#764ba2" />
            </BarChart>
          ) : (
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="criterion" />
              <PolarRadiusAxis angle={90} domain={[0, 5]} />
              <Radar name={options[0]} dataKey={options[0]} stroke="#667eea" fill="#667eea" fillOpacity={0.3} />
              <Radar name={options[1]} dataKey={options[1]} stroke="#764ba2" fill="#764ba2" fillOpacity={0.3} />
              <Tooltip />
            </RadarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Detailed Analysis */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ marginBottom: '16px' }}>Detailed Analysis</h3>
        <div className="grid">
          {analysis.map((item, index) => (
            <div key={index} className="card" style={{ margin: '0 0 16px 0' }}>
              <h4 style={{ marginBottom: '16px', color: '#667eea' }}>{item.criterion}</h4>
              
              <div className="grid grid-2">
                <div>
                  <h5 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    {options[0]} (Score: {item.option1Score}/5)
                  </h5>
                  
                  <div style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#28a745', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle size={16} /> Pros:
                    </strong>
                    <ul style={{ marginLeft: '20px', marginTop: '4px' }}>
                      {item.option1Pros.map((pro, i) => (
                        <li key={i} style={{ color: '#666', fontSize: '14px' }}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <strong style={{ color: '#dc3545', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <XCircle size={16} /> Cons:
                    </strong>
                    <ul style={{ marginLeft: '20px', marginTop: '4px' }}>
                      {item.option1Cons.map((con, i) => (
                        <li key={i} style={{ color: '#666', fontSize: '14px' }}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h5 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    {options[1]} (Score: {item.option2Score}/5)
                  </h5>
                  
                  <div style={{ marginBottom: '12px' }}>
                    <strong style={{ color: '#28a745', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle size={16} /> Pros:
                    </strong>
                    <ul style={{ marginLeft: '20px', marginTop: '4px' }}>
                      {item.option2Pros.map((pro, i) => (
                        <li key={i} style={{ color: '#666', fontSize: '14px' }}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <strong style={{ color: '#dc3545', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <XCircle size={16} /> Cons:
                    </strong>
                    <ul style={{ marginLeft: '20px', marginTop: '4px' }}>
                      {item.option2Cons.map((con, i) => (
                        <li key={i} style={{ color: '#666', fontSize: '14px' }}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendation */}
      <div className="card" style={{ backgroundColor: '#f8f9fa', margin: 0 }}>
        <h3 style={{ marginBottom: '12px', color: '#667eea' }}>Recommendation</h3>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>{recommendation}</p>
      </div>
    </div>
  )
}

export default ComparisonResults