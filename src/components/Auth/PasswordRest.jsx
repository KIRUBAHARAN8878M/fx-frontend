import React from "react";
import { env } from "../../config/config";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../css/login.css'

function Passwordreset() {
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      let user = await axios.post(`${env.api}/resetpassword`, values);
      console.log(user.data.message);
      alert(user.data.message);
    },
  });
  return (
    <div className="container login" >
        <span className="row d-flex align-content-center justify-content-center ">
          <span className="col-lg-4 col-md-6 col-sm-9 pt-5 ">
           
            <div className="card o-hidden login border-0 shadow-lg  mt-5 transp pt-2 d-flex align-content-center">
              <div className="card-body p-2">
               
              <div className="row">
                  <div className="col-lg-9 mx-auto">
                    <div className="p-0">

                    <div className="text-center pt-5">
                        <h1 className="h4  myname">
                        Verify your email!
                        </h1>
                      </div>
                    

                    <form className="user pt-5" onSubmit={formik.handleSubmit}>
                      <div class="mb-3">
                        
                        <input
                          type="email"
                          className={'form-control bg-transparent text-white'}
                          style={{ border:0,borderBottom: "2px solid #fff"}}
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          name="email"
                          placeholder="Enter mail address to confirm"
                          onChange={formik.handleChange}
                          value={formik.values.email}
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
  );
}

export default Passwordreset;
