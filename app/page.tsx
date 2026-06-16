'use client';

import { motion } from 'framer-motion';
import {
  BookOpen,
  Target,
  TrendingUp,
  Calendar,
  Newspaper,
  Wrench,
  Zap,
  Trophy,
  Clock,
  ArrowRight,
  Star,
  Flame,
  ChevronRight,
  Play,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.06 } } },
  item: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
};

const weeklyMission = {
  title: 'Concluir 3 módulos de Ventilação Mecânica',
  progress: 2,
  total: 3,
  xp: 500,
  daysLeft: 4,
};

const continueLearning = {
  course: 'Ventilação Mecânica Avançada',
  lesson: 'Modos de Ventilação - Aula 5',
  progress: 68,
  thumbnail: '/courses/ventilacao.jpg',
  duration: '12 min restantes',
};

const recentActivities = [
  { id: 1, user: 'Ana Costa', action: 'completou', target: 'Módulo de SSVV', time: '12 min', avatar: 'AC' },
  { id: 2, user: 'Carlos Lima', action: 'publicou em', target: 'UTI Adulto Brasil', time: '45 min', avatar: 'CL' },
  { id: 3, user: 'Juliana Reis', action: 'conquistou badge', target: 'Estudante Dedicado', time: '1 hora', avatar: 'JR' },
  { id: 4, user: 'Pedro Santos', action: 'iniciou', target: 'Cuidados Paliativos', time: '2 horas', avatar: 'PS' },
  { id: 5, user: 'Mariana Alves', action: 'compartilhou', target: 'Escala de Braden', time: '3 horas', avatar: 'MA' },
];

const calendarEvents = [
  { time: '09:00', title: 'Live: Sepsis Protocol', type: 'live' },
  { time: '14:00', title: 'Estudo de Caso', type: 'study' },
  { time: '16:30', title: 'Mentoria Coletiva', type: 'mentor' },
];

const newsItems = [
  { title: 'Novas diretrizes COREM 2025', category: 'Regulamentação', time: '2 horas' },
  { title: 'Pesquisa: Burnout em UTI', category: 'Pesquisa', time: '5 horas' },
];

const recentTools = [
  { name: 'Calc. Gotejamento', icon: '💧', uses: 24 },
  { name: 'Escore de Apgar', icon: '👶', uses: 18 },
  { name: 'Escala de Braden', icon: '📋', uses: 15 },
];

export default function DashboardPage() {
  const user = {
    name: 'Maria',
    level: 23,
    xp: 12450,
    xpToNext: 15000,
    rank: '#47',
    streak: 12,
  };

  const xpPercent = Math.round((user.xp / user.xpToNext) * 100);
  const missionPercent = Math.round((weeklyMission.progress / weeklyMission.total) * 100);

  return (
    <motion.div
      variants={stagger.container}
      initial="initial"
      animate="animate"
      className="space-y-6"
    >
      {/* Greeting */}
      <motion.div variants={stagger.item}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Bom dia, <span className="text-gradient">{user.name}</span>
            </h1>
            <p className="mt-1 text-sm text-[#888888]">
              Aqui está o resumo da sua jornada de aprendizado
            </p>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <div className="flex items-center gap-1.5 rounded-xl bg-[#111111] border border-[#1E1E1E] px-3 py-2">
              <Flame className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-semibold">{user.streak} dias</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Continue Learning */}
          <motion.div variants={stagger.item}>
            <Card className="overflow-hidden border-[#1E1E1E] bg-[#111111] rounded-2xl">
              <div className="relative">
                <div className="flex items-center gap-4 p-5">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F4C81] to-[#10B981]/60">
                    <BookOpen className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <Badge variant="success" className="text-[10px]">Continue de onde parou</Badge>
                    <h3 className="font-semibold text-white">{continueLearning.course}</h3>
                    <p className="text-sm text-[#888888]">{continueLearning.lesson}</p>
                  </div>
                  <Button className="gap-2 bg-[#10B981] hover:bg-[#10B981]/90 text-white rounded-xl">
                    <Play className="h-4 w-4 fill-white" />
                    Continuar
                  </Button>
                </div>
                <div className="h-1 bg-[#1E1E1E]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#0F4C81] to-[#10B981]"
                    initial={{ width: 0 }}
                    animate={{ width: `${continueLearning.progress}%` }}
                    transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Weekly Mission + XP Card */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Weekly Mission */}
            <motion.div variants={stagger.item}>
              <Card className="border-[#1E1E1E] bg-[#111111] rounded-2xl">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Target className="h-5 w-5 text-[#10B981]" />
                      Missão Semanal
                    </CardTitle>
                    <Badge variant="outline" className="text-[10px] border-orange-500/50 text-orange-400">
                      {weeklyMission.daysLeft} dias
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-[#888888]">{weeklyMission.title}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#888888]">{weeklyMission.progress}/{weeklyMission.total} módulos</span>
                      <span className="font-semibold text-[#10B981]">+{weeklyMission.xp} XP</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#1E1E1E]">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#0F4C81] to-[#10B981]"
                        initial={{ width: 0 }}
                        animate={{ width: `${missionPercent}%` }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* XP Card */}
            <motion.div variants={stagger.item}>
              <Card className="border-[#1E1E1E] bg-[#111111] rounded-2xl">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    Seu Progresso
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold">Level {user.level}</span>
                    <Badge variant="success" className="mb-1 text-[10px]">{user.rank} no ranking</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#888888]">{user.xp.toLocaleString('pt-BR')} XP</span>
                      <span className="text-[#888888]">{user.xpToNext.toLocaleString('pt-BR')} XP</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#1E1E1E]">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#0F4C81] to-[#10B981]"
                        initial={{ width: 0 }}
                        animate={{ width: `${xpPercent}%` }}
                        transition={{ duration: 1, delay: 0.9 }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Activity Feed */}
          <motion.div variants={stagger.item}>
            <Card className="border-[#1E1E1E] bg-[#111111] rounded-2xl">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <TrendingUp className="h-5 w-5 text-[#0F4C81]" />
                    Atividade Recente
                  </CardTitle>
                  <button className="text-xs text-[#10B981] hover:underline">Ver tudo</button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, i) => (
                    <div key={activity.id} className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 border border-[#1E1E1E]">
                        <AvatarFallback className="bg-[#0F4C81]/20 text-[10px] text-[#10B981]">
                          {activity.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-medium text-white">{activity.user}</span>{' '}
                          <span className="text-[#888888]">{activity.action}</span>{' '}
                          <span className="font-medium text-[#10B981]">{activity.target}</span>
                        </p>
                      </div>
                      <span className="text-xs whitespace-nowrap text-[#888888]">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Calendar */}
          <motion.div variants={stagger.item}>
            <Card className="border-[#1E1E1E] bg-[#111111] rounded-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Calendar className="h-5 w-5 text-[#0F4C81]" />
                  Agenda de Hoje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {calendarEvents.map((event, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl bg-[#080808] p-3 border border-[#1E1E1E]">
                      <span className="font-mono text-xs text-[#888888]">{event.time}</span>
                      <div className={cn(
                        'h-2 w-2 rounded-full',
                        event.type === 'live' && 'bg-red-500',
                        event.type === 'study' && 'bg-[#10B981]',
                        event.type === 'mentor' && 'bg-[#0F4C81]',
                      )} />
                      <span className="text-sm">{event.title}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* News */}
          <motion.div variants={stagger.item}>
            <Card className="border-[#1E1E1E] bg-[#111111] rounded-2xl">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Newspaper className="h-5 w-5 text-[#0F4C81]" />
                    News
                  </CardTitle>
                  <button className="text-xs text-[#10B981] hover:underline">Ver mais</button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {newsItems.map((news, i) => (
                    <div key={i} className="space-y-1 rounded-xl bg-[#080808] p-3 border border-[#1E1E1E] hover:border-[#10B981]/30 transition-colors cursor-pointer">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[9px] px-1.5 py-0">{news.category}</Badge>
                        <span className="text-[10px] text-[#888888]">{news.time}</span>
                      </div>
                      <p className="text-sm font-medium line-clamp-2">{news.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Tools */}
          <motion.div variants={stagger.item}>
            <Card className="border-[#1E1E1E] bg-[#111111] rounded-2xl">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Wrench className="h-5 w-5 text-[#0F4C81]" />
                  Ferramentas Recentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {recentTools.map((tool, i) => (
                    <button
                      key={i}
                      className="flex w-full items-center gap-3 rounded-xl bg-[#080808] p-3 border border-[#1E1E1E] hover:border-[#10B981]/30 transition-all text-left"
                    >
                      <span className="text-lg">{tool.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{tool.name}</p>
                        <p className="text-[10px] text-[#888888]">{tool.uses} usos</p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-[#888888]" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
