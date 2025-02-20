import { useUserContext } from "./context";

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
   const user = useUserContext();

  return (
    <div>
      <div>{user.name}</div>
      <div>Subsciption Status: {user.isSubscribed ? 'Yes' : 'No'}</div>
   </div>
  );
}

export default Sidebar;