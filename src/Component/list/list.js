import React from 'react'
import useStyle from './styles'
import PlaceDetails from '../details/details'
import {Typography, Grid, FormControl } from '@material-ui/core'

const List = ({places}) => {
    const classes = useStyle()
    
   
   
    return (
        <div className={classes.container} key={places.id}>
            <Typography variant='h5' className="typed marginTop">Restaurants around you</Typography>
                <div>
            <Grid container spacing={3} className={classes.list}>
                {places&& places.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />

                    </Grid>
                ))}:<div></div>

            </Grid>
           
            
</div>
</div>
    )
    
                }

export default List