'use client';

import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  LayoutDashboard,
  GraduationCap,
  Users,
  Compass,
  FlaskConical,
  Newspaper,
  User,
  Sparkles,
  ArrowRight,
  X,
  FileText,
  Trophy,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const suggestions = [
  {
    category: 'Cursos',
    items: [
      { id: 'c1', title: 'Fundamentos de Ventilação Mecânica', icon: GraduationCap },
      { id: 'c2', title: 'Cuidados Paliativos Avançados', icon: GraduationCap },
      { id: 'c3', title: 'Gestão de Equipes de Enfermagem', icon: GraduationCap },
    ],
  },
  {
    category: 'Comunidades',
    items: [
      { id: 'cm1', title: 'UTI Adulto Brasil', icon: Users },
      { id: 'cm2', title: 'Enfermagem Pediátrica', icon: Users },
    ],
  },
  {
    category: 'Ferramentas',
    items: [
      { id: 't1', title: 'Calculadora de Gotejamento', icon: FlaskConical },
      { id: 't2', title: 'Escore de Apgar', icon: FlaskConical },
      { id: 't3', title: 'Escalas de Dor', icon: FlaskConical },
    ],
  },
  {
    category: 'IA',
    items: [
      { id: 'ai1', title: ' Assistente de Estudos', icon: Sparkles },
      { id: 'ai2', title: 'Gerador de Casos Clínicos', icon: Sparkles },
    ],
  },
  {
    category: 'News',
    items: [
      { id: 'n1', title: 'Novas diretrizes OMS 2024', icon: Newspaper },
      { id: 'n2', title: 'Pesquisa sobre burnout', icon: Newspaper },
    ],
  },
];

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === 'Escape') {
        onOpenChange(false);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) {
      setSearch('');
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-[20%] z-50 w-full max-w-xl -translate-x-1/2"
          >
            <Command
              className={cn(
                'relative overflow-hidden rounded-2xl border border-[#1E1E1E] bg-[#111111]',
                'shadow-2xl shadow-black/50'
              )}
            >
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-[#1E1E1E] px-4 py-3">
                <Search className="h-5 w-5 text-gray-500" />
                <Command.Input
                  value={search}
                  onValueChange={setSearch}
                  placeholder="Buscar cursos, comunidades, ferramentas..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 outline-none"
                />
                <button
                  onClick={() => onOpenChange(false)}
                  className="flex h-6 w-6 items-center justify-center rounded-md bg-[#1E1E1E] text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>

              {/* Results */}
              <Command.List className="max-h-[400px] overflow-y-auto p-2">
                <Command.Empty className="py-8 text-center text-sm text-gray-500">
                  Nenhum resultado encontrado.
                </Command.Empty>

                {suggestions.map((group) => (
                  <Command.Group
                    key={group.category}
                    heading={
                      <div className="flex items-center gap-2 px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {group.category === 'Cursos' && <GraduationCap className="h-3 w-3" />}
                        {group.category === 'Comunidades' && <Users className="h-3 w-3" />}
                        {group.category === 'Ferramentas' && <FlaskConical className="h-3 w-3" />}
                        {group.category === 'IA' && <Sparkles className="h-3 w-3" />}
                        {group.category === 'News' && <Newspaper className="h-3 w-3" />}
                        {group.category}
                      </div>
                    }
                    className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold"
                  >
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Command.Item
                          key={item.id}
                          value={item.title}
                          onSelect={() => {
                            onOpenChange(false);
                          }}
                          className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-[#1E1E1E] data-[selected=true]:bg-[#0F4C81]/20"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1E1E1E]">
                            <Icon className="h-4 w-4 text-[#10B981]" />
                          </div>
                          <span className="flex-1 text-sm text-white">{item.title}</span>
                          <ArrowRight className="h-4 w-4 text-gray-600" />
                        </Command.Item>
                      );
                    })}
                  </Command.Group>
                ))}
              </Command.List>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-[#1E1E1E] px-4 py-2 text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="rounded bg-[#1E1E1E] px-1.5 py-0.5 font-mono">↑↓</kbd>
                    navegar
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="rounded bg-[#1E1E1E] px-1.5 py-0.5 font-mono">↵</kbd>
                    selecionar
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="rounded bg-[#1E1E1E] px-1.5 py-0.5 font-mono">esc</kbd>
                    fechar
                  </span>
                </div>
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}