import "../../CSS/Navbar.css";
import { openModal } from "../../store/slices/modalSlice";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";

export default function Navbar() {

  const dispatch = useDispatch();

  function handleLoginClick() {
      dispatch(openModal("login"));
  }
  function handleSignUpClick() {
      dispatch(openModal("signup"));
  }

return(
    <>
      <div className="navbar-container">
        <div className="navbar-title">Munch-it</div>

        <SearchBar/>

        <div className="navbar-actions">
          <div className="nav-item" onClick={handleLoginClick} >Login</div>
          <div className="nav-item" onClick={handleSignUpClick} >SignUp</div>
        </div>
      </div>
    </>
);

}