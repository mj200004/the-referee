import React, { useRef, useEffect, useState } from 'react'
import { Maximize2, RotateCcw, Settings, Download } from 'lucide-react'

const Advanced3DVisualization = ({ comparison, onInteraction }) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [viewMode, setViewMode] = useState('sphere') // sphere, network, matrix
  const [isAnimating, setIsAnimating] = useState(true)
  const [selectedNode, setSelectedNode] = useState(null)

  useEffect(() => {
    if (!comparison || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // 3D visualization data
    const nodes = [
      // Main options
      { 
        id: 'option1', 
        label: comparison.options[0], 
        x: -100, y: 0, z: 0, 
        size: 30, 
        color: '#667eea',
        type: 'option'
      },
      { 
        id: 'option2', 
        label: comparison.options[1], 
        x: 100, y: 0, z: 0, 
        size: 30, 
        color: '#764ba2',
        type: 'option'
      },
      // Criteria nodes
      ...comparison.analysis.map((item, index) => ({
        id: `criteria-${index}`,
        label: item.criterion,
        x: Math.cos(index * 2 * Math.PI / comparison.analysis.length) * 150,
        y: Math.sin(index * 2 * Math.PI / comparison.analysis.length) * 150,
        z: (index % 2) * 50 - 25,
        size: 15 + (item.option1Score + item.option2Score),
        color: `hsl(${200 + index * 30}, 70%, 60%)`,
        type: 'criteria',
        scores: [item.option1Score, item.option2Score]
      }))
    ]
    
    const connections = []
    comparison.analysis.forEach((item, index) => {
      connections.push({
        from: 'option1',
        to: `criteria-${index}`,
        strength: item.option1Score / 5,
        color: '#667eea'
      })
      connections.push({
        from: 'option2',
        to: `criteria-${index}`,
        strength: item.option2Score / 5,
        color: '#764ba2'
      })
    })
    
    let rotation = { x: 0, y: 0, z: 0 }
    let mousePos = { x: 0, y: 0 }
    let isDragging = false
    
    // Mouse interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mousePos.x = e.clientX - rect.left
      mousePos.y = e.clientY - rect.top
      
      if (isDragging) {
        rotation.y += (e.movementX || 0) * 0.01
        rotation.x += (e.movementY || 0) * 0.01
      }
    }
    
    const handleMouseDown = (e) => {
      isDragging = true
      canvas.style.cursor = 'grabbing'
    }
    
    const handleMouseUp = () => {
      isDragging = false
      canvas.style.cursor = 'grab'
    }
    
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top
      
      // Check if clicked on a node
      nodes.forEach(node => {
        const projected = project3D(node, canvas.width / 2, canvas.height / 2)
        const distance = Math.sqrt(
          Math.pow(clickX - projected.x, 2) + Math.pow(clickY - projected.y, 2)
        )
        
        if (distance < node.size) {
          setSelectedNode(node)
          onInteraction && onInteraction('nodeClick', node)
        }
      })
    }
    
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mouseup', handleMouseUp)
    canvas.addEventListener('click', handleClick)
    canvas.style.cursor = 'grab'
    
    // 3D projection function
    const project3D = (point, centerX, centerY) => {
      const distance = 400
      const rotatedX = point.x * Math.cos(rotation.y) - point.z * Math.sin(rotation.y)
      const rotatedZ = point.x * Math.sin(rotation.y) + point.z * Math.cos(rotation.y)
      const rotatedY = point.y * Math.cos(rotation.x) - rotatedZ * Math.sin(rotation.x)
      const finalZ = point.y * Math.sin(rotation.x) + rotatedZ * Math.cos(rotation.x)
      
      const scale = distance / (distance + finalZ)
      return {
        x: centerX + rotatedX * scale,
        y: centerY + rotatedY * scale,
        scale: scale
      }
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)
      
      const centerX = canvas.width / 2 / window.devicePixelRatio
      const centerY = canvas.height / 2 / window.devicePixelRatio
      
      // Auto-rotation when not dragging
      if (isAnimating && !isDragging) {
        rotation.y += 0.005
        rotation.x += 0.002
      }
      
      // Draw connections first
      connections.forEach(conn => {
        const fromNode = nodes.find(n => n.id === conn.from)
        const toNode = nodes.find(n => n.id === conn.to)
        
        if (fromNode && toNode) {
          const fromProj = project3D(fromNode, centerX, centerY)
          const toProj = project3D(toNode, centerX, centerY)
          
          ctx.beginPath()
          ctx.moveTo(fromProj.x, fromProj.y)
          ctx.lineTo(toProj.x, toProj.y)
          ctx.strokeStyle = conn.color + Math.floor(conn.strength * 255).toString(16).padStart(2, '0')
          ctx.lineWidth = conn.strength * 3
          ctx.stroke()
        }
      })
      
      // Sort nodes by z-depth for proper rendering
      const sortedNodes = [...nodes].sort((a, b) => {
        const aZ = a.x * Math.sin(rotation.y) + a.z * Math.cos(rotation.y)
        const bZ = b.x * Math.sin(rotation.y) + b.z * Math.cos(rotation.y)
        return bZ - aZ
      })
      
      // Draw nodes
      sortedNodes.forEach(node => {
        const projected = project3D(node, centerX, centerY)
        const size = node.size * projected.scale
        
        // Node shadow
        ctx.beginPath()
        ctx.arc(projected.x + 2, projected.y + 2, size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'
        ctx.fill()
        
        // Node body
        ctx.beginPath()
        ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2)
        
        // Gradient fill
        const gradient = ctx.createRadialGradient(
          projected.x - size/3, projected.y - size/3, 0,
          projected.x, projected.y, size
        )
        gradient.addColorStop(0, node.color + 'ff')
        gradient.addColorStop(1, node.color + '80')
        
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Node border
        ctx.strokeStyle = node.id === selectedNode?.id ? '#fff' : node.color
        ctx.lineWidth = node.id === selectedNode?.id ? 3 : 1
        ctx.stroke()
        
        // Node label
        if (size > 10) {
          ctx.fillStyle = '#fff'
          ctx.font = `${Math.min(size/2, 12)}px Arial`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText(node.label, projected.x, projected.y)
        }
        
        // Hover effect
        const distance = Math.sqrt(
          Math.pow(mousePos.x - projected.x, 2) + Math.pow(mousePos.y - projected.y, 2)
        )
        
        if (distance < size && !isDragging) {
          // Tooltip
          ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
          ctx.fillRect(mousePos.x + 10, mousePos.y - 30, 120, 25)
          ctx.fillStyle = '#fff'
          ctx.font = '12px Arial'
          ctx.textAlign = 'left'
          ctx.fillText(node.label, mousePos.x + 15, mousePos.y - 15)
          
          if (node.type === 'criteria' && node.scores) {
            ctx.fillText(`Scores: ${node.scores[0]}, ${node.scores[1]}`, mousePos.x + 15, mousePos.y - 5)
          }
        }
      })
      
      // Performance info
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
      ctx.font = '10px Arial'
      ctx.textAlign = 'left'
      ctx.fillText(`Nodes: ${nodes.length} | Connections: ${connections.length}`, 10, 20)
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mousedown', handleMouseDown)
      canvas.removeEventListener('mouseup', handleMouseUp)
      canvas.removeEventListener('click', handleClick)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [comparison, viewMode, isAnimating, selectedNode])

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const resetView = () => {
    // Reset rotation and zoom
    setSelectedNode(null)
  }

  const exportVisualization = () => {
    if (canvasRef.current) {
      const link = document.createElement('a')
      link.download = 'referee-3d-visualization.png'
      link.href = canvasRef.current.toDataURL()
      link.click()
    }
  }

  if (!comparison) return null

  return (
    <div className={`visualization-3d ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="visualization-header">
        <h3>3D Decision Space</h3>
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
            {isAnimating ? '⏸️' : '▶️'}
          </button>
          
          <button className="control-btn" onClick={resetView} title="Reset view">
            <RotateCcw size={16} />
          </button>
          
          <button className="control-btn" onClick={exportVisualization} title="Export image">
            <Download size={16} />
          </button>
          
          <button className="control-btn" onClick={toggleFullscreen} title="Toggle fullscreen">
            <Maximize2 size={16} />
          </button>
        </div>
      </div>
      
      <div className="visualization-container">
        <canvas ref={canvasRef} className="visualization-canvas" />
        
        {selectedNode && (
          <div className="node-details">
            <h4>{selectedNode.label}</h4>
            <p>Type: {selectedNode.type}</p>
            {selectedNode.scores && (
              <div className="node-scores">
                <div>Option 1: {selectedNode.scores[0]}/5</div>
                <div>Option 2: {selectedNode.scores[1]}/5</div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="visualization-legend">
        <div className="legend-item">
          <div className="legend-color" style={{ background: '#667eea' }}></div>
          <span>{comparison.options[0]}</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ background: '#764ba2' }}></div>
          <span>{comparison.options[1]}</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)' }}></div>
          <span>Criteria Connections</span>
        </div>
      </div>
      
      <style jsx>{`
        .visualization-3d {
          background: white;
          border-radius: 16px;
          padding: 24px;
          margin: 20px 0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          position: relative;
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
          padding: 6px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          background: white;
          font-size: 14px;
        }
        
        .control-btn {
          width: 36px;
          height: 36px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        
        .control-btn:hover {
          background: #f7fafc;
          border-color: #667eea;
        }
        
        .visualization-container {
          position: relative;
          height: 500px;
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .visualization-3d.fullscreen .visualization-container {
          height: calc(100vh - 120px);
        }
        
        .visualization-canvas {
          width: 100%;
          height: 100%;
          display: block;
        }
        
        .node-details {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 16px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          min-width: 200px;
        }
        
        .node-details h4 {
          margin: 0 0 8px 0;
          color: #2d3748;
        }
        
        .node-details p {
          margin: 0 0 8px 0;
          color: #718096;
          font-size: 14px;
        }
        
        .node-scores {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 14px;
        }
        
        .visualization-legend {
          display: flex;
          justify-content: center;
          gap: 24px;
          margin-top: 16px;
          padding-top: 16px;
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
        
        @media (max-width: 768px) {
          .visualization-controls {
            flex-wrap: wrap;
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
        }
      `}</style>
    </div>
  )
}

export default Advanced3DVisualization