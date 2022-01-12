import React, { Suspense } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import  Loading  from "./components/Loading/loading";
import RootRoutes from "./routes/RootRoutes";

function App() {
  return (
          <Suspense fallback={<Loading/>}>
              <Routes>
              {RootRoutes.routes.map((rout, Index) => (
               <Route path={rout.path} element={rout.component} key={Index} />
              ))}
              </Routes>
          </Suspense>
  );
}

export default App;
