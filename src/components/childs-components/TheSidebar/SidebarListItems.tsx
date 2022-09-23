import List from "@mui/material/List";
import SidebarItem from "./SidebarItem";
import { IconType } from "react-icons/lib";

import {
  TbLayoutDashboard,
  TbInfoSquare,
  TbReportSearch,
  TbSettings,
} from "react-icons/tb";

interface itemType {
  title: string;
  icon: IconType;
  isAdmin: boolean;
}
export default function SidebarListItems({ state }: { state: boolean }) {
  const itemsList: itemType[] = [
    {
      title: "داشبورد",
      icon: TbLayoutDashboard,
      isAdmin: true,
    },
    {
      title: "اطلاعات",
      icon: TbInfoSquare,
      isAdmin: true,
    },
    {
      title: "گزارشات",
      icon: TbReportSearch,
      isAdmin: true,
    },
    {
      title: "تنظیمات",
      icon: TbSettings,
      isAdmin: true,
    },
  ];

  const ItemsComponents = itemsList.map((item) => (
    <SidebarItem
      text={item.title}
      icon={item.icon}
      state={state}
      key={item.title}
    />
  ));

  return (
    <>
      <List>{ItemsComponents}</List>
    </>
  );
}
