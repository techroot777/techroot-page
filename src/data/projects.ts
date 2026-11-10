export type FeatureIcon =
  | "target"
  | "percent"
  | "sliders"
  | "columns"
  | "lock"
  | "wifi-off"
  | "languages"
  | "compass"
  | "ruler"
  | "volume"
  | "sun-moon"
  | "search"
  | "heart"
  | "sparkles"
  | "quote"
  | "zap";

export interface Feature {
  icon: FeatureIcon;
  title: string;
  text: string;
}

export interface Step {
  title: string;
  text: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  category: string;
  accent: string;
  chips: string[];
  playUrl: string;
  privacyUrl: string;
  /** Capturas em /public/apps/<slug>/shot-N.webp */
  shots: number;
  /** Proporção das capturas (largura / altura). */
  shotRatio: number;
  hasFeature?: boolean;
  features: Feature[];
  steps: Step[];
  faq: Faq[];
}

export const projects: Project[] = [
  {
    slug: "img-compressor",
    name: "Compressor de Fotos",
    tagline: "Reduza fotos para 50, 100 ou 200 KB em um toque.",
    summary:
      "Escolha o tamanho que o formulário pede e receba a foto o mais perto possível dele, sem passar do limite.",
    category: "Ferramentas",
    accent: "#2563EB",
    chips: ["Offline", "Sem cadastro", "Grátis"],
    playUrl:
      "https://play.google.com/store/apps/details?id=com.techroot.img_compressor",
    privacyUrl: "https://techroot777.github.io/techroot-legal/img-compressor/pt/",
    shots: 5,
    shotRatio: 9 / 16,
    hasFeature: true,
    features: [
      {
        icon: "target",
        title: "Tamanho exato",
        text: "Peça 50 KB, 100 KB, 200 KB, 500 KB ou 1 MB e chegue o mais perto possível sem passar do limite.",
      },
      {
        icon: "percent",
        title: "Modo porcentagem",
        text: "Deslize para reduzir o arquivo de 10% a 95%.",
      },
      {
        icon: "sliders",
        title: "Modo personalizado",
        text: "Escolha o lado maior em pixels e a qualidade do jeito que preferir.",
      },
      {
        icon: "columns",
        title: "Antes e depois",
        text: "Compare o original e o resultado lado a lado antes de salvar.",
      },
      {
        icon: "lock",
        title: "Privado e offline",
        text: "As fotos são processadas no seu celular e nunca são enviadas. Sem conta e sem cadastro.",
      },
      {
        icon: "languages",
        title: "Português, inglês e espanhol",
        text: "O app segue o idioma do seu celular.",
      },
    ],
    steps: [
      { title: "Escolha uma foto", text: "Abra a galeria e selecione a imagem." },
      {
        title: "Defina a meta",
        text: "Um tamanho em KB ou MB, uma porcentagem ou ajustes personalizados.",
      },
      {
        title: "Comprima",
        text: "Toque em Comprimir e depois em Salvar ou Compartilhar.",
      },
    ],
    faq: [
      {
        q: "As minhas fotos são enviadas para algum servidor?",
        a: "Não. Toda a compressão acontece no seu aparelho e as fotos nunca saem dele.",
      },
      {
        q: "Preciso criar conta?",
        a: "Não. O app não pede login nem cadastro.",
      },
      {
        q: "Funciona sem internet?",
        a: "Sim. A compressão é totalmente offline. A internet só é usada para exibir anúncios.",
      },
      {
        q: "Para que tipo de uso serve?",
        a: "Formulários de governo e escola, vagas de emprego, fotos de documento, anúncios em marketplaces, anexos de e-mail e aplicativos de mensagem com limite de tamanho.",
      },
      {
        q: "O app é pago?",
        a: "É gratuito e mantido por anúncios.",
      },
    ],
  },
  {
    slug: "sensors",
    name: "Nível e Bússola",
    tagline: "Nível de bolha, bússola e decibelímetro em um só app.",
    summary:
      "Três ferramentas leves que usam os sensores do celular: pendure um quadro reto, ache o norte e meça o barulho de uma sala.",
    category: "Ferramentas",
    accent: "#22D3EE",
    chips: ["Offline", "Sem cadastro", "Grátis"],
    playUrl: "https://play.google.com/store/apps/details?id=com.techroot.sensors",
    privacyUrl: "https://techroot777.github.io/techroot-legal/sensors/pt/",
    shots: 5,
    shotRatio: 9 / 16,
    features: [
      {
        icon: "ruler",
        title: "Nível de bolha",
        text: "Funciona com o celular deitado ou em pé, mostra a inclinação em graus ou porcentagem e vibra ao chegar no nível.",
      },
      {
        icon: "compass",
        title: "Bússola",
        text: "Compensação de inclinação, rumo em graus e direção. Avisa quando metais ou ímãs atrapalham a leitura.",
      },
      {
        icon: "volume",
        title: "Decibelímetro",
        text: "Mede o som em dB(A) ou dB, com gráfico dos últimos 60 segundos, mínimo, média e máximo.",
      },
      {
        icon: "zap",
        title: "Alerta de volume alto",
        text: "Avisa quando o som chega a 85 dB, nível que pode prejudicar a audição.",
      },
      {
        icon: "sun-moon",
        title: "Tema claro e escuro",
        text: "Escolha um tema ou siga o do celular. A tela pode ficar ligada enquanto você mede.",
      },
      {
        icon: "wifi-off",
        title: "Offline e sem cadastro",
        text: "Funciona sem internet e sem conta.",
      },
    ],
    steps: [
      { title: "Escolha a ferramenta", text: "Alterne entre Nível, Bússola e Som." },
      {
        title: "Calibre se precisar",
        text: "Para o nível, calibre numa superfície que você sabe que está plana.",
      },
      { title: "Meça", text: "Leia o resultado na tela, com cores e gráficos." },
    ],
    faq: [
      {
        q: "O microfone grava ou envia o que ouve?",
        a: "Não. O microfone só mede o volume, e apenas enquanto a aba Som está aberta. Nada é gravado nem enviado.",
      },
      {
        q: "O decibelímetro é preciso?",
        a: "Microfones de celular não são calibrados, então o nível é uma estimativa. Dá para ajustar nas configurações para coincidir com um medidor de referência.",
      },
      {
        q: "A bússola mostra o norte verdadeiro?",
        a: "Ela mostra o norte magnético.",
      },
      {
        q: "O app é pago?",
        a: "É gratuito e mantido por anúncios.",
      },
    ],
  },
  {
    slug: "otaquotes",
    name: "OtaQuotes",
    tagline: "Mais de 123 mil frases de anime na palma da mão.",
    summary:
      "Citações e frases marcantes de Naruto, One Piece, Attack on Titan, Dragon Ball, Demon Slayer e muitos outros.",
    category: "Entretenimento",
    accent: "#F97316",
    chips: ["+123 mil frases", "Grátis"],
    playUrl: "https://play.google.com/store/apps/details?id=com.techroot.otaquotes",
    privacyUrl: "https://sites.google.com/view/otaquotes-privacy-policy",
    shots: 2,
    shotRatio: 266 / 592,
    features: [
      {
        icon: "quote",
        title: "Milhares de frases",
        text: "Uma coleção selecionada de citações e mensagens motivacionais de animes populares.",
      },
      {
        icon: "search",
        title: "Navegue por anime ou personagem",
        text: "Filtre pelo título ou pelo personagem e encontre seus momentos favoritos.",
      },
      {
        icon: "heart",
        title: "Salve suas favoritas",
        text: "Guarde as frases de que mais gosta e releia quando quiser.",
      },
      {
        icon: "sparkles",
        title: "Interface limpa e rápida",
        text: "Feito para ler e compartilhar sem distração.",
      },
    ],
    steps: [
      { title: "Escolha um anime", text: "Ou um personagem de que você goste." },
      { title: "Leia as frases", text: "Role pela coleção e descubra novas citações." },
      { title: "Salve as favoritas", text: "Volte a elas sempre que quiser." },
    ],
    faq: [
      {
        q: "Preciso de internet?",
        a: "Sim. As imagens e o conteúdo atualizado ficam hospedados online.",
      },
      {
        q: "O app coleta dados pessoais?",
        a: "Não. Ele usa o Google AdMob para exibir anúncios e o ID de publicidade pode ser usado para anúncios relevantes.",
      },
      {
        q: "O app é pago?",
        a: "É gratuito e mantido por anúncios.",
      },
    ],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
