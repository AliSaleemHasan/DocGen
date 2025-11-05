import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { History, LayoutDashboard, Inbox, Settings } from "lucide-react";
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
  return (
    <Sidebar>
      <SidebarHeader></SidebarHeader>
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
