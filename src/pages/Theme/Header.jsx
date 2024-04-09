import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../asssets/logo.png"


const Header = () => {

    const navigate = useNavigate();
    
    const logout = () => {
        toast.success(
            'Logged out successfully', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
      localStorage.removeItem('isLogin')  
      navigate('/Login')
    }
    

    return(
        <>
        <header className="child flex">
            <div className="logo"><img src={Logo} alt="" width={'50px'} /></div>
            
            <button className="delete" onClick={logout}>Logout</button>

        </header>
        </>
    );
}
export default Header;