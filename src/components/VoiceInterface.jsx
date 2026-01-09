import React, { useState, useEffect, useRef } from 'react'
import { Mic, MicOff, Volume2, VolumeX } from 'lucide-react'

const VoiceInterface = ({ onVoiceCommand, onComparisonCreate }) => {
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [voiceEnabled, setVoiceEnabled] = useState(false)
  const recognitionRef = useRef(null)
  const synthRef = useRef(null)

  useEffect(() => {
    // Initialize Speech Recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      
      recognitionRef.current.continuous = true
      recognitionRef.current.interimResults = true
      recognitionRef.current.lang = 'en-US'
      
      recognitionRef.current.onresult = (event) => {
        let finalTranscript = ''
        let interimTranscript = ''
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript
          if (event.results[i].isFinal) {
            finalTranscript += transcript
          } else {
            interimTranscript += transcript
          }
        }
        
        setTranscript(finalTranscript || interimTranscript)
        
        if (finalTranscript) {
          processVoiceCommand(finalTranscript)
        }
      }
      
      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error)
        setIsListening(false)
      }
      
      recognitionRef.current.onend = () => {
        setIsListening(false)
      }
    }
    
    // Initialize Speech Synthesis
    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis
      setVoiceEnabled(true)
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
      if (synthRef.current) {
        synthRef.current.cancel()
      }
    }
  }, [])

  const processVoiceCommand = (command) => {
    const lowerCommand = command.toLowerCase()
    
    // Compare command patterns
    if (lowerCommand.includes('compare') && lowerCommand.includes('versus')) {
      const parts = lowerCommand.split('versus')
      if (parts.length === 2) {
        const option1 = parts[0].replace('compare', '').trim()
        const option2 = parts[1].trim()
        
        speak(`Comparing ${option1} versus ${option2}`)
        onComparisonCreate({
          option1: option1,
          option2: option2,
          criteria: 'Performance, Ease of Use, Community Support, Cost',
          context: 'Voice-initiated comparison'
        })
      }
    } else if (lowerCommand.includes('help')) {
      speak('You can say things like: Compare React versus Vue, or Compare AWS versus Azure')
    } else if (lowerCommand.includes('export')) {
      speak('Exporting your comparison results')
      onVoiceCommand('export')
    } else if (lowerCommand.includes('new comparison')) {
      speak('Starting a new comparison')
      onVoiceCommand('new')
    } else {
      speak('I didn\'t understand that command. Try saying "Compare X versus Y" or "Help" for assistance.')
    }
  }

  const speak = (text) => {
    if (synthRef.current && voiceEnabled) {
      setIsSpeaking(true)
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1
      utterance.volume = 0.8
      
      utterance.onend = () => {
        setIsSpeaking(false)
      }
      
      synthRef.current.speak(utterance)
    }
  }

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition not supported in this browser')
      return
    }
    
    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      recognitionRef.current.start()
      setIsListening(true)
      setTranscript('')
    }
  }

  const toggleSpeech = () => {
    if (isSpeaking) {
      synthRef.current.cancel()
      setIsSpeaking(false)
    }
    setVoiceEnabled(!voiceEnabled)
  }

  return (
    <div className="voice-interface">
      <div className="voice-controls">
        <button
          className={`voice-btn ${isListening ? 'listening' : ''}`}
          onClick={toggleListening}
          title={isListening ? 'Stop listening' : 'Start voice commands'}
        >
          {isListening ? <MicOff size={20} /> : <Mic size={20} />}
          {isListening && <div className="pulse-ring"></div>}
        </button>
        
        <button
          className={`voice-btn ${!voiceEnabled ? 'muted' : ''}`}
          onClick={toggleSpeech}
          title={voiceEnabled ? 'Mute voice responses' : 'Enable voice responses'}
        >
          {voiceEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
          {isSpeaking && <div className="speaking-indicator"></div>}
        </button>
      </div>
      
      {(isListening || transcript) && (
        <div className="voice-feedback">
          <div className="transcript-display">
            {isListening && !transcript && (
              <div className="listening-indicator">
                <span>Listening...</span>
                <div className="sound-waves">
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                </div>
              </div>
            )}
            {transcript && (
              <div className="transcript-text">
                <strong>You said:</strong> "{transcript}"
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="voice-commands-help">
        <h4>Voice Commands:</h4>
        <ul>
          <li>"Compare React versus Vue"</li>
          <li>"Compare AWS versus Azure"</li>
          <li>"Export results"</li>
          <li>"New comparison"</li>
          <li>"Help"</li>
        </ul>
      </div>
      
      <style jsx>{`
        .voice-interface {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          padding: 20px;
          color: white;
          margin: 20px 0;
        }
        
        .voice-controls {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .voice-btn {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .voice-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }
        
        .voice-btn.listening {
          background: #ff4757;
          animation: pulse 2s infinite;
        }
        
        .voice-btn.muted {
          background: rgba(255, 255, 255, 0.1);
          opacity: 0.6;
        }
        
        .pulse-ring {
          position: absolute;
          width: 80px;
          height: 80px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: pulse-ring 2s infinite;
        }
        
        .speaking-indicator {
          position: absolute;
          width: 70px;
          height: 70px;
          border: 2px solid #00ff88;
          border-radius: 50%;
          animation: speaking 1s infinite;
        }
        
        .voice-feedback {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
        }
        
        .listening-indicator {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .sound-waves {
          display: flex;
          gap: 2px;
        }
        
        .wave {
          width: 3px;
          height: 20px;
          background: #00ff88;
          border-radius: 2px;
          animation: wave 1.5s infinite;
        }
        
        .wave:nth-child(2) { animation-delay: 0.2s; }
        .wave:nth-child(3) { animation-delay: 0.4s; }
        
        .transcript-text {
          font-size: 14px;
          line-height: 1.5;
        }
        
        .voice-commands-help {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          backdrop-filter: blur(10px);
        }
        
        .voice-commands-help h4 {
          margin: 0 0 12px 0;
          font-size: 16px;
        }
        
        .voice-commands-help ul {
          margin: 0;
          padding-left: 20px;
        }
        
        .voice-commands-help li {
          margin-bottom: 4px;
          font-size: 14px;
          opacity: 0.9;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes speaking {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        @keyframes wave {
          0%, 100% { height: 10px; }
          50% { height: 25px; }
        }
        
        @media (max-width: 768px) {
          .voice-interface {
            padding: 16px;
          }
          
          .voice-btn {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </div>
  )
}

export default VoiceInterface