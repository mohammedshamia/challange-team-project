import { Suspense, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Loading from "./components/Loading/loading";
import { AppState } from "./redux/store";
import { toggleTheme } from "./redux/actions/theme.action";
import RootRoutes from "./routes/RootRoutes";
import { Button } from "./components/Button/Button.style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: AppState) => state);

  const toggleTheme_ = useCallback(() => {
    dispatch(toggleTheme(theme === "light" ? "dark" : "light"));
  }, [theme]);

  return (
    <ThemeProvider theme={{}}>
      <Suspense fallback={<Loading />}>
        <Button onClick={toggleTheme_} height="60px" width="300px">
          click
        </Button>
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
