import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./pages/Theme/Layout";
import Faq from "./pages/FAQ";
import UserManagement from "./pages/UserManagement/UserManagement"
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import AddUser from "./pages/UserManagement/AddUser";
import UserDetail from "./pages/UserManagement/UserDetail";
import Login from "./pages/Auth/Login.1";
import UserDelete from "./pages/UserManagement/UserDelete";
import PrivateRoute from "./routes/PrivateRoute";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          {/* <Route path="/Home" element={<Home />}> */}
            <Route path="/UserManagement" element={ <PrivateRoute component={UserManagement} />} />
            <Route path="/Home" element={ <Home />} />
            <Route path="/FAQ" element={< Faq />} />
            <Route path="/Contact" element={ <Contact/> } />
            <Route path="/UserManagement/AddUser" element={  <PrivateRoute component={AddUser}/> } />
            <Route path="/UserManagement/EditUser/:id" element={  <PrivateRoute component={AddUser}/> } />
            <Route path="/UserManagement/UserDelete/:id" element={  <PrivateRoute component={UserDelete}/> } />
            <Route path="/UserManagement/UserDetail/:id" element={ <UserDetail/> } />
          </Route>
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
        <ToastContainer />
    </div>
  );
}

export default App;
