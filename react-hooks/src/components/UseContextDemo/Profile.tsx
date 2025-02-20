import { User } from '.';

interface ProfileProps {
   user: User
}

const Profile = ({ user }: ProfileProps) => {
  return (
    <div>{user.name}</div>
  );
}

export default Profile;