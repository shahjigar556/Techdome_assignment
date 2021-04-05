import React from "react";
import Grid from "@material-ui/core/Grid";
import Filters from "../components/Filters";
import { useEffect, useState } from "react";
import Flight from "../components/Flight";
import axios from "axios";
import { Spinner } from "react-bootstrap";


function Year(props) {
  const [flights, setFlights] = useState([]);
  const [loading,setLoading]=useState(true);
  const year = props.match.params.year;
  useEffect(() => {
    try {
      const sendGetRequest = async () => {
        console.log(`In year.js useEffect:${year}`);
        const resp = await axios.get(
          `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`
        );
        setLoading(false);
        console.log(resp.data);
        setFlights(resp.data);
      };
      sendGetRequest();
    } catch (err) {
      console.log(err);
    }
  }, [year, loading]);

  console.log(loading)
  return loading ? (
    <React.Fragment>
      <center>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </center>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sm={3} md={2}>
          <Filters />
        </Grid>
        <Grid item xs={12} sm={9} md={10}>
          <Grid container spacing={2}>
            {flights.length == 0 ? (
              <h1 className="text-center mt-2">No Flights Scheduled</h1>
            ) : (
              <React.Fragment>
                {flights.map((f) => (
                  <Flight key={f.flight_number} flight={f} />
                ))}
              </React.Fragment>
            )}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Year;
