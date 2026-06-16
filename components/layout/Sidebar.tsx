'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  Compass,
  FlaskConical,
  Wrench,
  Newspaper,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Crown,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface SidebarProps {
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { id: 'academy', label: 'Academy', icon: GraduationCap, href: '/academy' },
  { id: 'community', label: 'Comunidade', icon: Users, href: '/community' },
  { id: 'explore', label: 'Explorar', icon: Compass, href: '/explore' },
  { id: 'nurselab', label: 'NurseLab', icon: FlaskConical, href: '/nurselab' },
  { id: 'tools', label: 'Ferramentas', icon: Wrench, href: '/tools' },
  { id: 'news', label: 'News', icon: Newspaper, href: '/news' },
  { id: 'profile', label: 'Perfil', icon: User, href: '/profile' },
  { id: 'settings', label: 'Configurações', icon: Settings, href: '/settings' },
];

const user = {
  name: 'Maria Silva',
  role: 'Enfermeira Sênior',
  xp: 12450,
  level: 23,
  avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face',
};

export function Sidebar({ collapsed = false, onCollapsedChange }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  const handleToggle = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onCollapsedChange?.(newState);
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 72 : 260 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed left-0 top-0 z-40 flex h-full flex-col border-r border-[#1E1E1E] bg-[#111111]"
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-[#1E1E1E] px-4">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#0F4C81] to-[#10B981]">
                <Crown className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-[#0F4C81] to-[#10B981] bg-clip-text text-transparent">
                NurseHub
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={handleToggle}
          className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-[#1E1E1E] text-gray-400 transition-colors"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveItem(item.id)}
                  className={cn(
                    'group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all',
                    isActive
                      ? 'bg-gradient-to-r from-[#0F4C81]/20 to-transparent text-white'
                      : 'text-gray-400 hover:bg-[#1E1E1E] hover:text-white'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 h-6 w-1 rounded-r-full bg-gradient-to-b from-[#0F4C81] to-[#10B981]"
                    />
                  )}
                  <Icon className={cn('h-5 w-5 flex-shrink-0', isActive && 'text-[#10B981]')} />
                  <AnimatePresence mode="wait">
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="border-t border-[#1E1E1E] p-3">
        <div className={cn('flex items-center gap-3', isCollapsed && 'justify-center')}>
          <Avatar className="h-10 w-10 ring-2 ring-[#10B981]/30">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 overflow-hidden"
              >
                <p className="truncate text-sm font-medium text-white">{user.name}</p>
                <p className="truncate text-xs text-gray-400">Level {user.level}</p>
              </motion.div>
            )}
          </AnimatePresence>
          {!isCollapsed && (
            <button className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-[#1E1E1E] text-gray-400 transition-colors">
              <LogOut className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </motion.aside>
  );
}