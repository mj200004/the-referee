import React from 'react'
import { Zap, Database, Cloud, Code } from 'lucide-react'

const PresetComparisons = ({ onSelect }) => {
  const presets = [
    {
      icon: <Code size={20} />,
      title: 'Frontend Frameworks',
      description: 'React vs Vue.js',
      data: {
        option1: 'React',
        option2: 'Vue.js',
        criteria: 'Performance, Learning Curve, Community Support, Job Market, Ecosystem',
        context: 'Building a modern web application with a team of 3-5 developers'
      }
    },
    {
      icon: <Database size={20} />,
      title: 'Database Choice',
      description: 'PostgreSQL vs MongoDB',
      data: {
        option1: 'PostgreSQL',
        option2: 'MongoDB',
        criteria: 'Scalability, ACID Compliance, Query Flexibility, Performance, Learning Curve',
        context: 'E-commerce platform with complex relationships and high transaction volume'
      }
    },
    {
      icon: <Cloud size={20} />,
      title: 'Cloud Providers',
      description: 'AWS vs Azure',
      data: {
        option1: 'AWS',
        option2: 'Microsoft Azure',
        criteria: 'Cost, Service Variety, Learning Curve, Enterprise Integration, Global Reach',
        context: 'Startup looking to deploy a scalable web application with microservices'
      }
    },
    {
      icon: <Zap size={20} />,
      title: 'API Architecture',
      description: 'REST vs GraphQL',
      data: {
        option1: 'REST API',
        option2: 'GraphQL',
        criteria: 'Flexibility, Performance, Caching, Learning Curve, Tooling',
        context: 'Mobile app backend with multiple client applications and varying data needs'
      }
    }
  ]

  return (
    <div className="card">
      <h2 style={{ marginBottom: '20px' }}>Quick Comparisons</h2>
      <div className="grid grid-2">
        {presets.map((preset, index) => (
          <div
            key={index}
            onClick={() => onSelect(preset.data)}
            style={{
              padding: '16px',
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              ':hover': {
                borderColor: '#667eea',
                transform: 'translateY(-2px)'
              }
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#667eea'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#e9ecef'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              {preset.icon}
              <h3 style={{ fontSize: '16px', fontWeight: '600' }}>{preset.title}</h3>
            </div>
            <p style={{ color: '#666', fontSize: '14px' }}>{preset.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PresetComparisons