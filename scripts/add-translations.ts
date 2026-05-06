// 此脚本用于为 tools.ts 添加英文翻译
// 运行: npx ts-node scripts/add-translations.ts

import { toolTranslations } from '../src/data/translations';
import * as fs from 'fs';
import * as path from 'path';

const toolsPath = path.join(__dirname, '../src/data/tools.ts');
let content = fs.readFileSync(toolsPath, 'utf-8');

// 为每个工具添加 descriptionEn
Object.entries(toolTranslations).forEach(([toolId, translation]) => {
  // 查找工具定义
  const regex = new RegExp(
    `(id: '${toolId}',[\\s\\S]*?description: '[^']+',)\\n`,
    'g'
  );
  
  if (regex.test(content)) {
    // 检查是否已经有 descriptionEn
    const checkRegex = new RegExp(
      `id: '${toolId}',[\\s\\S]*?descriptionEn:`
    );
    
    if (!checkRegex.test(content)) {
      // 添加 descriptionEn
      content = content.replace(regex, `$1\n    descriptionEn: '${translation.descriptionEn}',\n`);
      console.log(`✅ Added translation for: ${toolId}`);
    } else {
      console.log(`⏭️  Already has translation: ${toolId}`);
    }
  } else {
    console.log(`❌ Tool not found: ${toolId}`);
  }
});

// 写回文件
fs.writeFileSync(toolsPath, content);
console.log('\n✅ Translations added successfully!');
