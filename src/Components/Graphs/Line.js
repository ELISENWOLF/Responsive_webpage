import React from "react";
import {AreaChart, Area, XAxis, YAxis, 
  CartesianGrid } from 'recharts';

function Graphs() {
  
  const data = [
      {name:'Jan', x:19, y:15},
      {name:'Feb', x:7, y:10},
      {name:'Mar', x:16, y:15},
      {name:'Apr', x:12, y:18},
      {name:'May', x:16, y:15},
      {name:'Jun', x:10, y:24},
    ];

  return (
    <div className="graph-container">
      <AreaChart width={400} height={250} data={data} id='linegraph'>
 <CartesianGrid/>
<XAxis dataKey="name" />
<YAxis />
<Area type="monotone" dataKey="x" 
        color="#B5B3FB" />
    <Area type="monotone" dataKey="y" 
        color="#80E2FF" />
  </AreaChart>
  <div className='line-share'>
        <div className='line-share-details'>
        <span className='line-share-color1'></span>
            <h5 className='line-short-desc'>Products sold</h5>
        </div>
        <div className='line-share-details'>
        <span className='line-share-color2'></span>
            <h5 className='line-short-desc'>Total views</h5>
        </div>
    </div>
    </div>
  );
}

export default Graphs;