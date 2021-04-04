import React from 'react'
import Grid from '@material-ui/core/Grid';
import Filters from '../components/Filters'
import {useEffect,useState} from 'react';
import Flight from '../components/Flight';
import axios from 'axios';

function Launch(props) {
    const [flights,setFlights]=useState([]);
    const launch=props.match.params.launch
    useEffect(()=>{
        try {
            const sendGetRequest=async ()=>{
                const resp=await axios.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launch}`)
                //console.log(resp.data)
                setFlights(resp.data);
            }
            sendGetRequest();
        } catch (err) {
            console.log(err);
        }
    },[launch])
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12} sm={2}>
                    <Filters />
                </Grid>  
                <Grid item xs={12} sm={10}>
                    <Grid container spacing={2}>
                        {flights.map(f=><Flight key={f.flight_number} flight={f}/>)}
                    </Grid>
                </Grid>
            </Grid>            
        </React.Fragment>
    )
}

export default Launch
