import React from 'react'
import { Loader } from 'lucide-react'

const LoadingSpinner = ({ message = "Analyzing options..." }) => {
  return (
    <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <Loader size={32} className="animate-spin" style={{ color: '#667eea' }} />
        <p style={{ fontSize: '16px', color: '#666' }}>{message}</p>
        <div style={{ display: 'flex', gap: '4px' }}>
          <div className="loading-dot" style={{ animationDelay: '0s' }}></div>
          <div className="loading-dot" style={{ animationDelay: '0.2s' }}></div>
          <div className="loading-dot" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .loading-dot {
          width: 8px;
          height: 8px;
          background-color: #667eea;
          border-radius: 50%;
          animation: bounce 1.4s ease-in-out infinite both;
        }
        
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}

export default LoadingSpinner