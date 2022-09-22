import List from "@mui/material/List";
import SidebarItem from "./SidebarItem";

import { MdOutlineEmail, MdInput } from "react-icons/md";
import { IconType } from "react-icons/lib";

interface props {
  state: boolean;
}

interface itemType {
  title: string;
  icon: IconType;
  isAdmin: boolean;
}
export default function SidebarListItems({ state }: props) {
  const itemsList: itemType[] = [
    {
      title: "E-mail",
      icon: MdInput,
      isAdmin: true,
    },
    {
      title: "Input",
      icon: MdOutlineEmail,
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
