import Link from 'next/link';

export default function SimplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="py-20" id="courses">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Free Learning Course
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Start from the language you know, and quickly grasp the essence of a new one. All courses are completely free and no registration required to start learning.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Link className="group block" href="/en/docs/js2py">
              <div className="relative overflow-hidden bg-green-500/10 border-green-500/20 border backdrop-blur-sm rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                <div className="absolute top-4 left-4 z-20">
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                    <span className="text-xs font-bold text-white">Free Course</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-4xl mr-6 shadow-xl">
                      🐍
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        JavaScript → Python
                      </h3>
                      <div className="flex items-center gap-4 mt-3">
                        <span className="text-sm text-slate-400">8-12 weeks</span>
                        <span className="px-4 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 backdrop-blur-sm">
                          Intermediate
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Learn Python from a JavaScript developer perspective. Master syntax conversion and concept mapping. Includes web development, data processing, and automation projects.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-slate-300 border border-slate-700/50">
                      Syntax Mapping
                    </span>
                    <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-slate-300 border border-slate-700/50">
                      Web Development
                    </span>
                    <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-slate-300 border border-slate-700/50">
                      Data Processing
                    </span>
                    <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-slate-300 border border-slate-700/50">
                      Automation Scripts
                    </span>
                    <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-slate-300 border border-slate-700/50">
                      Type Annotations
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="mr-2 font-semibold text-lg">Start Learning for Free</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6 transform group-hover:translate-x-2 transition-transform" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      Enter Now
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="group block" href="/en/docs/py2js">
              <div className="relative overflow-hidden bg-yellow-500/10 border-yellow-500/20 border backdrop-blur-sm rounded-3xl p-8 hover:scale-105 transition-all duration-500">
                <div className="absolute top-4 left-4 z-20">
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
                    <span className="text-xs font-bold text-white">Free Course</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center text-4xl mr-6 shadow-xl">
                      🟨
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        Python → JavaScript
                      </h3>
                      <div className="flex items-center gap-4 mt-3">
                        <span className="text-sm text-slate-400">6-10 weeks</span>
                        <span className="px-4 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 backdrop-blur-sm">
                          Intermediate
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Learn JavaScript from a Python developer perspective. Master modern JS features and web development. Includes frontend frameworks, async programming, and full-stack projects.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-slate-300 border border-slate-700/50">
                      Syntax Mapping
                    </span>
                    <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-slate-300 border border-slate-700/50">
                      Frontend Development
                    </span>
                    <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-slate-300 border border-slate-700/50">
                      Async Programming
                    </span>
                    <span className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-slate-300 border border-slate-700/50">
                      Modern Frameworks
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="mr-2 font-semibold text-lg">Start Learning for Free</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6 transform group-hover:translate-x-2 transition-transform" aria-hidden="true">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                    <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      Enter Now
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}