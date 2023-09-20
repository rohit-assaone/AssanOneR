import React from 'react'
import { Link } from 'react-router-dom'
import Car from '../../animations/Car'

const Sell_Insurance = () => {
  return (
    <div className='flex row'>
        <h1 className='text-primary mb-5'>SELL INSURANCE</h1>
        <div class="card mx-3 col" >
            <div class="card-body" style={{display: "grid", placeItems: "center"}}>
                <Link to="/healthInsurance" className='text-decoration-none text-black'>
                    <h5 class="card-title"><i class="fa-solid fa-notes-medical fa-2x mb-3"></i></h5>
                    <h2 class="card-text">Health Insurance</h2>
                </Link>
            </div>
        </div>
        <div class="card mx-3 col" >
            <div class="card-body" style={{display: "grid", placeItems: "center"}}>
                <Link to="/carInsurance" className='text-decoration-none text-black'>
                    <div style={{width: "80px", height: "80px"}}><Car /></div>
                    <h2 class="card-text">Car Insurance</h2>
                </Link>
            </div>
        </div>
        <div class="card mx-3 col" >
            <div class="card-body" style={{display: "grid", placeItems: "center"}}>
                <Link to="/twoWheeler" className='text-decoration-none text-black'>
                    <h5 class="card-title"><i class="fa-sharp fa-solid fa-motorcycle fa-2x mb-3"></i></h5>
                    <h2 class="card-text">Two Wheeler Insurance</h2>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Sell_Insurance