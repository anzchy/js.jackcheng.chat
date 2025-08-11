// SEO 关键词映射配置
// 为不同页面和模块定义合适的关键词

export interface SEOKeywords {
  [key: string]: string[];
}

interface LanguageKeywords {
  [key: string]: string[];
}

interface CourseKeywords {
  [key: string]: LanguageKeywords;
}

interface ModuleKeywords {
  [key: string]: {
    [key: string]: LanguageKeywords;
  };
}

interface PageTypeKeywords {
  [key: string]: LanguageKeywords;
}

// 基础关键词（所有页面通用）- 优化版本
export const baseKeywords: LanguageKeywords = {
  'zh-cn': [
    // 高搜索量核心关键词
    '编程语言学习', '编程教程', '代码学习', '编程入门', '编程基础',
    '在线编程学习', '编程教育平台', '编程技能提升', '编程语言对比',
    // 长尾关键词
    '如何学习编程', '编程语言选择', '编程学习路径', '编程学习方法',
    '编程语言转换', '代码语法对比', '编程语言迁移', '开发者技能提升',
    // 热门搜索词
    '编程培训', '编程课程', '编程实战', '编程项目', '编程练习'
  ],
  'zh-tw': [
    // 高搜索量核心关键词
    '程式語言學習', '程式設計教程', '程式碼學習', '程式設計入門', '程式設計基礎',
    '線上程式設計學習', '程式設計教育平台', '程式設計技能提升', '程式語言對比',
    // 长尾关键词
    '如何學習程式設計', '程式語言選擇', '程式設計學習路徑', '程式設計學習方法',
    '程式語言轉換', '程式碼語法對比', '程式語言遷移', '開發者技能提升',
    // 热门搜索词
    '程式設計培訓', '程式設計課程', '程式設計實戰', '程式設計專案', '程式設計練習'
  ],
  'en': [
    // 高搜索量核心关键词
    'programming language learning', 'coding tutorials', 'learn to code', 'programming for beginners', 'coding basics',
    'online programming courses', 'programming education platform', 'coding skills development', 'programming language comparison',
    // 长尾关键词
    'how to learn programming', 'programming language selection', 'coding learning path', 'programming learning methods',
    'programming language conversion', 'code syntax comparison', 'programming language migration', 'developer skills improvement',
    // 热门搜索词
    'coding bootcamp', 'programming courses', 'coding projects', 'programming practice', 'learn programming online'
  ]
};

// 课程特定关键词 - 优化版本
export const courseKeywords: CourseKeywords = {
  'js2py': {
    'zh-cn': [
      // 高搜索量核心关键词
      'JavaScript转Python', 'JS转Python教程', 'Python编程教程', 'Python入门教程',
      'Python基础教程', 'Python学习', 'Python编程', 'Python开发',
      // 长尾关键词
      'JavaScript开发者学Python', '前端转Python', 'Web开发转Python', 'Python后端开发',
      'Python数据处理', 'Python自动化', 'Python爬虫', 'Python机器学习',
      // 热门搜索词
      'Python培训', 'Python课程', 'Python实战', 'Python项目', 'Python练习',
      'Python面试', 'Python就业', 'Python薪资', 'Python前景'
    ],
    'zh-tw': [
      // 高搜索量核心关键词
      'JavaScript轉Python', 'JS轉Python教程', 'Python程式設計教程', 'Python入門教程',
      'Python基礎教程', 'Python學習', 'Python程式設計', 'Python開發',
      // 长尾关键词
      'JavaScript開發者學Python', '前端轉Python', 'Web開發轉Python', 'Python後端開發',
      'Python資料處理', 'Python自動化', 'Python爬蟲', 'Python機器學習',
      // 热门搜索词
      'Python培訓', 'Python課程', 'Python實戰', 'Python專案', 'Python練習',
      'Python面試', 'Python就業', 'Python薪資', 'Python前景'
    ],
    'en': [
      // 高搜索量核心关键词
      'JavaScript to Python', 'JS to Python tutorial', 'Python programming tutorial', 'Python for beginners',
      'Python basics tutorial', 'learn Python', 'Python programming', 'Python development',
      // 长尾关键词
      'JavaScript developer learning Python', 'frontend to Python', 'Web development to Python', 'Python backend development',
      'Python data processing', 'Python automation', 'Python web scraping', 'Python machine learning',
      // 热门搜索词
      'Python training', 'Python courses', 'Python projects', 'Python practice', 'Python interview',
      'Python career', 'Python salary', 'Python job opportunities'
    ]
  }
};

// 模块特定关键词 - 优化版本
export const moduleKeywords: ModuleKeywords = {
  'js2py': {
    'module-00-python-introduction': {
      'zh-cn': [
        // 高搜索量核心关键词
        'Python介绍', 'Python环境搭建', 'Python安装教程', 'Python开发环境配置',
        'Python入门指南', 'Python学习路线', 'Python基础教程', 'Python开发工具',
        // 长尾关键词
        'JavaScript开发者Python入门', '前端转Python环境配置', 'Python IDE配置教程',
        'Python pip安装教程', 'Python venv虚拟环境', 'Python pyenv版本管理',
        // 热门搜索词
        'Python培训', 'Python课程', 'Python实战', 'Python项目', 'Python练习'
      ],
      'zh-tw': [
        // 高搜索量核心关键词
        'Python介紹', 'Python環境搭建', 'Python安裝教程', 'Python開發環境配置',
        'Python入門指南', 'Python學習路線', 'Python基礎教程', 'Python開發工具',
        // 长尾关键词
        'JavaScript開發者Python入門', '前端轉Python環境配置', 'Python IDE配置教程',
        'Python pip安裝教程', 'Python venv虛擬環境', 'Python pyenv版本管理',
        // 热门搜索词
        'Python培訓', 'Python課程', 'Python實戰', 'Python專案', 'Python練習'
      ],
      'en': [
        // 高搜索量核心关键词
        'Python introduction', 'Python environment setup', 'Python installation tutorial', 'Python development environment',
        'Python getting started', 'Python learning path', 'Python basics tutorial', 'Python development tools',
        // 长尾关键词
        'JavaScript developer Python introduction', 'frontend to Python environment setup', 'Python IDE configuration',
        'Python pip installation', 'Python venv virtual environment', 'Python pyenv version management',
        // 热门搜索词
        'Python training', 'Python courses', 'Python projects', 'Python practice', 'Python learning'
      ]
    },
    'module-01-syntax-comparison': {
      'zh-cn': [
        // 高搜索量核心关键词
        'Python语法对比', 'JavaScript转Python语法', 'Python变量声明', 'Python数据类型',
        'Python控制流', 'Python函数定义', 'Python语法映射', 'Python基础语法',
        // 长尾关键词
        'JavaScript开发者Python语法', '前端转Python语法对比', 'Python变量类型声明',
        'Python循环语句教程', 'Python条件语句教程', 'Python函数参数教程',
        // 热门搜索词
        'Python语法教程', 'Python基础教程', 'Python入门教程', 'Python学习', 'Python编程'
      ],
      'zh-tw': [
        // 高搜索量核心关键词
        'Python語法對比', 'JavaScript轉Python語法', 'Python變數宣告', 'Python資料類型',
        'Python控制流', 'Python函數定義', 'Python語法映射', 'Python基礎語法',
        // 长尾关键词
        'JavaScript開發者Python語法', '前端轉Python語法對比', 'Python變數類型宣告',
        'Python迴圈語句教程', 'Python條件語句教程', 'Python函數參數教程',
        // 热门搜索词
        'Python語法教程', 'Python基礎教程', 'Python入門教程', 'Python學習', 'Python程式設計'
      ],
      'en': [
        // 高搜索量核心关键词
        'Python syntax comparison', 'JavaScript to Python syntax', 'Python variable declaration', 'Python data types',
        'Python control flow', 'Python function definition', 'Python syntax mapping', 'Python basic syntax',
        // 长尾关键词
        'JavaScript developer Python syntax', 'frontend to Python syntax comparison', 'Python variable type declaration',
        'Python loop statements tutorial', 'Python conditional statements tutorial', 'Python function parameters tutorial',
        // 热门搜索词
        'Python syntax tutorial', 'Python basics tutorial', 'Python introduction tutorial', 'Python learning', 'Python programming'
      ]
    }
  }
};

// 页面类型关键词 - 优化版本
export const pageTypeKeywords: PageTypeKeywords = {
  'index': {
    'zh-cn': [
      // 高搜索量核心关键词
      '编程语言学习平台', '编程教程网站', '在线编程学习', '编程教育平台',
      '编程语言对比学习', '编程技能提升平台', '开发者学习平台', '编程培训平台',
      // 长尾关键词
      'JavaScript转Python学习', '前端开发者技能提升', '编程语言迁移学习',
      '编程语言转换教程', 'JavaScript Python对比学习', '编程语言对比教程',
      // 热门搜索词
      '编程学习网站', '编程教程平台', '编程培训网站', '编程教育网站', '编程学习平台'
    ],
    'zh-tw': [
      // 高搜索量核心关键词
      '程式語言學習平台', '程式設計教程網站', '線上程式設計學習', '程式設計教育平台',
      '程式語言對比學習', '程式設計技能提升平台', '開發者學習平台', '程式設計培訓平台',
      // 长尾关键词
      'JavaScript轉Python學習', '前端開發者技能提升', '程式語言遷移學習',
      '程式語言轉換教程', 'JavaScript Python對比學習', '程式語言對比教程',
      // 热门搜索词
      '程式設計學習網站', '程式設計教程平台', '程式設計培訓網站', '程式設計教育網站', '程式設計學習平台'
    ],
    'en': [
      // 高搜索量核心关键词
      'programming language learning platform', 'coding tutorial website', 'online programming learning', 'programming education platform',
      'programming language comparison learning', 'coding skills improvement platform', 'developer learning platform', 'programming training platform',
      // 长尾关键词
      'JavaScript to Python learning', 'frontend developer skills improvement', 'programming language migration learning',
      'programming language conversion tutorial', 'JavaScript Python comparison learning', 'programming language comparison tutorial',
      // 热门搜索词
      'programming learning website', 'coding tutorial platform', 'programming training website', 'programming education website', 'programming learning platform'
    ]
  },
  'intro': {
    'zh-cn': [
      // 高搜索量核心关键词
      '编程入门指南', '编程快速开始', '编程环境配置', '编程学习准备',
      '编程新手教程', '编程基础入门', '编程学习路径', '编程入门教程',
      // 长尾关键词
      'JavaScript开发者编程入门', '前端转Python入门', '编程语言选择指南',
      '编程学习环境搭建', '编程开发工具配置', '编程学习资源推荐',
      // 热门搜索词
      '编程入门教程', '编程基础教程', '编程学习教程', '编程新手指南', '编程入门学习'
    ],
    'zh-tw': [
      // 高搜索量核心关键词
      '程式設計入門指南', '程式設計快速開始', '程式設計環境配置', '程式設計學習準備',
      '程式設計新手教程', '程式設計基礎入門', '程式設計學習路徑', '程式設計入門教程',
      // 长尾关键词
      'JavaScript開發者程式設計入門', '前端轉Python入門', '程式語言選擇指南',
      '程式設計學習環境搭建', '程式設計開發工具配置', '程式設計學習資源推薦',
      // 热门搜索词
      '程式設計入門教程', '程式設計基礎教程', '程式設計學習教程', '程式設計新手指南', '程式設計入門學習'
    ],
    'en': [
      // 高搜索量核心关键词
      'programming getting started guide', 'programming quick start', 'programming environment setup', 'programming learning preparation',
      'programming beginner tutorial', 'programming basics introduction', 'programming learning path', 'programming introduction tutorial',
      // 长尾关键词
      'JavaScript developer programming introduction', 'frontend to Python introduction', 'programming language selection guide',
      'programming learning environment setup', 'programming development tools configuration', 'programming learning resources recommendation',
      // 热门搜索词
      'programming introduction tutorial', 'programming basics tutorial', 'programming learning tutorial', 'programming beginner guide', 'programming introduction learning'
    ]
  }
};

// 生成页面关键词的函数
export function generatePageKeywords(
  course?: string,
  moduleName?: string,
  lang: string = 'zh-cn',
  pageType?: string
): string[] {
  const keywords: string[] = [];
  
  // 添加基础关键词
  keywords.push(...(baseKeywords[lang] || baseKeywords['zh-cn']));
  
  // 添加页面类型关键词
  if (pageType && pageTypeKeywords[pageType]) {
    keywords.push(...(pageTypeKeywords[pageType][lang] || pageTypeKeywords[pageType]['zh-cn']));
  }
  
  // 添加课程特定关键词
  if (course && courseKeywords[course]) {
    keywords.push(...(courseKeywords[course][lang] || courseKeywords[course]['zh-cn']));
  }
  
  // 添加模块特定关键词
  if (course && moduleName && moduleKeywords[course] && moduleKeywords[course][moduleName]) {
    keywords.push(...(moduleKeywords[course][moduleName][lang] || moduleKeywords[course][moduleName]['zh-cn']));
  }
  
  // 去重并返回
  return [...new Set(keywords)];
}

// 从 slug 生成关键词的函数
export function generateKeywordsFromSlug(slug?: string[], lang: string = 'zh-cn'): string[] {
  if (!slug || slug.length === 0) {
    return generatePageKeywords(undefined, undefined, lang, 'index');
  }
  
  const [course, moduleName] = slug;
  return generatePageKeywords(course, moduleName, lang);
}