import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Cirujia from './cirujia.png';

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
 // let = {
   // ['img']
  //}

  return (
    <Card className={classes.card}>
      <CardActionArea>

         <CardMedia
          component="img"
          height="140"
          img src={Cirujia} alt="Cirujia"
          
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CIRUJIA
          </Typography>
        </CardContent> 
      </CardActionArea>
    </Card>

    
  );

}
