import React,{useEffect} from 'react'
import  useStyles from './details/styles'
import './details/style.css'
import { Typography } from '@material-ui/core'
import { Link,useHistory,useLocation } from 'react-router-dom'

export const Menu = ({menu,place,id}) => {
    const classes = useStyles()
    
    const history = useHistory()
    
    const sendData=()=>{
     history.push("home-page/", place={place})

     
    }
    
    
    return (
        <div >
            
        <div className={classes.menu} key={id}>
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
