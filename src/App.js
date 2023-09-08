import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/app.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";

function App() {
  // const [theme1, setTheme1] = useState("false");
  const theme = useSelector((state) => state.mainReducer.theme);
  const state = useSelector(state => state)
  console.log("theme da app:", theme)
  console.log("state da app:", state)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
