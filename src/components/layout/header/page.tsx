"use client";

import { Button } from "@/components/ui/button";
import { SimpleNav } from "./simple-nav";
import { Bell, Smartphone, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function NavigationHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-3 bg-white border-b border-gray-200">
      <div className="w-full max-w-300 mx-auto flex items-center justify-between">
        {/* 左侧：Logo */}
        <div className="flex items-center gap-3">
          <div className="h-8 rounded flex items-center justify-center">
            <Link href="/">
              <Image src="/next.svg" alt="logo" width={100} height={20} />
            </Link>
          </div>

          <SimpleNav />
        </div>

        {/* 右侧：按钮 */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              aria-label="搜索"
              size="sm"
              variant="outline"
              className="h-8 w-8 p-0 rounded-full"
            >
              <Link
                href="/search"
                className="w-full h-full flex items-center justify-center"
              >
                <Search />
              </Link>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-8 w-8 p-0 rounded-full"
            >
              <Smartphone />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="h-8 w-8 p-0 rounded-full"
            >
              <Bell />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-gray-900"
            >
              登录
            </Button>
            <Button size="sm" variant="default">
              注册
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
