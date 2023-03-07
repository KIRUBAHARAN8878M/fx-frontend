import React from 'react'
import date from 'date-and-time';

function Card1() {
  let name = window.localStorage.getItem('username')
    const now = new Date();
  
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className={`card cards  h-100 py-2`}>
            <div className="card-body">
            <div
                    className={`text-xs font-weight-bold fw-bold  mb-1`}
                  >
                    Hi,      <span className="text-center mx-5 px-5">  Time : {date.format(now, 'hh:mm:ss A ')}</span>
                  </div>
                  <div className=" text-center text-uppercase mx-auto fw-bold fs-3 p-5">{name}</div>
              <div className="">{date.format(now, 'ddd, MMM DD YYYY') }</div>
            </div>
          </div>
        </div>
  )
}

export default Card1