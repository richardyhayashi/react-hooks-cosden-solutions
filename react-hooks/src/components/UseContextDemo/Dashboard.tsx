import { User } from '.';
import Profile from './Profile';
import Sidebar from './Sidebar';

interface DashboardProps {
  user: User;
}

const Dashboard = ({user}: DashboardProps) => {
   return (
      <div>
         <Sidebar user={user} />
         <Profile user={user} />
      </div>
   );
};

export default Dashboard;
