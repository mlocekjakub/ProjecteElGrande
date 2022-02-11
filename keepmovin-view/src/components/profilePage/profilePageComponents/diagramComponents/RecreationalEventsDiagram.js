import React, {useState, useEffect} from 'react';
import { Pie, Doughnut} from 'react-chartjs-2';
import "./RecreationalEventsDiagram.css"

function RecreationalEventsDiagram() {

    const [data, setData] = useState({});

    useEffect(() => {
        setData({
            labels: ['Football', 'Basketball', 'Box'],
            datasets: [
                {
                    label: 'Recreational Events',
                    backgroundColor: [
                        '#B21F00',
                        '#C9DE00',
                        '#2FDE00',
                    ],
                    hoverBackgroundColor: [
                        '#501800',
                        '#4B5000',
                        '#175000',
                    ],
                    data: [2, 5, 9],
                    borderColor: "rgba(247, 103, 7, 0)"
                }
            ]
        });
    }, [])

    return (
        <div className="recreational-events-container">
            <Doughnut
                data={data}
                options={{
                    title:{
                        display:true,
                        text:'Recreational Events',
                        fontSize:20,
                        fontColor: "White"
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                }}
            />
        </div>
    )
}

export default RecreationalEventsDiagram;