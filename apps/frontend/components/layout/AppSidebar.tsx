"use client";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import { History, LayoutDashboard, Inbox, Settings } from "lucide-react";
import Logo from "@/public/logo.png";
import Link from "next/link";
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "New Docs",
    url: "#",
    icon: Inbox,
  },
  {
    title: "History",
    url: "#",
    icon: History,
  },
  {
    title: "Account Settings",
    url: "#",
    icon: Settings,
  },
];

function AppSidebar() {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      {open && (
        <SidebarHeader>
          <Link href={"/"} className="w-full h-full flex items-center gap-2">
            <Image src={Logo.src} width={100} height={50} alt="SidebarLogo" />
            <h2 className="text-xs">
              Generate REST Docs With{" "}
              <strong className="text-primary">Ease</strong>
            </h2>
          </Link>
        </SidebarHeader>
      )}
      <SidebarContent>
        <SidebarMenu className="bg-card">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton className="h-14 px-6" asChild>
                <a href={item.url}>
                  <item.icon />
                  <span className="ml-2">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
