# 🌍 LangShift.dev - Multi-Language Learning Platform

> A programming language conversion learning platform designed for developers, helping you master new languages through comparative learning

![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org)
[![Fumadocs](https://img.shields.io/badge/Fumadocs-15.6.1-purple.svg)](https://fumadocs.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)



## 📖 Project Overview

LangShift.dev is a programming language conversion learning platform specifically designed for developers. Through comparative analysis of syntax features and concept mapping between different programming languages, it helps you quickly understand the core concepts of new languages and apply them to real-world projects.

Our core philosophy is: **Understanding unknown languages through known languages**, making learning new programming languages simple and efficient.

## 🎯 Learning Objectives

- Master new programming languages quickly through language comparison
- Understand syntax features and design philosophies of different languages
- Build multi-language development capabilities
- Learn to migrate development thinking between different languages
- Master modern development tools and best practices



## 📚 Learning Module Overview

### JavaScript → Python (Completed)
- **Module 0**: Python Introduction and Learning Methods
- **Module 1**: Basic Syntax Comparison
- **Module 2**: Module System and Package Management
- **Module 3**: Object-Oriented and Functional Programming
- **Module 4**: Asynchronous Programming
- **Module 5**: Code Quality, Testing, and Type Annotations
- **Module 6**: Web Development
- **Module 7**: Data Processing and Automation
- **Module 8**: Comprehensive Practical Projects
- **Module 9**: Advanced Topics
- **Module 10**: Common Pitfalls and Solutions
- **Module 11**: Pythonic Code Style
- **Module 12**: Type Annotations Deep Dive

### JavaScript →Python
- **module-01**-py2js-introduction
- **module-02**-variables-and-operators
- **module-03**-functions-and-scope
- **module-04**-objects-arrays-map-set-json
- **module-05**-control-flow-and-error-handling
- **module-06**-asynchronous-programming
- **module-07**-modern-javascript
- **module-08**-objected-oriented-programming



## 🛠️ Technology Stack

### Platform Technology
- **Framework**: Next.js 15.3.5 (App Router)
- **Documentation**: Fumadocs 15.6.1 + MDX
- **Styling**: Tailwind CSS 4.0.9
- **Code Editor**: Monaco Editor 4.7.0 + Pyodide
- **Internationalization**: Support for English, Simplified Chinese, and Traditional Chinese
- **Search**: Orama 3.1.1 full-text search

### Language Runtimes
- **Python**: Pyodide (browser-side Python)

- **JavaScript**: V8 Engine

  

### Development Tools
- **Type Checking**: TypeScript 5.8.2
- **Code Quality**: ESLint 9.30.1, Prettier 3.5.3
- **Build Optimization**: Turbopack
- **Performance Monitoring**: Built-in performance monitoring components

### Special Features
- **Interactive Code Editor**: Supports multi-language syntax highlighting and real-time execution
- **Code Comparison Mode**: Side-by-side display of implementations in different languages
- **Performance Monitoring**: Real-time monitoring of code execution performance
- **Virtualized Editor**: Optimized rendering performance for large amounts of code
- **Scrollycoding**: Interactive code demonstrations
- **SEO Optimization**: Structured data and search engine optimization

## 🚀 Quick Start

### Requirements

- Node.js 18+
- pnpm (recommended package manager)
- Modern browser (supports WebAssembly)

### Installation Steps

1. **Clone the project**
   ```bash
   git clone https://github.com/erweixin/langshift.dev.git
   cd langshift.dev
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   
   ```bash
   pnpm dev
   ```
   
4. **Access the project**
   Open your browser and visit [http://localhost:8000](http://localhost:8000)

### Development Commands

```bash
# Development mode (using Turbopack)
pnpm dev

# Build production version
pnpm build

# Start production server
pnpm start

# Code linting
pnpm lint

# Type checking
pnpm type-check

# SEO checking
pnpm seo-check

# Build analysis
pnpm analyze

# After modifying mdx doc
npm run dev

# After adding new mdx doc file, to generate new .source/index.ts
npx fumadocs-mdx
```



## How to add contents

First start terminal app in root folder, and run `npm run dev`  .

Jump to folder such as  `http://localhost:8000/en/docs/py2js/module-01-py2js-introduction`

You can use sublime-text to add content to mdx docs in `contents/docs/py2js` folder, After editing the contents, hit Command + S to save, then in `http://localhost:8000/en/docs/py2js/module-01-py2js-introduction`, it can automatically refresh the content. 

### How to add code 

it's like this, in the above type in javascript code, and below type in Python code.

````python
<PythonEditor title="Hello World program" compare={true}>

```javascript !! js
function sayhello() {
  console.log("Hello JS"); 
};
sayhello();
```

```python !! py
def sayhello():
    print("Hello Python")
sayhello()
```
</PythonEditor>
````

Here is what it looks like in web browser.

![image-20250811213421164](https://picbox-1313243162.cos.ap-nanjing.myqcloud.com/typora/image-20250811213421164.png)



#### This is a test of `PythonEditor.tsx`.

````python
<PythonEditor title="Hello World program" compare={true}>

```javascript !! js
function sayhello() {
  console.log("Hello JS"); 
};
sayhello();
```

```python !! py
def sayhello():
    print("Hello Python")
sayhello()
```
</PythonEditor>
````

#### This is a test of universal editor.

````python
<UniversalEditor
  title="Universal Editor Example-Javascript"
  primaryLanguage="python"
  secondaryLanguage="javascript"
  compare={true}
  code={[
    { lang: 'python', value: 'print("Hello Python")' },
    { lang: 'javascript', value: 'console.log("Hello JS");' }
  ]}
  height={100}
  showOutput={true}
/>
````

#### This is a test of standalone Python editor.



````python
<UniversalEditor
  title="Python 代码编辑器"
  primaryLanguage="python"
  code={[{ lang: 'python', value: 'print("Hello, World!")' }]}
  height={60}
  showOutput={true}
/>
````

#### This is a test of standalone Python editor with multi lines of code.

````python
<UniversalEditor 
  title="Python 代码编辑器" 
  primaryLanguage="python" 
  code={[{ 
    lang: 'python', 
    value: `print("Hello, World!")
numbers = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in numbers]
print('Doubled numbers:', doubled)` 
  }]} 
  height={200} 
  showOutput={true} 
/>
````

#### if Python code contains function definition.

```py
def greet(name):
    print(f"Hello {name}")
    return f"Welcome, {name}"
  
greet("World")
```

Copy the above code into the value part below.



````python
<UniversalEditor 
  title="Python 代码编辑器" 
  primaryLanguage="python" 
  code={[{ 
    lang: 'python', 
    value: `def greet(name):
    print(f"Hello {name}")
    return f"Welcome, {name}"
greet("World")` 
  }]} 
  height={200} 
  showOutput={true} 
/>
````





This is a test of standalone Javascript editor.

````python
<UniversalEditor
  title="JavaScript 代码编辑器"
  primaryLanguage="javascript"
  code={[{ lang: 'javascript', value: 'console.log("Hello, World!");' }]}
  height={60}
  showOutput={true}
/>
````

Javascript with multi lines of code.first write code in a javascript file, then cope paste it in to the "value: `paste js code here`"

```python
<UniversalEditor
  title="JavaScript 代码编辑器"
  primaryLanguage="javascript"
  code={[{ 
    lang: 'javascript', 
    value: `function sayhello() {
  console.log("Hello"); 
};
sayhello();` 

  }]}
  height={200}
  showOutput={true}
/>
```



## 如何部署

自定义了 workflow 用于自动化部署。

尽量不要使用 GitHub自带的 next.js。
