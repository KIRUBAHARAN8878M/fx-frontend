import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { env } from "../../config/config";
import { Link, useNavigate } from "react-router-dom";
import '../../css/login.css'

function OtpVerify() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      rString: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${env.api}/reset-password-page`, values);
      alert(user.data.message);
      navigate("/");
    },
  });
  return (
    <>
      <div className="container login ">
        <span className="row d-flex align-content-center justify-content-center ">
          <span className="col-lg-4 col-md-6 col-sm-9 pt-5 ">
           
            <div className="card o-hidden border-0 shadow-lg  login mt-5 transp pt-2 d-flex align-content-center">
              <div className="card-body p-2">
               
                <div className="row">
                  <div className="col-lg-9 mx-auto">
                    <div className="p-0">
                    <div className="text-center pt-5">
                        <h1 className="h4  myname">
                        Verify your OTP with Email!
                        </h1>
                      </div>
                      

                      <form className="user pt-5" onSubmit={formik.handleSubmit}>
                        <div class="mb-3">
                      
                          <input
                            type="text"
                            
                            className={'form-control bg-transparent text-white'}
                            style={{ border:0,borderBottom: "2px solid #fff"}}
                            id="exampleInputEmail1"
                            name="rString"
                            onChange={formik.handleChange}
                            placeholder='Enter Otp'
                            value={formik.values.rString}
                          />
                        </div>
                        <div class="mb-3 pt-3 pb-3">
                          <input
                            type="email"
                            className={'form-control bg-transparent text-white'}
                            style={{ border:0,borderBottom: "2px solid #fff"}}
                            id="exampleInputEmail1"
                            name="email"
                            placeholder="Enter email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                          />
                        </div>
                        <div class="mb-3 pb-3">
                    
                          <input
                            type="password"
                            className={'form-control bg-transparent text-white'}
                            style={{ border:0,borderBottom: "2px solid #fff"}}
                            id="exampleInputEmail1"
                            name="password"
                            placeholder="Enter new password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                          />
                        </div>
                        <div class="d-grid gap-2 col-12 pt-2 pb-5 smx-auto">
  <button type="submit" class="btn btn-primary fw-bold btn-block" > submit</button>
  
</div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center p-3 fw-bold mt-2">
                        <p className='text-white'>
                         
                          <Link to={"/"} className='text-white'>Back to login</Link>
                        </p>
                        
                      </div>
          </span>
        </span>
      </div>
    </>
  );
}

export default OtpVerify;
