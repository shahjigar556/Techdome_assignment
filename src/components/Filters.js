import React from 'react'
import {useState,useEffect} from 'react';
import {Grid,Button} from '@material-ui/core'
import {withRouter} from 'react-router-dom';

function Filters({history}) {
    const [year,setYear]=useState(null);
    const [launch,setLaunch]=useState(null);
    const [land,setLand]=useState(null);
    const handleClick=(year)=>{
        setYear(year);
    }

    useEffect(()=>{
       if(year){
           history.push('/')
           history.push(`/year/${year}`);
       }
       if (launch!=null){
           history.push('/');
           history.push(`/launch/${launch}`)
       }
      if(land!=null){
           history.push('/');
           history.push(`/land/${land}`)
       }
    },[year,land,launch])

    return (
        <div className='ml-3'>
            <h3>Filters</h3>
            <h6 className="text-center mt-3">Launch Year</h6>
            <Grid container spacing={2} className="text-center">
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2006)} variant='contained' >2006</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2007)} variant='contained' >2007</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2008)} variant='contained' >2008</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2009)} variant='contained' >2009</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2010)} variant='contained' >2010</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2011)} variant='contained' >2011</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2012)} variant='contained' >2012</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2013)} variant='contained' >2013</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2014)} variant='contained' >2014</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2015)} variant='contained' >2015</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2016)} variant='contained' >2016</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2017)} variant='contained' >2017</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2018)} variant='contained' >2018</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2019)} variant='contained' >2019</Button>
                </Grid>
                <Grid item xs={6}>
                   <Button onClick={(e)=>handleClick(2020)} variant='contained' >2020</Button>
                </Grid>
            </Grid>
            <h6 className="text-center mt-3">Successful Launch</h6>
            <Grid container className="text-center">
                <Grid item xs={6}>
                    <Button onClick={()=>setLaunch(true)} variant="contained">True</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={()=>setLaunch(false)} variant="contained">False</Button>
                </Grid>
            </Grid>
            <h6 className="text-center mt-3">Successful Landing</h6>
            <Grid container className="text-center">
                <Grid item xs={6}>
                    <Button onClick={()=>setLand(true)}variant="contained">True</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={()=>setLand(false)} variant="contained">False</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default withRouter(Filters)
