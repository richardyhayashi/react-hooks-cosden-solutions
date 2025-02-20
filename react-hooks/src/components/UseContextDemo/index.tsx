import { useState } from 'react';
import Dashboard from './Dashboard';
import { DashboardContext } from './context';

export interface User {
   name: string;
   isSubscribed: boolean;
}

interface DemoProps {}

const UseContextDemo = ({}: DemoProps) => {
   const [user] = useState<User>({
      name: 'You',
      isSubscribed: true,
   });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
};

export default UseContextDemo;