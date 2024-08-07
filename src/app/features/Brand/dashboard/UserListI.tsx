// src/components/UserCard.tsx
import { FC } from 'react';
import { User } from '../product/UserI';

interface UserCardProps {
  user: User;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserCard;
