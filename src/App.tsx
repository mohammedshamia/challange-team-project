import React, { Suspense } from "react";
import {BrowserRouter, Routes} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import  Loading  from "./components/Loading/loading";
import RootRoutes from "./routes/RootRoutes";

function App() {
  return (
      <BrowserRouter>
          <Suspense fallback={<Loading></Loading>}>
              <Routes>{renderRoutes(RootRoutes)}</Routes>
          </Suspense>
      </BrowserRouter>
  );
}

export default App;
