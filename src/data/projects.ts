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
    id: "techroot-site",
    name: "Tech Root",
    description: "Hub oficial da organização. Página institucional com informações sobre projetos e identidade.",
    type: "Site",
    url: "#",
  },
];
