'use client';

import { useState } from 'react';
import { Search, SlidersHorizontal, Grid, List } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { CourseCard } from '@/components/academy/CourseCard';
import { SPECIALTIES } from '@/types';

const mockCourses = [
  {
    id: '1',
    title: 'Ventilação Mecânica - Do Básico ao Avançado',
    instructor: { name: 'Dr. Carlos Silva', avatar: '' },
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600',
    category: 'UTI',
    progress: 65,
    duration: 480,
    rating: 4.9,
    enrolledCount: 2340,
    price: 0,
    isFree: true,
  },
  {
    id: '2',
    title: 'Socorro Avançado de Vida em Pediatria (PALS)',
    instructor: { name: 'Dra. Ana Oliveira', avatar: '' },
    thumbnail: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600',
    category: 'Urgência',
    progress: 30,
    duration: 360,
    rating: 4.8,
    enrolledCount: 1890,
    price: 97,
    isFree: false,
  },
  {
    id: '3',
    title: 'Gestão de Plantão: Liderança em Saúde',
    instructor: { name: 'Me. Roberto Santos', avatar: '' },
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
    category: 'Gestão',
    progress: 0,
    duration: 240,
    rating: 4.7,
    enrolledCount: 956,
    price: 47,
    isFree: false,
  },
  {
    id: '4',
    title: 'IA para Enfermagem: Automatize sua Rotina',
    instructor: { name: 'Arthur Moreira', avatar: '' },
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600',
    category: 'IA',
    progress: 100,
    duration: 180,
    rating: 5.0,
    enrolledCount: 3200,
    price: 0,
    isFree: true,
  },
];

export default function AcademyPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['Todos', ...SPECIALTIES.slice(0, 8)];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Academy</h1>
        <p className="text-muted-foreground">Aprenda com os melhores especialistas da área de saúde.</p>
      </div>

      {/* Search & Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar cursos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-11"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
          <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as 'grid' | 'list')}>
            <TabsList>
              <TabsTrigger value="grid"><Grid className="h-4 w-4" /></TabsTrigger>
              <TabsTrigger value="list"><List className="h-4 w-4" /></TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(cat)}
            className="whitespace-nowrap rounded-full"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Course Grid */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {mockCourses.map((course) => (
            <Card key={course.id} className="p-4 flex gap-4">
              <img src={course.thumbnail} alt={course.title} className="w-48 h-28 rounded-xl object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{course.instructor.name}</p>
                <Badge variant="secondary">{course.category}</Badge>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}