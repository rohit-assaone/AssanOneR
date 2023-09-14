import {React, useState, useEffect} from 'react'
// REACT-ROUTER-DOM
import { Link, useNavigate } from 'react-router-dom';


// REDUX
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import Footer from '../../components/Footer';

// ICONS
import approoved from '../../assets/ICONS/IRDAApproved.svg';
import ASSANONELOGO from '../../assets/ICONS/ASSANONELOGO.png';
import HomepageIllustration from '../../assets/ICONS/Homepageillustration.png'
import assanOneProcess from '../../assets/ICONS/AssanProcess.svg';
import paperFree from '../../assets/ICONS/Paperfreeprocess.svg';
import zeroInvestment from '../../assets/ICONS/ZeroInvestment.svg';
import handsOnTraining from '../../assets/ICONS/Training.svg';
import timelyPayouts from '../../assets/ICONS/TimelyPayout.svg';
import fillTheDetail from '../../assets/ICONS/Fillthedetail.svg';
import compareQuotes from '../../assets/ICONS/Comparequotes.svg';
import makePaymentRelax from '../../assets/ICONS/Makepaymentbe relax.svg';

import './home.css';

// Auth Slice
import {login, selectUserName} from '../../redux/authSlice.js';

import Spinner from '../../components/Spinner/Spinner';


const Home = ({setLogedIn}) => {
    const status = useSelector((state) => state.user.status);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {success, loading, token, error } = useSelector((state) => state.user);

    

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({email, password}));  
   
        
    } 


    

    
  return (
    <>
    <nav className='mx-auto' >
        <div className='d-flex justify-content-between align-items-center'>
            <img src={ASSANONELOGO} alt="" className='img-fluid' style={{maxWidth: "20%", marginLeft: "50px"}} />
            <Link to='/register'><button className='btn btn-primary px-4' style={{marginRight: "50px"}}>Register as POSP</button></Link>
        </div>
    </nav>
    {/* .ripple-background
  .circle.xxlarge.shade1
  .circle.xlarge.shade2
  .circle.large.shade3
  .circle.mediun.shade4
  .circle.small.shade5 */}
    <div className='dk'>
        <div className='ripple-background'>
            <div className=' circle xxlarge shade1'>
                <div className='circle xlarge shade2'>
                    <div className='circle large shade3'>
                        <div className='circle medium shade4'>
                                <div className='circle small shade5'>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row column-gap-3 d-flex align-items-center' style={{marginBottom: "6rem", height: "100vh"}}>
                <div className='col'>
                    <img src={HomepageIllustration} 
                        style={{minWidth: "55%", maxWidth: "100%"}}
                        alt="Insurance"/>
                </div>
                <div className='col' style={{display:"grid", placeItems:"center"}}>
                    <div className="card p-4" style={{width: "65%", display:"grid", placeItems: "center", boxShadow: "6px 4px 5px 0px rgba(219,219,219,1)"}}>
                        <div className="card-body" >
                            <h4 className="card-title"><strong>Enter Your Mobile Number / Partner Code</strong></h4>
                            <p className="card-text">Enter your Number and get OTP to verificatior</p>                        
                            <div className="input-group mb-3 d-flex flex-column">                            
                                <div className='d-flex flex-column mb-3'>    
                                    <input type="email" style={{width:"100%",backgroundColor: "rgba(137, 230, 244, 0.48)"}} 
                                            className="form-control mb-3" 
                                            placeholder="Enter email" 
                                            aria-label="Enter email" aria-describedby="basic-addon1"
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)}
                                        /> 
                                        {/* Loading */}
                                        {loading && 
                                            <div  className='position-absolute' style={{top: "30%", left: "50%", zIndex: "10"}}>
                                                <Spinner />
                                            </div>
                                        }
                                        <input type="password" style={{width:"100%",backgroundColor: "rgba(137, 230, 244, 0.48)"}} 
                                                className="form-control mb-3" 
                                                placeholder="Enter password" 
                                                aria-label="Enter email" aria-describedby="basic-addon1"
                                                value={password} 
                                                onChange={(e) => setPassword(e.target.value)}
                                        /> 
                                        <button className='btn btn-primary' style={{width: "100%"}} onClick={handleLogin}>Login</button>
                                </div>       
                            </div>
                        </div>
                        
                    
                </div>
            </div>
            </div>

        
          
        </div>


    {/* 2nd part */}
    <div className='mb-2' style={{height: "90vh"}}>
            <h2>Why us?</h2>
        <div className='d-flex justify-content-center mb-5'>
            <p className='fs-5 w-75 text-center mb-3'>
                <strong>
                    Sell right insurance products to your clients
                    from anywhere, anytime with Assan One Advantage
                </strong>
            </p>
        </div>

        <div className='row column-gap-3 mb-4'>
            <div className='col'>
                <img src={approoved} alt="SVG" className='mb-3' style={{width: "25%"}}/>
                <h5>IRDA Approved</h5>
                <p>Assan One is IRDA approved Insurance broking company</p>
            </div>
            <div className='col'>
                <img src={assanOneProcess} alt="SVG" className='mb-3' style={{width: "25%"}}/>
                <h3>Assan online process</h3>
                <p>Assan One is IRDA approved Insurance broking company</p>
            </div>
            <div className='col'>
                <img src={paperFree} alt="svg" className='mb-3' style={{width: "25%"}}/>
                <h3>IRDA Approved</h3>
                <p>Assan One is IRDA approved Insurance broking company</p>
            </div>
        </div>
        <div className='row column-gap-3'>
            <div className='col'>
                <img src={zeroInvestment} alt="svg" className='mb-3' style={{width: "25%"}}/>
                <h5>Zero Investment</h5>
                <p>All you need to have is a smartphone with internet connectivity.</p>
            </div>
            <div className='col'>
                <img src={handsOnTraining} alt="svg" className='mb-3' style={{width: "25%"}}/>
                <h3>Assan online process</h3>
                <p>Get latest certifications on latest products by industry, experts and get ahead in your game.</p>
            </div>
            <div className='col'>
                <img src={timelyPayouts} alt="svg" className='mb-3' style={{width: "25%"}}/>
                <h3>Timely Payouts</h3>
                <p>Recieve Payments on time without delays</p>
            </div>
        </div>
     

    </div>



    {/* 3rd part */}
    <div style={{height: "90vh"}}>
        <div className='d-flex justify-content-center mb-5'>
            <h1 className='w-75 text-center mb-5'>
                Ease of using Assan One Platform
            </h1>
        </div>

        <div className='row column-gap-3 mb-4'>
            <div className='col'>

                <img src={fillTheDetail} alt="svg" className='mb-3' style={{width: "25%"}}/>

                <h3 className='mb-4'>Fill the details</h3>
                <p>Fill in your details and Get insurance policy, premium quotes from top rated insurance instantly</p>
            </div>
            <div className='col'>
                <img src={compareQuotes} alt="svg" className='mb-3' style={{width: "25%"}}/>
                <h3>Compare quotes and Choose a insurance policy</h3>
                <p>From numerous available quotes choose the one that best suits your requirements and budget</p>
            </div>
            <div className='col'>
                <img src={makePaymentRelax} alt="svg" className='mb-3' style={{width: "25%"}}/>
                <h3>Make payment and be relax.</h3>
                <p> pay online and get your policy right away in your inbox.</p>
            </div>
        </div> 
    </div>
    
  
    </div>
    <Footer />
    </>
  )
}

export default Home