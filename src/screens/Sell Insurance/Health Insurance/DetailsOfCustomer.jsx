import {React, useState} from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { postDetailsOfCustomer } from '../../../redux/detailsOfCustomerSlice';
import Spinner from '../../../components/Spinner/Spinner';

const DetailsOfCustomer = () => {
    // State variables
    const { loading, success, error } = useSelector((state) => state.customerDetails);


    const [title, setTitle] = useState("");
    const [fullName, setFullName] = useState("");
    const [mobileNo, setMobileNo] = useState(null);
    const [city, setCity] = useState("");
    const [sumAssured, setSumAssured] = useState(null);
    const [gender, setGender] = useState("");
    const [relation, setRelation] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [noOfChildren, setNoOfChildren] = useState(null);

    // necessary imports
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // After clicking View Quote
    const handleClickOnViewQuote = (e) => {
        e.preventDefault();
        const newData = {
          title: title,
          full_name: fullName,
          mobile: mobileNo,
          city: city,
          sumAssured: sumAssured,
          gender: gender,
          relation: relation,
          dateOfBirth: dateOfBirth,
          noOfChildren,
        };
    
        dispatch(postDetailsOfCustomer(newData));
        console.log("After it");
        console.log(success);
        navigate('/planDetails')
      };
    
  return (
    <div className='text-start'>
        <h1 className='text-primary mb-5'>Health Insurance</h1>
        <h4 className='mb-4'>Nominee Details</h4>
        <div className='border p-4 position-relative' >
            <h4 className=''>Basic details Of Customer</h4>
            <hr className='w-50 mb-4'/>

            {/* Title, Name Mobile number*/}
            <div className='row mb-3 column-gap-1'>
                <div className='col'>
                    <button className="btn border-secondary-subtle dropdown-toggle w-100 btn-inside-secondary" type="button" 
                            data-bs-toggle="dropdown" aria-expanded="false">
                        {title.length === 0 ? "Select Title" : title}
                    </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item text-center"
                            onClick={() => setTitle("Mr.")}
                        >
                            Mr.
                        </li>
                        <li className="dropdown-item text-center"
                        onClick={() => setTitle("Ms.")}
                     >
                        Ms.
                    </li>
                    </ul>
                </div>
                <div className='col'>
                <input type="text" 
                    className="form-control" 
                    placeholder="Full name" 
                    aria-label="emailid" 
                    aria-describedby="basic-addon2"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                     />                 
                </div>
                <div className='col'>
                <input type="number" 
                    className="form-control" 
                    placeholder="Mobile Number" 
                    aria-label="Recipient's username" 
                    aria-describedby="basic-addon2"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)} />                 
                </div>
          
            </div>
            

           {/* City, Sum Assured, AddMembers button  */}
            <div className='row mb-5 column-gap-1'>
                <div className='col'>
                    <input type="text" 
                            className="form-control" 
                            placeholder="City" 
                        aria-label="emailid" 
                        aria-describedby="basic-addon2"
                        value={city}
                        onChange={(e) => setCity(e.target.value)} 
                    />                 
                </div>
                <div className='col'>
                <input type="text" 
                    className="form-control"
                    placeholder="Sum Assured" 
                    aria-label="emailid" 
                    aria-describedby="basic-addon2"
                    value={sumAssured}
                    onChange={(e) => setSumAssured(e.target.value)}
                     />                 
                </div>
                <div className='col'>
                    <button className='btn btn-outline-primary w-100 px-3'>Add Members</button>
                </div>

            </div>


           {/* Select Gender, Relation, No of Child  */}
            <div className='row mb-3 column-gap-1'>
                <div className='col'>
                    <p style={{}} className='text-secodary m-0'>Select Gender</p>

                    <div className='d-flex '>
                        <div className='form-check'>
                            <input className="form-check-input" 
                                style={{ width: "14px", height: "14px"}} 
                                type="radio" 
                                name="gender" 
                                id="Yes"
                                onClick={() => setGender("Male")}
                            />
                            <label className="form-check-label" role='button' style={{marginRight: "10px", fontSize: "16px"}} htmlFor="Yes">
                            Yes
                            </label>
                        </div>

                        <div className='form-check'>
                        <input className="form-check-input" 
                            style={{ width: "14px", height: "14px"}} 
                            type="radio" 
                            name="gender" 
                            id="No"
                            onClick={() => setGender("Female")} />
                        <label className="form-check-label" role='button' style={{marginRight: "10px", fontSize: "16px"}} htmlFor="No">
                            No
                        </label>
                        </div>
                    </div>
                </div>


                <div className='col'>
                <input type="text" 
                    className="form-control"
                    placeholder="Relation" 
                    aria-label="relation" 
                    aria-describedby="basic-addon2"
                    value={relation}
                    onChange={(e) => {
                      setRelation(e.target.value);
                    }} 
                />                 
                </div>
                <div className='col'>
                <input type="text" 
                    className="form-control" 
                    placeholder="No Of children" 
                    aria-label="emailid" 
                    aria-describedby="basic-addon2"
                    value={noOfChildren}
                    onChange={(e) => setNoOfChildren(e.target.value)} 
                />                 
                </div>

            </div>

           {/* Select Gender, Relation, No of Child  */}
            <div className='row mb-3 column-gap-1'>
                <div className='col'>
                <input type="text" 
                    className="form-control" 
                    placeholder="Eldest Child DOB" 
                    aria-label="emailid" 
                    aria-describedby="basic-addon2"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)} />                 
                </div>
                <div className='col'>
                    { loading ? <Spinner /> : ""}
                    <Link to="/planDetails">
                        <button  onClick={handleClickOnViewQuote} 
                        className='btn btn-primary w-100 px-4'>View Quote</button>    
                    </Link>
                </div>
                <div className='col'></div>

            </div>



            
        </div>
    </div>
  )
}

export default DetailsOfCustomer