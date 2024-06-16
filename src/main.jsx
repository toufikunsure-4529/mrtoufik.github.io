import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="/" element={<App />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
