import React, {useState, useEffect} from 'react';
import {Doughnut} from 'react-chartjs-2';
import "../../profilePageComponents/diagramComponents/Diagram.css"
import axios from "axios";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

function VisitedHostedEventsDiagram() {

    const [data, setData] = useState({});

    let { visitedUserId } = useParams();

    const isUserLogged = useSelector((state) => state.isLogged.value);

    const [events, setEvents] = useState([])

    const [sportsList, SetSportsList] = useState([])

    const [isSportsFetched, SetIsSportsFetched] = useState(false)

    const theme = useSelector((state) => state.theme.value)

    useEffect(() => {
        axios
            .get(`/api/Event/events-visited-user/hosted-statistics`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "visitedUserId" : visitedUserId,
                }
            })
            .then(response => {
                SetSportData(response.data)
            })
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
        let sports = sportsList.map((sport) => sport.sportName);
        let counts = sportsList.map((sport) => sport.count)
        setData({
            labels: (sports && sports.length !== 0) ? sportsList.map((sport) => sport.sportName) : ['none'],
            datasets: [
                {
                    label: 'Hosted Events',
                    backgroundColor: [
                        `${(sports && sports.length === 0) ? 'rgba(38,38,44,0.2)' : '#FF4136'}`,
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
                        `${(sports && sports.length === 0) ? 'rgba(38,38,44,0.2)' : '#865a55'}`,
                        '#501800',
                        '#4B5000',
                        '#175000',
                        '#214a70',
                        '#547777',
                        '#694255',
                        '#a17c5a',
                        '#877f9a'
                    ],
                    data: (sports && sports.length !== 0) ? sportsList.map((sport) => sport.count) : [1],
                    borderColor: "rgba(247, 103, 7, 0)"
                }
            ]
        });
    }, [isSportsFetched])

    return (
        <div className={`${theme === 'light' ? 'diagram dark-hosted' : 'diagram__dark dark-hosted'}`}>
            <Doughnut
                data={data}
                options={{
                    title:{
                        display:true,
                        text: 'Hosted Events',
                        fontSize: 18,
                        fontColor: `${theme === 'light' ? '#1D1E35' : '#efeff1'}`,
                        fontWeight: theme === 'light' ? 700 : 400,

                    },
                    legend:{
                        display:true,
                        position:'right',
                        fontSize: 100,
                        fontColor: `${theme === 'light' ? 'hsl(237, 12%, 33%)' : '#adadb8'}`
                    }
                }}
            />
        </div>
    )
}

export default VisitedHostedEventsDiagram;