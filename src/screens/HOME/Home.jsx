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
    <nav className='flex justify-content-between align-items-center h-14 md:h-16' >
            <img src={ASSANONELOGO} alt="" className='img-fluid' style={{maxWidth: "20%", marginLeft: "50px"}} />
            <Link to='/register'><button className='btn btn-primary px-4' style={{marginRight: "50px", maxWidth: "180px"}}>Register as POSP</button></Link>
    </nav>
    {/* .ripple-background
  .circle.xxlarge.shade1
  .circle.xlarge.shade2
  .circle.large.shade3
  .circle.mediun.shade4
  .circle.small.shade5 */}
    <div className='grid grid-rows-3 dk overflow-hidden text-center'>
        {/* part 1 */}
        <div className='grid grid-rows-2 place-items-center md:grid md:grid-row-1 md:grid-cols-2 ripple-background' >
            
            {/* animation of circle */}
            <div className='circle xxlarge shade1'>
                <div className='circle xlarge shade2'>
                    <div className='circle large shade3'>
               
                 
             
                    </div>
                </div>
            </div>



                {/* col 1 */}

                <img src={HomepageIllustration} 
                    width={"86%"}
                    alt="Insurance"
                    className='headerIMG'/>

                {/* col 2 */}
                <div className='mb-5 grid place-items-center md:col-span-1 whole-card' >
                    {/* card */}
                    <div className="card p-3 w-[85%] md:grid md:place-items-center" style={{ boxShadow: "6px 4px 5px 0px rgba(219,219,219,1)"}}>
                        <div className="card-body md:w-[85%] md:h-96 md:flex md:flex-col md:justify-evenly md:items-center" >
                            <div className='mb-4'>
                                <h2 className="card-title"><strong>Enter Your Mobile Number / Partner Code</strong></h2>
                                <p className="card-text">Enter your Number and get OTP to verificatior</p>                        
                            </div>
                            <div className="input-group md:flex md:flex-col md:w-[100%]">                            
 
                                    <input type="email" style={{width: "100%",backgroundColor: "rgba(137, 230, 244, 0.48)"}} 
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

                                        <input type="password" style={{width: "100%",backgroundColor: "rgba(137, 230, 244, 0.48)"}} 
                                                className="form-control mb-3" 
                                                placeholder="Enter password" 
                                                aria-label="Enter email" aria-describedby="basic-addon1"
                                                value={password} 
                                                onChange={(e) => setPassword(e.target.value)}
                                        /> 
                                        <button className='btn btn-primary rounded-full m-0' style={{width: "100%"}} onClick={handleLogin}>Login</button>
                            </div>
                        </div>                                         
                    </div>
                </div>


        </div>


        {/* 2nd part */}
        <div className='container-fluid row mx-auto mb-5 place-center'>
            <div className='' style={{width: "100%"}}>
                <h1>Why us?</h1>
                <div className='d-flex justify-content-center mb-5'>
                    <p className='fs-5 w-75 text-center mb-3'>
                        <strong>
                            Sell right insurance products to your clients
                            from anywhere, anytime with Assan One Advantage
                        </strong>
                    </p>
                </div>

                <div className='grid grid-rows-2 grid-cols-3 gap-x-5 gap-y-10'>
                    <div className='grid place-items-center'>
                        <img src={approoved} alt="SVG" className='' style={{width: "70px"}}/>
                        <h5>IRDA Approved</h5>
                        <p>Assan One is IRDA approved Insurance broking company</p>
                    </div>
                    <div className='grid place-items-center'>

                            <img src={assanOneProcess} alt="SVG" className='' style={{width: "70px"}}/>

                        <h3>Assan online process</h3>
                        <p>Assan One is IRDA approved Insurance broking company</p>
                    </div>
                    <div className='grid place-items-center'>

                            <img src={paperFree} alt="svg" className='' style={{width: "70px"}}/>

                        <h3>IRDA Approved</h3>
                        <p>Assan One is IRDA approved Insurance broking company</p>
                    </div>
      
                    <div className='grid place-items-center'>

                        <img src={zeroInvestment} alt="svg" className='' style={{width: "70px"}}/>

                        <h5>Zero Investment</h5>
                        <p>All you need to have is a smartphone with internet connectivity.</p>
                    </div>
                    <div className='grid place-items-center'>

                        <img src={handsOnTraining} alt="svg" className='' style={{width: "70px"}}/>

                        <h3>Assan online process</h3>
                        <p>Get latest certifications on latest products by industry, experts and get ahead in your game.</p>
                    </div>
                    <div className='grid place-items-center'>

                        <img src={timelyPayouts} alt="svg" className='' style={{width: "70px"}}/>

                        <h3>Timely Payouts</h3>
                        <p>Recieve Payments on time without delays</p>
                    </div>

                </div> 
            </div>
        </div>



        {/* 3rd part */}
        <div className='back text-black w-[100%]'>
        <div className="flex-col place-center py-5" >
            <div className='flex justify-content-center mb-5'>
                <h1 className='w-75 text-center mb-5'>
                    Ease of using Assan One Platform
                </h1>
                <hr style={{height: "2px"}}/>
            </div>

            <div className='grid gap-y-16 mb-4 w-[70%]'>
                <div className='grid place-items-center'>
                    <img src={fillTheDetail} alt="svg" className='mb-4' style={{width: "100px"}}/>
                    <h3 className='mb-2'>Fill the details</h3>
                    <p className='text-center'>Fill in your details and Get insurance policy, premium quotes from top rated insurance instantly</p>
                </div>
                <div className='grid place-items-center'>
                    <img src={compareQuotes} alt="svg" className='mb-4' style={{width: "100px"}}/>
                    <h3 className='mb-2 text-center'>Compare quotes and Choose a insurance policy.</h3>
                    <p className='text-center'>From numerous available quotes choose the one that best suits your requirements and budget</p>
                </div>
                <div className='grid place-items-center'>
                    <img src={makePaymentRelax} alt="svg" className='mb-4' style={{width: "100px"}}/>
                    <h3 className='mb-2'>Make payment and be relax.</h3>
                    <p className='text-center'> pay online and get your policy right away in your inbox.</p>
                </div>
            </div> 
        </div>
    
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Home