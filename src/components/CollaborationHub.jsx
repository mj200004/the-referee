import React, { useState, useEffect } from 'react'
import { Users, MessageCircle, Vote, Share2, Clock, UserCheck } from 'lucide-react'

const CollaborationHub = ({ comparison, onCollaborativeDecision }) => {
  const [teamMembers, setTeamMembers] = useState([])
  const [votes, setVotes] = useState({})
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [sessionId] = useState(() => Math.random().toString(36).substr(2, 9))
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    // Simulate team members joining
    const mockTeamMembers = [
      { id: 1, name: 'Alex Chen', role: 'Tech Lead', avatar: '👨‍💻', status: 'online' },
      { id: 2, name: 'Sarah Kim', role: 'Product Manager', avatar: '👩‍💼', status: 'online' },
      { id: 3, name: 'Mike Johnson', role: 'Senior Dev', avatar: '👨‍🔬', status: 'away' },
      { id: 4, name: 'Lisa Wang', role: 'UX Designer', avatar: '👩‍🎨', status: 'online' }
    ]
    
    setTeamMembers(mockTeamMembers)
    
    // Simulate some existing votes and comments
    setVotes({
      1: comparison?.options[0],
      2: comparison?.options[1],
      4: comparison?.options[0]
    })
    
    setComments([
      {
        id: 1,
        userId: 1,
        userName: 'Alex Chen',
        text: 'Based on our current tech stack, I think we should consider long-term maintenance costs.',
        timestamp: new Date(Date.now() - 300000),
        avatar: '👨‍💻'
      },
      {
        id: 2,
        userId: 2,
        userName: 'Sarah Kim',
        text: 'From a product perspective, time-to-market is crucial for this feature.',
        timestamp: new Date(Date.now() - 180000),
        avatar: '👩‍💼'
      }
    ])
  }, [comparison])

  const handleVote = (option) => {
    const currentUserId = 5 // Simulate current user
    setVotes(prev => ({
      ...prev,
      [currentUserId]: option
    }))
    
    // Simulate real-time update to other team members
    setTimeout(() => {
      setComments(prev => [...prev, {
        id: Date.now(),
        userId: currentUserId,
        userName: 'You',
        text: `Voted for ${option}`,
        timestamp: new Date(),
        avatar: '👤',
        isVote: true
      }])
    }, 500)
  }

  const handleAddComment = () => {
    if (!newComment.trim()) return
    
    const comment = {
      id: Date.now(),
      userId: 5,
      userName: 'You',
      text: newComment,
      timestamp: new Date(),
      avatar: '👤'
    }
    
    setComments(prev => [...prev, comment])
    setNewComment('')
  }

  const getVoteCount = (option) => {
    return Object.values(votes).filter(vote => vote === option).length
  }

  const startLiveSession = () => {
    setIsLive(true)
    // Simulate live collaboration features
  }

  const shareSession = () => {
    const shareUrl = `${window.location.origin}/collaborate/${sessionId}`
    navigator.clipboard.writeText(shareUrl)
    alert('Collaboration link copied to clipboard!')
  }

  if (!comparison) return null

  return (
    <div className="collaboration-hub">
      <div className="collaboration-header">
        <div className="session-info">
          <Users size={24} />
          <h3>Team Decision Session</h3>
          <div className={`live-indicator ${isLive ? 'active' : ''}`}>
            <div className="pulse-dot"></div>
            {isLive ? 'LIVE' : 'OFFLINE'}
          </div>
        </div>
        
        <div className="session-controls">
          <button className="btn-secondary" onClick={shareSession}>
            <Share2 size={16} />
            Share Session
          </button>
          <button 
            className={`btn ${isLive ? 'btn-danger' : 'btn-primary'}`}
            onClick={() => setIsLive(!isLive)}
          >
            {isLive ? 'End Session' : 'Start Live Session'}
          </button>
        </div>
      </div>

      <div className="collaboration-content">
        {/* Team Members */}
        <div className="team-panel">
          <h4>Team Members ({teamMembers.length})</h4>
          <div className="team-members">
            {teamMembers.map(member => (
              <div key={member.id} className="team-member">
                <div className="member-avatar">
                  <span>{member.avatar}</span>
                  <div className={`status-indicator ${member.status}`}></div>
                </div>
                <div className="member-info">
                  <span className="member-name">{member.name}</span>
                  <span className="member-role">{member.role}</span>
                </div>
                {votes[member.id] && (
                  <div className="member-vote">
                    <Vote size={14} />
                    <span>{votes[member.id]}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Voting Panel */}
        <div className="voting-panel">
          <h4>Team Voting</h4>
          <div className="vote-options">
            {comparison.options.map(option => (
              <div key={option} className="vote-option">
                <button
                  className={`vote-btn ${votes[5] === option ? 'voted' : ''}`}
                  onClick={() => handleVote(option)}
                >
                  <div className="vote-content">
                    <span className="option-name">{option}</span>
                    <div className="vote-count">
                      <UserCheck size={16} />
                      {getVoteCount(option)} votes
                    </div>
                  </div>
                  <div className="vote-progress">
                    <div 
                      className="vote-bar"
                      style={{ 
                        width: `${(getVoteCount(option) / teamMembers.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Comments & Discussion */}
        <div className="discussion-panel">
          <h4>Team Discussion</h4>
          <div className="comments-list">
            {comments.map(comment => (
              <div key={comment.id} className={`comment ${comment.isVote ? 'vote-comment' : ''}`}>
                <div className="comment-avatar">{comment.avatar}</div>
                <div className="comment-content">
                  <div className="comment-header">
                    <span className="comment-author">{comment.userName}</span>
                    <span className="comment-time">
                      <Clock size={12} />
                      {formatTimeAgo(comment.timestamp)}
                    </span>
                  </div>
                  <div className="comment-text">{comment.text}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="comment-input">
            <input
              type="text"
              placeholder="Add your thoughts to the discussion..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
            />
            <button onClick={handleAddComment} className="btn-primary">
              <MessageCircle size={16} />
              Comment
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .collaboration-hub {
          background: white;
          border-radius: 16px;
          padding: 24px;
          margin: 20px 0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }
        
        .collaboration-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .session-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .session-info h3 {
          margin: 0;
          color: #2d3748;
        }
        
        .live-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          background: #f7fafc;
          color: #718096;
        }
        
        .live-indicator.active {
          background: #fed7d7;
          color: #c53030;
        }
        
        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #718096;
        }
        
        .live-indicator.active .pulse-dot {
          background: #c53030;
          animation: pulse 2s infinite;
        }
        
        .session-controls {
          display: flex;
          gap: 12px;
        }
        
        .collaboration-content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 24px;
        }
        
        .team-panel, .voting-panel, .discussion-panel {
          background: #f8fafc;
          border-radius: 12px;
          padding: 20px;
        }
        
        .team-panel h4, .voting-panel h4, .discussion-panel h4 {
          margin: 0 0 16px 0;
          color: #2d3748;
          font-size: 16px;
        }
        
        .team-members {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .team-member {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px;
          background: white;
          border-radius: 8px;
        }
        
        .member-avatar {
          position: relative;
          font-size: 20px;
        }
        
        .status-indicator {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 2px solid white;
        }
        
        .status-indicator.online { background: #48bb78; }
        .status-indicator.away { background: #ed8936; }
        .status-indicator.offline { background: #a0aec0; }
        
        .member-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .member-name {
          font-weight: 600;
          font-size: 14px;
          color: #2d3748;
        }
        
        .member-role {
          font-size: 12px;
          color: #718096;
        }
        
        .member-vote {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #667eea;
          background: #edf2f7;
          padding: 4px 8px;
          border-radius: 12px;
        }
        
        .vote-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .vote-option {
          position: relative;
        }
        
        .vote-btn {
          width: 100%;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .vote-btn:hover {
          border-color: #667eea;
          transform: translateY(-2px);
        }
        
        .vote-btn.voted {
          border-color: #667eea;
          background: #f0f4ff;
        }
        
        .vote-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .option-name {
          font-weight: 600;
          color: #2d3748;
        }
        
        .vote-count {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #667eea;
        }
        
        .vote-progress {
          height: 4px;
          background: #e2e8f0;
          border-radius: 2px;
          overflow: hidden;
        }
        
        .vote-bar {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: width 0.5s ease;
        }
        
        .comments-list {
          max-height: 300px;
          overflow-y: auto;
          margin-bottom: 16px;
        }
        
        .comment {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          padding: 12px;
          background: white;
          border-radius: 8px;
        }
        
        .comment.vote-comment {
          background: #f0f4ff;
          border-left: 3px solid #667eea;
        }
        
        .comment-avatar {
          font-size: 16px;
        }
        
        .comment-content {
          flex: 1;
        }
        
        .comment-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }
        
        .comment-author {
          font-weight: 600;
          font-size: 14px;
          color: #2d3748;
        }
        
        .comment-time {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #718096;
        }
        
        .comment-text {
          font-size: 14px;
          color: #4a5568;
          line-height: 1.5;
        }
        
        .comment-input {
          display: flex;
          gap: 12px;
        }
        
        .comment-input input {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
        }
        
        .comment-input input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .btn, .btn-primary, .btn-secondary, .btn-danger {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .btn-primary {
          background: #667eea;
          color: white;
        }
        
        .btn-primary:hover {
          background: #5a6fd8;
        }
        
        .btn-secondary {
          background: #e2e8f0;
          color: #4a5568;
        }
        
        .btn-secondary:hover {
          background: #cbd5e0;
        }
        
        .btn-danger {
          background: #f56565;
          color: white;
        }
        
        .btn-danger:hover {
          background: #e53e3e;
        }
        
        @media (max-width: 1024px) {
          .collaboration-content {
            grid-template-columns: 1fr;
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}

const formatTimeAgo = (timestamp) => {
  const now = new Date()
  const diff = now - timestamp
  const minutes = Math.floor(diff / 60000)
  
  if (minutes < 1) return 'just now'
  if (minutes < 60) return `${minutes}m ago`
  
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

export default CollaborationHub