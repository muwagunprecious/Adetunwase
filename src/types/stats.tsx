export type StatItem = {
  id: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  number: string;
  label: string;
};
