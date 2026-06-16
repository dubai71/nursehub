'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Bell,
  ChevronDown,
  Menu,
  LogOut,
  Settings,
  User,
  HelpCircle,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  onMenuClick?: () => void;
  onSearchClick?: () => void;
}

const user = {
  name: 'Maria Silva',
  role: 'Enfermeira Sênior',
  avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face',
};

const notifications = [
  { id: 1, title: 'Novo certificado disponível', time: '2 min', unread: true },
  { id: 2, title: 'Maria completou o módulo', time: '1 hora', unread: true },
  { id: 3, title: 'Nova missão disponível', time: '3 horas', unread: false },
];

export function Header({ onMenuClick, onSearchClick }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="fixed right-0 top-0 z-30 flex h-14 items-center justify-between border-b border-[#1E1E1E] bg-[#080808] px-4 lg:px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-[#1E1E1E] text-gray-400 transition-colors lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Breadcrumb */}
        <nav className="hidden items-center gap-2 text-sm md:flex">
          <span className="text-gray-500">NurseHub</span>
          <span className="text-gray-600">/</span>
          <span className="text-white">Dashboard</span>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        {/* Search */}
        <button
          onClick={onSearchClick}
          className="flex h-9 items-center gap-2 rounded-lg border border-[#1E1E1E] bg-[#111111] px-3 text-sm text-gray-400 hover:border-[#10B981]/50 transition-colors"
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">Buscar...</span>
          <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-[#1E1E1E] bg-[#080808] px-1.5 font-mono text-xs">
            <span className="text-xs">⌘</span>K
          </kbd>
        </button>

        {/* Notifications */}
        <DropdownMenu open={showNotifications} onOpenChange={setShowNotifications}>
          <DropdownMenuTrigger asChild>
            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg hover:bg-[#1E1E1E] text-gray-400 transition-colors">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#10B981] text-[10px] font-bold text-white"
                >
                  {unreadCount}
                </motion.span>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 bg-[#111111] border-[#1E1E1E]">
            <DropdownMenuLabel className="text-white">Notificações</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#1E1E1E]" />
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={cn(
                  'flex cursor-pointer flex-col items-start gap-1 p-3 hover:bg-[#1E1E1E]',
                  notification.unread && 'bg-[#0F4C81]/10'
                )}
              >
                <div className="flex w-full items-center justify-between">
                  <span className="text-sm font-medium text-white">{notification.title}</span>
                  {notification.unread && (
                    <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                  )}
                </div>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="bg-[#1E1E1E]" />
            <DropdownMenuItem className="cursor-pointer justify-center text-[#10B981] hover:bg-[#1E1E1E]">
              Ver todas
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex h-9 items-center gap-2 rounded-lg px-2 hover:bg-[#1E1E1E] transition-colors">
              <Avatar className="h-7 w-7">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-[#111111] border-[#1E1E1E]">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#1E1E1E]" />
            <DropdownMenuItem className="cursor-pointer hover:bg-[#1E1E1E]">
              <User className="mr-2 h-4 w-4" />
              Perfil
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-[#1E1E1E]">
              <Settings className="mr-2 h-4 w-4" />
              Configurações
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-[#1E1E1E]">
              <HelpCircle className="mr-2 h-4 w-4" />
              Ajuda
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#1E1E1E]" />
            <DropdownMenuItem className="cursor-pointer text-red-500 hover:bg-[#1E1E1E]">
              <LogOut className="mr-2 h-4 w-4" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}