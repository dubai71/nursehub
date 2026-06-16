'use client';

import { motion } from 'framer-motion';

const categories = [
  { id: 'trending', label: '🔥 Trending', emoji: '🔥' },
  { id: 'hobbies', label: '🎨 Hobbies', emoji: '🎨' },
  { id: 'music', label: '🎸 Music', emoji: '🎸' },
  { id: 'money', label: '💰 Money', emoji: '💰' },
  { id: 'spirituality', label: '🙏 Spirituality', emoji: '🙏' },
  { id: 'tech', label: '💻 Tech', emoji: '💻' },
  { id: 'health', label: '🥕 Health', emoji: '🥕' },
  { id: 'sports', label: '⚽ Sports', emoji: '⚽' },
  { id: 'self-improvement', label: '📚 Self-improvement', emoji: '📚' },
  { id: 'relationships', label: '❤️ Relationships', emoji: '❤️' },
];

const communities = [
  { id: '1', name: 'AI Automation Society', members: '404.1k', price: 'Grátis', emoji: '🤖' },
  { id: '2', name: 'AI Video Bootcamp', members: '23.4k', price: '$9/mês', emoji: '🎬' },
  { id: '3', name: 'UTI Brasil', members: '12.4k', price: 'Grátis', emoji: '🏥' },
  { id: '4', name: 'Enfermagem Digital', members: '8.9k', price: 'Grátis', emoji: '🧠' },
  { id: '5', name: 'SAMU & APH', members: '6.7k', price: 'Grátis', emoji: '🚑' },
  { id: '6', name: 'Centro Cirúrgico', members: '5.4k', price: 'Grátis', emoji: '🔪' },
];

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState('trending');

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Explorar</h1>
        <p className="text-[#888888]">Descubra comunidades, criadores e conteúdo.</p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full h-12 rounded-xl border border-[#1E1E1E] bg-[#111111] pl-12 pr-4 text-white placeholder:text-[#888888] focus:outline-none focus:ring-2 focus:ring-[#0F4C81]"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#888888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              selectedCategory === cat.id
                ? 'bg-[#1E1E1E] text-white border border-[#2a2a2a]'
                : 'text-[#888888] hover:text-white'
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* Communities Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {communities.map((community, index) => (
          <motion.div
            key={community.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <a
              href={`/community/${community.id}`}
              className="group p-5 rounded-2xl border border-[#1E1E1E] bg-[#111111] hover:border-[#2a2a2a] hover:bg-[#111111]/80 transition-all block"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-[#1E1E1E] flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">
                  {community.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white mb-1 group-hover:text-[#10B981] transition-colors">
                    {community.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-[#888888]">{community.members} membros</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#1E1E1E] text-[#10B981]">{community.price}</span>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}