import { Trophy, Lightbulb, Users, Handshake } from "lucide-react";
import { StatItem } from "@/types/stats";

export const stats: StatItem[] = [
  {
    id: 1,
    icon: Trophy,
    number: "5+",
    label: "Years of Leadership Experience",
  },
  {
    id: 2,
    number: "10+",
    label: "Initiatives Led",
    icon: Lightbulb,
  },
  {
    id: 3,
    number: "10+",
    label: "Communities Impacted",
    icon: Users,
  },
  {
    id: 4,
    number: "20+",
    label: "Strategic Partnerships",
    icon: Handshake,
  },
];
