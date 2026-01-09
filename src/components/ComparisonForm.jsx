import React, { useState } from 'react'
import { Search, Loader } from 'lucide-react'

const ComparisonForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    option1: '',
    option2: '',
    criteria: '',
    context: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.option1 && formData.option2 && formData.criteria) {
      onSubmit(formData)
    }
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="card">
      <h2 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Search size={24} />
        Compare Options
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-2" style={{ marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Option 1
            </label>
            <input
              type="text"
              className="input"
              placeholder="e.g., React"
              value={formData.option1}
              onChange={(e) => handleChange('option1', e.target.value)}
              required
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
              Option 2
            </label>
            <input
              type="text"
              className="input"
              placeholder="e.g., Vue.js"
              value={formData.option2}
              onChange={(e) => handleChange('option2', e.target.value)}
              required
            />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Comparison Criteria
          </label>
          <input
            type="text"
            className="input"
            placeholder="e.g., Performance, Learning Curve, Community Support, Ecosystem"
            value={formData.criteria}
            onChange={(e) => handleChange('criteria', e.target.value)}
            required
          />
          <small style={{ color: '#666', fontSize: '12px' }}>
            Separate criteria with commas
          </small>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>
            Context & Requirements
          </label>
          <textarea
            className="input"
            rows="3"
            placeholder="Describe your project requirements, team size, timeline, etc."
            value={formData.context}
            onChange={(e) => handleChange('context', e.target.value)}
            style={{ resize: 'vertical' }}
          />
        </div>

        <button 
          type="submit" 
          className="btn"
          disabled={loading || !formData.option1 || !formData.option2 || !formData.criteria}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            opacity: loading ? 0.7 : 1 
          }}
        >
          {loading ? (
            <>
              <Loader size={16} className="animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Search size={16} />
              Compare Options
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default ComparisonForm