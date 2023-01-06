import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch data from API or import data from JSON file
  }, []);

  const locations = ["Location 1", "Location 2", "Location 3"];
  const series = locations.map(location => {
    return {
      name: location,
      data: data
        .filter(d => d.location === location)
        .map(d => ({ time: d.time, value: d.pm1 }))
    };
  });

  return (
    <div>
      <LineChart width={600} height={300} data={series}>
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
        {series.map(s => (
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        ))}
      </LineChart>
    </div>
  );
};

export default Dashboard;
