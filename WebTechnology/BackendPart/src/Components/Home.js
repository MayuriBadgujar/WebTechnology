import React, { useEffect, useState } from "react";

export default function Home() {
  var [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9065/televisions")
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        setdata(value);
      });
  }, []);
  return (
    // <div>Home</div>
    <div className="container">
      <h1>Show Users</h1>
      {/* Bootstrap code :table */}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr.</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Place</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((record, i) => (
              <tr>
                <th scope="row"> {i + 1}</th>
                <td>{record.name}</td>
                <td>{record.age}</td>
                <td>{record.place}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}