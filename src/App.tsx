import { Suspense, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Loading from "./components/Loading/loading";
import { AppState } from "./redux/store";
import { toggleTheme } from "./redux/actions/theme.action";
import RootRoutes from "./routes/RootRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stepper, { IStep } from "./components/common/Stepper";

//, 'Create an ad group', 'Create an ad'

const steps: IStep[] = [
  {
    text: "Select campaign settings",
    children: <>Step 1</>,
  },
  {
    text: "Create an ad group",
    children: <>Step 2</>,
    last: true,
  },
];

function App() {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: AppState) => state);

  const toggleTheme_ = useCallback(() => {
    dispatch(toggleTheme(theme === "light" ? "dark" : "light"));
  }, [theme, dispatch]);

  return (
    <ThemeProvider theme={{}}>
      <Suspense fallback={<Loading />}>
        <Routes>
          {RootRoutes.routes.map((route, Index) => (
            <Route path={route.path} element={route.component} key={Index} />
          ))}
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  );
}

export default App;
