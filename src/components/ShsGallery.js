import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow:'hidden',
    },
    imageList: {
        width: 500,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));



const itemData = [
    {
        img: 'shsImages/shs4.webp',
        title: 'Image 1',
        cols: 3,
    },
    {
        img: 'shsImages/shs3.webp',
        title: 'Image 2',
        cols: 2,
    },
    {
        img: 'shsImages/shs2.webp',
        title: 'image 3',
        cols: 5,
    },
    {
        img: 'shsImages/shs6.webp',
        title: 'Image 4',
        cols: 2,
    },
    {
        img: 'shsImages/shs1.webp',
        title: 'Image 5',
        cols: 3,
    },
    {
        img: 'shsImages/shs5.webp',
        title: 'image 3',
        cols: 5,
    },


];
export default function ShsGallery() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageList rowHeight={160} className={classes.imageList} cols={5}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1}>
                        <img src={item.img} alt={item.title} />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}