import React from 'react';
import { LineChart, Line } from 'recharts';

const data = Array(50)
  .fill(0)
  .map((_, x) => ({ name: 'Page C', uv: x * 10, pv: x * 20, amt: x * 30 }));

export default () => (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);
