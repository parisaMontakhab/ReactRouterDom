
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
<div>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
  </Routes>
</div>
  );
}

export default App;
