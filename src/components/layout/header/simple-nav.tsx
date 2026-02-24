"use client"

import { useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

interface NavItem {
  label: string
  href?: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { label: "首页", href: "/" },
  {
    label: "产品",
    children: [
      { label: "Web 应用", href: "/web" },
      { label: "移动应用", href: "/mobile" },
      { label: "桌面应用", href: "/desktop" },
      { label: "其他", href: "/douyin/iframe" },
    ]
  },
  {
    label: "解决方案",
    children: [
      { label: "企业级应用", href: "/enterprise" },
      { label: "电商平台", href: "/ecommerce" },
      { label: "数据分析", href: "/analytics" },
      { label: "云服务", href: "/cloud" },
    ]
  },
  { label: "关于我们", href: "/about" },
  { label: "联系我们", href: "/contact" },
]

export function SimpleNav() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const openTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // 检测设备类型
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // 检查当前路径是否匹配导航项
  const isActive = (href?: string): boolean => {
    if (!href) return false
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const handleMouseEnter = (label: string) => {
    // 清除所有定时器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current)
    }

    // 桌面端启用悬停效果，添加轻微延迟避免误触
    if (!isMobile) {
      openTimeoutRef.current = setTimeout(() => {
        setOpenMenu(label)
      }, 150)
    }
  }

  const handleMouseLeave = (label: string) => {
    // 清除打开定时器
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current)
      openTimeoutRef.current = null
    }

    // 桌面端设置延迟关闭
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setOpenMenu(null)
      }, 200)
    }
  }

  const handleSubMenuMouseEnter = () => {
    // 鼠标进入子菜单时清除所有关闭定时器
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current)
      openTimeoutRef.current = null
    }
  }

  const handleSubMenuMouseLeave = () => {
    // 鼠标离开子菜单时关闭菜单
    if (!isMobile) {
      setOpenMenu(null)
    }
  }

  const handleClick = (label: string, href?: string) => {
    if (href) {
      // 如果有链接，直接跳转
      window.location.href = href
    } else {
      // 切换菜单开闭状态（移动端和桌面端都支持）
      setOpenMenu(openMenu === label ? null : label)
    }
  }

  const handleChildClick = (e: React.MouseEvent, href?: string) => {
    if (href) {
      e.preventDefault()
      window.location.href = href
      setOpenMenu(null) // 点击子菜单项后关闭菜单
    }
  }

  // 渲染导航项
  const renderNavItem = (item: NavItem) => {
    const isOpen = openMenu === item.label
    const isCurrentPage = isActive(item.href)
    
    if (item.href) {
      return (
        <a
          key={item.label}
          href={item.href}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            isCurrentPage 
              ? 'text-gray-900' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {item.label}
        </a>
      )
    }

    // 检查子菜单项是否包含当前页面
    const hasActiveChild = item.children?.some(child => isActive(child.href)) || false
    const isMenuActive = isOpen || hasActiveChild

    return (
      <div
        key={item.label}
        className="relative"
        onMouseEnter={() => handleMouseEnter(item.label)}
        onMouseLeave={() => handleMouseLeave(item.label)}
      >
        <button
          onClick={() => handleClick(item.label)}
          className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
            isMenuActive 
              ? 'text-gray-900' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {item.label}
          <ChevronDown 
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </button>

        {item.children && isOpen && (
          <div 
            className="absolute top-full left-0 mt-1 w-48 bg-white py-1 z-50 m-in-w-max rounded shadow-lg"
            onMouseEnter={handleSubMenuMouseEnter}
            onMouseLeave={handleSubMenuMouseLeave}
          >
            {item.children.map((child) => {
              const isChildActive = isActive(child.href)
              return (
                <a
                  key={child.label}
                  href={child.href}
                  onClick={(e) => handleChildClick(e, child.href)}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    isChildActive
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {child.label}
                </a>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <nav className="flex items-center space-x-1">
      {navItems.map(renderNavItem)}
    </nav>
  )
}