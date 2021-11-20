import React, { useState, } from 'react'
import { Typography, Card, CardMedia, CardContent } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Phone from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'
import useStyles from './styles'
import './style.css'
import firebase from 'firebase'
import makeid from '../../Component/help/function'
import {

    FacebookShareButton,
    LinkedinShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinIcon



} from "react-share";
import { Menu } from '../Menu'
import { storage,fireDB } from '../firebase'
import { Link ,useHistory} from 'react-router-dom'


const Details = ({ place, selected, refProp }) => {
    const classes = useStyles()
    const [addMenu ,setAddMenu] = useState(false)
    const [fileName, setFileName] = useState("")
    const [dishtitle, setDishTitle] = useState(null)
    const [menuArry, setMenuArry] = useState(place.menu1 ?place. menu1 :[])
    const [price,setPrice ] = useState(null)
    const [ingredients, setIngredients] = useState(null)
    const history = useHistory()



    const onChangeFile = e => {
        setFileName(e.target.files[0])
    
       
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (fileName) {
          const imageName = makeid(10)
          const uploadTask = storage.ref(`menu/${imageName}.jpg`)
              .put(fileName)
    
          uploadTask.on("state_change", (snapshot) => {
    
              
          }, (error) => {
              alert(error)
    
          }, () => {
              /////get Image Url
              storage.ref("menu").child(`${imageName}.jpg`)
                  .getDownloadURL()
    
                  .then((imageUrl) => {
                        menuArry.push({
                            image:imageUrl,
                            price:price,
                            dishtitle:dishtitle,
                            ingredients:ingredients
                          })
                         
                    
                    
                    fireDB.collection("AddNewPlace").doc(place.id)
                    .update({
                      menu1:menuArry
             })
              
                      
                    setAddMenu(false)
                    console.log(menuArry+"add seccessylly")
                  })
    
          })
      }
    }



    if (selected) {
        refProp.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    const addMen = ()=>{
        console.log(place.id)
        setAddMenu(true)
    }
    
    
    const sendData=(e)=>{
        e.preventDefault();
     history.push("home-page/", place={place})

     
    }
  
    return (
        <Card elevation={6} key={place._id}>
           <button onClick={addMen}>add</button>
            <CardMedia style={{ height: 350, paddingTop: '56.25%' }}
             
                image={place.photoUrl}
                title={place.title}
            />
            
            <CardContent>
                <Typography variant='h5'>
                    {place.title}
                </Typography>
                <Typography variant='subtitle2' color='textSecondary'>{place.desc}</Typography>
                <Typography variant='h3' color='textSecondary' style={{textAlign:'center'}}>Menu</Typography>
              {place.menu1&& place.menu1.slice(0,3).map(menu=>{
                  return(

                  
                 <Menu menu = {menu} place={place} id ={place.id}/>
                

                  )
                
                
              }) 
            }
            <button onClick={sendData} className="button_link">Menu</button>
                {place.address && (
                    <Typography gutterBottom variant='body2' color='secondary' className={classes.subtitle}>
                        <LocationOnIcon />{`Nave shaana ${place.address}`}
                    </Typography>

                )}

                {place.phone && (
                    <Typography gutterBottom variant='body2' color='textSecondary' className={classes.subtitle}>
                        <a href={`tel:${place.phone}`}><Phone /> </a> <a className={classes.phoneCall} href={`tel:${place.phone}`}> {`Phone: ${place.phone}`}</a>
                    </Typography>
                )}
                < FacebookShareButton
                style={{margin:"8px"}}
                    url={place.photoUrl}
                    quote={'#Explore  NEVE-SHAANAN Restaurants'}
                    hashtag={place.title}
                >
                    < FacebookIcon size='23' />
                </FacebookShareButton>
                < LinkedinShareButton
                   style={{margin:"8px"}}
                    url={place.photoUrl}
                    quote={place.title}
                    hashtag={place.title}
                >
                    < LinkedinIcon size='23' />
                </ LinkedinShareButton>
                < WhatsappShareButton
                   style={{margin:"8px"}}
                    url={place.photoUrl}
                    quote={place.title}
                    
                >
                    < WhatsappIcon size='23' />
                </ WhatsappShareButton>
            </CardContent>
            <Rating size="small" value={place.rating} />

            { addMenu && 
             <div>
             <form onSubmit={handleSubmit} enctype="multipart/form-data">
               <div>
                 <label htmlFor="file">Choose Image</label>
                 <input type="file" filename="imageUrl" onChange={onChangeFile} />
               </div>
               <input type="text" placeholder="Enter a dish name" onChange={(e) => setDishTitle(e.target.value)} />
               <input type="text" placeholder="Enter dish price" onChange={(e) => setPrice(e.target.value)} />
               <label>Ingredients</label>
               <textarea style={{ resize: "none"}} rows={4} placeholder="say something abute dish Ingredients" onChange={(e) => setIngredients(e.target.value)} />
              
               <button type="submit" className='submitButton'>Add Pin</button>
             </form>
           </div>
            }

        </Card>
    )
}

export default Details
