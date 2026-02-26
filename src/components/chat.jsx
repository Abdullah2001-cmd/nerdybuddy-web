// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Chat = () => {

//     const [isChatOpen, setIsChatOpen] = useState(false);
//     const [messages, setMessages] = useState([]);
//     const [inputText, setInputText] = useState('');
//     const [isTyping, setIsTyping] = useState(false);
//     const [currentBotMessage, setCurrentBotMessage] = useState('');
//     const messagesEndRef = useRef(null);
//     const [unreadCount, setUnreadCount] = useState(0);

//     // Chat messages from bot
//     const botResponses = [
//         "Hello there! 👋 I'm excited to help you today!",
//         "How are you feeling today?",
//         "I can help with coding, learning, brainstorming, or just chatting!",
//         "What's on your mind? 😊",
//         "Ready to get started with your AI journey?"
//     ];

//     // Scroll to bottom of messages
//     useEffect(() => {
//         if (messagesEndRef.current) {
//             messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     }, [messages, currentBotMessage]);

//     // Initialize chat with first bot message
//     useEffect(() => {
//         if (isChatOpen && messages.length === 0) {
//             setTimeout(() => {
//                 typeBotMessage("Hi! I'm Nerdy Buddy 🤖 How can I help you today?");
//             }, 500);
//         }
//     }, [isChatOpen]);

//     // Reset unread count when opening chat
//     useEffect(() => {
//         if (isChatOpen) {
//             setUnreadCount(0);
//         }
//     }, [isChatOpen]);

//     // Type bot message character by character
//     const typeBotMessage = (message) => {
//         setIsTyping(true);
//         setCurrentBotMessage('');
//         let index = 0;

//         const typeInterval = setInterval(() => {
//             if (index <= message.length) {
//                 setCurrentBotMessage(message.substring(0, index));
//                 index++;
//             } else {
//                 clearInterval(typeInterval);
//                 setIsTyping(false);
//                 setMessages(prev => [...prev, {
//                     id: Date.now(),
//                     text: message,
//                     sender: 'bot',
//                     timestamp: new Date()
//                 }]);
//                 setCurrentBotMessage('');

//                 // Increase unread count if chat is closed
//                 if (!isChatOpen) {
//                     setUnreadCount(prev => prev + 1);
//                 }
//             }
//         }, 30);
//     };

//     // Handle user message submission
//     const handleSendMessage = () => {
//         if (!inputText.trim()) return;

//         // Add user message
//         const userMessage = {
//             id: Date.now(),
//             text: inputText,
//             sender: 'user',
//             timestamp: new Date()
//         };

//         setMessages(prev => [...prev, userMessage]);
//         setInputText('');

//         // Show typing indicator
//         setIsTyping(true);

//         // Bot responds after delay
//         setTimeout(() => {
//             const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
//             typeBotMessage(randomResponse);
//         }, 1000);
//     };

//     // Handle key press
//     const handleKeyPress = (e) => {
//         if (e.key === 'Enter' && !e.shiftKey) {
//             e.preventDefault();
//             handleSendMessage();
//         }
//     };

//     // Handle toggle chat
//     const toggleChat = () => {
//         const newState = !isChatOpen;
//         setIsChatOpen(newState);
//         if (newState) {
//             setUnreadCount(0);
//         }
//     };

//     // Handle closing chat from inside
//     const handleCloseChat = (e) => {
//         e.stopPropagation();
//         setIsChatOpen(false);
//     };

//     return (
//         <>
//             {/* Always visible chat icon in bottom right */}
//             <motion.div
//                 className="chat-icon-container"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 onClick={toggleChat}
//                 // style={{
//                 //     bottom: isChatOpen ? 'calc(600px + 30px)' : '30px'
//                 // }}
//             >
//                 <motion.div
//                     className="chat-icon"
//                     animate={{ 
//                         rotate: isChatOpen ? 0 : 0,
//                         backgroundColor: isChatOpen ? '#667eea' : '#764ba2'
//                     }}
//                     transition={{ duration: 0.3 }}
//                 >
//                     <motion.svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                         animate={{ 
//                             scale: isChatOpen ? 0.9 : 1,
//                             rotate: isChatOpen ? 90 : 0 
//                         }}
//                         transition={{ duration: 0.3 }}
//                     >
//                         {isChatOpen ? (
//                             <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
//                         ) : (
//                             <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
//                         )}
//                     </motion.svg>
//                 </motion.div>

//                 {/* Unread notification badge */}
//                 <AnimatePresence>
//                     {unreadCount > 0 && (
//                         <motion.div
//                             className="notification-badge"
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             exit={{ scale: 0 }}
//                         >
//                             {unreadCount}
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </motion.div>

//             {/* Chat Window - Opens above the icon */}
//             <AnimatePresence>
//                 {isChatOpen && (
//                     <motion.div
//                         className="chat-container"
//                         initial={{ opacity: 0, y: 20, scale: 0.9 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: 20, scale: 0.9 }}
//                         transition={{ type: "spring", damping: 25 }}
//                         style={{
//                             bottom: '100px',
//                             right: '30px'
//                         }}
//                     >
//                         {/* Chat Header */}
//                         <div className="chat-header">
//                             <motion.div
//                                 className="chat-avatar"
//                                 animate={{
//                                     scale: [1, 1.1, 1],
//                                     rotate: [0, 10, -10, 0]
//                                 }}
//                                 transition={{
//                                     duration: 3,
//                                     repeat: Infinity,
//                                     repeatDelay: 2
//                                 }}
//                             >
//                                 <img
//                                     src="https://nerdybuddy.com/wp-content/uploads/2025/05/12435.gif"
//                                     alt="Nerdy Buddy"
//                                     className="avatar-gif"
//                                 />
//                                 <div className="online-indicator" />
//                             </motion.div>
//                             <div className="chat-info">
//                                 <h3>Nerdy Buddy AI</h3>
//                                 <p>{isTyping ? 'Typing...' : 'Online'}</p>
//                             </div>
//                             <motion.button
//                                 className="close-chat"
//                                 onClick={handleCloseChat}
//                                 whileHover={{ scale: 1.1 }}
//                                 whileTap={{ scale: 0.9 }}
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                                     <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
//                                 </svg>
//                             </motion.button>
//                         </div>

//                         {/* Chat Messages Container */}
//                         <div className="chat-messages">
//                             {messages.map((message) => (
//                                 <motion.div
//                                     key={message.id}
//                                     className={`message ${message.sender}`}
//                                     initial={{ opacity: 0, y: 10 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.3 }}
//                                 >
//                                     <div className="message-content">
//                                         <div className="message-text">{message.text}</div>
//                                         <div className="message-time">
//                                             {message.timestamp.toLocaleTimeString([], { 
//                                                 hour: '2-digit', 
//                                                 minute: '2-digit' 
//                                             })}
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             ))}

//                             {/* Currently typing bot message */}
//                             {currentBotMessage && (
//                                 <motion.div
//                                     className="message bot"
//                                     initial={{ opacity: 0, y: 10 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                 >
//                                     <div className="message-content">
//                                         <div className="message-text">
//                                             {currentBotMessage}
//                                             <motion.span
//                                                 animate={{ opacity: [1, 0, 1] }}
//                                                 transition={{ duration: 1, repeat: Infinity }}
//                                                 className="typing-cursor"
//                                             >
//                                                 |
//                                             </motion.span>
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             )}

//                             {/* Typing indicator */}
//                             {isTyping && !currentBotMessage && (
//                                 <motion.div
//                                     className="typing-indicator"
//                                     initial={{ opacity: 0 }}
//                                     animate={{ opacity: 1 }}
//                                 >
//                                     <div className="typing-dots">
//                                         <motion.span
//                                             animate={{ y: [0, -5, 0] }}
//                                             transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
//                                         />
//                                         <motion.span
//                                             animate={{ y: [0, -5, 0] }}
//                                             transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
//                                         />
//                                         <motion.span
//                                             animate={{ y: [0, -5, 0] }}
//                                             transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
//                                         />
//                                     </div>
//                                     <span>Nerdy Buddy is thinking...</span>
//                                 </motion.div>
//                             )}
//                             <div ref={messagesEndRef} />
//                         </div>

//                         {/* Chat Input */}
//                         <div className="chat-input-container">
//                             <div className="input-wrapper">
//                                 <input
//                                     type="text"
//                                     value={inputText}
//                                     onChange={(e) => setInputText(e.target.value)}
//                                     onKeyPress={handleKeyPress}
//                                     placeholder="Type your message here..."
//                                     autoFocus
//                                 />
//                                 <motion.button
//                                     className="send-button"
//                                     onClick={handleSendMessage}
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     disabled={!inputText.trim()}
//                                 >
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                                         <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
//                                     </svg>
//                                 </motion.button>
//                             </div>

//                             {/* Quick reply buttons */}
//                             {messages.length < 2 && (
//                                 <div className="quick-replies">
//                                     <motion.button
//                                         className="quick-reply"
//                                         onClick={() => {
//                                             setInputText("Hello! How are you?");
//                                             setTimeout(() => handleSendMessage(), 100);
//                                         }}
//                                         whileHover={{ scale: 1.05 }}
//                                         whileTap={{ scale: 0.95 }}
//                                     >
//                                         👋 Say Hello
//                                     </motion.button>
//                                     <motion.button
//                                         className="quick-reply"
//                                         onClick={() => {
//                                             setInputText("What can you help me with?");
//                                             setTimeout(() => handleSendMessage(), 100);
//                                         }}
//                                         whileHover={{ scale: 1.05 }}
//                                         whileTap={{ scale: 0.95 }}
//                                     >
//                                         ❓ Ask for Help
//                                     </motion.button>
//                                 </div>
//                             )}
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </>
//     );
// };

// export default Chat;
















import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

// API base URL
const API_BASE_URL = 'http://localhost:5000/api';

const Chat = ({ userEmail, userName, userCompany }) => {
    // Chat state
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [currentBotMessage, setCurrentBotMessage] = useState('');
    const messagesEndRef = useRef(null);
    const [unreadCount, setUnreadCount] = useState(0);

    // Chat support state
    const [conversationId, setConversationId] = useState(null);
    const [conversation, setConversation] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [chatStarted, setChatStarted] = useState(false);
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [emailFormData, setEmailFormData] = useState({
        name: userName || '',
        email: userEmail || '',
        message: ''
    });

    const pollingRef = useRef(null);
    const typingTimeoutRef = useRef(null);

    // Scroll to bottom of messages
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, currentBotMessage]);

    // Initialize chat
    useEffect(() => {
        if (isChatOpen && !chatStarted && !conversationId) {
            // Check if user is logged in
            if (userEmail && userName) {
                setShowEmailForm(false);
                // Show welcome message
                setTimeout(() => {
                    typeBotMessage(`Welcome back, ${userName}! 👋 How can we help you today?`);
                }, 500);
            } else {
                setShowEmailForm(true);
                setTimeout(() => {
                    typeBotMessage("Hi! 👋 Please enter your name and email to start chatting with our support team.");
                }, 500);
            }
        }
    }, [isChatOpen, userEmail, userName, chatStarted, conversationId]);

    // Poll for new messages
    useEffect(() => {
        if (!conversationId || !isChatOpen) return;

        const pollMessages = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/chat/conversation/${conversationId}`, {
                    params: { email: userEmail || emailFormData.email }
                });

                if (response.data.success) {
                    const newMessages = response.data.messages;

                    // Check if there are new messages
                    if (newMessages.length > messages.length) {
                        // Add only the new messages
                        const existingIds = new Set(messages.map(m => m.id));
                        const messagesToAdd = newMessages.filter(m => !existingIds.has(m.id));

                        if (messagesToAdd.length > 0) {
                            // Animate each new message
                            messagesToAdd.forEach((msg, index) => {
                                setTimeout(() => {
                                    if (msg.senderType === 'support') {
                                        // Display support message with typing effect
                                        typeBotMessage(msg.message, msg.senderName);
                                    } else {
                                        // Add customer message directly
                                        setMessages(prev => [...prev, {
                                            id: msg.id,
                                            text: msg.message,
                                            sender: 'user',
                                            senderName: msg.senderName,
                                            timestamp: new Date(msg.timestamp)
                                        }]);
                                    }
                                }, index * 500);
                            });

                            // Mark messages as read
                            await axios.post(`${API_BASE_URL}/chat/mark-read`, {
                                conversationId,
                                readerType: 'customer'
                            });
                        }
                    }

                    setConversation(response.data.conversation);
                }
            } catch (error) {
                console.error('Error polling messages:', error);
            }
        };

        pollingRef.current = setInterval(pollMessages, 3000);

        return () => {
            if (pollingRef.current) {
                clearInterval(pollingRef.current);
            }
        };
    }, [conversationId, messages.length, isChatOpen, userEmail, emailFormData.email]);

    // Check for unread messages
    useEffect(() => {
        if (!isChatOpen && userEmail) {
            const checkUnread = async () => {
                try {
                    const response = await axios.get(`${API_BASE_URL}/chat/unread/${userEmail}?type=customer`);
                    if (response.data.success) {
                        setUnreadCount(response.data.unreadCount);
                    }
                } catch (error) {
                    console.error('Error checking unread:', error);
                }
            };

            checkUnread();
            const interval = setInterval(checkUnread, 10000);
            return () => clearInterval(interval);
        }
    }, [isChatOpen, userEmail]);

    // Reset unread count when opening chat
    useEffect(() => {
        if (isChatOpen) {
            setUnreadCount(0);
        }
    }, [isChatOpen]);

    // Type bot message character by character
    const typeBotMessage = (message, senderName = 'Support Agent') => {
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
                    senderName: senderName,
                    timestamp: new Date()
                }]);
                setCurrentBotMessage('');
            }
        }, 30);
    };

    // Start new chat conversation
    const startChat = async () => {
        if (!emailFormData.name || !emailFormData.email || !emailFormData.message) {
            typeBotMessage("Please fill in all fields to start the chat.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post(`${API_BASE_URL}/chat/start`, {
                customerName: emailFormData.name,
                customerEmail: emailFormData.email,
                initialMessage: emailFormData.message,
                company: userCompany || ''
            });

            if (response.data.success) {
                setConversationId(response.data.conversationId);
                setChatStarted(true);
                setShowEmailForm(false);

                // Clear messages and show confirmation
                setMessages([]);

                typeBotMessage(`Thank you for reaching out, ${emailFormData.name}! A support agent will respond shortly. Your ticket ID is: ${response.data.conversationId.slice(-8)}`);

                // Add user's initial message
                setMessages(prev => [...prev, {
                    id: Date.now() - 1,
                    text: emailFormData.message,
                    sender: 'user',
                    senderName: emailFormData.name,
                    timestamp: new Date()
                }]);
            }
        } catch (error) {
            console.error('Error starting chat:', error);
            typeBotMessage("Sorry, we couldn't start the chat. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    // Send message to support
    const handleSendMessage = async () => {
        if (!inputText.trim()) return;

        const messageText = inputText;
        setInputText('');

        if (!conversationId) {
            // If chat not started, show email form
            setShowEmailForm(true);
            setEmailFormData(prev => ({ ...prev, message: messageText }));
            typeBotMessage("Please provide your name and email to continue.");
            return;
        }

        // Add user message immediately
        const tempMessage = {
            id: Date.now(),
            text: messageText,
            sender: 'user',
            senderName: emailFormData.name || userName,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, tempMessage]);

        // Show typing indicator
        setIsTyping(true);

        try {
            const response = await axios.post(`${API_BASE_URL}/chat/message`, {
                conversationId,
                senderType: 'customer',
                senderName: emailFormData.name || userName,
                senderEmail: emailFormData.email || userEmail,
                message: messageText,
                isSupport: false
            });

            if (response.data.success) {
                // Replace temp message with confirmed message
                setMessages(prev =>
                    prev.map(msg =>
                        msg.id === tempMessage.id ? {
                            ...response.data.message,
                            timestamp: new Date(response.data.message.timestamp)
                        } : msg
                    )
                );
            }
        } catch (error) {
            console.error('Error sending message:', error);
            // Show error message
            typeBotMessage("Sorry, your message couldn't be sent. Please try again.");
        } finally {
            setIsTyping(false);
        }
    };

    // Handle email form input change
    const handleEmailFormChange = (e) => {
        setEmailFormData({
            ...emailFormData,
            [e.target.name]: e.target.value
        });
    };

    // Handle email form submit
    const handleEmailFormSubmit = (e) => {
        e.preventDefault();
        if (emailFormData.name && emailFormData.email && emailFormData.message) {
            startChat();
        }
    };

    // Handle key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (showEmailForm) {
                handleEmailFormSubmit(e);
            } else {
                handleSendMessage();
            }
        }
    };

    // Handle toggle chat
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    // Handle closing chat from inside
    const handleCloseChat = (e) => {
        e.stopPropagation();
        setIsChatOpen(false);

        // Clear typing timeout
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
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
            >
                <motion.div
                    className="chat-icon"
                    animate={{
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
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        ) : (
                            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
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

            {/* Chat Window */}
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
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatDelay: 2
                                }}
                            >
                                <img
                                    src="https://nerdybuddy.com/wp-content/uploads/2025/05/12435.gif"
                                    alt="Support"
                                    className="avatar-gif"
                                />
                                <div className="online-indicator" />
                            </motion.div>
                            <div className="chat-info">
                                <h3>Nerdy Buddy Support</h3>
                                <p>
                                    {isTyping ? 'Agent typing...' :
                                        conversation ? 'Connected' :
                                            showEmailForm ? 'Please log in' : 'Online'}
                                </p>
                            </div>
                            <motion.button
                                className="close-chat"
                                onClick={handleCloseChat}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
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
                                        {message.senderName && message.sender === 'bot' && (
                                            <div className="message-sender">{message.senderName}</div>
                                        )}
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

                            {/* Currently typing message */}
                            {currentBotMessage && (
                                <motion.div
                                    className="message bot"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <div className="message-content">
                                        <div className="message-sender">Support Agent</div>
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
                                    <span>Agent is typing...</span>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Chat Input Area */}
                        <div className="chat-input-container">
                            {showEmailForm ? (
                                // Email collection form
                                // <form onSubmit={handleEmailFormSubmit} className="email-form">
                                //     <input
                                //         type="text"
                                //         name="name"
                                //         value={emailFormData.name}
                                //         onChange={handleEmailFormChange}
                                //         placeholder="Your name"
                                //         className="email-input"
                                //         disabled={isLoading}
                                //     />
                                //     <input
                                //         type="email"
                                //         name="email"
                                //         value={emailFormData.email}
                                //         onChange={handleEmailFormChange}
                                //         placeholder="Your email"
                                //         className="email-input"
                                //         disabled={isLoading}
                                //     />
                                //     <textarea
                                //         name="message"
                                //         value={emailFormData.message}
                                //         onChange={handleEmailFormChange}
                                //         placeholder="How can we help you?"
                                //         className="email-textarea"
                                //         rows="2"
                                //         disabled={isLoading}
                                //     />
                                //     <motion.button
                                //         type="submit"
                                //         className="send-button"
                                //         whileHover={{ scale: 1.02 }}
                                //         whileTap={{ scale: 0.98 }}
                                //         disabled={isLoading}
                                //     >
                                //         {isLoading ? 'Starting Chat...' : 'Start Chat'}
                                //     </motion.button>
                                // </form>

                                <form onSubmit={handleEmailFormSubmit} className="chat-input-container">
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            name='message'
                                            value={emailFormData.message}
                                            onChange={handleEmailFormChange}
                                            disabled={isLoading}
                                            onKeyPress={handleKeyPress}
                                            placeholder="Type your message here..."
                                            autoFocus
                                        />
                                        <motion.button
                                            type="submit"
                                            className="send-button"
                                            onClick={handleSendMessage}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            disabled={!emailFormData.message.trim()}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </form>
                            ) : (
                                // Regular chat input
                                <>
                                    {/* <div className="input-wrapper">
                                        <input
                                            type="text"
                                            value={inputText}
                                            onChange={(e) => setInputText(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            placeholder={conversationId ? "Type your message..." : "Type a message to start..."}
                                            autoFocus
                                            disabled={!conversationId && messages.length > 0 && !showEmailForm}
                                        />
                                        <motion.button
                                            className="send-button"
                                            onClick={handleSendMessage}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            disabled={!inputText.trim() || (!conversationId && messages.length > 0 && !showEmailForm)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                            </svg>
                                        </motion.button>
                                    </div> */}

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

                                    {/* Quick reply buttons (only when chat is active) */}
                                    {conversationId && messages.length < 3 && (
                                        <div className="quick-replies">
                                            <motion.button
                                                className="quick-reply"
                                                onClick={() => {
                                                    setInputText("I need help with my account");
                                                    setTimeout(() => handleSendMessage(), 100);
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                🔑 Account Help
                                            </motion.button>
                                            <motion.button
                                                className="quick-reply"
                                                onClick={() => {
                                                    setInputText("I have a billing question");
                                                    setTimeout(() => handleSendMessage(), 100);
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                💳 Billing
                                            </motion.button>
                                            <motion.button
                                                className="quick-reply"
                                                onClick={() => {
                                                    setInputText("Technical support please");
                                                    setTimeout(() => handleSendMessage(), 100);
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                🔧 Technical
                                            </motion.button>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chat;