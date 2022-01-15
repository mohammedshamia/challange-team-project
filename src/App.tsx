import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Loading from "./components/Loading/loading";
import { AppState } from "./redux/store";
import { lightTheme, darkTheme } from "./theme/theme";
import RootRoutes from "./routes/RootRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { theme } = useSelector((state: AppState) => state);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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
