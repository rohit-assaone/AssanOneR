import React from 'react'

const Footer = () => {
  return (
    <footer className="grid text-center place-items-center footer bg-primary p-4" style={{width: "100%", color: "white"}}>
      <div className="">
          <h5>Assan Saathi by Assan One Insurance Broker PVT. LTD.</h5>
        <div className="">
          <div>
            <i className="fa fa-phone"></i>
            <a href="tel:18002081155">
              <span style={{color: "white"}}>022 48808692</span>
            </a>
            <span className="seperate" style={{color: "white"}}>|</span>
            <br />
            <i className="fa fa fa-clock-o"></i>
            <br />
            <i className="fa fa-envelope"></i>
            <a href="mailto:support@Assan one.com">hr@assanone.com</a>
          </div>
          <div className="copyright mb-3">
            Copyright © 2023 <strong style={{color: "white"}}><a href="#" className='text-decoration-none text-black'>Assan one Insurance Broker PVT. LTD.</a>.</strong> All rights reserved.
            <a href="">Legal Information</a>
          </div>

          {/* social icons */}
          <div className="socialicon d-flex flex-column align-items-center">
            <p>Follow us on:</p>
            <ul className='list-unstyled w-25 d-flex justify-content-between'>
              <li className=''>
                <a href="" target="_blank" title="Facebook">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li  className=''>
                <a href="" target="_blank" title="Twitter" className='nav-link'>
                <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="" target="_blank" title="Linkedin">
                <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="" target="_blank" title="Instagram">
                  <i style={{color: "white"}} class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href='' target="_blank" title="YouTube">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="licenceText">
        Assan One Insurance Brokers Private Limited <br />
        CIN: U66220MH2023PTC399391 
        <br />

      </p>
    </footer>
  )
}

export default Footer