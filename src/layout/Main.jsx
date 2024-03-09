import Header from "../components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

const getKey = location => location.pathname;

function Main() {
  return (
    <>
      <Header />
      <ScrollRestoration getKey={getKey} />
      <main className="main-content p-2 mt-5">
        <Outlet />
      </main>
    </>
  );
}

export default Main;
