import React, { useContext } from 'react';
import './Navigation.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';

const Navigation = () => {
    const [loginUser, setloginUser] = useContext(UserContext);
    return (
        <header>
            <Navbar expand="lg" className="container navBackground">
                <Link className="navbar-brand" to="/">
                    <img className="img" src={logo} alt="logo"/>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link mx-2 text-center text-dark" to="/">Home</Link>
                        <Link className="nav-link mx-2 text-center text-dark" to="/">Our Protfolio</Link>
                        <Link className="nav-link mx-2 text-center text-dark" to="/">Our Team</Link>
                        <Link className="nav-link mx-2 text-center text-dark" to="/">Contact us</Link>
                        {
                            loginUser.name && <button className="btn mx-1 text-light bg-info text-center rounded">{loginUser.name}</button>
                        }
                        {
                            !(loginUser.name) ? <Link className="nav-link mx-2 bg-dark text-light text-center rounded px-5" to="/login">Login</Link> :
                            <button className="btn mx-1 bg-danger text-light text-center rounded px-3" onClick={()=>setloginUser({})}>SignOut</button>
                        }
                        <Link className="nav-link mx-1 bg-info text-light text-center rounded px-4" to="/admin/serviceList">Admin</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Navigation;
