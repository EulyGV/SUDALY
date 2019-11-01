import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Ginecologia from './ginecologia.PNG';

const useStyles = makeStyles({
  card: {
  maxWidth: 200,
},
media: {
  height: 140,
},
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          img src={Ginecologia} alt="Ginecologia"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          GINECOLOGÍA
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    
  );

}
