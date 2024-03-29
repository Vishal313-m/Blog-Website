
import { makeStyles ,Box, Typography} from "@material-ui/core";

const useStyle = makeStyles({
    image:{
  background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
   width: '100%',
   height:'50vh',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  '& :first-child':{
      fontSize:66,
      color:'#FFFFFF',
      lineHeight:1
  },
  '& :last-child':{
      fontSize:20,
      background:'#FFFFFF'
  }
 
    }
});
const Banner = () => {
    const classes=useStyle();
    
    
    return(
      <Box className={classes.image}>
      <Typography>Blog</Typography>
      <Typography>Vishal Mahto</Typography>

      </Box>
    )
}
export default Banner;