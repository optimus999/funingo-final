// import React, { useEffect, useState,useRef  } from 'react';
// import {
//   Grid,
//   IconButton,
//   Typography,
//   Box,
//   Button,
//   TextField,
//   Dialog
// } from '@mui/material';
// import axios from 'axios';
// import { apiUrl } from '../../../constants';
// import { useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';

// const RedeemTicket = () => {
//   const [ticketId, setTicketId] = useState('');
//   const { token } = useSelector(state => state.userSlice);
//   const [ticket, setTicket] = useState({});
//   const [flag, setFlag] = useState({
//     red: 0,
//     yellow: 0,
//     green: 0,
//     golden: 0
//   });

//   const [inputValue, setInputValue] = useState(0);

//   const handleInputChange = (event) => {
//      setInputValue(event.target.value);
//   };

//   useEffect(() => {
//     console.log("Updated inputValue:", inputValue);
//   }, [inputValue]);

//   // const handleSubmit = () => {
//   //   console.log('Value entered by the user:', inputValue);
//   //   // You can use the value entered by the user for any further processing
//   // };
//   const { search } = useLocation();
//   const params = new URLSearchParams(search);

//   const [error1, setError1] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleFind = async ticketId => {
//     try {
//       const res = await axios.get(`${apiUrl}/qr/${ticketId}`, {
//         headers: {
//           token
//         }
//       });
//       setTicket(res.data.ticket);
//     } catch (err) {
//       setError1(err.response.data);
//     }
//   };

//   const redeemTicket = async () => {
//     try {
//       console.log("entering here");
//       await setFlag({ red: 0, green: 0, yellow: inputValue, golden: 0 });
//       setError('');
//       setSuccess(false);
//       const res = await axios.post(
//         `${apiUrl}/qr/${ticketId}/redeem`,
//         {
//           ...flag
//         },
//         {
//           headers: {
//             token
//           }
//         }
//       );
      
//       setSuccess(res.data?.success);
//       handleFind(ticketId);
//     }
//      catch (err) {
//       console.log("ticketId",ticketId);
//       console.log("errorrorrr",err);
//       setError(err.response.data);
//     }
//   };

//   useEffect(() => {
//     console.log("params.get('tid')",params.get('tid'));
//     setTicketId(params.get('tid') || '');
//   }, []);

//   return (
//     <Grid
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '60vh'
//       }}
//     >
//       <Grid
//         mb='20px'
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Typography
//           fontWeight={'600'}
//           fontSize={'24px'}
//           sx={{ color: '#2c5cc4' }}
//         >
//           Ticket Id
//         </Typography>
//         <TextField
//           value={ticketId}
//           onChange={e => {
//             setTicketId(e.target.value);
//             setTicket({});
//           }}
//           sx={{
//             mb: '20px'
//           }}
//           placeholder='Enter ticket id'
//         />
//         {error1.error && (
//           <Typography sx={{ color: 'red' }}>{error1.error}</Typography>
//         )}
//         <Button
//           variant='contained'
//           // sx={{ color: '#25507B' }}
//           onClick={() => handleFind(ticketId)}
//         >
//           Get Ticket Details
//         </Button>
//       </Grid>
//       <Dialog
//         open={ticket._id}
//         onClose={() => {
//           setTicket({});
//           setTicketId('');
//         }}
//       >
//         <Grid
//           p='20px'
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             flexDirection: 'column'
//           }}
//         >
//           <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//             <Typography
//               fontWeight={'600'}
//               fontSize={'24px'}
//               sx={{ color: '#2c5cc4' }}
//               mt='10px'
//             >
//               Available Coins
//             </Typography>
//             {/* <Typography fontSize={'18px'} fontWeight={'600'}>
//               Red:&nbsp;{ticket?.red}
//             </Typography> */}
//             <Typography fontSize={'18px'} fontWeight={'600'}>
//               Coins:&nbsp;{ticket?.yellow}
//             </Typography>
//             {/* <Typography fontSize={'18px'} fontWeight={'600'}>
//               Green:&nbsp;{ticket?.green}
//             </Typography>
//             <Typography fontSize={'18px'} fontWeight={'600'}>
//               Golden:&nbsp;{ticket?.golden} */}
//             {/* </Typography> */}
//           </Grid>
//           <Typography
//             fontWeight={'600'}
//             fontSize={'28px'}
//             sx={{ color: '#2c5cc4' }}
//             mb='20px'
//             px='10px'
//             textAlign={'center'}
//             mt='10px'
//           >
//             {`Redeem a coin for ${ticket?.person_name ?? 'User'}`}
//           </Typography>
//           <Grid
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '20px',
//               mb: '20px',
//               alignItems: 'flex-start',
//               width: '250px'
//             }}
//           >
//             {/* <Box
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '5px'
//               }}
//               onClick={() =>
//                 setFlag({ red: 1, green: 0, yellow: 0, golden: 0 })
//               }
//             >
//               <input type='radio' name='flag' id='red-flag' />
//               <Box
//                 component={'label'}
//                 htmlFor='red-flag'
//                 sx={{ fontSize: '20px' }}
//               >
//                 Red
//               </Box>
//             </Box> */}
//             <Box
//       sx={{
//         display: 'flex',
//         // background:'black',
//         alignItems: 'center',
//         gap: '5px'
//       }}
//       onClick={() =>
//         {
//           console.log("inputValue from onclick",inputValue);
//           setFlag({ red: 0, green: 0, yellow: inputValue, golden: 0 })
//         }
//       }
//     >
//       <input 
//         value={inputValue} 
//         type='number' 
//         name='flag' 
//         id='yellow-flag' 
//         onChange={handleInputChange} 
//       />

//       <Box
//         component={'label'}
//         htmlFor='yellow-flag'
//         sx={{ fontSize: '20px' }}
//       >
//         Coins
//       </Box>
//     </Box>
//             {/* <Box
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '5px'
//               }}
//               onClick={() =>
//                 setFlag({ red: 0, green: 1, yellow: 0, golden: 0 })
//               }
//             >
//               <input type='radio' name='flag' id='greem-flag' />
//               <Box
//                 component={'label'}
//                 htmlFor='greem-flag'
//                 sx={{ fontSize: '20px' }}
//               >
//                 Green
//               </Box>
//             </Box> */}
//             {/* <Box
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '5px'
//               }}
//               onClick={() =>
//                 setFlag({ red: 0, green: 0, yellow: 0, golden: 1 })
//               }
//             >
//               <input type='radio' name='flag' id='golden-flag' />
//               <Box
//                 component={'label'}
//                 htmlFor='golden-flag'
//                 sx={{ fontSize: '20px' }}
//               >
//                 Golden
//               </Box>
//             </Box> */}
//             {error.error && (
//               <Typography sx={{ color: 'red' }}>{error.error}</Typography>
//             )}
//             {success && (
//               <Typography sx={{ color: 'green' }}>
//                 You have successfully redeemed a coin
//               </Typography>
//             )}
//             <Button variant='contained' onClick={redeemTicket} fullWidth>
//               Redeem
//             </Button>
//           </Grid>
//         </Grid>
//       </Dialog>
//     </Grid>
//   );
// };

// export default RedeemTicket;












import React, { useEffect, useState,useRef  } from 'react';
import {
  Grid,
  IconButton,
  Typography,
  Box,
  Button,
  TextField,
  Dialog
} from '@mui/material';
import axios from 'axios';
import { apiUrl } from '../../../constants';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { yellow } from '@mui/material/colors';

const RedeemTicket = () => {
  const [ticketId, setTicketId] = useState('');
  const { token } = useSelector(state => state.userSlice);
  const [ticket, setTicket] = useState({});
  const [flag, setFlag] = useState({
    red: 0,
    yellow: 0,
    green: 0,
    golden: 0
  });

  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event) => {
     setInputValue(event.target.value);
  };

  useEffect(() => {
    console.log("Updated inputValue:", inputValue);
  }, [inputValue]);

  // const handleSubmit = () => {
  //   console.log('Value entered by the user:', inputValue);
  //   // You can use the value entered by the user for any further processing
  // };
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const [error1, setError1] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFind = async ticketId => {
    try {
      const res = await axios.get(`${apiUrl}/qr/${ticketId}`, {
        headers: {
          token
        }
      });
      setTicket(res.data.ticket);
    } catch (err) {
      setError1(err.response.data);
    }
  };

  const redeemTicket = async () => {
    try {
      // console.log("current yellow" , flag.yellow  + "input value coming" , inputValue)
      console.log(inputValue);
      setFlag(flag.yellow = inputValue)
      // console.log("current yellow now" , flag.yellow  + "input value " , inputValue)
      setError('');
      setSuccess(false);
      const res = await axios.post(
        `${apiUrl}/qr/${ticketId}/redeem`,
        {
          ...flag
        },
        {
          headers: {
            token
          }
        }
      );
      
      setSuccess(res.data?.success);
      handleFind(ticketId);
    }
     catch (err) {
      alert("Please Enter coins in the field again!!")
      console.log("ticketId",ticketId);
      console.log("errorrorrr",err);
      // setError(err.response.data); 
    }
  };

  useEffect(() => {
    console.log("params.get('tid')",params.get('tid'));
    setTicketId(params.get('tid') || '');
  }, []);

  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh'
      }}
    >
      <Grid
        mb='20px'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          fontWeight={'600'}
          fontSize={'24px'}
          sx={{ color: '#2c5cc4' }}
        >
          Ticket Id
        </Typography>
        <TextField
          value={ticketId}
          onChange={e => {
            setTicketId(e.target.value);
            setTicket({});
          }}
          sx={{
            mb: '20px'
          }}
          placeholder='Enter ticket id'
        />
        {error1.error && (
          <Typography sx={{ color: 'red' }}>{error1.error}</Typography>
        )}
        <Button
          variant='contained'
          // sx={{ color: '#25507B' }}
          onClick={() => handleFind(ticketId)}
        >
          Get Ticket Details
        </Button>
      </Grid>
      <Dialog
        open={ticket._id}
        onClose={() => {
          setTicket({});
          setTicketId('');
        }}
      >
        <Grid
          p='20px'
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <Grid sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography
              fontWeight={'600'}
              fontSize={'24px'}
              sx={{ color: '#2c5cc4' }}
              mt='10px'
            >
              Available Coins
            </Typography>
            {/* <Typography fontSize={'18px'} fontWeight={'600'}>
              Red:&nbsp;{ticket?.red}
            </Typography> */}
            <Typography fontSize={'18px'} fontWeight={'600'}>
              Coins:&nbsp;{ticket?.yellow}
            </Typography>
            {/* <Typography fontSize={'18px'} fontWeight={'600'}>
              Green:&nbsp;{ticket?.green}
            </Typography>
            <Typography fontSize={'18px'} fontWeight={'600'}>
              Golden:&nbsp;{ticket?.golden} */}
            {/* </Typography> */}
          </Grid>
          <Typography
            fontWeight={'600'}
            fontSize={'28px'}
            sx={{ color: '#2c5cc4' }}
            mb='20px'
            px='10px'
            textAlign={'center'}
            mt='10px'
          >
            {`Redeem a coin for ${ticket?.person_name ?? 'User'}`}
          </Typography>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              mb: '20px',
              alignItems: 'flex-start',
              width: '250px'
            }}
          >
            {/* <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
              onClick={() =>
                setFlag({ red: 1, green: 0, yellow: 0, golden: 0 })
              }
            >
              <input type='radio' name='flag' id='red-flag' />
              <Box
                component={'label'}
                htmlFor='red-flag'
                sx={{ fontSize: '20px' }}
              >
                Red
              </Box>
            </Box> */}
            <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}
      onClick={() =>
        {
          console.log("inputValue from onclick",inputValue);
          setFlag({ red: 0, green: 0, yellow: inputValue, golden: 0 })
        }
      }
    >
      <input 
        value={inputValue} 
        type='number' 
        name='flag' 
        id='yellow-flag' 
        onChange={handleInputChange} 

      />
      <Box
        component={'label'}
        htmlFor='yellow-flag'
        sx={{ fontSize: '20px' }}
      >
        Coins
      </Box>
    </Box>
            {/* <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
              onClick={() =>
                setFlag({ red: 0, green: 1, yellow: 0, golden: 0 })
              }
            >
              <input type='radio' name='flag' id='greem-flag' />
              <Box
                component={'label'}
                htmlFor='greem-flag'
                sx={{ fontSize: '20px' }}
              >
                Green
              </Box>
            </Box> */}
            {/* <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
              onClick={() =>
                setFlag({ red: 0, green: 0, yellow: 0, golden: 1 })
              }
            >
              <input type='radio' name='flag' id='golden-flag' />
              <Box
                component={'label'}
                htmlFor='golden-flag'
                sx={{ fontSize: '20px' }}
              >
                Golden
              </Box>
            </Box> */}
            {error.error && (
              <Typography sx={{ color: 'red' }}>{error.error}</Typography>
            )}
            {success && (
              <Typography sx={{ color: 'green' }}>
                You have successfully redeemed coins
              </Typography>
            )}
            <Button variant='contained' onClick={redeemTicket} fullWidth>
              Redeem
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </Grid>
  );
};

export default RedeemTicket;
