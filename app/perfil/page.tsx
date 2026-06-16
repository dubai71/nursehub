'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const mockUser = {
  name: 'Arthur Moreira',
  email: 'arthur@nursehub.com',
  bio: 'Técnico de enfermagem | Socorrista | Founder NursePro® | Automatizando a rotina da enfermagem',
  city: 'São Paulo',
  state: 'SP',
  specialty: 'Urgência',
  xp: 7850,
  level: 5,
  levelName: 'Arquiteto',
  badges: ['Primópusuário', 'Course Creator', 'Top Contributor', 'Early Adopter'],
  instagram: '@arthurmoreira',
  linkedin: 'arthurmoreira',
  github: 'arthurmoreira',
};

export default function PerfilPage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="border-[#1E1E1E] bg-[#111111] overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-[#0F4C81] to-[#10B981]" />
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-12">
            <Avatar className="w-24 h-24 border-4 border-[#111111]">
              <AvatarFallback className="bg-[#0F4C81] text-2xl font-bold">{mockUser.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-bold">{mockUser.name}</h1>
              <p className="text-muted-foreground">{mockUser.specialty} • {mockUser.city}, {mockUser.state}</p>
            </div>
            <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'Salvar' : 'Editar perfil'}
            </Button>
          </div>
        </div>
      </Card>

      {/* XP & Level */}
      <Card className="border-[#1E1E1E] bg-[#111111] p-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <Badge variant="secondary" className="mb-1">Nível {mockUser.level} - {mockUser.levelName}</Badge>
            <p className="text-2xl font-bold">{mockUser.xp.toLocaleString()} XP</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Próximo nível</p>
            <p className="text-sm">1.200 XP para Visionário</p>
          </div>
        </div>
        <div className="h-2 bg-[#1E1E1E] rounded-full overflow-hidden">
          <div className="h-full w-[85%] bg-gradient-to-r from-[#0F4C81] to-[#10B981]" />
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="cursos">
        <TabsList>
          <TabsTrigger value="cursos">Cursos</TabsTrigger>
          <TabsTrigger value="comunidades">Comunidades</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="conquistas">Conquistas</TabsTrigger>
        </TabsList>
        <TabsContent value="cursos" className="mt-4">
          <p className="text-muted-foreground">Seus cursos aparecerão aqui.</p>
        </TabsContent>
        <TabsContent value="comunidades" className="mt-4">
          <p className="text-muted-foreground">Suas comunidades aparecerão aqui.</p>
        </TabsContent>
        <TabsContent value="posts" className="mt-4">
          <p className="text-muted-foreground">Seus posts aparecerão aqui.</p>
        </TabsContent>
        <TabsContent value="conquistas" className="mt-4">
          <div className="flex flex-wrap gap-3">
            {mockUser.badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#1E1E1E] bg-[#111111]">
                <span>🏆</span>
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}