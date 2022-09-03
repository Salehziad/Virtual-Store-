import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

export default function Products() {
  return (
    <Card ref={elRefs[i]} className={ activeArticle === i ? classes.activeCard : classes.card}>
    <CardActionArea href={url} target='_blank'>
      <CardMedia className={classes.media} image={urlToImage||'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'}/>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary' componentt='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
        <Typography variant='body2' color='textSecondary' componentt='h2'>{source.name}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' componentt='p'>{description}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions className={classes.cardActions}>
      <Button size='small' color='primary'><a className={classes.link} href={url} target='_blank' rel='noreferrer'> Lern More </a> </Button>
      <Typography variant='h5' color='textSecondary'>{i+1}</Typography>
    </CardActions>
  </Card>
  )
}
