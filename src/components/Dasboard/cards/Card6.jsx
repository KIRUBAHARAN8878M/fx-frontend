import React from 'react'

function Card6({table_headers,title,data}) {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
    <div className={`card  cards  `}>
          <div className="card-title h5 text-center">
              {title}
            </div>
            <div className="card-body">
              <table className="table text-dark">
                <thead>
                  <tr className="text-center">
                    {table_headers.map((data, index) => {
                      return (
                        <th scope="col" key={index}>
                          {data}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, index) => {
                    return (
                      <tr key={index}>
                        {data.map((value, index) => {
                          return <td key={index}>{value}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          </div>
  )
}

export default Card6