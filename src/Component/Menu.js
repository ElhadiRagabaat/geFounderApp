import React from 'react'
import  useStyles from './details/styles'
import './details/style.css'
import { Typography } from '@material-ui/core'

export const Menu = ({menu,place}) => {
    const classes = useStyles()
    return (
        <div >
        <div className={classes.menu} key={place.id}>
                    <img className={classes.imageMenu ,"elem"}
                    src={menu.image}
                    alt="" />
                     <h4>{menu.price}</h4>
                    <Typography gutterBottom variant='body2' color='secondary' className={classes.subtitle}>
                       {menu.dishtitle}
                    </Typography>
                </div>
              
                </div>
    )
}
