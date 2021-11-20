import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
    
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  phoneCall:{
    textDecoration:'none',
    
  },
 
  menu:{
   display:'flex',
   justifyContent:"space-between",
   marginTop:"3px",
  
  },
  menutitle:{
   display:"flex",
   alignItems:"center",
   justifyContent:"center",
   color:"#fff"
  },
  menuimage:{
    width:"90%",
    marginLeft:"50px",
    height:"10%",
    marginTop:"4px"
  },
  menu2:{
    display:"flex",
   justifyContent:"space-between",
   
  },
  menu1:{
    display:"flex",
    marginTop:"12px",
    flexDirection:"column",
    
    
  },
  pointer: {
    cursor: 'pointer',
    
    
  },
  Typography:{
    fontSize:"10px",
    
  },
  // menuimg:{
  //   width:"150px",
  //   height:"150px",
  //   borderRadius:"50%",
  //   marginTop:"40px",
  //   marginBottom:"20px",
  //   marginLeft:"150px"
  // }
  // imageMenu:{
  //   width:'80px',
  //   height:'80px',
  //   borderRadius:"50%",
  //   objectFit:"cover",
  // }
 
}));