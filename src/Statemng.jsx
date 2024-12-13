import React, { useState, useEffect } from "react";

// const Statemng = () => {
//   const [city, setCity] = useState("hyderabad");
//   useEffect(() => {
//     if (city == "hyderabad") {
//       setCity("mhbd");
//     } else {
//       setCity("goa");
//     }
//   }, [city]);
//   return (
//     <div>
//       <h1>{city}</h1>
//     </div>
//   );
// };

// export default Statemng;



const statemng = () => {
    const[sample,setSample]=useState(true)
    
  return (
    <div>{sample?"this is true":"this is false"}</div>
  )
}

export default statemng

