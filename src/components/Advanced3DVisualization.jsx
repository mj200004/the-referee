import React, { useRef, useEffect, useState } from 'react'
import { Maximize2, RotateCcw, Settings, Download, Play, Pause } from 'lucide-react'

const Advanced3DVisualization = ({ comparison, onInteraction }) => {
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [viewMode, setViewMode] = useState('sphere') // sphere, network, matrix
  const [isAnimating, setIsAnimating] = useState(true)
  const [selectedNode, setSelectedNode] = useState(null)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (!comparison || !containerRef.current) return

    const animate = () => {
      if (isAnimating) {
        setRotation(prev => prev + 0.5)
      }
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [comparison, isAnimating])

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const resetView = () => {
    setRotation(0)
    setSelectedNode(null)
  }

  const exportVisualization = () => {
    // Create a simple export
    const exportData = {
      comparison: comparison.options,
      analysis: comparison.analysis,
      timestamp: new Date().toISOString()
    }
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'referee-3d-analysis.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!comparison) {
    return (
      <div className="visualization-3d">
        <div className="no-data-message">
          <div className="no-data-icon">🌐</div>
          <h3>3D Decision Space</h3>
          <p>Start a comparison to see your decision visualized in immersive 3D space</p>
        </div>
      </div>
    )
  }

  const renderNodes = () => {
    const nodes = []
    
    // Main option nodes
    comparison.options.forEach((option, index) => {
      const angle = (index * Math.PI) + (rotation * Math.PI / 180)
      const x = Math.cos(angle) * 150 + 250
      const y = Math.sin(angle) * 100 + 200
      const scale = 1 + Math.sin(rotation * Math.PI / 180) * 0.2
      
      nodes.push(
        <div
          key={`option-${index}`}
          className={`node option-node ${selectedNode === `option-${index}` ? 'selected' : ''}`}
          style={{
            left: `${x}px`,
            top: `${y}px`,
            transform: `scale(${scale}) rotateY(${rotation}deg)`,
            background: index === 0 ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'linear-gradient(135deg, #ff6b6b, #ee5a24)'
          }}
          onClick={() => {
            setSelectedNode(`option-${index}`)
            onInteraction && onInteraction('nodeClick', { type: 'option', data: option })
          }}
        >
          <div className="node-content">
            <div className="node-title">{option}</div>
            <div className="node-type">Option {index + 1}</div>
          </div>
          <div className="node-glow"></div>
        </div>
      )
    })
    
    // Criteria nodes
    comparison.analysis.forEach((item, index) => {
      const angle = (index * 2 * Math.PI / comparison.analysis.length) + (rotation * Math.PI / 180 * 0.5)
      const radius = 120 + Math.sin(rotation * Math.PI / 180 + index) * 20
      const x = Math.cos(angle) * radius + 250
      const y = Math.sin(angle) * radius + 200
      const z = Math.sin(angle * 2 + rotation * Math.PI / 180) * 30
      const scale = 0.8 + (z + 30) / 60 * 0.4
      
      nodes.push(
        <div
          key={`criteria-${index}`}
          className={`node criteria-node ${selectedNode === `criteria-${index}` ? 'selected' : ''}`}
          style={{
            left: `${x}px`,
            top: `${y}px`,
            transform: `scale(${scale}) rotateX(${z}deg)`,
            zIndex: Math.floor(z + 30),
            opacity: 0.7 + scale * 0.3
          }}
          onClick={() => {
            setSelectedNode(`criteria-${index}`)
            onInteraction && onInteraction('nodeClick', { type: 'criteria', data: item })
          }}
        >
          <div className="node-content">
            <div className="node-title">{item.criterion}</div>
            <div className="node-scores">
              <span>{item.option1Score}</span>
              <span>{item.option2Score}</span>
            </div>
          </div>
          <div className="connection-lines">
            <div className="connection-line" style={{ 
              transform: `rotate(${Math.atan2(200 - y, 250 - x) * 180 / Math.PI}deg)`,
              width: `${Math.sqrt(Math.pow(250 - x, 2) + Math.pow(200 - y, 2))}px`,
              opacity: item.option1Score / 5
            }}></div>
          </div>
        </div>
      )
    })
    
    return nodes
  }

  return (
    <div className={`visualization-3d ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="visualization-header">
        <h3>🌐 3D Decision Space</h3>
        <div className="visualization-controls">
          <select 
            value={viewMode} 
            onChange={(e) => setViewMode(e.target.value)}
            className="view-mode-select"
          >
            <option value="sphere">Sphere View</option>
            <option value="network">Network View</option>
            <option value="matrix">Matrix View</option>
          </select>
          
          <button 
            className="control-btn"
            onClick={() => setIsAnimating(!isAnimating)}
            title={isAnimating ? 'Pause animation' : 'Start animation'}
          >
            {isAnimating ? <Pause size={16} /> : <Play size={16} />}
          </button>
          
          <button className="control-btn" onClick={resetView} title="Reset view">
            <RotateCcw size={16} />
          </button>
          
          <button className="control-btn" onClick={exportVisualization} title="Export data">
            <Download size={16} />
          </button>
          
          <button className="control-btn" onClick={toggleFullscreen} title="Toggle fullscreen">
            <Maximize2 size={16} />
          </button>
        </div>
      </div>
      
      <div className="visualization-container" ref={containerRef}>
        <div className="visualization-space">
          {renderNodes()}
          
          {/* Background grid */}
          <div className="background-grid" style={{ transform: `rotateX(${rotation * 0.2}deg) rotateY(${rotation * 0.3}deg)` }}>
            {[...Array(10)].map((_, i) => (
              <div key={`grid-h-${i}`} className="grid-line horizontal" style={{ top: `${i * 10}%` }} />
            ))}
            {[...Array(10)].map((_, i) => (
              <div key={`grid-v-${i}`} className="grid-line vertical" style={{ left: `${i * 10}%` }} />
            ))}
          </div>
          
          {/* Floating particles */}
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {selectedNode && (
          <div className="node-details">
            <h4>Node Details</h4>
            {selectedNode.startsWith('option') ? (
              <div>
                <p><strong>Type:</strong> Decision Option</p>
                <p><strong>Name:</strong> {comparison.options[parseInt(selectedNode.split('-')[1])]}</p>
              </div>
            ) : (
              <div>
                <p><strong>Type:</strong> Evaluation Criteria</p>
                <p><strong>Criterion:</strong> {comparison.analysis[parseInt(selectedNode.split('-')[1])].criterion}</p>
                <div className="scores">
                  <div>Option 1: {comparison.analysis[parseInt(selectedNode.split('-')[1])].option1Score}/5</div>
                  <div>Option 2: {comparison.analysis[parseInt(selectedNode.split('-')[1])].option2Score}/5</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="visualization-legend">
        <div className="legend-item">
          <div className="legend-color option1"></div>
          <span>{comparison.options[0]}</span>
        </div>
        <div className="legend-item">
          <div className="legend-color option2"></div>
          <span>{comparison.options[1]}</span>
        </div>
        <div className="legend-item">
          <div className="legend-color criteria"></div>
          <span>Evaluation Criteria</span>
        </div>
      </div>
      
      <style jsx>{`
        .visualization-3d {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 24px;
          margin: 20px 0;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          min-height: 600px;
        }
        
        .visualization-3d.fullscreen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          border-radius: 0;
          margin: 0;
        }
        
        .visualization-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .visualization-header h3 {
          margin: 0;
          color: #2d3748;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .visualization-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .view-mode-select {
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background: white;
          font-size: 14px;
        }
        
        .control-btn {
          width: 40px;
          height: 40px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .control-btn:hover {
          background: #f7fafc;
          border-color: #667eea;
          transform: translateY(-2px);
        }
        
        .visualization-container {
          position: relative;
          height: 500px;
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 16px;
          overflow: hidden;
          perspective: 1000px;
        }
        
        .visualization-3d.fullscreen .visualization-container {
          height: calc(100vh - 120px);
        }
        
        .visualization-space {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }
        
        .background-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
          pointer-events: none;
        }
        
        .grid-line {
          position: absolute;
          background: #667eea;
        }
        
        .grid-line.horizontal {
          width: 100%;
          height: 1px;
        }
        
        .grid-line.vertical {
          width: 1px;
          height: 100%;
        }
        
        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(102, 126, 234, 0.6);
          border-radius: 50%;
          animation: float-3d 5s infinite ease-in-out;
        }
        
        .node {
          position: absolute;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        
        .option-node {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          position: relative;
        }
        
        .criteria-node {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          background: linear-gradient(135deg, #48bb78, #38a169);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(72, 187, 120, 0.3);
        }
        
        .node:hover {
          transform: scale(1.1) rotateY(10deg);
          z-index: 100;
        }
        
        .node.selected {
          transform: scale(1.2);
          box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
          z-index: 101;
        }
        
        .node-content {
          text-align: center;
          z-index: 2;
          position: relative;
        }
        
        .node-title {
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .node-type {
          font-size: 10px;
          opacity: 0.8;
        }
        
        .node-scores {
          display: flex;
          gap: 8px;
          font-size: 10px;
        }
        
        .node-glow {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: inherit;
          background: inherit;
          opacity: 0.5;
          filter: blur(8px);
          z-index: -1;
        }
        
        .connection-lines {
          position: absolute;
          top: 50%;
          left: 50%;
          pointer-events: none;
        }
        
        .connection-line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, rgba(102, 126, 234, 0.6), transparent);
          transform-origin: left center;
        }
        
        .no-data-message {
          text-align: center;
          padding: 80px 20px;
          color: #4a5568;
        }
        
        .no-data-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }
        
        .no-data-message h3 {
          margin-bottom: 12px;
          color: #2d3748;
        }
        
        .node-details {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          min-width: 200px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .node-details h4 {
          margin: 0 0 12px 0;
          color: #2d3748;
        }
        
        .node-details p {
          margin: 8px 0;
          color: #4a5568;
          font-size: 14px;
        }
        
        .scores {
          margin-top: 12px;
        }
        
        .scores div {
          padding: 4px 0;
          font-size: 14px;
          color: #2d3748;
        }
        
        .visualization-legend {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #4a5568;
        }
        
        .legend-color {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid #e2e8f0;
        }
        
        .legend-color.option1 {
          background: linear-gradient(135deg, #667eea, #764ba2);
        }
        
        .legend-color.option2 {
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
        }
        
        .legend-color.criteria {
          background: linear-gradient(135deg, #48bb78, #38a169);
        }
        
        @keyframes float-3d {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotateZ(0deg);
            opacity: 0.6;
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotateZ(120deg);
            opacity: 1;
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotateZ(240deg);
            opacity: 0.8;
          }
        }
        
        @media (max-width: 768px) {
          .visualization-controls {
            flex-wrap: wrap;
            gap: 4px;
          }
          
          .visualization-container {
            height: 400px;
          }
          
          .node-details {
            position: relative;
            top: auto;
            right: auto;
            margin-top: 16px;
          }
          
          .option-node {
            width: 80px;
            height: 80px;
            font-size: 12px;
          }
          
          .criteria-node {
            width: 60px;
            height: 60px;
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  )
}

export default Advanced3DVisualization