"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { useConfig } from "@/providers/config";
import { CTAType } from "@/types/ctas";
import Link from "next/link";
import { Button } from "./button";

export function AppSidebar() {
  const { menu, ctas } = useConfig();
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="px-4">
        {menu && menu.length > 0 && (
          <SidebarGroup>
            <ul className="space-y-2">
              {menu?.map((item, index) => (
                <li key={index} className="text-2xl">
                  <Link href={item.slug.current} onClick={toggleSidebar}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarGroup>
        )}
        {ctas && ctas?.length > 0 && (
          <SidebarGroup className="h-full justify-end">
            <ul className="flex flex-col gap-2">
              {ctas.map((item: CTAType, index: number) => (
                <li key={index}>
                  <Button asChild className="w-full">
                    <Link href={item.href || "/"} onClick={toggleSidebar}>
                      {item?.label}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
