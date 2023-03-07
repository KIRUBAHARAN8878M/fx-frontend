import React from "react";
import '../../css/login.css'
import { useFormik } from "formik";
import axios from "axios";
import { env } from "../../config/config";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
//   let username = "abc";
//   let pass = "123";
//   let login = () => {
//     if (username == "abc" && pass == "123") {
//         navigate("/portal/dashboard");
//     } else {
//       alert("Worng data");
//     }
//   };

  let formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "Please enter name "
      }
      if (values.email === "") {
        errors.email = "Please enter email"
      }
      if (values.password === "") {
        errors.password = "Please enter password"
      }
      
      return errors;
    }, 
    onSubmit: async (values) => {
      try {
        await axios.post(`${env.api}/register`, values);
        
        navigate("/");
      } catch (error) {
        alert(error.response.messsage)
        console.log(error);
      }
    },
  });
  return (
   
    <div className="container login">
    <span className="row d-flex align-content-center justify-content-center ">
      <span className="col-lg-4 col-md-6 col-sm-9 pt-5 ">
      
        <div className="card o-hidden border-0 shadow-lg  mt-5 login transp pt-2 d-flex align-content-center">
          <div className="card-body p-2">
          
          <div className="row">
              <div className="col-lg-9 mx-auto">
                <div className="p-0">

                  
                <div className="text-center pt-5">
                        <h1 className="h4  myname">
                          Register your account!
                        </h1>
                      </div>


                    <form className="user" onSubmit={formik.handleSubmit}>
                    <div className="form-group pt-5">      
                        <input
                          className={`form-control bg-transparent text-white ${
                            formik.errors.name ? `input-error` : ``
                          }`}
                          style={{ border:0,borderBottom: "2px solid #fff"}}
                          type={"text"}
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          name="name"
                          placeholder="Enter username"
                        />
                         <span style={{ color: "red" }}>{formik.errors.name}</span>
                      </div>
                      <div className="form-group text-white pt-5">
                          <input
                            className={`form-control bg-transparent text-white ${
                              formik.errors.email ? `input-error` : ``
                            }`}
                            style={{ border:0,borderBottom: "2px solid #fff"}}
                            id="exampleInputEmail"
                            type={"email"}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name="email"
                            placeholder="user email"
                          />
                          <span style={{ color: "red" }}>
                            {formik.errors.email}
                          </span>
                        </div>
                        <div className="form-group pt-5">
                          <input
                           className={`form-control bg-transparent text-white ${
                            formik.errors.email ? `input-error` : ``
                          }`}
                          style={{ border:0,borderBottom: "2px solid #fff"}}
                            id="exampleInputPassword"
                            type={"password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder="Password"
                            name="password"
                          />
                          <span style={{ color: "red" }}>
                            {formik.errors.password}
                          </span>
                        </div>
                     
                        <div class="d-grid gap-2 col-12 pt-4 smx-auto">
  <button type="submit" class="btn btn-primary fw-bold btn-block" > REGISTER</button>
  
</div>
                    </form>
                    <div className='text-center fw-bold p-3 mt-2'>
                    <p>Already a member?{' '}  
                         <Link to={'/'} className='text-white'>Login</Link></p>
                    
                    </div>
                 
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </span>
        </span>
      </div>
  );
}

export default Register;
