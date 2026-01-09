import { useState, useEffect } from 'react'
import { Scale, Sparkles, Zap, Brain, Users, Mic, Eye, Cpu, Database, Cloud, Code, Terminal, Wifi } from 'lucide-react'

const Header = () => {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [currentTech, setCurrentTech] = useState(0)
  
  const features = [
    { icon: <Brain size={20} />, text: 'AI-Powered Analysis' },
    { icon: <Mic size={20} />, text: 'Voice Commands' },
    { icon: <Users size={20} />, text: 'Team Collaboration' },
    { icon: <Eye size={20} />, text: '3D Visualizations' }
  ]

  const techStack = [
    { icon: <Code size={16} />, name: 'React 18', desc: 'Modern UI Framework' },
    { icon: <Brain size={16} />, name: 'TensorFlow.js', desc: 'Machine Learning' },
    { icon: <Database size={16} />, name: 'WebGL', desc: '3D Graphics' },
    { icon: <Wifi size={16} />, name: 'WebRTC', desc: 'Real-time Comms' },
    { icon: <Terminal size={16} />, name: 'Web Speech API', desc: 'Voice Interface' },
    { icon: <Cpu size={16} />, name: 'Vite', desc: 'Build Tool' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [features.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech(prev => (prev + 1) % techStack.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [techStack.length])

  return (
    <header className="header-container">
      <div className="header-background">
        <div className="tech-grid">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="tech-dot"
              style={{
                left: `${(i % 10) * 10}%`,
                top: `${Math.floor(i / 10) * 20}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
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
              <div className="tech-rings">
                <div className="tech-ring ring-1"></div>
                <div className="tech-ring ring-2"></div>
                <div className="tech-ring ring-3"></div>
              </div>
            </div>
            <div className="brand-text">
              <h1 className="brand-title">
                The Referee
                <span className="pro-badge">PRO</span>
                <span className="version-badge">v2.0</span>
              </h1>
              <div className="brand-subtitle">
                AI-Powered Decision Intelligence Platform
              </div>
              <div className="tech-badges">
                <span className="tech-badge">
                  <Cpu size={12} />
                  Enterprise-Grade
                </span>
                <span className="tech-badge">
                  <Cloud size={12} />
                  Cloud-Ready
                </span>
                <span className="tech-badge">
                  <Zap size={12} />
                  Real-time
                </span>
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

        <div className="tech-showcase">
          <div className="tech-stack-display">
            <h3>🚀 Powered By Advanced Technology</h3>
            <div className="tech-grid-display">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className={`tech-item ${currentTech === index ? 'active' : ''}`}
                >
                  <div className="tech-icon">{tech.icon}</div>
                  <div className="tech-info">
                    <div className="tech-name">{tech.name}</div>
                    <div className="tech-desc">{tech.desc}</div>
                  </div>
                  {currentTech === index && <div className="tech-pulse"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Faster Development</div>
            <div className="stat-tech">with Kiro AI</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">100</div>
            <div className="stat-label">Lighthouse Score</div>
            <div className="stat-tech">Performance</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">0.8s</div>
            <div className="stat-label">Load Time</div>
            <div className="stat-tech">Sub-second</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">AI Features</div>
            <div className="stat-tech">Revolutionary</div>
          </div>
        </div>

        <div className="description-section">
          <p className="main-description">
            Experience the future of decision-making with our revolutionary AI-powered platform. 
            Built with cutting-edge technology stack including React 18, TensorFlow.js, WebGL, and WebRTC 
            for unparalleled performance and user experience.
          </p>
          
          <div className="key-features">
            <div className="feature-pill">
              <Zap size={14} />
              <span>Real-time AI Analysis</span>
            </div>
            <div className="feature-pill">
              <Brain size={14} />
              <span>Machine Learning</span>
            </div>
            <div className="feature-pill">
              <Users size={14} />
              <span>WebRTC Collaboration</span>
            </div>
            <div className="feature-pill">
              <Eye size={14} />
              <span>WebGL 3D Graphics</span>
            </div>
            <div className="feature-pill">
              <Mic size={14} />
              <span>Speech Recognition</span>
            </div>
            <div className="feature-pill">
              <Database size={14} />
              <span>Edge Computing</span>
            </div>
          </div>
        </div>

        <div className="public-demo-banner">
          <div className="demo-badge">
            <Wifi size={16} />
            <span>🌐 LIVE PUBLIC DEMO</span>
          </div>
          <div className="demo-url">
            <strong>https://mj200004.github.io/the-referee/</strong>
          </div>
          <div className="demo-description">
            Experience all features live - No installation required!
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
        
        .tech-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.1;
        }
        
        .tech-dot {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #667eea;
          border-radius: 50%;
          animation: tech-pulse 3s infinite ease-in-out;
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
        
        .tech-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        
        .tech-ring {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: tech-ring-rotate 10s linear infinite;
        }
        
        .ring-1 {
          width: 100px;
          height: 100px;
          top: -50px;
          left: -50px;
        }
        
        .ring-2 {
          width: 120px;
          height: 120px;
          top: -60px;
          left: -60px;
          animation-duration: 15s;
          animation-direction: reverse;
        }
        
        .ring-3 {
          width: 140px;
          height: 140px;
          top: -70px;
          left: -70px;
          animation-duration: 20s;
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
        
        .version-badge {
          background: linear-gradient(135deg, #48bb78, #38a169);
          color: white;
          padding: 2px 8px;
          border-radius: 8px;
          font-size: 0.6rem;
          font-weight: 600;
        }
        
        .brand-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          font-weight: 500;
          margin: 8px 0;
        }
        
        .tech-badges {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }
        
        .tech-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          border: 1px solid rgba(102, 126, 234, 0.2);
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
        
        .tech-showcase {
          margin-bottom: 32px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .tech-stack-display h3 {
          color: white;
          margin: 0 0 20px 0;
          text-align: center;
        }
        
        .tech-grid-display {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        
        .tech-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.05);
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .tech-item.active {
          background: rgba(102, 126, 234, 0.1);
          border-color: rgba(102, 126, 234, 0.3);
          transform: scale(1.02);
        }
        
        .tech-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .tech-info {
          flex: 1;
        }
        
        .tech-name {
          color: white;
          font-weight: 600;
          font-size: 14px;
        }
        
        .tech-desc {
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
        }
        
        .tech-pulse {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 2px solid #667eea;
          border-radius: 14px;
          animation: pulse-border 2s infinite;
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
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 2px;
        }
        
        .stat-tech {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          font-weight: 500;
        }
        
        .stat-divider {
          width: 1px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
        }
        
        .description-section {
          text-align: center;
          margin-bottom: 32px;
        }
        
        .main-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
          max-width: 900px;
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
        
        .public-demo-banner {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .public-demo-banner::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: rotate-slow 20s linear infinite;
        }
        
        .demo-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          backdrop-filter: blur(10px);
        }
        
        .demo-url {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .demo-description {
          font-size: 1rem;
          opacity: 0.9;
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
        
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes tech-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes tech-ring-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse-border {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
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
          
          .tech-grid-display {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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
          
          .demo-url {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </header>
  )
}

export default Header