import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function Layout() {
  return (
    <>
      <Header />
      <main className="py-7 px-4">
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
