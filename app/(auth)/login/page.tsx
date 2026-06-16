'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Crown, ArrowRight, Chrome } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="relative flex min-h-screen w-full">
      {/* Left: Form */}
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-[400px] space-y-8"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#10B981]">
              <Crown className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#0F4C81] to-[#10B981] bg-clip-text text-transparent">
              NurseHub®
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight">Bem-vindo de volta</h1>
            <p className="mt-2 text-sm text-[#888888]">
              Entre na sua conta para continuar sua jornada
            </p>
          </div>

          {/* Google Sign-in */}
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#1E1E1E] bg-[#111111] py-3 text-sm font-medium text-white transition-colors hover:bg-[#1A1A1A]">
            <Chrome className="h-4 w-4" />
            Continuar com Google
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#1E1E1E]" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-[#080808] px-4 text-[#888888]">ou entre com email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#888888]">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#888888]" />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-xl border border-[#1E1E1E] bg-[#111111] py-3 pl-10 pr-4 text-sm text-white placeholder:text-[#555] outline-none transition-colors focus:border-[#10B981]/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-[#888888]">Senha</label>
                <button type="button" className="text-xs text-[#10B981] hover:underline">
                  Esqueceu a senha?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#888888]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-[#1E1E1E] bg-[#111111] py-3 pl-10 pr-10 text-sm text-white placeholder:text-[#555] outline-none transition-colors focus:border-[#10B981]/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full gap-2 rounded-xl bg-[#10B981] py-6 text-sm font-semibold text-white hover:bg-[#10B981]/90 disabled:opacity-50"
            >
              {isLoading ? (
                <motion.div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
              ) : (
                <>
                  Entrar <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {/* Magic Link */}
          <button className="w-full text-center text-sm text-[#888888] hover:text-[#10B981] transition-colors">
            Entrar com Magic Link
          </button>

          {/* Register */}
          <p className="text-center text-sm text-[#888888]">
            Não tem uma conta?{' '}
            <Link href="/register" className="font-medium text-[#10B981] hover:underline">
              Criar conta gratuita
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right: Visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-[#0F4C81]/20 via-[#080808] to-[#10B981]/10 border-l border-[#1E1E1E]">
        <div className="max-w-md space-y-6 px-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold leading-tight">
              A nova era da{' '}
              <span className="text-gradient">enfermagem digital</span>
            </h2>
            <p className="text-[#888888]">
              Junte-se a milhares de enfermeiros que estão transformando sua carreira com tecnologia e conhecimento.
            </p>
          </div>
          <div className="space-y-3">
            {[
              'Academy com +200 cursos especializados',
              'Comunidades ativas de enfermagem',
              'Ferramentas clínicas na palma da mão',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10B981]/20">
                  <div className="h-2 w-2 rounded-full bg-[#10B981]" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
