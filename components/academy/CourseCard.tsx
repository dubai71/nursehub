'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Play, Clock, Users, Star } from 'lucide-react';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    instructor: { name: string; avatar: string };
    thumbnail: string;
    category: string;
    progress: number;
    duration: number;
    rating: number;
    enrolledCount: number;
    price: number;
    isFree: boolean;
  };
}

export function CourseCard({ course }: CourseCardProps) {
  const formatDuration = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  return (
    <Card className="group overflow-hidden border-[#1E1E1E] bg-[#111111] hover:border-[#2a2a2a] transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {course.progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <Progress value={course.progress} className="h-1.5" />
          </div>
        )}
        {course.isFree && (
          <Badge className="absolute top-3 right-3 bg-emerald-500/90 text-white hover:bg-emerald-500">
            Grátis
          </Badge>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" className="rounded-full w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30">
            <Play className="h-5 w-5 fill-white text-white" />
          </Button>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <Badge variant="secondary" className="text-xs">{course.category}</Badge>
        <h3 className="font-semibold leading-tight line-clamp-2 group-hover:text-accent transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground">{course.instructor.name}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {formatDuration(course.duration)}</span>
          <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-yellow-500 text-yellow-500" /> {course.rating}</span>
          <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {course.enrolledCount.toLocaleString()}</span>
        </div>
        {course.price > 0 && (
          <p className="font-bold text-lg">R$ {course.price.toFixed(2).replace('.', ',')}</p>
        )}
      </div>
    </Card>
  );
}