
import React, { useEffect, useState } from "react";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import Carousel from "./cards/Carousel";
import Card4 from "./cards/Card4";
import Card5 from "./cards/Card5";
import Card6 from "./cards/Card6";
import axios from "axios";
import { env } from "../../config/config";

function DataSet1() {
  const [responseData, setResponseData] = useState({});
  const [isLoading, setLoading] = useState(false);
  

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    setLoading(true);
    try {
      let response = await axios.get(`${env.api}/data`,{
        headers :{
            'authorization' : window.localStorage.getItem("app-token")
        }
    });
      console.log(response.data)
      setResponseData(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };


  return (
    <div className="container">
      <div className="row">
      {isLoading ? (
          <span>Loading...</span>
        ) : responseData[0] ? (
          <>
            <Card1 />
            <Card2
              title={responseData[0].card2?.title}
              content={responseData[0].card2?.content}
            />
            <Card3
              table_headers={responseData[0].card3?.table_headers}
              data={responseData[0].card3?.data}
            />
            <Carousel />
            <Card4
              title={responseData[0].card4?.title}
              content={responseData[0].card4?.content}
            />
            <Card5
              title={responseData[0].card5?.title}
              content={responseData[0].card5?.content}
            />
            <Card6
              table_headers={responseData[0].card6?.table_headers}
              data={responseData[0].card6?.data}
              title={responseData[0].card6?.title}
            />
          </>
        ) : (
          <span>No data available</span>
        )}
      </div>
    </div>
  );
}

export default DataSet1;
