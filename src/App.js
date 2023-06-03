import { Route, Routes } from "react-router-dom"; 
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* route is used to redirect to page withou refresh  in these case av will not b rerendered*/}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
