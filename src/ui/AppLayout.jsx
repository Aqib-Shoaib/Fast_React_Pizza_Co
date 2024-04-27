import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

function AppLayout() {
  const { state } = useNavigation();

  return (
    <div>
      <Header />

      {state === "loading" ? (
        <Loader />
      ) : (
        <>
          <main>
            <Outlet />
          </main>

          <CartOverview />
        </>
      )}
    </div>
  );
}

export default AppLayout;
