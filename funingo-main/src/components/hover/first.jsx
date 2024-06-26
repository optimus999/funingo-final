import React from 'react';
import { Divider, Grid, IconButton, Typography, Button } from '@mui/material';
import './first.scss';
import img1 from './image/img1.png';

// const hoverdata= [
//   {
//     name:"First",
//     subfirst:"Zone A",
//     sub2:"Paintball (field-1)",
//     sub3:"Paintball (field-2)",

//     subsecond:"Zone B",
//     subsecond2:"Paintball (field-1)",
//     subsecond3:"Paintball (field-1)",

//     subthird:"Zone C",
//     subthird2:"Paintball (field-1)",
//     subthird3:"Paintball (field-1)",

//     subfour:"Zone D",
//     subfour2:"Paintball (field-1)",
//     subfour3:"Paintball (field-1)",

//     subfive:"Zone E",
//     subfive2:"Paintball (field-1)",
//     subfive3:"Paintball (field-1)",

//   },

//   {
//     name:"Second",
//     subfirst:"Birthday",
//     sub2:"",
//     sub3:"",

//     subsecond:"Baby Shower",
//     subsecond2:"",
//     subsecond3:"",

//     subthird:"Pre-Wed",
//     subthird2:"",
//     subthird3:"",

//     subfour:"Kitty Party",
//     subfour2:"",
//     subfour3:"",

//     subfive:"",
//     subfive2:"",
//     subfive3:"",

//   },

//   {

//     name:"Third",
//     subfirst:"Zone A",
//     sub2:"Paintball (field-1)",
//     sub3:"Paintball (field-2)",

//     subsecond:"Meeting",
//     subsecond2:"Paintball (field-1)",
//     subsecond3:"Paintball (field-1)",

//     subthird:"Incentive",
//     subthird2:"Paintball (field-1)",
//     subthird3:"Paintball (field-1)",

//     subfour:"Corporate Game",
//     subfour2:"Paintball (field-1)",
//     subfour3:"Paintball (field-1)",

//     subfive:"",
//     subfive2:"",
//     subfive3:"",

//   }
// ]

export default function first() {
  return (
    <Grid id='main'>
      <Grid className='pic'>
        <img src={img1}></img>
      </Grid>

      <Grid className='zone-hover'>
        <Typography className='sub'>Zone 1</Typography>
        <Typography className='sub2' mt='5px'>
          Tampoline Treasure Island
        </Typography>

        <Typography className='sub'>Zone 2</Typography>
        <Typography className='sub2' mt='5px'>
          Paintball Arena
        </Typography>
        <Typography className='sub2' >
          Get Blaster Arena
        </Typography>

        <Typography className='sub'>Zone 3</Typography>
        <Typography className='sub2' mt='5px'>
          Low Ropes Challenge
        </Typography>
        <Typography className='sub2' mt='10px'>
          High Ropes Haven
        </Typography>
      </Grid>

      <Grid className='zone-hover'>
        <Typography className='sub' ml='1rem'>
          Zone 4
        </Typography>
        <Typography className='sub2' mt='5px'>
          Giant Swing
        </Typography>
        <Typography className='sub2' mt='10px'>
          Sky Cyclist's Trails
        </Typography>
        <Typography className='sub2' mt='5px'>
          Commando Climb Net
        </Typography>
        <Typography className='sub2' mt='5px'>
          Peak Rock Climb
        </Typography>

        <Typography className='sub' ml='1rem'>
          Zone 5
        </Typography>
        <Typography className='sub2' mt='5px'>
          Metldown Madness
        </Typography>
        <Typography className='sub2' mt='10px'>
          Bucking Bull Arena
        </Typography>
        <Typography className='sub2' mt='10px'>
          Kid's Obstacle Odyssey
        </Typography>
        <Typography className='sub2' mt='10px'>
          Sumo Showdown
        </Typography>
      </Grid>

      <Grid className='zone-hover'>
        <Typography className='sub' ml='1rem'>
          Zone 6
        </Typography>
        <Typography className='sub2' mt='5px'>
          Archer Alley
        </Typography>
        <Typography className='sub2' mt='10px'>
          Shooter's Range
        </Typography>


        <Button
          variant='contained'
          sx={{
            background: '#2CC248',
            boxShadow: '0px 2.5 9 0px rgba(0, 0, 0, 0.25)',
            borderRadius: '50px',
            padding: '10px 50px',
            fontFamily: 'Luckiest Guy',
            fontSize: '24px',
            marginTop: '20px',

            '&:hover': {
              background: '#1e8e33'
            }
          }}
        >
          All Zone
        </Button>
      </Grid>
    </Grid>
  );
}
