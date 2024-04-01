import { useNavigate } from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();
    const logout = () => {
      localStorage.removeItem('isLogin')  
      navigate('/Login')
    }
    

    return(
        <>
        <header className="child flex">
            <div className="logo">Virinchi College</div>
            <button className="delete" onClick={logout}>Login</button>

        </header>
        </>
    );
}
export default Header;