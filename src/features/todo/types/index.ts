export const variants = {
  blue: 'bg-blue-600',
  red: 'bg-red-600',
  orange: 'bg-orange-600',
  yellow: 'bg-yellow-600',
  green: 'bg-green-600',
  lime: 'bg-lime-600',
  purple: 'bg-purple-600',
  slate: 'bg-slate-600',
  cyan: 'bg-cyan-600',
};

export const innerVariants = {
  blue: 'bg-blue-200',
  red: 'bg-red-200',
  orange: 'bg-orange-200',
  yellow: 'bg-yellow-200',
  green: 'bg-green-200',
  lime: 'bg-lime-200',
  purple: 'bg-purple-200',
  slate: 'bg-slate-200',
  cyan: 'bg-cyan-200',
};

export type Todo = {
  title: string;
  description: string;
  schedule: Date | string;
  variant: keyof typeof variants;
  labels: string[];
  comments: {
    date: Date | string;
    text: string;
  }[];
};
