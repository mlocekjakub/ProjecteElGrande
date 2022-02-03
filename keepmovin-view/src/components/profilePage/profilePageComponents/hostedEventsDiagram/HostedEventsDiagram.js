import React, {useState, useEffect} from 'react';
import { Pie, Doughnut} from 'react-chartjs-2';
import './HostedEventsDiagram.css'

function HostedEventsDiagram() {

    const [data, setData] = useState({});

    useEffect(() => {
        setData({
            labels: ['Basketball', 'Running'],
            datasets: [
                {
                    label: 'Hosted Events',
                    backgroundColor: [
                        '#B21F00',
                        '#e1ff00'
                    ],
                    hoverBackgroundColor: [
                        '#501800',
                        '#4B5000'
                    ],
                    data: [6, 1],
                    borderColor: "rgba(247, 103, 7, 0)"
                }
            ]
        });
    }, [])

    return (
        <div className="hosted-events-container">
            <Doughnut
                data={data}
                options={{
                    title:{
                        display:true,
                        text: 'Hosted Events',
                        fontSize:20,
                        fontColor: "White"

                    },
                    legend:{
                        display:true,
                        position:'right',
                        fontSize: 100,
                        fontColor: "White"
                    }
                }}
            />
        </div>
    )
}

export default HostedEventsDiagram;