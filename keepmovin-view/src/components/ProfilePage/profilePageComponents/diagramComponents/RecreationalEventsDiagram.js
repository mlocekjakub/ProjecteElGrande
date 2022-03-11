import React, {useState, useEffect} from 'react';
import { Pie, Doughnut} from 'react-chartjs-2';
import "./Diagram.css"

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
        <div className="diagram">
            <Doughnut
                data={data}
                options={{
                    title:{
                        display:true,
                        text:'Recreational Events',
                        fontSize:18,
                        fontColor: "#1D1E35",
                        fontWeight: 700,
                        paddingBottom: '0.3rem'
                    },
                    legend:{
                        display:true,
                        position:'right',
                        fontColor: "hsl(237, 12%, 33%)"
                    }
                }}
            />
        </div>
    )
}

export default RecreationalEventsDiagram;