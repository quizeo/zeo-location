import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default HomeLayout;
