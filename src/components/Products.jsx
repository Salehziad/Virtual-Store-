import React from 'react';
import {
    Card,
    CardActions,
    CardActionArea,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import UseStyles from './styles';
export default function Products({
    Products: {
        description,
        publishedAt,
        displayName,
        title,
        url,
        categoryAssociation,
        image
    },i
}) {
    const classes = UseStyles();
    return (
        <Card className={classes.card} key={i}>
            <CardActionArea href={url} target='_blank'>
                <CardMedia
                    className={classes.media}
                    image={image || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeho' +
                    'lder-738.png'}/>
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary' componentt='h2'>{displayName}</Typography>
                    <Typography variant='body2' color='textSecondary' componentt='h2'>{categoryAssociation}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' componentt='p'>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'>Add to cart</Button>
                <Typography variant='h5' color='textSecondary'>{i+1}</Typography>
            </CardActions>
        </Card>
    )
}
