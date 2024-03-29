import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Infarto from './cardiologia.png';
const useStyles = makeStyles({
    card: {
        maxWidth: 505,
      },
      media: {
        height: 140,
      },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          img src={Infarto} alt="Infarto"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            INFARTO
          </Typography>
          <Typography >
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
