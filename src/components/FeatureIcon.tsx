import {
  Compass,
  Columns2,
  Heart,
  Languages,
  Lock,
  Percent,
  Quote,
  Ruler,
  Search,
  SlidersHorizontal,
  Sparkles,
  SunMoon,
  Target,
  Volume2,
  WifiOff,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { FeatureIcon as Name } from "@/data/projects";

const icons: Record<Name, LucideIcon> = {
  target: Target,
  percent: Percent,
  sliders: SlidersHorizontal,
  columns: Columns2,
  lock: Lock,
  "wifi-off": WifiOff,
  languages: Languages,
  compass: Compass,
  ruler: Ruler,
  volume: Volume2,
  "sun-moon": SunMoon,
  search: Search,
  heart: Heart,
  sparkles: Sparkles,
  quote: Quote,
  zap: Zap,
};

export default function FeatureIcon({
  name,
  size = 22,
}: {
  name: Name;
  size?: number;
}) {
  const Icon = icons[name];
  return <Icon size={size} aria-hidden />;
}
