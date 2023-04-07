import { Routes, Route, BrowserRouter} from "react-router-dom";
import { HomePage } from "./pages/home";
import { PostPage } from "./pages/posts";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/post/:id" element={<PostPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}