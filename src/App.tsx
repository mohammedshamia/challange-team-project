import { Suspense, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Loading from "./components/Loading/loading";
import { AppState } from "./redux/store";
import { toggleTheme } from "./redux/actions/theme.action";
import { lightTheme, darkTheme } from "./theme/theme";
import RootRoutes from "./routes/RootRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardComponent from "./components/Card";
import CategroiesCard from "./components/CategroiesCard";
import ProdectCard from "./components/ProdectsCard/ProdectsCard";
import ProdectsCard from './components/ProdectsCard/index';



function App() {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: AppState) => state);

  const toggleTheme_ = useCallback(() => {
    dispatch(toggleTheme(theme === "light" ? "dark" : "light"));
  }, [theme, dispatch]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Suspense fallback={<Loading />}>
        hi
       <CategroiesCard categroiesCard={[{name:'ipone',
       img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyffid16snFPtJ6s49jvrcum78LXroUVK9g&usqp=CAU'},{name:'iponelabtaop',img:''},{name:'ipone',img:''},{name:'ipone',img:''}]}/>
        <ProdectsCard prodectsCard={[{name:'ipone', salary:100, valueRating:3.5,
       img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyffid16snFPtJ6s49jvrcum78LXroUVK9g&usqp=CAU'},
       {name:'iponelabtaop',img:''},{name:'ipone',img:''}]} />
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
