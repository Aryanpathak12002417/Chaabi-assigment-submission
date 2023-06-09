import React from 'react'
import {Doughnut} from 'react-chartjs-2'

export default function PieChart({chartData }) {
  return (
    <>
        <article>
            <Doughnut data={chartData}
                options={{
                plugins: {
                    title: {
                    display: true,
                    text: "Results"
                    }
                }
        }}
        />
        </article>
    </>
  )
}
