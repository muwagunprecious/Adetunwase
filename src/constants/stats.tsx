import { Trophy, Lightbulb, Users, Palette } from "lucide-react";
import { StatItem } from "@/types/stats";

export const stats: StatItem[] = [
  {
    id: 1,
    icon: Trophy,
    number: "4",
    label: "Guinness World Records",
  },
  {
    id: 2,
    number: "2017",
    label: "Slum Art Foundation Founded",
    icon: Lightbulb,
  },
  {
    id: 3,
    number: "Lagos",
    label: "Community Roots",
    icon: Users,
  },
  {
    id: 4,
    number: "Art",
    label: "Education and Innovation",
    icon: Palette,
  },
];
