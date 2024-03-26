import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Theme/Layout";
import FAQ from "./pages/FAQ";
import UserManagement from "./pages/UserManagement/UserManagement"
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import AddUser from "./pages/UserManagement/AddUser";
import UserDetail from "./pages/UserManagement/UserDetail";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          {/* <Route path="/Home" element={<Home />}> */}
            <Route path="/UserManagement" element={ < UserManagement />} />
            <Route path="/Home" element={ <Home />} />
            <Route path="/FAQ" element={< FAQ />} />
            <Route path="/Contact" element={ <Contact/> } />
            <Route path="/UserManagement/AddUser" element={ <AddUser/> } />
            <Route path="/UserManagement/UserDetail/:id" element={ <UserDetail/> } />
          </Route>
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
