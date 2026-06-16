# NurseHub®

> Sistema Operacional da Nova Enfermagem Digital

## Stack

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** TailwindCSS + Shadcn UI
- **Animações:** Framer Motion
- **Backend:** Supabase (Auth, Database, Realtime, Storage)
- **Deploy:** Netlify
- **Analytics:** PostHog
- **Pagamentos:** Stripe

## Design System

- Dark Mode First
- Background: `#080808`
- Cards: `#111111`
- Border: `#1E1E1E`
- Radius: `16px`

## Repo Structure

```
/app              # Next.js App Router
/components       # Componentes reutilizáveis
/modules          # Módulos de feature
/lib              # Utilitários e configurações
/hooks            # Custom React Hooks
/services         # Integrações (Supabase, Stripe, etc.)
/types            # Definições TypeScript
/public           # Assets estáticos
```

## Getting Started

```bash
npm install
npm run dev
```

## Fases do Roadmap

- [x] FASE 1: Infraestrutura, Design System, Autenticação
- [ ] FASE 2: Explorar, Mapa, Gamificação, Feed, Events, News
- [ ] FASE 3: NurseLab, IA, Prompt Library, Analytics
- [ ] FASE 4: Integração NursePro, GENESYS, API Pública

---

**"A enfermagem ainda trabalha manualmente em 2026."**