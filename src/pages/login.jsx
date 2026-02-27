import React, { useState } from 'react';
import { Sparkles, Send, Mail } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../utils/firebase';

const LoginPage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        setError('');
    };

    const handleEmailSignIn = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            console.log('Successfully signed in!');
        } catch (error) {
            console.error('Login error:', error);
            switch (error.code) {
                case 'auth/invalid-email':
                    setError('Invalid email address format.');
                    break;
                case 'auth/user-disabled':
                    setError('This account has been disabled.');
                    break;
                case 'auth/user-not-found':
                    setError('No account found with this email.');
                    break;
                case 'auth/wrong-password':
                    setError('Incorrect password.');
                    break;
                default:
                    setError('Failed to sign in. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setIsSubmitting(true);
        setError('');
        try {
            const res = await signInWithPopup(auth, googleProvider);
            const user = {
                uid: res.user.uid,
                accessToken: res.user.accessToken,
                username: res.user.displayName,
                email: res.user.email,
                profile: res.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(user));
            window.location.reload()
            console.log('Successfully signed in with Google!', res.user);
        } catch (error) {
            console.error('Google sign-in error:', error);
            if (error.code === 'auth/popup-closed-by-user') {
                setError('Sign-in popup was closed before completing.');
            }
            else if (error.code === 'auth/cancelled-popup-request') {
                setError('Sign-in popup was cancelled before completing.');
            }
            else {
                setError('Failed to sign in with Google. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleForgotPassword = async () => {
        if (!formData.email) {
            setError('Please enter your email address first.');
            return;
        }

        setIsSubmitting(true);
        setError('');
        setSuccessMessage('');

        try {
            await sendPasswordResetEmail(auth, formData.email);
            setSuccessMessage('Password reset email sent! Check your inbox.');
            setShowForgotPassword(false);
        } catch (error) {
            console.error('Password reset error:', error);
            if (error.code === 'auth/user-not-found') {
                setError('No account found with this email address.');
            } else {
                setError('Failed to send reset email. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Form Container with subtle card effect */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
                    <form onSubmit={handleEmailSignIn} className="space-y-6">
                        {/* Form Header */}
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B03982]/10 to-[#733C86]/10 rounded-full border border-[#B03982]/20 backdrop-blur-sm mb-4">
                                <Sparkles className="w-4 h-4 text-[#B03982]" />
                                <span className="text-sm font-medium bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent">
                                    Welcome Back
                                </span>
                            </div>
                            <p className="text-gray-600">
                                Sign in to your account to continue your journey.
                            </p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                                {error}
                            </div>
                        )}

                        {/* Success Message */}
                        {successMessage && (
                            <div className="p-3 bg-green-50 border border-green-200 rounded-xl text-sm text-green-600">
                                {successMessage}
                            </div>
                        )}

                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B03982]/20 focus:border-[#B03982] transition-all duration-300"
                                placeholder="your.email@company.com"
                            />
                        </div>

                        {/* Password Field */}
                        {!showForgotPassword ? (
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Password *
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B03982]/20 focus:border-[#B03982] transition-all duration-300"
                                    placeholder="••••••••"
                                />
                            </div>
                        ) : (
                            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                                <p className="text-sm text-gray-600 mb-3">
                                    Enter your email address and we'll send you a password reset link.
                                </p>
                                <button
                                    type="button"
                                    onClick={handleForgotPassword}
                                    disabled={isSubmitting}
                                    className="w-full px-4 py-2 bg-gradient-to-r from-[#B03982] to-[#733C86] text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                                >
                                    Send Reset Email
                                </button>
                            </div>
                        )}

                        {/* Remember Me & Forgot Password */}
                        {!showForgotPassword && (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="w-4 h-4 rounded border-gray-300 text-[#B03982] focus:ring-[#B03982]/20 focus:ring-2"
                                        id="remember"
                                    />
                                    <label htmlFor="remember" className="text-sm text-gray-600">
                                        Remember me
                                    </label>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setShowForgotPassword(true)}
                                    className="text-sm bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                                >
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        {/* Back to Login Link (when in forgot password mode) */}
                        {showForgotPassword && (
                            <button
                                type="button"
                                onClick={() => setShowForgotPassword(false)}
                                className="text-sm bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                            >
                                ← Back to login
                            </button>
                        )}

                        {/* Submit Button - Only show when not in forgot password mode */}
                        {!showForgotPassword && (
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="cursor-pointer group relative w-full px-8 py-4 bg-gradient-to-br from-[#B03982] to-[#733C86] rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#B03982]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {/* Animated Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#c94594] to-[#8a48a3] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Ripple Effect */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer"></div>
                                    </div>

                                    <div className="relative flex items-center justify-center gap-3">
                                        <div className="relative">
                                            <div className="absolute -inset-2 bg-white/20 rounded-full blur group-hover:animate-ping"></div>
                                            <Send className="w-5 h-5 text-white relative z-10" />
                                        </div>
                                        <span className="font-semibold text-lg text-white">
                                            {isSubmitting ? 'Signing in...' : 'Sign In'}
                                        </span>
                                    </div>
                                </button>
                            </div>
                        )}

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white/80 text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        {/* Google Sign In Button */}
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            disabled={isSubmitting}
                            className="cursor-pointer w-full px-4 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                Sign in with Google
                            </span>
                        </button>

                        {/* Form Note */}
                        <p className="text-xs text-gray-500 mt-4 text-center">
                            By signing in, you agree to our{' '}
                            <button type="button" className="text-[#B03982] hover:underline">
                                Privacy Policy
                            </button>
                        </p>

                        {/* Sign Up Link */}
                        <div className="text-center mt-6">
                            <span className="text-sm text-gray-600">
                                Don't have an account?{' '}
                                <button
                                    type="button"
                                    className="bg-gradient-to-r from-[#B03982] to-[#733C86] bg-clip-text text-transparent font-medium hover:opacity-80 transition-opacity"
                                >
                                    Sign up
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>

            {/* Add custom keyframes for shimmer animation if not present in Tailwind */}
            <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
        </div>
    );
};

export default LoginPage;