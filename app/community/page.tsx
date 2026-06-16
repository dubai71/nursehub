'use client';

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const communities = [
  {
    id: 'ai-automation-society',
    name: 'AI Automation Society',
    description: 'Aprenda a criar soluções com IA e ganhar com isso, independentemente do seu background.',
    members: 404100,
    price: 'Gratuito',
    avatar: '🤖',
  },
  {
    id: 'ai-video-bootcamp',
    name: 'AI Video Bootcamp',
    description: 'Domine a criação de vídeos e imagens com IA e use essas habilidades para ganhar dinheiro.',
    members: 23400,
    price: '$9/mês',
    avatar: '🎬',
  },
  {
    id: 'nursehub-uti',
    name: 'UTI Brasil',
    description: 'Comunidade para profissionais de UTI. Compartilhamento de protocolos, casos clínicos e conhecimento.',
    members: 12450,
    price: 'Gratuito',
    avatar: '🏥',
  },
  {
    id: 'nursehub-ia',
    name: 'Enfermagem Digital',
    description: 'Inovação e tecnologia na enfermagem. IA, automação e ferramentas digitais para sua rotina.',
    members: 8920,
    price: 'Gratuito',
    avatar: '🧠',
  },
];

export default function CommunityPage() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Comunidades</h1>
        <p className="text-[#888888]">Descubra e participe de comunidades da área de saúde.</p>
      </div>

      {/* Search */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#888888]" />
          <input
            type="text"
            placeholder="Pesquisar comunidades..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 rounded-xl border border-[#1E1E1E] bg-[#111111] pl-12 pr-4 text-white placeholder:text-[#888888] focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />
        </div>
        <button className="flex items-center gap-2 px-4 h-12 rounded-xl border border-[#1E1E1E] bg-[#111111] text-white hover:border-[#2a2a2a] transition-colors">
          <Filter className="h-4 w-4" />
          Filtrar
        </button>
      </div>

      {/* Featured Communities */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Em alta</h2>
        <div className="grid gap-4">
          {communities.slice(0, 2).map((community) => (
            <a
              key={community.id}
              href={`/community/${community.id}`}
              className="group flex items-center gap-5 p-5 rounded-2xl border border-[#1E1E1E] bg-[#111111] hover:border-[#2a2a2a] hover:bg-[#111111]/80 transition-all"
            >
              <div className="h-16 w-16 rounded-2xl bg-[#1E1E1E] flex items-center justify-center text-3xl shrink-0 group-hover:scale-105 transition-transform">
                {community.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white mb-1 group-hover:text-[#10B981] transition-colors">
                  {community.name}
                </h3>
                <p className="text-sm text-[#888888] line-clamp-2 mb-2">{community.description}</p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-[#888888]">{community.members.toLocaleString()} membros</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#1E1E1E] text-[#10B981]">{community.price}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* All Communities */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Todas as comunidades</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
            <a
              key={community.id}
              href={`/community/${community.id}`}
              className="group p-5 rounded-2xl border border-[#1E1E1E] bg-[#111111] hover:border-[#2a2a2a] hover:bg-[#111111]/80 transition-all"
            >
              <div className="text-3xl mb-3">{community.avatar}</div>
              <h3 className="font-semibold text-white mb-1 group-hover:text-[#10B981] transition-colors">
                {community.name}
              </h3>
              <p className="text-sm text-[#888888] line-clamp-2 mb-3">{community.description}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#888888]">{community.members.toLocaleString()} membros</span>
                <span className="px-2 py-0.5 rounded-full bg-[#1E1E1E] text-[#10B981]">{community.price}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}