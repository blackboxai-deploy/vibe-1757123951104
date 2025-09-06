"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface SidebarProps {
  onClose?: () => void;
}

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    current: true,
  },
  {
    name: "Projects",
    href: "/projects",
    current: false,
    badge: "3",
  },
  {
    name: "Virtual Catalog",
    href: "/catalog",
    current: false,
  },
  {
    name: "3D Visualizer",
    href: "/visualizer",
    current: false,
  },
  {
    name: "AI Assistant",
    href: "/ai-assistant",
    current: false,
    badge: "New",
  },
];

const categories = [
  {
    name: "Paint & Colors",
    href: "/catalog/paint",
  },
  {
    name: "Tiles & Flooring",
    href: "/catalog/tiles",
  },
  {
    name: "Furniture",
    href: "/catalog/furniture",
  },
  {
    name: "Lighting",
    href: "/catalog/lighting",
  },
  {
    name: "Washroom Fittings",
    href: "/catalog/washroom",
  },
];

export function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center px-6 border-b">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" />
          <span className="text-xl font-bold text-foreground">Renovate</span>
        </div>
      </div>

      <ScrollArea className="flex-1 px-4 py-6">
        {/* Main Navigation */}
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href} onClick={onClose}>
                <div
                  className={cn(
                    "flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <Badge 
                      variant={isActive ? "secondary" : "outline"} 
                      className="text-xs"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Catalog Categories */}
        <div className="mt-8">
          <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Catalog
          </h3>
          <nav className="mt-3 space-y-1">
            {categories.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} onClick={onClose}>
                  <div
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 space-y-2">
          <Button className="w-full" size="sm">
            <span className="mr-2">+</span>
            New Project
          </Button>
          <Button variant="outline" className="w-full" size="sm">
            <span className="mr-2">📸</span>
            Capture Room
          </Button>
        </div>
      </ScrollArea>

      {/* User Section */}
      <div className="border-t p-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              John Doe
            </p>
            <p className="text-xs text-muted-foreground">
              Homeowner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}