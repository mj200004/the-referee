import React, { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw, Sparkles, Zap, Brain, Users, Mic, Eye } from 'lucide-react'

const DemoShowcase = ({ onStartDemo }) => {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const demoScenarios = [
    {
      id: 'ai-analysis',
      title: '🧠 AI-Powered Analysis',
      description: 'Watch our ML algorithms analyze React vs Vue.js with predictive insights',
      icon: <Brain size={32} />,
      color: 'linear-gradient(135deg, #667eea, #764ba2)',
      features: ['Machine Learning Analysis', 'Predictive Modeling', 'Risk Assessment', 'Market Trends'],
      demoData: {
        option1: 'React',
        option2: 'Vue.js',
        criteria: 'Performance, Learning Curve, Community Support, Job Market, Ecosystem',
        context: 'Building a modern e-commerce platform with a team of 5 developers'
      }
    },
    {
      id: 'voice-interface',
      title: '🎤 Voice Commands',
      description: 'Experience hands-free decision making with natural language processing',
      icon: <Mic size={32} />,
      color: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
      features: ['Speech Recognition', 'Natural Language Processing', 'Voice Synthesis', 'Multi-language Support'],
      demoData: {
        option1: 'AWS',
        option2: 'Microsoft Azure',
        criteria: 'Cost, Scalability, Learning Curve, Enterprise Integration',
        context: 'Voice-initiated comparison for cloud infrastructure'
      }
    },
    {
      id: 'collaboration',
      title: '👥 Team Collaboration',
      description: 'See real-time team voting and collaborative decision making in action',
      icon: <Users size={32} />,
      color: 'linear-gradient(135deg, #00d2ff, #3a7bd5)',
      features: ['Live Voting', 'Real-time Comments', 'Team Presence', 'Decision Audit'],
      demoData: {
        option1: 'PostgreSQL',
        option2: 'MongoDB',
        criteria: 'ACID Compliance, Scalability, Query Flexibility, Performance',
        context: 'Database selection for high-traffic application'
      }
    },
    {
      id: '3d-visualization',
      title: '🌐 3D Decision Space',
      description: 'Explore immersive 3D visualizations with WebGL-powered graphics',
      icon: <Eye size={32} />,
      color: 'linear-gradient(135deg, #a8edea, #fed6e3)',
      features: ['WebGL Graphics', 'Interactive 3D', 'Multiple Views', 'Gesture Controls'],
      demoData: {
        option1: 'GraphQL',
        option2: 'REST API',
        criteria: 'Flexibility, Performance, Caching, Learning Curve, Tooling',
        context: 'API architecture for mobile application backend'
      }
    }
  ]

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentDemo(current => (current + 1) % demoScenarios.length)
            return 0
          }
          return prev + 2
        })
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isPlaying, demoScenarios.length])

  const startDemo = (scenarioIndex) => {
    setCurrentDemo(scenarioIndex)
    setProgress(0)
    setIsPlaying(true)
    onStartDemo(demoScenarios[scenarioIndex].demoData)
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  const resetDemo = () => {
    setIsPlaying(false)
    setProgress(0)
    setCurrentDemo(0)
  }

  return (
    <div className="demo-showcase">
      {/* Hero Section */}
      <div className="demo-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Live Interactive Demo</span>
          </div>
          <h1 className="hero-title">
            Experience the Future of
            <span className="gradient-text"> Decision Intelligence</span>
          </h1>
          <p className="hero-description">
            Watch our revolutionary AI-powered platform analyze complex decisions in real-time.
            Choose a scenario below to see the magic happen.
          </p>
        </div>
        
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="float-element" style={{ animationDelay: '0s' }}>🧠</div>
            <div className="float-element" style={{ animationDelay: '1s' }}>🎤</div>
            <div className="float-element" style={{ animationDelay: '2s' }}>👥</div>
            <div className="float-element" style={{ animationDelay: '3s' }}>🌐</div>
          </div>
        </div>
      </div>

      {/* Demo Controls */}
      <div className="demo-controls">
        <div className="playback-controls">
          <button className="control-btn" onClick={togglePlayback}>
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            {isPlaying ? 'Pause Demo' : 'Start Demo'}
          </button>
          <button className="control-btn secondary" onClick={resetDemo}>
            <RotateCcw size={20} />
            Reset
          </button>
        </div>
        
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* Demo Scenarios */}
      <div className="demo-scenarios">
        <h2>Choose Your Demo Experience</h2>
        <div className="scenarios-grid">
          {demoScenarios.map((scenario, index) => (
            <div
              key={scenario.id}
              className={`scenario-card ${currentDemo === index ? 'active' : ''}`}
              onClick={() => startDemo(index)}
            >
              <div className="scenario-header">
                <div 
                  className="scenario-icon"
                  style={{ background: scenario.color }}
                >
                  {scenario.icon}
                </div>
                <div className="scenario-info">
                  <h3>{scenario.title}</h3>
                  <p>{scenario.description}</p>
                </div>
              </div>
              
              <div className="scenario-features">
                {scenario.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    <Zap size={12} />
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className="scenario-action">
                <button className="demo-btn">
                  <Play size={16} />
                  Try This Demo
                </button>
              </div>
              
              {currentDemo === index && isPlaying && (
                <div className="active-indicator">
                  <div className="pulse-dot"></div>
                  <span>Running Demo</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Live Stats */}
      <div className="live-stats">
        <div className="stats-header">
          <h3>🔥 Live Demo Statistics</h3>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">94.9%</div>
            <div className="stat-label">Development Acceleration</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0.8s</div>
            <div className="stat-label">Load Time</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100/100</div>
            <div className="stat-label">Lighthouse Score</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">AI Features</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .demo-showcase {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 40px;
          margin: 20px 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .demo-showcase::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
          animation: rotate-slow 30s linear infinite;
          z-index: -1;
        }
        
        .demo-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 48px;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          color: white;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 32px;
        }
        
        .hero-visual {
          position: relative;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .floating-elements {
          position: relative;
          width: 200px;
          height: 200px;
        }
        
        .float-element {
          position: absolute;
          font-size: 2rem;
          animation: float-orbit 8s ease-in-out infinite;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .float-element:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
        .float-element:nth-child(2) { top: 50%; right: 0; transform: translateY(-50%); }
        .float-element:nth-child(3) { bottom: 0; left: 50%; transform: translateX(-50%); }
        .float-element:nth-child(4) { top: 50%; left: 0; transform: translateY(-50%); }
        
        .demo-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .playback-controls {
          display: flex;
          gap: 12px;
        }
        
        .control-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .control-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }
        
        .control-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .progress-bar {
          flex: 1;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          margin-left: 24px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 4px;
          transition: width 0.1s ease;
        }
        
        .demo-scenarios h2 {
          text-align: center;
          color: white;
          font-size: 2rem;
          margin-bottom: 32px;
        }
        
        .scenarios-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }
        
        .scenario-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .scenario-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .scenario-card:hover::before {
          left: 100%;
        }
        
        .scenario-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(102, 126, 234, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }
        
        .scenario-card.active {
          border-color: #667eea;
          box-shadow: 0 0 30px rgba(102, 126, 234, 0.3);
        }
        
        .scenario-header {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
        }
        
        .scenario-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        
        .scenario-info h3 {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 8px;
        }
        
        .scenario-info p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          line-height: 1.5;
        }
        
        .scenario-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .feature-tag {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }
        
        .demo-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
        }
        
        .demo-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        }
        
        .active-indicator {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }
        
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        .live-stats {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .stats-header h3 {
          text-align: center;
          color: white;
          font-size: 1.5rem;
          margin-bottom: 24px;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 24px;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }
        
        .stat-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-weight: 500;
        }
        
        @keyframes float-orbit {
          0%, 100% { transform: translateX(-50%) translateY(0px) rotate(0deg); }
          25% { transform: translateX(-50%) translateY(-10px) rotate(90deg); }
          50% { transform: translateX(-50%) translateY(0px) rotate(180deg); }
          75% { transform: translateX(-50%) translateY(10px) rotate(270deg); }
        }
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @media (max-width: 768px) {
          .demo-hero {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .demo-controls {
            flex-direction: column;
            gap: 16px;
          }
          
          .progress-bar {
            margin-left: 0;
          }
          
          .scenarios-grid {
            grid-template-columns: 1fr;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}

export default DemoShowcase