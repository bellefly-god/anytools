export { zh } from './zh';
export { en } from './en';
export type { Locale } from './zh';

export type Language = 'zh' | 'en';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];
