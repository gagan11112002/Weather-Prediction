import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({info}){

    const INIT_URL="https://static.vecteezy.com/system/resources/previews/001/418/115/large_2x/landscapegraphy-of-mountains-during-hazy-day-free-photo.jpeg";
    const HOT_URL = "https://stories.uq.edu.au/contact-magazine/2023/el-nino-is-here-will-it-be-australias-hottest-summer-ever/assets/0FpL4PYE05/uq-contact-el-nino-summer-weather-headline-2560x1440.jpg";
    const COLD_URL = "https://images.everydayhealth.com/images/wellness/what-freezing-cold-temperatures-do-to-your-body-alt-1440x810.jpg?sfvrsn=8c38eab7_1";
    const RAIN_URL = "https://risingkashmir.com/wp-content/uploads/2024/03/6ebddfb7-6b3a-42dc-b84b-4edd52d24d1e.png";

    return(
        <div className="InfoBox">  
        <div className="cardContainer">
         <Card sx={{ maxWidth: 345 }}>
         <CardMedia
           sx={{ height: 140 }}
           image={
            info.humidity > 80
            ? RAIN_URL
            :info.temp > 15
            ? HOT_URL
            : COLD_URL
           }

            
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             {info.city}
             {
               info.humidity > 80
               ? (<ThunderstormIcon/>)
               : info.temp > 15
               ? (<WbSunnyIcon/>)
               : (<AcUnitIcon/>)
             }
           </Typography>
           <Typography variant="body2" color="text.secondary" component={"span"}>
             
             <p>Temperature = {info.temp}&deg;C</p>
             <p>Humidity = {info.humidity}</p>
             <p>Max Temp ={info.tempMax}</p>
             <p>Min Temp = {info.tempMin}</p>
             <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
           </Typography>
         </CardContent>
        
       </Card>
       </div>
       </div>
    );
}