import React from 'react'
import {useState,useEffect} from 'react';
import {Grid,Button} from '@material-ui/core'
import {withRouter} from 'react-router-dom';

function Filters({history}) {
    const [year,setYear]=useState(null);
    const [launch,setLaunch]=useState(null);
    const [land,setLand]=useState(null);

    return (
        <div className='ml-3'>
            <h3>Filters</h3>
            <h6 className="text-center mt-3">Launch Year</h6>
            <Grid container spacing={1} className="text-center">
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2006)                   
                      history.push('/')
                      history.push(`/year/2006`)
                   }} variant='contained' >2006</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2007)                   
                      history.push('/')
                      history.push(`/year/2007`)
                   }} variant='contained' >2007</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2008)                   
                      history.push('/')
                      history.push(`/year/2008`)
                   }} variant='contained' >2008</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2009)                   
                      history.push('/')
                      history.push(`/year/2009`)
                   }} variant='contained' >2009</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2010)                   
                      history.push('/')
                      history.push(`/year/2010`)
                   }} variant='contained' >2010</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2011)                   
                      history.push('/')
                      history.push(`/year/2011`)
                   }} variant='contained' >2011</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2012)                   
                      history.push('/')
                      history.push(`/year/2012`)
                   }} variant='contained' >2012</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2013)                   
                      history.push('/')
                      history.push(`/year/2013`)
                   }} variant='contained' >2013</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2014)                   
                      history.push('/')
                      history.push(`/year/2014`)
                   }} variant='contained' >2014</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2015)                   
                      history.push('/')
                      history.push(`/year/2015`)
                   }} variant='contained' >2015</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2016)                   
                      history.push('/')
                      history.push(`/year/2016`)
                   }} variant='contained' >2016</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2017)                   
                      history.push('/')
                      history.push(`/year/2017`)
                   }} variant='contained' >2017</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2018)                   
                      history.push('/')
                      history.push(`/year/2018`)
                   }} variant='contained' >2018</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2019)                   
                      history.push('/')
                      history.push(`/year/2019`)
                   }} variant='contained' >2019</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>{
                      setYear(2020)                   
                      history.push('/')
                      history.push(`/year/2020`)
                   }} variant='contained' >2020</Button>
                </Grid>

            </Grid>
            <h6 className="text-center mt-3">Successful Launch</h6>
            <Grid container className="text-center">
                <Grid item xs={6}>
                    <Button onClick={(e)=>{
                       setLaunch(true)
                       history.push('/');
                       history.push('/launch/true')
                    }} variant="contained">True</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={(e)=>{
                       setLaunch(false)
                       history.push('/');
                       history.push('/launch/false')
                    }} variant="contained">False</Button>
                </Grid>
                
            </Grid>
            <h6 className="text-center mt-3">Successful Landing</h6>
            <Grid container className="text-center">
                  <Grid item xs={6}>
                        <Button onClick={(e)=>{
                           setLand(true)
                           history.push('/');
                           history.push('/land/true')
                        }} variant="contained">True</Button>
                  </Grid>
                  <Grid item xs={6}>
                        <Button onClick={(e)=>{
                           setLand(false)
                           history.push('/');
                           history.push('/land/false')
                        }} variant="contained">False</Button>
                  </Grid>
               
            </Grid>
        </div>
    )
}

export default withRouter(Filters)
