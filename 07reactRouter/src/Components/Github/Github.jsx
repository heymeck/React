import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data= useLoaderData();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(`https://api.github.com/users/heymeck`)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);
  return (
    <>
      <div className="flex gap-10 items-center my-4 ">
        <img src={data.avatar_url} alt=" git profile" width="300px" />
        <div>Followers: {data?.followers}</div>
      </div>
    </>
  );
}

export default Github;
export const github=async()=>{
    const response= await fetch(`https://api.github.com/users/heymeck`)
    return response.json()
}
