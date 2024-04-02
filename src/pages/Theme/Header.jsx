import { useNavigate } from "react-router-dom";
import Logo from "../../asssets/logo.png"


const Header = () => {

    const navigate = useNavigate();
    const logout = () => {
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