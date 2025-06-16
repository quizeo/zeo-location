import "./UserList.css";
import UserItem from "./UserItem";

interface UserListProps {
  users: {
    id: string;
    name: string;
    email: string;
    image: string;
    places: number;
  }[];
}
const UserList = ({ users }: UserListProps) => {
  if (users.length === 0) {
    return (
      <div className="center">
        <h2>No User Found.</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {users.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            places={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
