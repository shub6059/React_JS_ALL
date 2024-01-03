// import React, { useEffect, useState } from "react";

// function App (){

//   // const [details,setDetails] = useState(0)
//   const [products,setProducts] = useState(0)

//   useEffect(()=>{
//     fetchData();
//   },[]);

//   const fetchData = () => {
//     fetch('https://dummyjson.com/products')
//       .then((res) => res.json())
//       .then((json) => {
//         setProducts(json);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   };

              


//   return(
//     <div>
// {/* <p>{details}  </p>
// <button onClick={()=>{
//   setDetails(details+1)
// }}>+</button>
// <button onClick={()=>{
//   setDetails(details-1)
// }}>-</button> */}



// <h1>Products</h1>
//       <ul>
//         {products.map((products) => (
//           <li key={products.id}>{products.name}</li>
//         ))}
//       </ul>
//  </div>

//   )
// }
// export default App

import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
// const cars = ["volvo" , "honda" , "suzuki" ,"tata"]



  const fetchData = async () => {
    try {
      // const response = await axios.get('https://dummyjson.com/products');
      // console.log("data",response.data.products)
      // setData(response.data.products);
fetch('https://dummyjson.com/products')
.then((res)=>{console.log("res ::::",res)
return res.json()

}).then((data)=>{
  console.log("data:::::" , data.products)
  setData(data.products)
  console.log("data",data)
}).catch((error)=>{
  console.log("error:::::",error)
})
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
   
    fetchData();
  }, []);

  return (
    <div>
      {
        data.length>0 && data.map((item)=>{
        
           return ( 
           <div>
             <h2 align="center">Table Display</h2>
      <table border="1px solid black">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>DiscountPercentage</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Button</th>
            {/* Add more headers for each column */}
          </tr>
           </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td align='left'>  {item.title}</td>
              <td align='left'>{item.description}</td>
              <td align='center'>${item.price}</td>
              <td align='center'>{item.discountPercentage}%</td>
              <td align='center'>{item.stock}</td>
              <td align='center'>{item.brand}</td>
              <td align='center'>{item.category}</td>
              <td align='center'><button>I</button><button>U</button><button>D</button></td>
              {/* Add more cells for each column */}
            </tr>
          ))}
        </tbody>
      </table>
           {/* <p>{item.title}</p>
              <p>{item.brand}</p>
           <p>{item.description}</p> */}
           </div>
           )
         
        })
       
      }
     
    </div>
  );
}

export default App;
