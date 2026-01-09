import React from 'react'
import { Scale } from 'lucide-react'

const Header = () => {
  return (
    <header className="card" style={{ textAlign: 'center', marginBottom: '30px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
        <Scale size={32} color="#667eea" />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>
          The Referee
        </h1>
      </div>
      <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
        Compare options and understand trade-offs to make better decisions. 
        No single answers, just clear analysis to help you choose.
      </p>
    </header>
  )
}

export default Header