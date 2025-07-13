/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import axios from "axios";

function CharCard(){

 const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/monarchs/`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sodaing Monarch", error);
      });
  }, []);

  return (
    <>
      <Box sx={{
        display:'grid', 
        gridTemplateColumns:'repeat(4, 1fr)',
        gridTemplateRows:'repeat(4, 1fr)',
        gap:2,
        padding:2,
        maxWidth:'1500px',
        paddingLeft:'200px'
      }}>
          {character.map((character, index)=>(
            <Card  key={character._id}>
              <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={`/image/image_not_found_monarch.jpg`}
                    alt="monarchy??"
                />

                <CardContent >
                  <Typography gutterBottom variant='h5' component="div">{character.name}</Typography>
                   <br /><Typography gutterBottom variant='h5' component="div">{character.title}</Typography>
                   <br /><Typography gutterBottom variant='body' sx={{mb:1}}><strong>Born: </strong>{new Date(character.dob).toLocaleDateString('en-US',{
                year:'numeric',
                month:'long',
                day:'numeric',
              })}</Typography>
               <br />
                  <Typography gutterBottom variant='body' sx={{mb:1}}><strong>Died: </strong>{new Date(character.dod).toLocaleDateString('en-US',{
                year:'numeric',
                month:'long',
                day:'numeric',
              })}</Typography>
              <br />
                  <Typography variant='body2' sx={{mb:1}}><strong>Mortality_Status: </strong>{character.alive? 'Alive':'Dead'}</Typography>
                  <Typography variant='body2'><strong>Religion: </strong>{character.religion}</Typography>
                </CardContent>
                <CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      View Details
                    </Button>
                  </CardActions>
                </CardActionArea>
              </CardActionArea>
            </Card>
          ))}
      </Box>
    </>
  )
}

export default CharCard