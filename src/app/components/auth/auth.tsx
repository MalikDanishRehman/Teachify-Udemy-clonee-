'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signUp, signIn } from '@/lib/supabaseClient';

type AuthVariant = 'login' | 'signup';

interface AuthFormProps {
  variant: AuthVariant;
}

export default function Auth({ variant }: AuthFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSignup = variant === 'signup';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (isSignup) {
        await signUp(email, password, name);
        alert('Account created successfully! Please check your email to confirm your account.');
      } else {
        await signIn(email, password);
        alert('Logged in successfully!');
        // Redirect to dashboard or home page
        window.location.href = '/dashboard';
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      alert(`Error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/login.png')" }}
        aria-hidden
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-purple-900/60" aria-hidden />

      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-sm border border-white/40 rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {isSignup ? 'Create your account' : 'Welcome back'}
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          {isSignup ? 'Start your learning journey with us.' : 'Sign in to continue learning.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2.5 rounded-md text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? (isSignup ? 'Creating account…' : 'Signing in…') : (isSignup ? 'Create account' : 'Sign in')}
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-700">
          {isSignup ? (
            <span>
              Already have an account?{' '}
              <Link href="/login" className="text-purple-600 hover:underline">Sign in</Link>
            </span>
          ) : (
            <span>
              New to EduLearn?{' '}
              <Link href="/signup" className="text-purple-600 hover:underline">Create an account</Link>
            </span>
          )}
        </div>
      </div>
    </section>
  );
}


