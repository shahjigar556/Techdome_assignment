import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import {Grid} from '@material-ui/core'
import {withRouter} from 'react-router-dom';

function Flight({ flight,history}) {
  const {
    mission_name,
    flight_number,
    mission_id,
    launch_year,
    launch_success,
    launch_landing,
    links,
  } = flight;
  const { mission_patch_small } = links;
  
  return (
      <Grid item xs={12} md={3} sm={6}>
            <Card className="my-3 p-3 rounded text-center">
            <div className="text-center">
                <Card.Img
                variant="top"
                src={mission_patch_small}
                style={{ width: "200px" }}
                className="img-fluid"
                />
            </div>

            <Card.Body>
                <Card.Title>
                <strong>{mission_name}{' '}#{flight_number}</strong>
                </Card.Title>

                <Card.Text as="p" className="mt-2">
                  Mission Ids:{mission_id.map(id=><span>{id}</span>)}
                </Card.Text>
                <Card.Text as="p">
                    Launch Year:{launch_year}
                </Card.Text>
                <Card.Text as="p">
                    Successful Launch:{launch_success?'True':'False'}
                </Card.Text>
                <Card.Text as="p">
                    Successful Landing:{launch_landing}
                </Card.Text>
            </Card.Body>
            </Card>

      </Grid>
  );
}

export default withRouter(Flight);
