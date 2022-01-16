import { Suspense, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Loading from "./components/Loading/loading";
import { AppState } from "./redux/store";
import { toggleTheme } from "./redux/actions/theme.action";
import { lightTheme, darkTheme } from "./theme/theme";
import RootRoutes from "./routes/RootRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReviewsCard from "./components/ReviewsCard";




function App() {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: AppState) => state);

  const toggleTheme_ = useCallback(() => {
    dispatch(toggleTheme(theme === "light" ? "dark" : "light"));
  }, [theme, dispatch]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Suspense fallback={<Loading />}>
        <ReviewsCard reviewer={[{nameReviewer:'hadeel wadia',valueRating:3.5,  optionsReviewer:'William Tell is a gambler and former serviceman who sets out to reform a young man seeking revenge on a mutual enemy from their past. Tell just wants to play cards. His spartan existence on the casino trail is shattered when he is approached by Cirk, a vulnerable and angry young man seeking help to execute his plan for revenge on a military colonel. Tell sees a chance at redemption through his relationship with Cirk.' ,timeOfReview:'12/20/2020'},
      {nameReviewer:'hadeel wadia',valueRating:3.5, timeOfReview:'12/20/2020',optionsReviewer:'William Tell is a gambler and former serviceman who sets out to reform a young man seeking revenge on a mutual enemy from their past. Tell just wants to play cards. His spartan existence on the casino trail is shattered when he is approached by Cirk, a vulnerable and angry young man seeking help to execute his plan for revenge on a military colonel. Tell sees a chance at redemption through his relationship with Cirk.'},
      {nameReviewer:'hadeel wadia',valueRating:3.5,timeOfReview:'12/20/2020',optionsReviewer:'William Tell is a gambler and former serviceman who sets out to reform a young man seeking revenge on a mutual enemy from their past. Tell just wants to play cards. His spartan existence on the casino trail is shattered when he is approached by Cirk, a vulnerable and angry young man seeking help to execute his plan for revenge on a military colonel. Tell sees a chance at redemption through his relationship with Cirk.'}
      ]}/>
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
