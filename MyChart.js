import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    location: "Location 1",
    time: "2022-01-01T00:00:00Z",
    pm1: 10,
    pm2_5: 20,
    pm10: 30
  },
  {
    location: "Location 1",
    time: "2022-01-01T01:00:00Z",
    pm1: 15,
    pm2_5: 25,
    pm10: 35
  },
  // additional data points
];

const MyChart = () => {
  return (
    <LineChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pm1" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="pm2_5" stroke="#82ca9d" />
      <Line type="monotone" dataKey="pm10" stroke="#ffc658" />
    </LineChart>
  );
};
