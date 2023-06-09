import React,{useState} from 'react'
import './Style/status.css'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from './PieChart'
import { Data } from "./Data";
import cancel from './Images/cancel.png'

export default function Stats(props) {
  console.log(props)

  const [chartData, setChartData] = useState({
    labels: ['accuracy','key/5 min','word/min'], 
    datasets: [
      {
        data: [100-props.data.error,props.data.keys,props.data.words],
        backgroundColor: ['#F6FA70', '#FF0060', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  });
 

  return (
    <>
      <section className='status-box'>
        <div className="status-pie">
          <div className='status-diagram'>
            <PieChart chartData={chartData}/>
            <button className='status-btn' onClick={props.handleStats}>
            <img style={{maxWidth:'40px',maxHeight:'40px',minWidth:'40px',minHeight:'40px'}} src={cancel} alt="cancel-icon"/>
          </button>
          </div>
          <div className="status-details">
            <p>Accuracy: {100-props.data.error}%</p>
            <p>Words-per-minute: {parseInt(props.data.words)}</p>
            <p>Keys-per-5-miute: {parseInt(props.data.keys)}</p>
          </div>
          
        </div>
      </section>
    </>
  )
}
