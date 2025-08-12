export const defaultStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "LangShift.dev",
  "description": "编程语言转换学习平台",
  "url": "https://langshift.jackcheng.chat",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://langshift.jackcheng.chat/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LangShift.dev",
  "url": "https://langshift.jackcheng.chat",
  "logo": "https://langshift.jackcheng.chat/logo.png",
  "description": "编程语言转换学习平台",
  "sameAs": [
    "https://github.com/langshift-dev",
    "https://twitter.com/langshift_dev"
  ]
};

export const js2pyCourseData = {
  name: "JavaScript to Python Tutorial",
  description: "Learn Python from a JavaScript developer perspective, focusing on syntax conversion and concept mapping.",
  url: "https://langshift.jackcheng.chat/docs/js2py",
  provider: "LangShift.dev",
  courseMode: "online",
  educationalLevel: "Intermediate"
};

export const courseStructuredData = (courseData: {
  name: string
  description: string
  url: string
  provider: string
  courseMode: string
  educationalLevel: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": courseData.name,
  "description": courseData.description,
  "provider": {
    "@type": "Organization",
    "name": courseData.provider,
    "sameAs": "https://langshift.jackcheng.chat"
  },
  "courseMode": courseData.courseMode,
  "educationalLevel": courseData.educationalLevel,
  "url": courseData.url,
  // 添加 hasCourseInstance 字段
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": courseData.courseMode,
    "inLanguage": "zh-CN",
    "availableLanguage": ["zh-CN", "zh-TW", "en"],
    "startDate": new Date().toISOString(),
    "endDate": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 一年后
    "location": {
      "@type": "VirtualLocation",
      "url": courseData.url
    }
  },
  // 添加 offers 字段
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY",
    "availability": "https://schema.org/InStock",
    "validFrom": new Date().toISOString(),
    "validThrough": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(), // 一年后
    "url": courseData.url,
    "seller": {
      "@type": "Organization",
      "name": courseData.provider,
      "sameAs": "https://langshift.jackcheng.chat"
    }
  }
});