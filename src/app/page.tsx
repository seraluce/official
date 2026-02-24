import Image from "next/image";
import { DropdownMenuDemo } from "@/components/examples/dropdown-demo";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-[1200px] mx-auto px-4 py-16">
        {/* 主要内容区域 */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            欢迎来到
            <span className="text-blue-600 dark:text-blue-400"> Next.js </span>
            应用
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            使用最新的 React 和 Next.js 技术构建的现代化 Web 应用程序，
            提供卓越的用户体验和开发效率。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg">
              开始使用
            </button>
            <button className="px-8 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg border border-gray-200">
              了解更多
            </button>
          </div>
        </div>
        
        {/* 下拉菜单示例展示 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Shadcn 下拉菜单示例
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto">
            以下是使用 shadcn/ui 风格构建的各种下拉菜单示例，展示了不同的使用场景和功能。
          </p>
          <DropdownMenuDemo />
        </div>
        
        {/* 特色功能卡片 */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 dark:text-blue-400 text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">快速开发</h3>
            <p className="text-gray-600 dark:text-gray-300">
              基于 Next.js 的强大功能，享受快速的开发体验和优秀的性能表现。
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-green-600 dark:text-green-400 text-3xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">响应式设计</h3>
            <p className="text-gray-600 dark:text-gray-300">
              完美适配各种设备屏幕，在手机、平板和桌面端都有出色的显示效果。
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-purple-600 dark:text-purple-400 text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">高性能</h3>
            <p className="text-gray-600 dark:text-gray-300">
              利用服务端渲染和静态生成技术，提供闪电般的加载速度。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}