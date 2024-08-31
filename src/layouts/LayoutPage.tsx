import { Outlet } from "react-router-dom";
import Header from "../components/PageComponents/Header/Header";

function LayoutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row px-4 md:px-10 py-2 md:py-7">
        <aside>aside</aside>
        <Outlet />
      </main>
    </>
  );
}
export default LayoutPage;
