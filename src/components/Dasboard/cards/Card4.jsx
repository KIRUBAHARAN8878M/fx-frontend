import React from 'react'

function Card4({title,content}) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
    <div className={`card  cards  h-100 py-2`}>
            <div className="card-title h5 text-center">
              {title}
            </div>
            <div className="card-body">
             {
              content.map((data,index)=>{
                return(
                  <div key={index} className="d-flex pb-5 fw-bold ">
                         <div className={`mx-4 text-${data.theme}`}>{data.value}</div><div className={`mx-2 text-${data.theme}`}>{data.data}</div>
                  </div>
                )
              })
             }
             
              
            </div>
          </div>
          </div>
  )
}

export default Card4