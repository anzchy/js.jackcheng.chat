import { LanguageConfigMap } from './LearningPathSection.types';

// 语言配置映射
export const LANGUAGE_CONFIGS: LanguageConfigMap = {
  js2py: {
    icon: '🐍',
    gradient: 'from-green-500 to-emerald-500',
    name: 'Python',
    description: '从 JavaScript 到 Python 的转换学习'
  }
};

// 默认配置（当语言未在配置中时使用）
export const DEFAULT_LANGUAGE_CONFIG = {
  icon: '💻',
  gradient: 'from-purple-500 to-pink-500',
  name: 'Unknown',
  description: '未知语言转换'
};

// 获取语言配置的辅助函数
export const getLanguageConfig = (languageKey: string) => {
  return LANGUAGE_CONFIGS[languageKey] || DEFAULT_LANGUAGE_CONFIG;
};

// 获取所有支持的语言列表
export const getSupportedLanguages = () => {
  return Object.keys(LANGUAGE_CONFIGS);
};

// 检查语言是否支持
export const isLanguageSupported = (languageKey: string) => {
  return languageKey in LANGUAGE_CONFIGS;
};