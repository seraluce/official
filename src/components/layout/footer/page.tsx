export default function Footer() {
  return (
    <footer className=" border-t py-8 dark:bg-gray-900 dark:border-gray-700">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2024 Next.js App. 保留所有权利.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              隐私政策
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              使用条款
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              联系我们
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}