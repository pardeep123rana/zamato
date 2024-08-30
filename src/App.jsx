import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Login from "./Pages/Auth/login";
import Signup from "./Pages/Auth/signup";
import Resturant from "../src/Pages/zamatopage/resturant";
import Information from "./Pages/zamatopage/information";
import Nav from "./Component/nav";
import Hero from "./Component/hero";
import Main from "../src/Component/main";
import Nightlife from "./Pages/zamatopage/nightlife";
import Form from "./Pages/zamatopage/form";
import Submit from "./Pages/Auth/submit";
import Delivery from ".././src/Pages/zamatopage/delivary";
import Contact from "../src/Pages/zamatopage/contact";
import Diningout from "../src/Pages/zamatopage/diningout";
import NavLink from "../src/navlink/navlink";
// import Nav from "./Component/nav";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/information" element={<Information />} />
        <Route path="/nightlife" element={<Nightlife />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/main" element={<Main />} />
        <Route path="/form" element={<Form />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/diningout" element={<Diningout />} />
        <Route path="/navlink" element={<NavLink />} />
        <Route path="/resturant" element={<Resturant />} />
      </Routes>
    </Router>
  );
};

export default App;
