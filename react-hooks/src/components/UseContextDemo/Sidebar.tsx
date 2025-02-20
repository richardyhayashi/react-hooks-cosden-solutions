import { User } from ".";

interface SidebarProps {
   user: User;
}

const Sidebar = ({ user }: SidebarProps) => {
  return (
    <div>
      <div>{user.name}</div>
      <div>Subsciption Status: {user.isSubscribed ? 'Yes' : 'No'}</div>
   </div>
  );
}

export default Sidebar;