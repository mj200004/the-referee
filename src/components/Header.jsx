import React, { useState, useEffect } from 'react'
import { Scale, Sparkles, Zap, Brain, Users, Mic, Eye } from 'lucide-react'

const Header = () => {
  const [currentFeature, setCurrentFeature] = useState(0)
  
  const features = [
    { icon: <Brain size={20} />, text: 'AI-Powered Analysis' },
    { icon: <Mic size={20} />, text: 'Voice Commands' },
    { icon: <Users size={20} />, text: 'Team Collaboration' },
    { icon: <Eye size={20} />, text: '3D Visualizations' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <header className="header-container">
      <div className="header-background">
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="header-content">
        <div className="brand-section">
          <div className="logo-container">
            <div className="logo-icon">
              <Scale size={40} />
              <div className="logo-glow"></div>
            </div>
            <div className="brand-text">
              <h1 className="brand-title">
                The Referee
                <span className="pro-badge">PRO</span>
              </h1>
              <div className="brand-subtitle">
                AI-Powered Decision Intelligence Platform
              </div>
            </div>
          </div>
          
          <div className="feature-showcase">
            <div className="feature-indicator">
              <Sparkles size={16} />
              <span>Now featuring:</span>
            </div>
            <div className="rotating-features">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-item ${currentFeature === index ? 'active' : ''}`}
                >
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Faster Development</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">100</div>
            <div className="stat-label">Lighthouse Score</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">0.8s</div>
            <div className="stat-label">Load Time</div>
          </div>
        </div>

        <div className="description-section">
          <p className="main-description">
            Experience the future of decision-making with our revolutionary AI-powered platform. 
            Compare options, analyze trade-offs, and make informed decisions with unprecedented speed and accuracy.
          </p>
          
          <div className="key-features">
            <div className="feature-pill">
              <Zap size={14} />
              <span>Real-time AI Analysis</span>
            </div>
            <div className="feature-pill">
              <Brain size={14} />
              <span>Predictive Insights</span>
            </div>
            <div className="feature-pill">
              <Users size={14} />
              <span>Team Collaboration</span>
            </div>
            <div className="feature-pill">
              <Eye size={14} />
              <span>3D Visualizations</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header-container {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 48px;
          margin-bottom: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }
        
        .header-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
        
        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(102, 126, 234, 0.6);
          border-radius: 50%;
          animation: float-particle 15s infinite linear;
        }
        
        .header-content {
          position: relative;
          z-index: 1;
        }
        
        .brand-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .logo-icon {
          position: relative;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
        }
        
        .logo-glow {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: linear-gradient(45deg, #667eea, #764ba2, #667eea);
          border-radius: 24px;
          z-index: -1;
          opacity: 0.7;
          animation: rotate 3s linear infinite;
        }
        
        .brand-title {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .pro-badge {
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          color: white;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 16px rgba(255, 107, 107, 0.3);
        }
        
        .brand-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          font-weight: 500;
          margin-top: 8px;
        }
        
        .feature-showcase {
          text-align: right;
        }
        
        .feature-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          margin-bottom: 12px;
          justify-content: flex-end;
        }
        
        .rotating-features {
          position: relative;
          height: 40px;
          overflow: hidden;
        }
        
        .feature-item {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.2);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease;
        }
        
        .feature-item.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stats-section {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 32px;
          margin-bottom: 32px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
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
          margin-bottom: 4px;
        }
        
        .stat-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 14px;
          font-weight: 500;
        }
        
        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
        }
        
        .description-section {
          text-align: center;
        }
        
        .main-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .key-features {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        
        .feature-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid rgba(102, 126, 234, 0.2);
          transition: all 0.3s ease;
        }
        
        .feature-pill:hover {
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2);
        }
        
        @keyframes float-particle {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 1024px) {
          .brand-section {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }
          
          .feature-showcase {
            text-align: center;
          }
          
          .feature-indicator {
            justify-content: center;
          }
          
          .stats-section {
            flex-wrap: wrap;
            gap: 16px;
          }
        }
        
        @media (max-width: 768px) {
          .header-container {
            padding: 32px 24px;
          }
          
          .brand-title {
            font-size: 2.2rem;
          }
          
          .logo-icon {
            width: 60px;
            height: 60px;
          }
          
          .stats-section {
            flex-direction: column;
            gap: 16px;
          }
          
          .stat-divider {
            width: 40px;
            height: 1px;
          }
          
          .key-features {
            justify-content: center;
          }
        }
      `}</style>
    </header>
  )
}

export default Header