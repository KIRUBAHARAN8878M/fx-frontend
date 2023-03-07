import React from 'react'

function Carousel() {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
          <div className={`card cards`}>

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://image-charts.com/chart.js/2.8.0?bkg=white&c=%7B%20%22type%22%3A%20%22bar%22%2C%20%22data%22%3A%20%7B%20%22labels%22%3A%20%5B%20%22January%22%2C%20%22February%22%2C%20%22March%22%2C%20%22April%22%2C%20%22May%22%2C%20%22June%22%2C%20%22July%22%20%5D%2C%20%22datasets%22%3A%20%5B%20%7B%20%22label%22%3A%20%22Dataset%201%22%2C%20%22backgroundColor%22%3A%20%22rgba%28255%2C%2099%2C%20132%2C%200.5%29%22%2C%20%22borderColor%22%3A%20%22rgb%28255%2C%2099%2C%20132%29%22%2C%20%22borderWidth%22%3A%201%2C%20%22data%22%3A%20%5B%20-31%2C%20-70%2C%20-30%2C%20-33%2C%20-9%2C%2014%2C%20-41%20%5D%20%7D%2C%20%7B%20%22label%22%3A%20%22Dataset%202%22%2C%20%22backgroundColor%22%3A%20%22rgba%2854%2C%20162%2C%20235%2C%200.5%29%22%2C%20%22borderColor%22%3A%20%22rgb%2854%2C%20162%2C%20235%29%22%2C%20%22borderWidth%22%3A%201%2C%20%22data%22%3A%20%5B%2073%2C%2041%2C%2029%2C%2061%2C%20-65%2C%2059%2C%2038%20%5D%20%7D%20%5D%20%7D%2C%20%22options%22%3A%20%7B%20%22responsive%22%3A%20true%2C%20%22legend%22%3A%20%7B%20%22position%22%3A%20%22top%22%20%7D%2C%20%22title%22%3A%20%7B%20%22display%22%3A%20true%2C%20%22text%22%3A%20%22Chart.js%20Bar%20Chart%22%20%7D%20%7D%20%7D" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1127138768/photo/business-trends-graphs-and-charts.jpg?b=1&s=170667a&w=0&k=20&c=HLVDXi6qYV5kR10eBM4S5wmn8wsDEzzNbb3xLm_t2Uc=" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1347345879/photo/financial-rising-graph-and-chart-with-lines-and-numbers.jpg?b=1&s=170667a&w=0&k=20&c=Pi9eTsg9y20nRY1N-lnRDZqKemW6bXpkeHh2zrbauuA=" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
  )
}

export default Carousel