"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function NavigationHeader() {
  return (
    <header className="flex items-center justify-between p-3.5 bg-white shadow-sm border-b">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        {/* 左侧：Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="w-8 h-8" />
          <h1 className="text-xl font-semibold">Next.js</h1>
        </div>

        {/* 中间：导航菜单 */}
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
              <NavigationMenuTrigger>产品</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/products"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          我们的产品
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          了解我们提供的各种解决方案和服务
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/web" title="Web 应用">
                    现代化的网页应用程序开发服务
                  </ListItem>
                  <ListItem href="/mobile" title="移动应用">
                    iOS 和 Android 原生应用开发
                  </ListItem>
                  <ListItem href="/desktop" title="桌面应用">
                    跨平台桌面应用程序解决方案
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>解决方案</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem title="企业级应用" href="/enterprise">
                    为企业量身定制的软件解决方案
                  </ListItem>
                  <ListItem title="电商平台" href="/ecommerce">
                    功能完善的在线商城系统
                  </ListItem>
                  <ListItem title="数据分析" href="/analytics">
                    数据可视化和商业智能工具
                  </ListItem>
                  <ListItem title="云服务" href="/cloud">
                    可扩展的云端基础设施服务
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/about" 
                className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              >
                关于我们
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/contact" 
                className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
              >
                联系我们
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* 右侧：按钮 */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            登录
          </Button>
          <Button size="sm" variant="default">
            注册
          </Button>
        </div>
      </div>
    </header>
  )
}