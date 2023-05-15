import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Header.module.css";
import { BiMoon } from 'react-icons/bi';

import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";


function NavigationBar() {
  const navigate = useNavigate();


  function navigatePage() {
    navigate("/Registration");
  }
  function navigateToHomePage() {
    navigate("/");
  }
  function navigatePagetocontact() {
    navigate("/Contact");
  }
  function navigatePagetoPhoto() {
    navigate("/Photo");
  }
  return (
    <Navbar className={style.main}>
      <Container className={style.Container}>
        <h4 onClick={navigateToHomePage}>
         Twolink
        </h4>
      </Container>
      <Container >
     <div className={style.links}>
      <h6>Career Explorer</h6>
      <h6>Jobs</h6>
      <button><BiMoon /></button>
      <button>Sign in</button>
     </div>
      </Container>
   
    </Navbar>
  );
}

export default NavigationBar;
