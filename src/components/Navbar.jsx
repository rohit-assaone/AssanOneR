import React from 'react'
import ASSANONELOGO from '../assets/ICONS/ASSANONELOGO.png'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../redux/authSlice'

const Navbar = () => {

    const naviagte = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        Cookies.remove('token');
        dispatch(reset());
        naviagte('/');
    }


  return (
    <>
        <nav class="container-fluid flex justify-content-between align-items-center h-16 md:h-16">


                <a href="/"><img src={ASSANONELOGO} className="navbar-brand img-fluid" href="#" alt='logo' style={{width: "15rem"}}/> </a> 

                <div className="" id="navbarSupportedContent">
                    <ul className="flex align-items-center">
                        <li className="nav-item mx-3">
                        <h5><a href='/' className="nav-link active" aria-current="page">Home</a></h5>
                        </li>
                        <li className="nav-item mx-3">
                        <h5><a className="nav-link" href="#">Help</a></h5>
                        </li>
                        <li className="nav-item mx-3">
                        <h5> <a className="nav-link" href="#"><i className="fa-solid fa-magnifying-glass"></i></a></h5>
                        </li>
                        <li className="nav-item mx-2">
                        <div class="dropdown">
                            <button class="btn btn-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                My Account
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <Link class="dropdown-item" to="/myAccount">
                                        <p>
                                            Profile
                                        </p>
                                    </Link>
                                </li>
                                <li><Link class="dropdown-item" to="/" onClick={handleLogout}>Logout</Link></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            </div>
                           
                        </li>
                    </ul>

                </div>

        </nav>

    </>
  )
}

export default Navbar