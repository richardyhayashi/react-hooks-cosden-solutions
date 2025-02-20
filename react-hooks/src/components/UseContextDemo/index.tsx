import { useState } from 'react';
import Dashboard from './Dashboard';

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
      <Dashboard user={user} />
    </div>
  );
};

export default UseContextDemo;