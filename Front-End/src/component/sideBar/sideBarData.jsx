import { MdHome, MdEventNote, MdAddCircleOutline, MdSettings, MdPerson } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const Data = [
  {
    path: "/",
    title: "Dashboard",
    icon: MdHome,
    size: 30,
  },
  {
    path: "/manageevent",
    title: "Manage Events",
    icon: MdEventNote,
    size: 30,
  },
  {
    path: "/newevent",
    title: "New Events +",
    icon: MdAddCircleOutline,
    size: 30,
  },
  {
    path: "/usermanagement",
    title: "User Management",
    icon: FaUsers,
    size: 30,
  },
  {
    path: "/user",
    title: "User",
    icon: MdPerson,
    size: 30,
  },
  {
    path: "/settings",
    title: "Setting",
    icon: MdSettings,
    size: 30,
  },
];

export { Data };
