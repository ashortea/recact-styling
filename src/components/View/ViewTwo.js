import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components'

const Background = styled.div`
background: linear-gradiant(to bottom, white, #e1e6e2);
`;

const Row = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%
`;

const Column = styled.div`
display:flex;
flex-direction: column;
flex: 1;
`;

const Wrapper = styled.div`
    display: block;
    margin: auto;
    padding: 2em;
`;

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media : {
        height: 200,
    }
    

  });

const ViewTwo = () => {
    const classes = useStyles();
    return(
        <Background >
        <Row>
            <Column>
            <Wrapper>
             <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://www.billboard.com/files/styles/1024x1024/public/media/The-Beatles-Abbey-Road-album-covers-billboard-1000x1000.jpg"
          title="Abbey Road"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Abbey road
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Does any other album cover on this list stop traffic? It's a testament to the lasting impression of this street-crossing photo that hundreds of fans re-create it every day outside Abbey Road Studios. There's even a webcam live feed of the attraction.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Wrapper>
    </Column>

    <Column>
    <Wrapper>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://www.billboard.com/files/styles/1024x1024/public/media/Pink-Floyd-Dark-Side-of-the-Moon-album-covers-billboard-1000x1000.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Joy Division
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Designer Peter Saville's decision to go with pulsar radio waves is right up there with Martin Hannett’s spellbinding production in making this album a goth classic. Disney's Mickey Mouse shirt parody four decades later only reaffirmed its legend.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Wrapper>
    </Column>

    <Column>
    <Wrapper>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://www.billboard.com/files/styles/900_wide/public/media/Joy-Division-Unknown-Pleasures-album-covers-billboard-1000x1000.jpg"
          title="Dark Side of the Moon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dark Side of the Moon
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          This simple art says so much. The light going through a prism and coming out as a rainbow was meant to convey the band's stage lighting and the album's lyrics. And, as evidenced by the number of t-shirts bearing this image today, the prism has become synonymous with Floyd itself.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Wrapper>
    </Column>
  

        </Row>
        </Background>
    )
}
export default ViewTwo;