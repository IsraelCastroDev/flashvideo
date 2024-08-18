import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function LayoutMovie() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default LayoutMovie;
