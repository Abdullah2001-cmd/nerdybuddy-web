import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [stage, setStage] = useState('initial'); // initial, chat, complete
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentBotMessage, setCurrentBotMessage] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initial typing animation
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hello! I'm Nerdy Buddy, your AI assistant";
  
  // Chat messages from bot
  const botResponses = [
    "Hello there! 👋 I'm excited to help you today!",
    "How are you feeling today?",
    "I can help with coding, learning, brainstorming, or just chatting!",
    "What's on your mind? 😊"
  ];

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initial typing animation
  useEffect(() => {
    if (stage === 'initial') {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.substring(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setStage('chat');
            // Add initial bot message
            setTimeout(() => {
              typeBotMessage("Hi! I'm Nerdy Buddy 🤖 How can I help you today?");
            }, 500);
          }, 1000);
        }
      }, 50);
      return () => clearInterval(typeInterval);
    }
  }, [stage]);

  // Type bot message character by character
  const typeBotMessage = (message) => {
    setIsTyping(true);
    setCurrentBotMessage('');
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index <= message.length) {
        setCurrentBotMessage(message.substring(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        // Add to messages list
        setMessages(prev => [...prev, {
          id: Date.now(),
          text: message,
          sender: 'bot',
          timestamp: new Date()
        }]);
        setCurrentBotMessage('');
      }
    }, 30);
  };

  // Handle user message submission
  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Bot responds after delay
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      typeBotMessage(randomResponse);
      
      // After 3 messages, show completion option
      if (messages.length >= 3) {
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            typeBotMessage("Ready to get started? Click anywhere to begin!");
            // Enable click to complete
            setTimeout(() => {
              setStage('complete');
            }, 2000);
          }, 1000);
        }, 2000);
      }
    }, 1000);
  };

  // Handle key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Handle completion
  const handleComplete = () => {
    if (stage === 'complete') {
      setStage('exit');
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
    }
  };

  if (stage === 'exit') return null;

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={stage === 'complete' ? handleComplete : undefined}
    >
      {/* Initial Animation Stage */}
      {stage === 'initial' && (
        <motion.div
          className="initial-stage"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="character-container"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              src="https://nerdybuddy.com/wp-content/uploads/2025/05/12435.gif"
              alt="Nerdy Buddy AI Assistant"
              className="character-gif"
            />
          </motion.div>

          <motion.div
            className="text-container"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="typing-text">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="cursor"
              >
                |
              </motion.span>
            </div>
            <motion.div
              className="loading-dots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span>Loading AI assistant</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
              >
                .
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
              >
                .
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Chat Interface Stage */}
      {(stage === 'chat' || stage === 'complete') && (
        <motion.div
          className="chat-stage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Chat Header */}
          <div className="chat-header">
            <motion.div
              className="chat-avatar"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              <img
                src="https://nerdybuddy.com/wp-content/uploads/2025/05/12435.gif"
                alt="Nerdy Buddy"
                className="avatar-gif"
              />
              <div className="online-indicator" />
            </motion.div>
            <div className="chat-info">
              <h3>Nerdy Buddy AI</h3>
              <p>{isTyping ? 'Typing...' : 'Online'}</p>
            </div>
            <div className="neural-status">
              <span className="neural-dot" />
              <span>Neural Network Active</span>
            </div>
          </div>

          {/* Chat Messages Container */}
          <div className="chat-messages">
            {/* Initial greeting message */}
            {messages.length === 0 && (
              <motion.div
                className="message bot"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="message-content">
                  <div className="message-text">
                    Hi! I'm Nerdy Buddy 🤖 How can I help you today?
                  </div>
                  <div className="message-time">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* User and bot messages */}
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`message ${message.sender}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="message-content">
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Currently typing bot message */}
            {currentBotMessage && (
              <motion.div
                className="message bot"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="message-content">
                  <div className="message-text">
                    {currentBotMessage}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="typing-cursor"
                    >
                      |
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Typing indicator */}
            {isTyping && !currentBotMessage && (
              <motion.div
                className="typing-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="typing-dots">
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
                <span>Nerdy Buddy is thinking...</span>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="chat-input-container">
            <div className="input-wrapper">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                disabled={stage === 'complete'}
              />
              <motion.button
                className="send-button"
                onClick={handleSendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!inputText.trim() || stage === 'complete'}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </motion.button>
            </div>
            
            {/* Quick reply buttons */}
            {messages.length < 2 && (
              <div className="quick-replies">
                <motion.button
                  className="quick-reply"
                  onClick={() => {
                    setInputText("Hello! How are you?");
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  👋 Say Hello
                </motion.button>
                <motion.button
                  className="quick-reply"
                  onClick={() => {
                    setInputText("What can you help me with?");
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ❓ Ask for Help
                </motion.button>
                <motion.button
                  className="quick-reply"
                  onClick={() => {
                    setInputText("Tell me about yourself");
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🤖 Learn About AI
                </motion.button>
              </div>
            )}
          </div>

          {/* Completion prompt */}
          {stage === 'complete' && (
            <motion.div
              className="completion-prompt"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="pulse-ring" />
              <p>Click anywhere to start your AI journey!</p>
              <motion.div
                className="arrow-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ↓
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default LoadingScreen;