import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const { state } = useNavigation();

  return (
    <div className="grid-row-[auto,1fr,auto] grid h-screen">
      <Header />

      {state === "loading" ? (
        <Loader />
      ) : (
        <>
          <main className="px-2">
            <Outlet />
          </main>
        </>
      )}
      <CartOverview />
    </div>
  );
}

export default AppLayout;
