import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { router } from "./routes/index.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  //React strictmode was desactivated because it was causing some issues with draft-js library
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
