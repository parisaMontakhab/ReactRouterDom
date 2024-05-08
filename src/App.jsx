
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";
import AppNav from "./components/AppNav";
import Layout from "./components/Layout";


function App() {
  return (
<div>
  

  <Routes>
    <Route element={<Layout/>}>

    <Route path="/" element={<Home/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>

    </Route>
    
  </Routes>
 
</div>
  );
}

export default App;
