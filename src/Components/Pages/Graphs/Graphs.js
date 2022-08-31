import React from "react";
import {AreaChart, Area, XAxis, YAxis, 
  CartesianGrid } from 'recharts';

function Graphs() {
  
  const data = [
      {name:'Jan', x:19, y:15},
      {name:'Feb', x:8, y:10},
      {name:'Mar', x:16, y:15},
      {name:'Apr', x:12, y:18},
      {name:'May', x:16, y:15},
      {name:'Jun', x:10, y:24},
    ];

  return (
    <div className="graph-container">
      <AreaChart width={400} height={250} data={data}>
 <CartesianGrid/>
<XAxis dataKey="name" />
<YAxis />
<Area type="monotone" dataKey="x" 
        stackId="1" stroke="black" />
    <Area type="monotone" dataKey="y" 
        stackId="1" stroke="blue" />
  </AreaChart>
    </div>
  );
}

export default Graphs;
