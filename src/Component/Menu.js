import React from 'react'
import  useStyles from './details/styles'
import './details/style.css'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const Menu = ({menu,place}) => {
    const classes = useStyles()
    return (
        <div >
            <Link to={`/home-page${place.id}`}>
        <div className={classes.menu} key={place.id}>
                    <img className={classes.imageMenu ,"elem"}
                    src={menu.image}
                    alt="" />
                     <h4>{menu.price}</h4>
                    <Typography gutterBottom variant='body2' color='secondary' className={classes.subtitle}>
                       {menu.dishtitle}
                    </Typography>
                </div>
                </Link>
                </div>
    )
}
