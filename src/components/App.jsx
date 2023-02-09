import { Home } from "pages/Home";
import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";


export const App = () => {
  return (
   <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}/>
      </Route>
   </Routes>
  );
};
