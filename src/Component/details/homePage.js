import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Typography, Card, CardMedia, CardContent,Paper } from '@material-ui/core'
import useStyles from './styles'
import './style.css'
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';
const HomePage = ({detail}) => {
  const  location = useLocation()
  const menu = location.pathname.split("/")[2]
  const [data ,setData]= useState([])
  const classes = useStyles()
  const menuData = location.state.place
  useEffect(() => {
   
    setData(menuData)
         console.log(menuData.title)
   
  }, [location,menuData])


  const openPopupbox=(p)=> {
 
    const content = (
  <div style={{width:"300px"}}>
        
        <Paper elevation={3} style={{width:"300px"}}className="paperMedia" >
          <span style={{position:"absolute",left:20,top:45}}>{p.price}</span>     
          <span style={{position:"absolute",right:30,top:45}}>{p.dishtitle}</span>
                    <img src={p.image} alt={p.title} className={classes.pointer}
                    style={{width:"100%",objectFit:"cover",marginRight:"10px"}}
                    />
   
                    <Typography className={classes.Typography} variant="subtitle2" gutterBottom
                    style={{padding:"4px", display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
                    >
                            {p.ingredients}   
                    </Typography>
                  </Paper>
  </div>


    )
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: p.title
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  
  }

 
  return (
    <>
    <Card elevation={6} key={menuData._id} style={{backgroundColor:"black"}}>
     <CardContent>
         <Typography variant='h5' className={classes.menutitle}>
             {menuData.title}
         </Typography>
       
     {menuData.photoUrl&&<img src ={menuData.photoUrl} style={{height:"350px",width:"100%",objectFit:'cover',zIndex:-1,borderRadius:20,marginLeft:"-4px"}} 
       alt={menuData.title} className = {classes.menuimage}/> }  
      
      {menuData.menu1.map(menu=>{
         return(
           <>
             
             <img src={menu.image}  alt={menuData.title} className="menuimg" onClick={()=>openPopupbox(menu)}/>
            
               
               {menu.dishtitle && <span style={{color:"white",marginLeft:"-76px",marginRight:"-30px"}}>{menu.dishtitle}</span> }

               <PopupboxContainer />
           </>
           
         )
         
       })}

     </CardContent>
 </Card>


 </>
  )

}

export default HomePage

