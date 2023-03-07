import React from "react";

function TopBar() {
  const data = [
    {
      title: "Planning",
      icon: (
        <i className="fa-solid fa-circle-check" style={{ color: "green" }}></i>
      ),
      status: "completed",
    },
    {
      title: "Design",
      icon: (
        <i className="fa-solid fa-circle-check" style={{ color: "green" }}></i>
      ),
      status: "completed",
    },
    {
      title: "Developement",
      icon: (
        <i className="fa-solid fa-circle-notch" style={{ color: "green" }}></i>
      ),
      status: "67%",
    },
    {
      title: "Testing",
      icon: (
        <i
          className="fa-solid fa-clock-rotate-left"
          style={{ color: "green" }}
        ></i>
      ),
      status: "waiting",
    },
  ];
  return (
    <div className="container">
      <div className="row ">
        {/* <div className="col-lg-2 col-md-6 col-sm-6 pt-3">
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Overall Progress</h5>
              <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{'--value':'67'}}></div>
              
            </div>
          </div>
        </div> */}
        <div className="col-lg-8 col-md-6 col-sm-6 pt-3 pb-3">
          <div className="card">
            <div className="card-body">
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-label="Basic example"
                  style={{ width: "50%", backgroundColor: "green" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className=" d-flex justify-content-around pt-4 flex-wrap">
                {data.map((card, index) => {
                  return (
                    <div key={index} className="border-end px-5">
                      <div>{card.title}</div>
                      <div className="fs-1">{card.icon}</div>
                      <div>{card.status}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 pt-3">
          {" "}
          <div className="flip-card ">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div
                  className="card "
                  style={{ width: "18rem", backgroundColor: "#B4DFC3" }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-center">Projected </h5>
                    <h6 className="card-subtitle text-center mb-2 ">
                      Launch Date
                    </h6>
                    <div className="d-flex px-3 pt-4">
                      <div className="fs-1 ">
                        <i
                          className="fa-sharp fa-solid fa-flag-checkered "
                          style={{ color: "green" }}
                        ></i>
                      </div>
                      <div className="mx-3">
                        <span>Friday,December 15</span>
                        <h3>121 Days</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flip-card-back">
                <div
                  className="card "
                  style={{ width: "18rem", backgroundColor: "#B4DFC3" }}
                >
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {" "}
                      Welcome to Our Dashboard!
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
