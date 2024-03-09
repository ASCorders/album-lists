import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Main from "./layout/Main";
import Dashboard from "./pages/Dashboard";
import Lists from "./pages/Lists";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Main />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/list" element={<Lists />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
