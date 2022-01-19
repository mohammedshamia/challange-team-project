import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiTheme } from "@mui/material/styles";
import Loading from "./components/Loading/loading";
import { AppState } from "./redux/store";
import { lightTheme, darkTheme } from "./theme/theme";
import RootRoutes from "./routes/RootRoutes";
import { ToastContainer } from "react-toastify";
import Header from "./components/common/Header";
import { GlobalStyle } from "./components/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
<<<<<<< HEAD
import ProdectPage from "./screens/ProdectPage";

=======
>>>>>>> b4a3d80e27fedd59ffcfe232825705585c9a54e7

function App() {
  const dispatch = useDispatch();


  const { theme } = useSelector((state: AppState) => state);
  return (
<<<<<<< HEAD

=======
>>>>>>> b4a3d80e27fedd59ffcfe232825705585c9a54e7
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <MuiTheme theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Header />
          <ProdectPage/>
          <Routes>
            {RootRoutes.routes.map((route, Index) => (
              <Route path={route.path} element={route.component} key={Index} />
            ))}
          </Routes>
          <ToastContainer autoClose={3000} />
        </MuiTheme>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
