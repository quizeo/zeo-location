import { Outlet } from "react-router-dom";
import MainNavigation from "../shared/component/Navigation/MainNavigation";

const HomeLayout = () => {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading";
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
