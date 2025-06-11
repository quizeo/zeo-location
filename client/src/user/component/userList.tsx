import "./UserList";

const userList = (props) => {
  if (props.users.length === 0) {
    return (
      <div className="center">
        <h2>No User Found.</h2>
      </div>
    );
  }

  return <div></div>;
};

export default userList;
