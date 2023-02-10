import { Home } from "pages/Home";
import { Movies } from "pages/Movies/Movies";
import { Routes, Route } from "react-router-dom";
import { FilmDetails } from "../pages/FilmDetails/FilmDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { SharedLayout } from "./SharedLayout/SharedLayout";


export const App = () => {
  return (
   <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}/>
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:movieId" element={<FilmDetails/>}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Route>
   </Routes>
  );
};
