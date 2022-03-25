import React, {useState, useEffect} from 'react';
import {Doughnut} from 'react-chartjs-2';
import './Diagram.css'
import axios from "axios";
import {useSelector} from "react-redux";

function HostedEventsDiagram() {

    const [data, setData] = useState({});

    const isUserLogged = useSelector((state) => state.isLogged.value);

    const [events, setEvents] = useState([])

    const [sportsList, SetSportsList] = useState([])

    const [isSportsFetched, SetIsSportsFetched] = useState(false)

    useEffect(() => {
        if (isUserLogged) {
            axios
                .get(`/api/Event/events-user/hosted-statistics`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        "etag" : localStorage.getItem('session'),
                    }
                })
                .then(response => {
                    SetSportData(response.data)
                })
        }
    }, [])

    function SetSportData(events) {
        let sports = [];
        events.map((event) => {
            let newSport = {id: event.sports.sportId, sportName: event.sports.name, count: 1}
            if(sports.some(sport => sport.id === newSport.id)) {
                sports.forEach(sport => {
                    if (sport.id === newSport.id) {
                        sport.count = sport.count + 1;
                    }
                })
            }
            else {
                sports.push(newSport)
            }
            
        })
        SetSportsList(sports)
        SetIsSportsFetched(!isSportsFetched);
    }

    useEffect(() => {
        setData({
            labels: sportsList.map((sport) => sport.sportName),
            datasets: [
                {
                    label: 'Hosted Events',
                    backgroundColor: [
                        '#FF4136',
                        '#B21F00',
                        '#C9DE00',
                        '#2FDE00',
                        '#001f3f',
                        '#39CCCC',
                        '#85144b',
                        '#FF851B',
                        '#6b5b95'
                    ],
                    hoverBackgroundColor: [
                        '#865a55',
                        '#501800',
                        '#4B5000',
                        '#175000',
                        '#214a70',
                        '#547777',
                        '#694255',
                        '#a17c5a',
                        '#877f9a'
                    ],
                    data: sportsList.map((sport) => sport.count),
                    borderColor: "rgba(247, 103, 7, 0)"
                }
            ]
        });
    }, [isSportsFetched])

    return (
        <div className="diagram">
            <Doughnut
                data={data}
                options={{
                    title:{
                        display:true,
                        text: 'Hosted Events',
                        fontSize: 18,
                        fontColor: "#1D1E35",
                        fontWeight: 700,
                        paddingBottom: '0.3rem'

                    },
                    legend:{
                        display:true,
                        position:'right',
                        fontSize: 100,
                        fontColor: "hsl(237, 12%, 33%)"
                    }
                }}
            />
        </div>
    )
}

export default HostedEventsDiagram;