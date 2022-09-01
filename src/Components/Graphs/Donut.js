import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './index.css'

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {

  datasets: [
    {
      data: [1.9,2,3.3,3.8],
      backgroundColor: [
        '#F49FA8',
        '#FFDF94',
        '#A3A0FB',
        '#80E2FF',
      ]
    },
  ]
};

function Donut() {
  return (
  <div className='donut-container'>
    <div className='sales-value'>
        <h5 className='value1'>230,900</h5>
        <h5 className='value2'>Sales</h5>
    </div>
    <div className='donut'>
    <Doughnut data={data} />
    </div>
    <hr className='donut-line'/>
    <div className='donut-share-container'>
    <div className='donut-share1'>
        <div className='donut-share-details'>
            <span className='donut-share-color1'></span>
            <h5 className='share-country'>France</h5>
            <h5 className='share-value'>4260 Sales</h5>
        </div>
        <div className='donut-share-details'>
        <span className='donut-share-color2'></span>
            <h5 className='share-country'>Italy</h5>
            <h5 className='share-value'>3970 Sales</h5>
        </div>
    </div>
    <div className='donut-share2'>
        <div className='donut-share-details'>
        <span className='donut-share-color3'></span>
            <h5 className='share-country'>Japan</h5>
            <h5 className='share-value'>4260 Sales</h5>
        </div>
        <div className='donut-share-details'>
        <span className='donut-share-color4'></span>
            <h5 className='share-country'>Canada</h5>
            <h5 className='share-value'>3970 Sales</h5>
        </div>
    </div>
    </div>
  </div>
  )
}

export default Donut;