import axios from "axios";
import React, { useEffect, useState } from "react";
import Train from "./pages/Train";
import TrainList from "./pages/TrainList";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .request({
        data: {
          companyName: "Mosin Station",
          clientID: "c93b8ddf-b6c9-450f-9189-b09c7fd22db8",
          clientSecret: "jMjxZpsbmEzOZdlz",
          ownerName: "Mosin",
          ownerEmail: "mosinansari082@gmail.com",
          rollNo: "12020702",
        },
        method: "POST",
        url: `http://20.244.56.144/train/auth`,
      })
      .then((resp) =>
        axios
          .request({
            headers: {
              Authorization: `Bearer ${resp.data.access_token}`,
            },
            method: "GET",
            url: `http://20.244.56.144:80/train/trains`,
          })
          .then((res) => {
            setData(res.data);
          })
      );
  }, []);

  console.log(data)
  return (
    <div className="">
      
     <TrainList data={data}/>
      {/* <Train /> */}
    </div>
  );
};

export default App;
