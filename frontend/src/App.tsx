import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./pages/SignIn";
import { Signup } from "./pages/SignUp";
import { Blogs } from "./pages/Blogs";
import { Blog } from "./pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
