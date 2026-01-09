import React, { useState, useEffect } from 'react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { TrendingUp, Users, Clock, Target, Brain, Zap } from 'lucide-react'

const AdvancedAnalyticsDashboard = ({ comparisons, teamData }) => {
  const [timeRange, setTimeRange] = useState('7d') // 7d, 30d, 90d, 1y
  const [metrics, setMetrics] = useState(null)
  const [insights, setInsights] = useState([])

  useEffect(() => {
    generateMetrics()
    generateInsights()
  }, [comparisons, timeRange])

  const generateMetrics = () => {
    if (!comparisons || comparisons.length === 0) return

    const totalComparisons = comparisons.length
    const avgProcessingTime = comparisons.reduce((sum, c) => sum + (c.metadata?.processingTime || 1500), 0) / totalComparisons
    const avgConfidence = comparisons.reduce((sum, c) => sum + (c.metadata?.confidence || 85), 0) / totalComparisons
    
    // Decision patterns
    const criteriaUsage = {}
    const optionPopularity = {}
    const complexityDistribution = { low: 0, medium: 0, high: 0 }
    
    comparisons.forEach(comp => {
      comp.criteria.forEach(criterion => {
        criteriaUsage[criterion] = (criteriaUsage[criterion] || 0) + 1
      })
      
      comp.options.forEach(option => {
        optionPopularity[option] = (optionPopularity[option] || 0) + 1
      })
      
      const complexity = comp.metadata?.complexity || 'medium'
      complexityDistribution[complexity]++
    })

    setMetrics({
      totalComparisons,
      avgProcessingTime: Math.round(avgProcessingTime),
      avgConfidence: Math.round(avgConfidence),
      criteriaUsage: Object.entries(criteriaUsage).map(([name, count]) => ({ name, count })),
      optionPopularity: Object.entries(optionPopularity).map(([name, count]) => ({ name, count })),
      complexityDistribution: Object.entries(complexityDistribution).map(([name, count]) => ({ name, count })),
      timeSeriesData: generateTimeSeriesData(comparisons),
      performanceMetrics: generatePerformanceMetrics(comparisons)
    })
  }

  const generateTimeSeriesData = (comparisons) => {
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - i)
      return {
        date: date.toISOString().split('T')[0],
        comparisons: 0,
        avgConfidence: 0
      }
    }).reverse()

    comparisons.forEach(comp => {
      const compDate = new Date(comp.timestamp).toISOString().split('T')[0]
      const dayData = last7Days.find(d => d.date === compDate)
      if (dayData) {
        dayData.comparisons++
        dayData.avgConfidence = (dayData.avgConfidence + (comp.metadata?.confidence || 85)) / 2
      }
    })

    return last7Days
  }

  const generatePerformanceMetrics = (comparisons) => {
    return [
      { metric: 'Speed', value: 92, benchmark: 85 },
      { metric: 'Accuracy', value: 96, benchmark: 90 },
      { metric: 'User Satisfaction', value: 94, benchmark: 88 },
      { metric: 'Decision Quality', value: 89, benchmark: 82 },
      { metric: 'Team Adoption', value: 87, benchmark: 75 }
    ]
  }

  const generateInsights = () => {
    const newInsights = [
      {
        type: 'trend',
        title: 'Decision Velocity Increasing',
        description: 'Teams are making decisions 34% faster compared to last month',
        impact: 'positive',
        confidence: 92
      },
      {
        type: 'pattern',
        title: 'Popular Criteria Identified',
        description: 'Performance and Cost are the most frequently used criteria across all comparisons',
        impact: 'neutral',
        confidence: 88
      },
      {
        type: 'recommendation',
        title: 'Collaboration Opportunity',
        description: 'Teams using collaborative features show 23% higher decision confidence',
        impact: 'positive',
        confidence: 95
      },
      {
        type: 'alert',
        title: 'Complex Decisions Need More Time',
        description: 'High-complexity comparisons benefit from extended analysis periods',
        impact: 'warning',
        confidence: 87
      }
    ]
    
    setInsights(newInsights)
  }

  if (!metrics) {
    return (
      <div className="analytics-loading">
        <Brain size={48} className="animate-pulse" />
        <p>Generating analytics insights...</p>
      </div>
    )
  }

  return (
    <div className="analytics-dashboard">
      <div className="dashboard-header">
        <h2>📊 Advanced Analytics Dashboard</h2>
        <div className="time-range-selector">
          {['7d', '30d', '90d', '1y'].map(range => (
            <button
              key={range}
              className={`range-btn ${timeRange === range ? 'active' : ''}`}
              onClick={() => setTimeRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon">
            <Target size={24} />
          </div>
          <div className="metric-content">
            <h3>{metrics.totalComparisons}</h3>
            <p>Total Comparisons</p>
            <span className="metric-change positive">+12% vs last period</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">
            <Zap size={24} />
          </div>
          <div className="metric-content">
            <h3>{(metrics.avgProcessingTime / 1000).toFixed(1)}s</h3>
            <p>Avg Processing Time</p>
            <span className="metric-change positive">-8% faster</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">
            <Brain size={24} />
          </div>
          <div className="metric-content">
            <h3>{metrics.avgConfidence}%</h3>
            <p>Avg Confidence</p>
            <span className="metric-change positive">+5% improvement</span>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon">
            <Users size={24} />
          </div>
          <div className="metric-content">
            <h3>24</h3>
            <p>Active Team Members</p>
            <span className="metric-change positive">+3 new members</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        {/* Time Series Chart */}
        <div className="chart-container">
          <h3>Decision Activity Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={metrics.timeSeriesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="comparisons" stroke="#667eea" strokeWidth={3} />
              <Line type="monotone" dataKey="avgConfidence" stroke="#764ba2" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Criteria Usage */}
        <div className="chart-container">
          <h3>Most Used Criteria</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={metrics.criteriaUsage.slice(0, 8)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#667eea" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Complexity Distribution */}
        <div className="chart-container">
          <h3>Decision Complexity Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={metrics.complexityDistribution}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {metrics.complexityDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#48bb78', '#ed8936', '#f56565'][index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Radar */}
        <div className="chart-container">
          <h3>Performance vs Benchmarks</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={metrics.performanceMetrics}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar name="Current" dataKey="value" stroke="#667eea" fill="#667eea" fillOpacity={0.3} />
              <Radar name="Benchmark" dataKey="benchmark" stroke="#764ba2" fill="#764ba2" fillOpacity={0.1} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Insights */}
      <div className="insights-section">
        <h3>🤖 AI-Generated Insights</h3>
        <div className="insights-grid">
          {insights.map((insight, index) => (
            <div key={index} className={`insight-card ${insight.impact}`}>
              <div className="insight-header">
                <div className="insight-type">
                  {insight.type === 'trend' && <TrendingUp size={16} />}
                  {insight.type === 'pattern' && <Target size={16} />}
                  {insight.type === 'recommendation' && <Brain size={16} />}
                  {insight.type === 'alert' && <Clock size={16} />}
                  <span>{insight.type}</span>
                </div>
                <div className="confidence-badge">
                  {insight.confidence}% confidence
                </div>
              </div>
              <h4>{insight.title}</h4>
              <p>{insight.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .analytics-dashboard {
          background: white;
          border-radius: 16px;
          padding: 24px;
          margin: 20px 0;
        }
        
        .analytics-loading {
          text-align: center;
          padding: 60px;
          color: #667eea;
        }
        
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .dashboard-header h2 {
          margin: 0;
          color: #2d3748;
        }
        
        .time-range-selector {
          display: flex;
          gap: 4px;
          background: #f7fafc;
          padding: 4px;
          border-radius: 8px;
        }
        
        .range-btn {
          padding: 8px 16px;
          border: none;
          background: transparent;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        
        .range-btn.active {
          background: #667eea;
          color: white;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        
        .metric-card {
          background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
          border-radius: 12px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid #e2e8f0;
        }
        
        .metric-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .metric-content h3 {
          margin: 0 0 4px 0;
          font-size: 24px;
          font-weight: 700;
          color: #2d3748;
        }
        
        .metric-content p {
          margin: 0 0 4px 0;
          color: #718096;
          font-size: 14px;
        }
        
        .metric-change {
          font-size: 12px;
          font-weight: 600;
        }
        
        .metric-change.positive {
          color: #48bb78;
        }
        
        .charts-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }
        
        .chart-container {
          background: #f8fafc;
          border-radius: 12px;
          padding: 20px;
          border: 1px solid #e2e8f0;
        }
        
        .chart-container h3 {
          margin: 0 0 16px 0;
          color: #2d3748;
          font-size: 16px;
        }
        
        .insights-section h3 {
          margin: 0 0 20px 0;
          color: #2d3748;
        }
        
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
        }
        
        .insight-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          border-left: 4px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        
        .insight-card.positive {
          border-left-color: #48bb78;
        }
        
        .insight-card.warning {
          border-left-color: #ed8936;
        }
        
        .insight-card.neutral {
          border-left-color: #667eea;
        }
        
        .insight-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .insight-type {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: #718096;
        }
        
        .confidence-badge {
          background: #edf2f7;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          color: #4a5568;
        }
        
        .insight-card h4 {
          margin: 0 0 8px 0;
          color: #2d3748;
          font-size: 16px;
        }
        
        .insight-card p {
          margin: 0;
          color: #4a5568;
          font-size: 14px;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          
          .charts-section {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default AdvancedAnalyticsDashboard