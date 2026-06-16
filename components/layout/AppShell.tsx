'use client';

import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { CommandPalette } from './CommandPalette';

export function AppShell({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <Sidebar
        collapsed={sidebarCollapsed}
        onCollapsedChange={setSidebarCollapsed}
      />
      <Header onSearchClick={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
      <main
        className="min-h-screen transition-all duration-300"
        style={{
          marginLeft: sidebarCollapsed ? 72 : 260,
        }}
      >
        <div className="pt-14">
          <div className="mx-auto max-w-[1400px] px-6 py-6">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
