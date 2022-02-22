import {Line} from 'react-chartjs-2'
import 'chart.js/auto'
import React from 'react'
class Chart1 extends React.Component {
    render()
    {
        const data = this.props.data
        const label = data[0].datas.map(data=>data.time)
        console.log(data)
        return(
            <Line
            
            datasetIdKey='id'
            data={{
            
            labels: label,
            datasets: [
                {
                id: 1,
                label: data[0].device_name,
                data: data[0].datas.map(e=>e.value),
                backgroundColor:[
                    'rgba(255,99,132)'
                ],
                borderWidth:2,
                fill: false,
                pointBorderWidth:0,
                borderColor:'rgba(114, 217, 242)'
                },
                
            ],
            
            }}
            width={'100%'}
            height={'70%'}
            options={{ maintainAspectRatio: true,
            responsive:true,
            plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            x: {
            ticks: {
                display: false
            }
        }
        }
        }}
        />
        )}
}
export default Chart1