import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css"
import imgs from "../../public/vite.svg"
const AxiosConnection = () => {
  const [data, setData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };



  return (
    <div style={{ backgroundColor:"maroon" ,  padding:"2%", borderRadius:"20px" }}>
      <button onClick={handleClick}>{isClicked ? 'Close' : 'Open'}</button>
      {isClicked &&
        data.map((val, i) => (
          <div key={i}>
            <h1 style={{backgroundColor:"ThreeDShadow",borderRadius:"15px", padding:"2%", color:"ButtonHighlight",display:"flex",justifyContent:"space-between"}}>
              {val.title}
              { <img src={imgs} alt="img"/>}
            </h1>
          </div>
        ))}

            <h1>Welocme to play with Axios!</h1>
    </div>
  );
};

export default AxiosConnection;
