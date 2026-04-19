# JV Tracker — Escopo do Projeto

## O que é

JV Tracker é um **tracker de vida pessoal focado em padrões**. Rastreia como você usa seu *tempo*, seu *dinheiro* e sua *energia* — e revela como os três se relacionam.

Começa como um timer. Evolui para um diário. Chega como um espelho do seu comportamento.

---

## O problema que resolve

Ferramentas como Toggl rastreiam tempo. Mobills rastreia dinheiro. Daylio rastreia humor. Mas nenhuma delas conversa entre si — e os padrões mais interessantes estão justamente nas interseções.

> *"Quando estou cansado e saio andando, gasto dinheiro."*
> *"Quando o mood está baixo, trabalho menos e gasto mais."*

Esses padrões só aparecem quando as três dimensões estão no mesmo lugar.

---

## Público-alvo

Primariamente: o próprio desenvolvedor. Secundariamente: qualquer pessoa que trabalhe de home office, estude de forma autogerida, ou queira entender melhor como usa seu tempo e dinheiro.

---

## As cinco camadas do produto

```
Camada 1 — Tempo      → Timer, sessões, categorias por modo
Camada 2 — Calendário → Planejamento e retrospectiva do dia
Camada 3 — Humor      → Mood registrado ao fim de cada atividade
Camada 4 — Finanças   → Gastos e deslocamentos com contexto emocional
Camada 5 — Padrões    → Correlações entre as quatro camadas acima
```

Cada camada funciona de forma independente. A Camada 5 é o produto completo — ela só existe porque as outras coexistem no mesmo app.

---

## Funcionalidades

### Timer & Sessões
- Timer com início, pausa e parada
- Cronômetro
- Sessão salva com: duração, modo, descrição, mood e micro-tasks
- Timer persiste mesmo ao fechar o navegador (estado no banco)
- Interoperação: iniciar no computador, parar no celular

### Modos
- Categorias de atividade: Work, Study, Hobby, etc.
- Cada modo tem cor, ícone e aparência customizável
- Filtros por modo em todas as visualizações

### Calendário
- **Retrospectivo:** blocos coloridos do que foi feito (Time Blocking Retrospectivo)
- **Prospectivo:** criar blocos futuros para planejar o dia
- Iniciar timer diretamente a partir de um bloco planejado
- Visualização **planejado vs. realizado** lado a lado
- Indicador de aderência ao plano (% do dia executado)
- Views diária, semanal e mensal
- Drag & drop nos blocos

### Heatmap
- Estilo gráfico de contribuições do GitHub
- Por modo, mostrando os dias mais ativos

### Mood Tracker
- Prompt ao finalizar o timer: "Como você se sentiu?" (escala 1–5 + emoji)
- Gráfico de humor vs. produtividade ao longo do tempo
- Dashboard com médias semanais

### Diário Integrado
- Editor Markdown por sessão
- Micro-tasks dentro de uma sessão (checklist)
- Busca por texto no histórico

### Controle Financeiro
- Lançamento rápido de gasto/receita com categoria
- Rastreador de deslocamento/commute (transporte, duração, custo)
- Gasto associado ao humor do momento
- Dashboard financeiro por categoria e período

### Padrões & Correlações *(fase avançada)*
- Humor médio por horário do dia
- Gasto por nível de humor
- Produtividade vs. gasto no mesmo dia
- Detecção de padrões simples e relatório semanal automático
- Linha do tempo unificada: tempo, humor e dinheiro no mesmo eixo

### Exportação
- CSV por modo e período
- PDF com resumo de período
- Bulk de Markdown (sessões como arquivos `.md`)

### Estética & Customização
- Identidade visual *cozy* e *aesthetic*
- Temas globais: Frutiger Aero, Dark, Academia, Cyberpunk, Hacker, etc.
- Aparência customizável por modo
- **Modo Zen:** tecla `F` → tela cheia com apenas o timer e fundo
- Atalhos de teclado configuráveis
- Slash Commands (`/start`, `/stop`, `/mode work`, etc.)

### Integrações
- **GitHub:** listar e associar sessões a PRs, commits e Issues
- **Áudio:** arquivos locais; Spotify / YT Music como extensão futura
- **Pomodoro:** modo opcional

### Mobile & Offline
- App web responsivo (funcionar bem no celular via navegador)
- PWA com suporte offline + sincronização ao voltar online
- Possível app React Native no futuro

### Conta & Privacidade
- Conta opcional (pode usar sem cadastro)
- Email opcional
- Roda 100% local (sem dependência de serviço externo)

---

## Stack técnica

| Camada | Tecnologia |
|---|---|
| Frontend | Next.js (App Router) |
| Backend/API | Next.js Route Handlers |
| Banco de dados | PostgreSQL 16 (Docker local) |
| ORM | Prisma |
| Autenticação | NextAuth.js |
| Estilo | TBD (Tailwind + biblioteca de componentes) |
| Calendário | `react-big-calendar` ou `@fullcalendar/react` |

O banco roda localmente via Docker. Quando/se houver necessidade de subir para produção, basta trocar a `DATABASE_URL` — sem refatoração.

---

## O que este projeto não é

- Não é um gerenciador de projetos (sem Kanban, sem times, sem sprints)
- Não é um app de investimentos ou finanças pessoais completo
- Não conecta com banco/cartão (sem Open Finance)
- Não tem colaboração em tempo real entre usuários

---

## Inspirações

- **Study Time with Rain** — timer com estética agradável
- **Notion / Obsidian** — estrutura livre, diário, markdown
- **Forest** — recompensa visual por foco
- **GitHub Contributions** — heatmap de atividade
- **Google Agenda / Cal.com** — calendário prospectivo
