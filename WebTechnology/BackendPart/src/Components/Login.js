import React, { useRef } from "react";

export default function Login() {
  let x1 = useRef();
  let x2 = useRef();
 
  function f1() {


    var data = {
      name: x1.current.value,
      age: x2.current.value,
      place: x3.current.value,
    };
  
    data = JSON.stringify(data);
   
    fetch("http://localhost:9065/televisions", {
      method: "Post",
      body: data,
      headers: {
        "content-type": "application/json",
      },
    })
      .then(function (result) {
        console.log(result);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  return (
    //   <div>Login</div>

    <div className="container">
      <h1>Login Form</h1>
      <input type="text" ref={x1} />
      <br />
      <input type="text" ref={x2} />
      <br />
     
      <button onClick={f1}>Login</button>
    
    </div>
  );
}