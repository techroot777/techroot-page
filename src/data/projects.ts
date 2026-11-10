export interface Project {
  id: string;
  name: string;
  description: string;
  type: "App" | "Site";
  url: string;
}

export const projects: Project[] = [
  {
    id: "otaquotes",
    name: "OtaQuotes",
    description: "App de frases de anime com interface elegante e coleção em constante crescimento.",
    type: "App",
    url: "https://play.google.com/store/apps/details?id=com.techroot.otaquotes",
  },
  {
    id: "img-compressor",
    name: "Image Compressor",
    description: "Reduza fotos para 50, 100 ou 200 KB em um toque. Funciona offline e as fotos nunca saem do seu celular.",
    type: "App",
    url: "https://play.google.com/store/apps/details?id=com.techroot.img_compressor",
  },
  {
    id: "sensors",
    name: "Level, Compass & Sound Meter",
    description: "Nível de bolha, bússola e medidor de decibéis em um só app, usando os sensores do celular.",
    type: "App",
    url: "https://play.google.com/store/apps/details?id=com.techroot.sensors",
  },
  {
    id: "techroot-site",
    name: "Tech Root",
    description: "Hub oficial da organização. Página institucional com informações sobre projetos e identidade.",
    type: "Site",
    url: "#",
  },
];
