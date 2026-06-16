'use client';

import * as React from 'react';
import { Command } from 'cmdk';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from './dialog';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const commandItems = [
  { category: 'Academy', items: [
    { label: 'Buscar cursos', icon: '🎓' },
    { label: 'Meus cursos', icon: '📚' },
    { label: 'Certificados', icon: '🏆' },
  ]},
  { category: 'Comunidade', items: [
    { label: 'Minhas comunidades', icon: '👥' },
    { label: 'Criar comunidade', icon: '✨' },
    { label: 'Eventos', icon: '📅' },
  ]},
  { category: 'Ferramentas', items: [
    { label: 'NurseLab', icon: '🧪' },
    { label: 'NursePro', icon: '💊' },
    { label: 'Calculadoras', icon: '🔢' },
  ]},
  { category: 'Navegação', items: [
    { label: 'Dashboard', icon: '🏠' },
    { label: 'Explorar', icon: '🔍' },
    { label: 'Mapa de profissionais', icon: '🗺️' },
    { label: 'Configurações', icon: '⚙️' },
  ]},
];

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const [search, setSearch] = React.useState('');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 gap-0 max-w-[600px]">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" filter={(value, search) => {
          return 1;
        }}>
          <div className="flex items-center border-b border-[#1E1E1E] px-4">
            <Search className="mr-2 h-4 w-4 text-muted-foreground shrink-0" />
            <Command.Input
              placeholder="Buscar cursos, comunidades, ferramentas..."
              value={search}
              onValueChange={setSearch}
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-0 focus:ring-0"
            />
          </div>
          <Command.List className="max-h-[400px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              Nenhum resultado encontrado.
            </Command.Empty>
            {commandItems.map((group) => (
              <Command.Group key={group.category} heading={group.category} className="px-2">
                {group.items.map((item) => (
                  <Command.Item
                    key={item.label}
                    value={item.label}
                    onSelect={() => {
                      onOpenChange(false);
                    }}
                    className="flex items-center gap-3 rounded-lg px-2 py-3 cursor-pointer hover:bg-[#1E1E1E] data-[selected=true]:bg-[#1E1E1E]"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Command.Item>
                ))}
              </Command.Group>
            ))}
          </Command.List>
          <div className="border-t border-[#1E1E1E] p-2 text-xs text-muted-foreground flex gap-4 justify-center">
            <span className="flex items-center gap-1"><kbd className="rounded bg-[#1E1E1E] px-1.5 py-0.5 font-mono text-[10px]">↑↓</kbd> navegar</span>
            <span className="flex items-center gap-1"><kbd className="rounded bg-[#1E1E1E] px-1.5 py-0.5 font-mono text-[10px]">↵</kbd> selecionar</span>
            <span className="flex items-center gap-1"><kbd className="rounded bg-[#1E1E1E] px-1.5 py-0.5 font-mono text-[10px]">esc</kbd> fechar</span>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}