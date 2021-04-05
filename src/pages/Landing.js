import React from "react";
import Grid from "@material-ui/core/Grid";
import Filters from "../components/Filters";
import { useEffect, useState } from "react";
import Flight from "../components/Flight";
import axios from "axios";
import {Spinner} from 'react-bootstrap'

function Landing() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const sendGetRequest = async () => {
        const resp = await axios.get(
          "https://api.spacexdata.com/v3/launches?limit=100"
        );
        //console.log(resp.data)
        setLoading(false);
        setFlights(resp.data);
      };
      sendGetRequest();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={3} md={2}>
          <Filters />
        </Grid>
        <Grid item xs={12} sm={9} md={10}>
          {loading ? (
            <React.Fragment>
              <center>
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </center>
            </React.Fragment>
          ) : (
            <Grid container spacing={2}>
              {flights.map((f) => (
                <Flight key={f.flight_number} flight={f} />
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Landing;
