import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import img1 from './images/top.png';
import './style.scss';
import img2 from './images/zone1.png';
import img3 from './images/zone2.png';
import { Tour } from "@mui/icons-material";
import inflatable from '../../assets/Meltdown.jpeg'
import img4 from './images/zone3.png';
import climb from '../../assets/quoridor-giant-board-game-2-lg.jpg'
import race from '../../assets/rc-race-transformed.jpeg'
import rc from '../../assets/hoping race.png'
import car from '../../assets/kids go cart.png'
// import bg1 from './images/top2.png';
import fhek from '../../assets/throw.jpg'
import game from "../../assets/quoridor-giant-board-game-2-lg.jpg"
import court from '../../assets/Segway image edit.png'
import gg from '../../assets/Chess-edit-image.jpg'
// import NavigationIcon from '@mui/icons-material/Navigation';
import bg1 from './Zone Background images/zone 1 back image.png'
import bg2 from './Zone Background images/zone 2 back image.png'
import bg3 from './Zone Background images/zone 3 back image.png'
import bg4 from './Zone Background images/zone 4 back image.png'
import bg5 from './Zone Background images/zone 5 back image.png'
import bg6 from './Zone Background images/zone 6 back image.png'
import bg7 from './Zone Background images/zone 7 back image.png'
import bg8 from './Zone Background images/zone 8 back image.png'
import NavigationIcon from '@mui/icons-material/Navigation';
import { useNavigate } from 'react-router';
import Coin from './Coin'
import zone7 from '../../assets/img/zone7.jpg'
import zone1 from '../../assets/img/zone1.jpg'
import zone2 from '../../assets/img/zone2.jpg'
import zone3 from '../../assets/img/zone3.jpg'
import zone4 from '../../assets/img/zone4.jpg'
import zone5 from '../../assets/img/zone5.jpg'
import zone6 from '../../assets/img/zone6.jpg'
import zone8 from '../../assets/img/zone8.jpg'
const zoneData = [
  {
    name: 'Zone 1',
    subhead: 'Bounce Harbor',
    top1: zone1,
    bg: bg1,
    Activity1: "Trampoline Treasure Island",
    Activity1Prop: {
      value: 2500
    },
    Activity2: "",
    Activity2Prop: {
      value: 2500
    },
    Activity3: "",
    Activity4: "",
    Activity5: "",
    Activity6: "",


  },
  {
    name: 'Zone 2',
    subhead: 'Battlefront Bay ',
    top1: zone2,
    bg: bg2,

    Activity1: "Paintball Arena",
    Activity1Prop: {
      value: 2500
    },
    Activity2: "Get Blast Arena",
    Activity2Prop: {
      value: 1500
    },
    Activity3: "",
    Activity3Prop: {
      value: 2500
    },
    Activity4: "",
    Activity4Prop: {
      value: 2500
    },
    Activity5: "",
    Activity6: "",
  },
  {
    name: 'Zone 3',
    subhead: 'Ropes & Ridges ',
    top1: zone3,
    bg: bg3,

    Activity1: "Low Ropes Challenge",
    Activity1Prop: {
      value: 1500
    },
    Activity2:  " High Ropes Haven ",
    Activity2Prop: {
      value: 1500
    },
    Activity3: "",
    Activity3Prop: {
      value: 2500
    },
    Activity4: "",
    Activity5: "",
    Activity6: "",
  },
  {
    name: 'Zone 4',
    subhead: 'Thrill Peaks ',
    top1: zone4,
    bg: bg4,

    Activity1: "Gaint Swing Skybound",
    Activity1Prop: {
      value: 5000
    },
    Activity2: "Sky Cyclist's Trail",
    Activity2Prop: {
      value: 3000
    },
    Activity3: "Commando Climb Net",
    Activity3Prop: {
      value: 500
    },
    Activity4: "Peak Rock Climb",
    Activity4Prop: {
      value: 2000
    },
    Activity5: "",
    Activity6: "",
  },
  {
    name: 'Zone 5',
    subhead: 'Inflatable Isle ',
    top1: zone5,
    bg: bg5,

    Activity1: "Meltdown Madness",
    Activity1Prop: {
      value: 1000
    },
    Activity2: "Bucking Bull Arena",
    Activity2Prop: {
      value: 1000
    },
    Activity3: "Kids Obstacle Odysse",
    Activity3Prop: {
      value: 500
    },
    Activity4: "Sumo Showdown",
    Activity4Prop: {
      value: 500
    },
    Activity5: "",
    // Activity5Prop: {
    //   red: 0,
    //   green: 0,
    //   yellow: 1
    // },
    Activity6: "",
  },
  {
    name: 'Zone 6',
    subhead: `Marksman's Meadow`,
    top1: zone6,
    bg: bg6,

    Activity1: "Archery Alley",
    Activity1Prop: {
      value: 500
    },
    Activity2: "Shooter's Range",
    Activity2Prop: {
      value: 1000
    },
    Activity3: "",
    Activity3Prop: {
    },
    Activity4: "",
    Activity5: "",
    Activity6: "",
  },
  {
    name: 'Zone 7',
    subhead: `Speedster's Circuit `,
    top1: zone7,
    bg: bg7,

    Activity1: "Pedal Power Go Kart",
    Activity1Prop: {
      value: 1000

    },
    Activity2: "",
    Activity2Prop: {
      value: 2500

    },
    Activity3: "",
    Activity3Prop: {
      value: 2500

    },
    Activity4: "",
    // Activity4Prop: {
    //   red: 0,
    //   green: 0,
    //   yellow: 1
    // },
    Activity5: "",
    // Activity5Prop: {
    //   red: 0,
    //   green: 0,
    //   yellow: 1
    // },
    Activity6: "",
    // Activity6Prop: {
    //   red: 0,
    //   green: 1,
    //   yellow: 0
    // },
  },
  {
    name: 'Zone 8',
    subhead: 'Adrenaline Airspace',
    top1: zone8,
    bg: bg8,

    Activity1: "Rocket Ejector Launch ",
    Activity1Prop: {
      value: 2500

    },
    Activity2: " Cyclone Cycle 360",
    Activity2Prop: {
      value: 1500

    },
    Activity3: "Gyro Sphere 360",
    Activity3Prop: {
      value: 1000

    },
    Activity4: "",
    Activity5: "",
    Activity6: "",
  },
  // {
  //   name: 'Zone 9',
  //   subhead: 'Giant Games ',
  //   top1: gg,
  //   bg: bg1,

  //   Activity1: "Giant Tic Tae Toe",
  //   Activity1Prop: {
  //     red: 0,
  //     green: 1,
  //     yellow: 0
  //   },

  //   Activity2: "Giant Chess",
  //   Activity2Prop: {
  //     red: 0,
  //     green: 1,
  //     yellow: 0
  //   },
  //   Activity3: "Ring Toss",
  //   Activity3Prop: {
  //     red: 0,
  //     green: 1,
  //     yellow: 0
  //   },
  //   Activity4: "Giant snake and Ladder",
  //   Activity4Prop: {
  //     red: 0,
  //     green: 1,
  //     yellow: 0
  //   },
  //   Activity5: "",
  //   Activity6: "",
  // },
  // {
  //   name: 'Zone 10',
  //   subhead: 'Food Court ',
  //   top1: court,
  //   bg: bg1,

  //   Activity1: "Brand 1",
  //   Activity2: "Brand 2",
  //   Activity3: "Brand 3",
  //   Activity4: "Brand 4",
  //   Activity5: "",
  //   Activity6: "",
  // }

];

const Zone = () => {
  const navigate = useNavigate();
  return (
    <Grid className='homes'>
      {/* first box */}
      <Grid height='70vh' className='top'>
        <Typography height='60vh' className='heading'>
          Activity Zones
        </Typography>
      </Grid>
      {/* first box end  */}

      {/* second box */}
      {zoneData.map((data, i) => (
        <Grid className='top2' mt='30px' key={i}>
          <img src={data.bg} alt='background-img' className='background-event' />
          <Grid className='first'>
            <Typography className='sub'>{data.name}</Typography>
            <Typography className='sub1'>{data.subhead}</Typography>


            {data.Activity1 !== "" && (
              <Typography className='sub2' mt='10px' display={"flex"}
                gap="10px"
                paddingX={"4px"}
                fontSize={"24px"}
                 margin-right={"35rem"}
                alignItems={"center"}>
                <NavigationIcon sx={{ transform: 'rotate(90deg)' , color: '#186FFF '}} />
                 {data.Activity1}
                <Grid display={"flex"}
                  gap="10px"
                  paddingX={"4px"}
                  alignItems={"center"}>
                  {data?.Activity1Prop?.["red"] !== 0 && <Typography
                    fontWeight={"600"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {data?.Activity1Prop?.["red"]}&nbsp;
                    {/* <Tour
                      sx={{
                        color: "#fa1942",
                      }}
                    /> */}
                    <Coin 
                    value={data.Activity1Prop.value}
                    />


                  </Typography>}

                  {/* {data?.Activity1Prop?.["green"] !== 0 && <Typography
                    fontWeight={"600"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {data?.Activity1Prop?.['green']}&nbsp;{" "}
                    <Tour
                      sx={{
                        color: "#76de9a",
                      }}
                    />
                  </Typography>}
                  {data?.Activity1Prop?.["yellow"] !== 0 &&
                    <Typography
                      fontWeight={"600"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {data?.Activity1Prop?.['yellow']}&nbsp;{" "}
                      <Tour
                        sx={{
                          color: "#fac219",
                        }}
                      />
                    </Typography>} */}
                </Grid>
              </Typography>
            )}


            {data.Activity2 !== "" && (
              <Typography className='sub2' mt='10px' display={"flex"}
                gap="10px"
                paddingX={"4px"}
                fontSize={"24px"}
                margin-right={"35rem"}

                alignItems={"center"}>
                <NavigationIcon sx={{ transform: 'rotate(90deg)' , color: '#186FFF '}} />

                 {data.Activity2}
                <Grid display={"flex"}
                  gap="10px"
                  paddingX={"4px"}

                  alignItems={"center"}>
                    
                   {data?.Activity2Prop?.["red"] !== 0 && <Typography
                    fontWeight={"600"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {data?.Activity2Prop?.["red"]}&nbsp;
                    <Coin 
                   value={data.Activity2Prop.value}
                    />
                  </Typography>}
                  

                   {/*  {data?.Activity2Prop?.["green"] !== 0 && <Typography
                    fontWeight={"600"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {data?.Activity2Prop?.['green']}&nbsp;{" "}
                    <Tour
                      sx={{
                        color: "#76de9a",
                      }}
                    />
                  </Typography>}
                  {data?.Activity2Prop?.["yellow"] !== 0 &&
                    <Typography
                      fontWeight={"600"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {data?.Activity2Prop?.['yellow']}&nbsp;{" "}
                      <Tour
                        sx={{
                          color: "#fac219",
                        }}
                      />
                    </Typography>} */}
                </Grid>
              </Typography>
            )}



            {data.Activity3 !== "" && (
              <Typography className='sub2' mt='10px' display={"flex"}
                gap="10px"
                paddingX={"4px"}
                fontSize={"24px"}
                margin-right={"30rem"}

                alignItems={"center"}>
                <NavigationIcon sx={{ transform: 'rotate(90deg)' , color: '#186FFF '}} />

                {data.Activity3}
                <Grid display={"flex"}
                  gap="10px"
                  paddingX={"4px"}

                  alignItems={"center"}>
                  {data?.Activity3Prop?.["red"] !== 0 && <Typography
                    fontWeight={"600"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {data?.Activity3Prop?.["red"]}&nbsp;
                    <Coin 
                    value={data.Activity3Prop.value}
                    />
                  </Typography>}

                  {/* {data?.Activity3Prop?.["green"] !== 0 && <Typography
                    fontWeight={"600"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {data?.Activity3Prop?.['green']}&nbsp;{" "}
                    <Tour
                      sx={{
                        color: "#76de9a",
                      }}
                    />
                  </Typography>}
                  {data?.Activity3Prop?.["yellow"] !== 0 &&
                    <Typography
                      fontWeight={"600"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {data?.Activity3Prop?.['yellow']}&nbsp;{" "}
                      <Tour
                        sx={{
                          color: "#fac219",
                        }}
                      />
                    </Typography>} */}
                </Grid>
              </Typography>
            )}



            {data.Activity4 !== "" && (
              <Typography className='sub2' mt='10px' display={"flex"}
              gap="10px"
              paddingX={"4px"}
              fontSize={"24px"}
              margin-right={"30rem"}


              alignItems={"center"}>
                  {data.Activity4 != "" ? 
                <NavigationIcon sx={{ transform: 'rotate(90deg)' , color: '#186FFF '}} />
                : null}

                 {data.Activity4}
                <Grid display={"flex"}
                  gap="10px"
                  paddingX={"4px"}
                  
                  alignItems={"center"}>
                   {data?.Activity4Prop?.["red"] !== 0 && <Typography
                    fontWeight={"600"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {data?.Activity4Prop?.["red"]}&nbsp;
                    <Coin 
                     value={data.Activity4Prop.value}
                    />
                  </Typography>}

                   {/*{data?.Activity4Prop?.["green"] !== 0 && <Typography
                    fontWeight={"600"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {data?.Activity4Prop?.['green']}&nbsp;{" "}
                    <Tour
                      sx={{
                        color: "#76de9a",
                      }}
                    />
                  </Typography>}
                  {data?.Activity4Prop?.["yellow"] !== 0 &&
                    <Typography
                      fontWeight={"600"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {data?.Activity4Prop?.['yellow']}&nbsp;{" "}
                      <Tour
                        sx={{
                          color: "#fac219",
                        }}
                      />
                    </Typography>} */}
                </Grid> 

              </Typography>
            )} 


            {data.Activity5 !== "" && (
              <Typography className='sub2' mt='10px' display={"flex"}
                gap="10px"
                paddingX={"4px"}
                fontSize={"24px"}
                margin-right={"30rem"}

                alignItems={"center"}>
                <NavigationIcon sx={{ transform: 'rotate(90deg)' , color: '#186FFF '}} />

                {data.Activity5}
                <Grid display={"flex"}
                  gap="10px"
                  paddingX={"4px"}

                  alignItems={"center"}>
                   {data?.Activity5Prop?.["red"] !== 0 && <Typography
                    fontWeight={"600"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {data?.Activity5Prop?.["red"]}&nbsp;
                    <Coin 
                     value={data.Activity5Prop.value}
                    />
                  </Typography>}

                  {/* {data?.Activity5Prop?.["green"] !== 0 && <Typography
                    fontWeight={"600"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {data?.Activity5Prop?.['green']}&nbsp;{" "}
                    <Tour
                      sx={{
                        color: "#76de9a",
                      }}
                    />
                  </Typography>}
                  {data?.Activity5Prop?.["yellow"] !== 0 &&
                    <Typography
                      fontWeight={"600"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {data?.Activity5Prop?.['yellow']}&nbsp;{" "}
                      <Tour
                        sx={{
                          color: "#fac219",
                        }}
                      />
                    </Typography>} */}
                </Grid>
              </Typography>
            )}


            {data.Activity6 !== "" && (
              <Typography className='sub2' mt='10px' display={"flex"}
              gap="10px"
              paddingX={"4px"}
              fontSize={"24px"}
              margin={"30rem"}

              alignItems={"center"}>
                <NavigationIcon sx={{ transform: 'rotate(90deg)' , color: '#186FFF '}} />

                 {data.Activity6}
                <Grid display={"flex"}
                  gap="10px"
                  paddingX={"4px"}
                  alignItems={"center"}>
                  {data?.Activity6Prop?.["red"] !== 0 && <Typography
                    fontWeight={"600"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {data?.Activity6Prop?.["red"]}&nbsp;
                    <Coin 
                     value={data.Activity6Prop.value}
                    />
                  </Typography>}

                  {/* {data?.Activity6Prop?.["green"] !== 0 && <Typography
                    fontWeight={"600"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    {data?.Activity6Prop?.['green']}&nbsp;{" "}
                    <Tour
                      sx={{
                        color: "#76de9a",
                      }}
                    />
                  </Typography>}
                  {data?.Activity6Prop?.["yellow"] !== 0 &&
                    <Typography
                      fontWeight={"600"}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {data?.Activity6Prop?.['yellow']}&nbsp;{" "}
                      <Tour
                        sx={{
                          color: "#fac219",
                        }}
                      />
                    </Typography>} */}
                </Grid>
              </Typography>
            )}

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
              onClick={() => {
                navigate('/book');
              }}
            >
              Book Now
            </Button>
          </Grid>
          {/* <div className='image-grid'>
          {Array.isArray(data.top1) && data.top1.map((image, index) => (
  <img key={index} className='imgtop2' src={image} alt={`Zone Area ${index}`} />
))}
          </div> */}
          <img className='imgtop2' src={data.top1} alt={'Zone Area'} style={{ width: '364px', height: '250px', paddingBottom:'100px' }} />

        </Grid>
      ))}
    </Grid>
  );
};

export default Zone;