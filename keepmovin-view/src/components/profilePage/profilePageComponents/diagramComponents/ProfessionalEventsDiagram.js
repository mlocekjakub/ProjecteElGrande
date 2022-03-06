import React, {useState, useEffect} from 'react';
import { Pie, Doughnut} from 'react-chartjs-2';
import "./Diagram.css"

function ProfessionalEventsDiagram() {

    const [data, setData] = useState({});

    useEffect(() => {
        setData({
            labels: ['Running', 'Swimming', 'Basketball',
                'Hockey'],
            datasets: [
                {
                    label: 'Professional Events',
                    backgroundColor: [
                        '#B21F00',
                        '#C9DE00',
                        '#00A6B4',
                        '#6800B4'
                    ],
                    hoverBackgroundColor: [
                        '#501800',
                        '#4B5000',
                        '#003350',
                        '#35014F'
                    ],
                    data: [6, 6, 8, 9],
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
                        text:'Professional Events',
                        fontSize:18,
                        fontColor: "#FFFFFF"
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

export default ProfessionalEventsDiagram;