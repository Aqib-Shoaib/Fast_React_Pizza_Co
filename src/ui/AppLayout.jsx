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
          <main className="mx-auto my-auto max-w-3xl overflow-hidden ">
            <Outlet />
          </main>

          <CartOverview />
        </>
      )}
    </div>
  );
}

export default AppLayout;
