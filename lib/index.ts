import { TranslationKeys } from "@/messages";

export const getCourses = (t: TranslationKeys) => ([
  {
    name: 'js2py',
    title: t.home.courses.js2py.title,
    description: t.home.courses.js2py.description,
    features: t.home.courses.js2py.features,
    duration: t.home.courses.js2py.duration,
    level: t.home.courses.js2py.level,
    icon: '🐍',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    gradient: 'from-green-400/20 to-emerald-500/20',
  },

]);