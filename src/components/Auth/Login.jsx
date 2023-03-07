import React from "react";
import '../../css/login.css'
import { useFormik } from "formik";
import axios from "axios";

import { env } from "../../config/config";
import { Link, useNavigate } from "react-router-dom";

function Login() {
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
      name: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please enter username";
      }
      if (values.password === "") {
        errors.password = "Please enter password";
      }

      return errors;
    },

    onSubmit: async (values) => {
      try {
        let loginData = await axios.post(`${env.api}/login`, values);
        console.log(loginData);

        if (loginData.data.token) {
          if (loginData.status === 200) {
            navigate("/portal/data");
            window.localStorage.setItem("app-token", loginData.data.token);
            window.localStorage.setItem("username", loginData.data.user.name);
          }
        } else {
          alert(loginData.data.message);
        }
      } catch (error) {
        alert(error.response.data.message);
        console.log(error);
      }
    },
  });
  return (
   
    
      <div className="container-fluid login ">
        <span className="row d-flex align-content-center justify-content-center ">
          <span className="col-lg-4 col-md-6 col-sm-9 pt-5 ">
           
            <div className="card  login mt-5 transp pb-5  d-flex align-content-center">
              <div className="card-body p-2">
                
              <div className="row">
                  <div className="col-lg-9 mx-auto">
                    <div className="p-0">

                      
                      <div className="text-center pt-5">
                        <h1 className="h4  myname">
                          Log in to your account!
                        </h1>
                      </div>



                      <form className="user pt-5" onSubmit={formik.handleSubmit}>
                        <div className="form-group text-white ">
                          <input
                            className={`form-control bg-transparent text-white ${
                              formik.errors.name ? `input-error` : ``
                            }`}
                            style={{ border:0,borderBottom: "2px solid #fff"}}
                            id="exampleInputName"
                            type={"text"}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            name="name"
                            placeholder="user name"
                          />
                          <span style={{ color: "red" }}>
                            {formik.errors.name}
                          </span>
                        </div>
                        <div className="form-group pt-5">
                          <input
                           className={`form-control bg-transparent text-white ${
                            formik.errors.name ? `input-error` : ``
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
                        <div className="form-group text-white">
                          <div className="text-end  m-1 fw-bold ">
                            <Link to={"/resetpassword"} className="text-white">
                              Forgot password
                            </Link>
                          </div>
                        </div>
                        <div class="d-grid gap-2 col-12 pt-2 smx-auto">
  <button type="submit" class="btn btn-primary fw-bold btn-block" > LOGIN</button>
  
</div>

                     
                      </form>
                      
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <div className="text-center p-3 fw-bold mt-2">
                        <p className='text-white'>
                          Don't have an Account?{" "}
                          <Link to={"/register"} className='text-white'>Register</Link>
                        </p>
                        <p className='text-white'>Privacy policy Terms of use</p>
                      </div>
                    
          </span>
        </span>
      </div>
 
  );
}

export default Login;
