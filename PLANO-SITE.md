# Plano: reescrita do site Tech Root 777

Estado de partida: site de uma página, ~364 linhas, cards de texto com o mesmo ícone genérico, só em português, sem detalhe dos projetos. Stack atual: Next 15, Tailwind 4, framer-motion, lucide-react, next-themes.

## 1. Direção visual
- Portfólio moderno de projetos pessoais de hobby (sem prestação de serviço), no padrão de Linear, Vercel e páginas de app da Apple.
- Hero forte, grid "bento" de apps, mockups de celular com screenshots reais, bastante respiro.
- Cor por app: cada app usa seu accent (Compressor `#2563EB`, Sensors `#22D3EE`, OtaQuotes e próximos) em brilho de fundo, badges e botões.
- Tema claro e escuro, escuro como padrão. Tipografia Inter, a mesma dos apps.
- Movimento suave ao rolar, hover com leve inclinação, carrossel de screenshots. Respeitar `prefers-reduced-motion`.

## 2. Estrutura de páginas
| Rota | Conteúdo |
|---|---|
| `/` | Home completa |
| `/apps/[slug]` | Detalhe de cada app: img-compressor, sensors, otaquotes |
| `/privacy` | Índice das políticas, apontando para `techroot-legal` |
| `/contact` | Contato (e-mail público) |

## 3. Seções da home
1. **Hero:** frase curta, subtítulo, botões "Ver apps" e "Contato", 2 ou 3 celulares flutuando com screenshots reais.
2. **Faixa de métricas:** nº de apps, idiomas (EN, PT, ES), "sem login, offline, privado". Só números reais.
3. **Apps em destaque (bento grid):** card grande por app com ícone, nome, linha de valor, chips (Offline, Sem cadastro, Grátis), screenshot e botão da Play Store. Cards "Em breve" opcionais.
4. **Como trabalhamos:** 3 ou 4 princípios com ícones (privacidade primeiro, offline, leve, 3 idiomas).
5. **Stack:** logos pequenos de Flutter, Dart e AdMob.
6. **Contato:** e-mail e GitHub.
7. **Footer:** links legais, idiomas, ano.

## 4. Página de cada app
- **Topo:** ícone grande, nome, tagline, botão "Google Play", selos "Grátis" e "Contém anúncios".
- **Galeria:** screenshots em mockup de celular, trocando por idioma.
- **Recursos:** grid de 4 a 6 itens com ícone, vindos das descrições das fichas da loja.
- **Como funciona:** 3 passos.
- **FAQ:** 4 ou 5 itens (ex.: "As fotos são enviadas para algum servidor?").
- **Rodapé do app:** política de privacidade e contato.
- **SEO:** título, descrição e Open Graph próprios; feature graphic como imagem de compartilhamento.

## 5. Dados e conteúdo
- Fonte única: `src/data/projects.ts` com `slug`, `accent`, `icon`, `tagline`, `features[]`, `screenshots[]`, `faq[]`, `playUrl`, `privacyUrl`, `status` (live ou soon).
- Textos reaproveitados de `app-factory/apps/<app>/store/{en-US,pt-BR,es-419}`.
- Imagens: ícone, feature graphic e screenshots copiados de `app-factory/apps/*/store/` para `public/apps/<slug>/` em WebP, via `next/image`.
- OtaQuotes: ícone e screenshots não estão no `app-factory`; vêm do Play Console ou da loja.

## 6. Idiomas
EN, PT e ES com rotas `/en`, `/pt`, `/es` e seletor no header (`next-intl`). Montar na estrutura desde o início, porque adaptar depois custa mais.

## 7. Técnico
- Manter Next 15, Tailwind 4, framer-motion, lucide, next-themes.
- Adicionar `next-intl`, `sitemap.ts`, `robots.ts`, metadados Open Graph.
- **Preservar `public/app-ads.txt`**: o AdMob depende dele (`google.com, pub-8279118074987695, DIRECT, f08c47fec0942fa0`).
- Deploy: conectar o repositório na Vercel (hoje os deploys não saem do push), com preview por branch.
- Verificação: `next build`, lint, Lighthouse (meta >= 95), conferência no navegador em celular e desktop, nos dois temas.

## 8. Fases
1. **Fundação:** modelo de dados, tema, layout, header e footer, i18n.
2. **Home:** hero com mockups, bento de apps, princípios, contato.
3. **Páginas de app:** template e os 3 apps.
4. **Polimento:** animações, SEO, acessibilidade, performance.
5. **Deploy:** ligar a Vercel ao Git, verificar `app-ads.txt`, anotar no `NOTAS-PUBLICACAO.md` do `app-factory`.

Trabalho em branch; só vai para `main` com aprovação.

## 9. Decisões em aberto
1. Idiomas: EN, PT e ES (recomendado) ou só português?
2. OtaQuotes: ícone e screenshots fornecidos, ou card simples até lá?
3. Cards "Em breve" dos próximos apps da fábrica: mostrar ou só os publicados?
4. Identidade: manter o nome "Tech Root 777" e o logo `#777`, ou renovar?
