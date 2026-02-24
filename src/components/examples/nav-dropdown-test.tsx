"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function NavDropdownTest() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">导航菜单下拉测试</h3>
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink 
              href="/" 
              className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              首页
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
              产品
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white border border-gray-200 rounded-md shadow-lg p-4">
              <div className="grid gap-3 w-[400px]">
                <a 
                  href="/products" 
                  className="block p-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium">我们的产品</div>
                  <p className="text-sm text-gray-600">了解我们提供的各种解决方案和服务</p>
                </a>
                <a 
                  href="/web" 
                  className="block p-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium">Web 应用</div>
                  <p className="text-sm text-gray-600">现代化的网页应用程序开发服务</p>
                </a>
                <a 
                  href="/mobile" 
                  className="block p-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium">移动应用</div>
                  <p className="text-sm text-gray-600">iOS 和 Android 原生应用开发</p>
                </a>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
              解决方案
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white border border-gray-200 rounded-md shadow-lg p-4">
              <div className="grid grid-cols-2 gap-3 w-[400px]">
                <a 
                  href="/enterprise" 
                  className="block p-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium">企业级应用</div>
                  <p className="text-sm text-gray-600">为企业量身定制的软件解决方案</p>
                </a>
                <a 
                  href="/ecommerce" 
                  className="block p-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium">电商平台</div>
                  <p className="text-sm text-gray-600">功能完善的在线商城系统</p>
                </a>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}