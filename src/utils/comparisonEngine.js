// Enhanced comparison engine with more realistic analysis
export const generateDetailedComparison = (option1, option2, criteria, context) => {
  const criteriaList = criteria.split(',').map(c => c.trim())
  
  // Knowledge base for common comparisons
  const knowledgeBase = {
    'react': {
      strengths: ['Large ecosystem', 'Strong community', 'Flexible architecture', 'Job market'],
      weaknesses: ['Steep learning curve', 'Rapid changes', 'Boilerplate code'],
      scores: { performance: 4, 'learning curve': 3, 'community support': 5, ecosystem: 5 }
    },
    'vue.js': {
      strengths: ['Easy to learn', 'Great documentation', 'Progressive framework'],
      weaknesses: ['Smaller ecosystem', 'Less job opportunities'],
      scores: { performance: 4, 'learning curve': 5, 'community support': 4, ecosystem: 3 }
    },
    'postgresql': {
      strengths: ['ACID compliance', 'Advanced features', 'Reliability', 'SQL standard'],
      weaknesses: ['Complex setup', 'Resource intensive'],
      scores: { scalability: 4, 'acid compliance': 5, 'query flexibility': 4, performance: 4 }
    },
    'mongodb': {
      strengths: ['Flexible schema', 'Horizontal scaling', 'JSON-like documents'],
      weaknesses: ['No ACID transactions', 'Memory usage', 'Consistency issues'],
      scores: { scalability: 5, 'acid compliance': 2, 'query flexibility': 5, performance: 4 }
    }
  }

  return criteriaList.map(criterion => {
    const normalizedCriterion = criterion.toLowerCase()
    const option1Key = option1.toLowerCase()
    const option2Key = option2.toLowerCase()
    
    const option1Data = knowledgeBase[option1Key] || generateFallbackData(option1, criterion)
    const option2Data = knowledgeBase[option2Key] || generateFallbackData(option2, criterion)
    
    return {
      criterion,
      option1Score: option1Data.scores[normalizedCriterion] || Math.floor(Math.random() * 3) + 3,
      option2Score: option2Data.scores[normalizedCriterion] || Math.floor(Math.random() * 3) + 3,
      option1Pros: option1Data.strengths.slice(0, 2),
      option1Cons: option1Data.weaknesses.slice(0, 2),
      option2Pros: option2Data.strengths.slice(0, 2),
      option2Cons: option2Data.weaknesses.slice(0, 2)
    }
  })
}

const generateFallbackData = (option, criterion) => {
  return {
    strengths: [`Strong ${criterion} capabilities`, `Good ${option} performance`],
    weaknesses: [`Limited ${criterion} in some areas`, `${option} complexity`],
    scores: { [criterion.toLowerCase()]: Math.floor(Math.random() * 3) + 3 }
  }
}

export const generateContextualRecommendation = (option1, option2, context, analysis) => {
  const totalScore1 = analysis.reduce((sum, item) => sum + item.option1Score, 0)
  const totalScore2 = analysis.reduce((sum, item) => sum + item.option2Score, 0)
  
  const winner = totalScore1 > totalScore2 ? option1 : option2
  const loser = totalScore1 > totalScore2 ? option2 : option1
  const scoreDiff = Math.abs(totalScore1 - totalScore2)
  
  if (scoreDiff <= 2) {
    return `Both ${option1} and ${option2} are viable choices for your use case. The decision should be based on your team's expertise and specific requirements. Consider starting with ${winner} but be prepared to evaluate ${loser} if your needs change.`
  } else if (scoreDiff <= 5) {
    return `${winner} has a slight advantage over ${loser} for your requirements. However, consider your team's familiarity and the specific constraints of your project before making the final decision.`
  } else {
    return `${winner} is clearly the better choice for your use case based on the criteria you've specified. It significantly outperforms ${loser} in most areas that matter for your project context.`
  }
}