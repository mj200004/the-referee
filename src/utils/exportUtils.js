// Utility functions for exporting comparison data

export const exportToJSON = (comparison) => {
  const { options, analysis, recommendation, timestamp } = comparison
  
  const report = {
    metadata: {
      tool: 'The Referee - Decision Comparison Tool',
      version: '1.0.0',
      timestamp,
      comparison: `${options[0]} vs ${options[1]}`
    },
    summary: {
      option1: options[0],
      option2: options[1],
      totalCriteria: analysis.length,
      option1TotalScore: analysis.reduce((sum, item) => sum + item.option1Score, 0),
      option2TotalScore: analysis.reduce((sum, item) => sum + item.option2Score, 0)
    },
    detailedAnalysis: analysis.map(item => ({
      criterion: item.criterion,
      scores: {
        [options[0]]: item.option1Score,
        [options[1]]: item.option2Score
      },
      analysis: {
        [options[0]]: {
          pros: item.option1Pros,
          cons: item.option1Cons
        },
        [options[1]]: {
          pros: item.option2Pros,
          cons: item.option2Cons
        }
      }
    })),
    recommendation,
    exportedAt: new Date().toISOString()
  }
  
  return JSON.stringify(report, null, 2)
}

export const exportToCSV = (comparison) => {
  const { options, analysis } = comparison
  
  let csv = `Criterion,${options[0]} Score,${options[1]} Score,Winner\n`
  
  analysis.forEach(item => {
    const winner = item.option1Score > item.option2Score ? options[0] : 
                  item.option2Score > item.option1Score ? options[1] : 'Tie'
    csv += `"${item.criterion}",${item.option1Score},${item.option2Score},"${winner}"\n`
  })
  
  return csv
}

export const downloadFile = (content, filename, contentType = 'application/json') => {
  const blob = new Blob([content], { type: contentType })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}