import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chat = () => {

    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [currentBotMessage, setCurrentBotMessage] = useState('');
    const messagesEndRef = useRef(null);
    const [unreadCount, setUnreadCount] = useState(0);

    // Chat messages from bot
    const botResponses = [
        "Hello there! 👋 I'm excited to help you today!",
        "How are you feeling today?",
        "I can help with coding, learning, brainstorming, or just chatting!",
        "What's on your mind? 😊",
        "Ready to get started with your AI journey?"
    ];

    // Scroll to bottom of messages
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, currentBotMessage]);

    // Initialize chat with first bot message
    useEffect(() => {
        if (isChatOpen && messages.length === 0) {
            setTimeout(() => {
                typeBotMessage("Hi! I'm Nerdy Buddy 🤖 How can I help you today?");
            }, 500);
        }
    }, [isChatOpen]);

    // Reset unread count when opening chat
    useEffect(() => {
        if (isChatOpen) {
            setUnreadCount(0);
        }
    }, [isChatOpen]);

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
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    text: message,
                    sender: 'bot',
                    timestamp: new Date()
                }]);
                setCurrentBotMessage('');
                
                // Increase unread count if chat is closed
                if (!isChatOpen) {
                    setUnreadCount(prev => prev + 1);
                }
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
        }, 1000);
    };

    // Handle key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    // Handle toggle chat
    const toggleChat = () => {
        const newState = !isChatOpen;
        setIsChatOpen(newState);
        if (newState) {
            setUnreadCount(0);
        }
    };

    // Handle closing chat from inside
    const handleCloseChat = (e) => {
        e.stopPropagation();
        setIsChatOpen(false);
    };

    return (
        <>
            {/* Always visible chat icon in bottom right */}
            <motion.div
                className="chat-icon-container"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleChat}
                // style={{
                //     bottom: isChatOpen ? 'calc(600px + 30px)' : '30px'
                // }}
            >
                <motion.div
                    className="chat-icon"
                    animate={{ 
                        rotate: isChatOpen ? 0 : 0,
                        backgroundColor: isChatOpen ? '#667eea' : '#764ba2'
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        animate={{ 
                            scale: isChatOpen ? 0.9 : 1,
                            rotate: isChatOpen ? 90 : 0 
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {isChatOpen ? (
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        ) : (
                            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
                        )}
                    </motion.svg>
                </motion.div>

                {/* Unread notification badge */}
                <AnimatePresence>
                    {unreadCount > 0 && (
                        <motion.div
                            className="notification-badge"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                        >
                            {unreadCount}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Chat Window - Opens above the icon */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        className="chat-container"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25 }}
                        style={{
                            bottom: '100px',
                            right: '30px'
                        }}
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
                            <motion.button
                                className="close-chat"
                                onClick={handleCloseChat}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                </svg>
                            </motion.button>
                        </div>

                        {/* Chat Messages Container */}
                        <div className="chat-messages">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    className={`message ${message.sender}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="message-content">
                                        <div className="message-text">{message.text}</div>
                                        <div className="message-time">
                                            {message.timestamp.toLocaleTimeString([], { 
                                                hour: '2-digit', 
                                                minute: '2-digit' 
                                            })}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Currently typing bot message */}
                            {currentBotMessage && (
                                <motion.div
                                    className="message bot"
                                    initial={{ opacity: 0, y: 10 }}
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
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message here..."
                                    autoFocus
                                />
                                <motion.button
                                    className="send-button"
                                    onClick={handleSendMessage}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={!inputText.trim()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
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
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chat;