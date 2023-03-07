import React from 'react'

function Card2({title,content}) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
    <div className={`card  cards  h-100 py-2`}>
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div
                    className={`text-xs font-weight-bold fw-bold text-uppercase mb-1`}
                  >
                    {title}
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800"></div>
                </div>
                <div className="col-auto">{content}</div>
              </div>
            </div>
          </div>
          </div>
  )
}

export default Card2