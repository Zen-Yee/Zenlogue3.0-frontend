import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Header from "./components/layout/Header/Header";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import SinglePost from "./pages/SinglePost/SinglePost";
import EditPost from "./pages/EditPost/EditPost";
import Error from "./pages/ErrorHandling/Error";
import Footer from "./components/layout/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/edit" element={<EditPost />} />
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}