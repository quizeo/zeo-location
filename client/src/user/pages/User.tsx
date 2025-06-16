import UserList from "../component/UserList";

const User = () => {
  const Users = [
    {
      id: "u1",
      name: "Max Schwarz",
      image: "https://avatars.githubusercontent.com/u/12345678?v=4",
      places: 3,
      email: "",
    },

    {
      id: "u2",
      name: "Manuel Schwarz",
      image: "https://avatars.githubusercontent.com/u/87654321?v=4",
      places: 1,
      email: "",
    },
    {
      id: "u3",
      name: "John Doe",
      image: "https://avatars.githubusercontent.com/u/11223344?v=4",
      places: 2,
      email: "",
    },
    {
      id: "u4",
      name: "Jane Smith",
      image: "https://avatars.githubusercontent.com/u/44332211?v=4",
      places: 5,
      email: "",
    },
  ];

  return <UserList users={Users} />;
};

export default User;
