import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NoFound() { 
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <Image
            src="/404.svg"
            alt="logo"
            width={100}
            height={100}
          />
          <h1 className="text-3xl font-bold">404</h1>
          <p className="text-gray-500">Page not found</p>
        </div>
      </div>
    )
}
