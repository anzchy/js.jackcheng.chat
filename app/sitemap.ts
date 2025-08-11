import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://langshift.dev'
  const currentDate = new Date()
  
  // 基础页面
  const basePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/zh-cn`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/zh-tw`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.95,
    },
  ]

  // 语言转换课程配置
  const languageCourses = [
    {
      name: 'js2py',
      title: 'JavaScript 到 Python 转换学习',
      priority: 0.9,
      modules: [
        'module-00-python-introduction',
        'module-01-syntax-comparison',
        'module-02-module-system',
        'module-03-oop-functional',
        'module-04-async-programming',
        'module-05-quality-testing-typing',
        'module-06-web-development',
        'module-07-data-automation',
        'module-08-projects',
        'module-09-advanced-topics',
        'module-10-common-pitfalls',
        'module-11-pythonic-code',
        'module-12-type-annotations',
      ],
    },
    {
      name: 'py2js',
      title: 'Python 到 JavaScript 转换学习',
      priority: 0.9,
      modules: [
        'module-01-py2js-introduction',
        'module-02-variables-and-operators',
        'module-03-functions-and-scope',
        'module-04-objects-arrays-map-set-json',
        'module-05-control-flow-and-error-handling',
        'module-06-asynchronous-programming',
        'module-07-modern-javascript',
        'module-08-objected-oriented-programming',
      ],
    },

  ]

  // 课程首页
  const coursePages = languageCourses.flatMap(course => [
    // 英文版本
    {
      url: `${baseUrl}/en/docs/${course.name}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: course.priority,
    },
    // 简体中文版本
    {
      url: `${baseUrl}/zh-cn/docs/${course.name}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: course.priority,
    },
    // 繁体中文版本
    {
      url: `${baseUrl}/zh-tw/docs/${course.name}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: course.priority,
    },
  ])

  // 课程模块页面
  const modulePages = languageCourses.flatMap(course =>
    course.modules.flatMap(module => [
      // 英文版本
      {
        url: `${baseUrl}/en/docs/${course.name}/${module}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      // 简体中文版本
      {
        url: `${baseUrl}/zh-cn/docs/${course.name}/${module}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      // 繁体中文版本
      {
        url: `${baseUrl}/zh-tw/docs/${course.name}/${module}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
    ])
  )

  return [...basePages, ...coursePages, ...modulePages]
}