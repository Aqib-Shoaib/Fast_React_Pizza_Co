import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const { state } = useNavigation();

  return (
    <div className="gird-rows-[auto_1fr_auto] grid h-screen">
      <Header />

      {state === "loading" ? (
        <Loader />
      ) : (
        <>
          <main className="max-w-3xl overflow-scroll px-2 ">
            <Outlet />
          </main>

          <CartOverview />
        </>
      )}
    </div>
  );
}

export default AppLayout;
