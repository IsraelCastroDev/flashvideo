import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function LayoutMovie() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default LayoutMovie;
