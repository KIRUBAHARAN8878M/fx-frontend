import React from 'react'

function Card5({title,content}) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
    <div className={`card cards  h-100 `}>
            <div className="card-title h5 text-center">
              {title}
            </div>
            <div className="card-body">
             <tbody>
             {
              content.map((data,index)=>{
                return(
                  <tr key={index} className="fw-bold">
                    <td className=" px-5  text-dark pb-4">{data.key}</td>
                    <td className="  text-success pb-4">{data.value}</td>
                  </tr>
                )
              })
             }
             </tbody>
              
            </div>
          </div>
          </div>
  )
}

export default Card5