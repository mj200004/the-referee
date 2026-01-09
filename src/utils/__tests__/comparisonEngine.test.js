import { describe, it, expect } from 'vitest'
import { generateDetailedComparison, generateContextualRecommendation } from '../comparisonEngine'

describe('Comparison Engine', () => {
  it('should generate detailed comparison with correct structure', () => {
    const result = generateDetailedComparison('React', 'Vue.js', 'Performance, Learning Curve', 'Web app development')
    
    expect(result).toHaveLength(2)
    expect(result[0]).toHaveProperty('criterion', 'Performance')
    expect(result[0]).toHaveProperty('option1Score')
    expect(result[0]).toHaveProperty('option2Score')
    expect(result[0]).toHaveProperty('option1Pros')
    expect(result[0]).toHaveProperty('option1Cons')
    expect(result[0]).toHaveProperty('option2Pros')
    expect(result[0]).toHaveProperty('option2Cons')
  })

  it('should generate scores within valid range', () => {
    const result = generateDetailedComparison('PostgreSQL', 'MongoDB', 'Scalability', 'Database selection')
    
    result.forEach(item => {
      expect(item.option1Score).toBeGreaterThanOrEqual(1)
      expect(item.option1Score).toBeLessThanOrEqual(5)
      expect(item.option2Score).toBeGreaterThanOrEqual(1)
      expect(item.option2Score).toBeLessThanOrEqual(5)
    })
  })

  it('should generate contextual recommendations', () => {
    const mockAnalysis = [
      { option1Score: 4, option2Score: 3 },
      { option1Score: 3, option2Score: 4 }
    ]
    
    const recommendation = generateContextualRecommendation('Option A', 'Option B', 'Test context', mockAnalysis)
    
    expect(typeof recommendation).toBe('string')
    expect(recommendation.length).toBeGreaterThan(0)
    expect(recommendation).toMatch(/Option [AB]/)
  })
})