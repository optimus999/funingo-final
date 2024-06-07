import React from 'react'
import './pages.css'
import { P1000, P1500, P2000, P2500, P3000, P500, P5000, activityZoneMobileText, activityZoneText, bookNow, keyIcon, sec11, sec12, sec21, sec22, sec31, sec32, sec41, sec42, sec43, sec44, sec51, sec52, sec53, sec54, sec61, sec62, sec71, sec81, sec82, sec83 } from '../../assets'
import { useNavigate } from 'react-router';
import { Grid, Typography, Button } from '@mui/material';
const Zone = () => {
  const navigate = useNavigate();
  return (
    <div className=''>
      <section className='section0 w-full'>
        <div className='div1'>
          <div className=" flex justify-center mt-20">
            {/* for Desktop View  */}
            <img className='azImage max-sm:hidden' src={activityZoneText} alt="" />
            {/* for Mobile View  */}
            <img className='azImage lg:hidden w-[220px]' src={activityZoneMobileText} alt="" />
          </div>
        </div>
      </section>


      <section>
        <div className='div2 max-sm:block lg:flex max-sm:justify-around max-sm:space-y-[-300px] items-center space-x-52'>
          <div className='block text-left lg:ml-40'>
            <h3 className='text-primary'>Zone 1</h3>
            <h4 className='text-secondary'>Bounce Harbor</h4>
            <div className="flex items-center max-sm:justify-center">
              <img src={keyIcon} alt="" className="mr-2 max-sm:w-5" />
              <p className="text-2xl keys">Trampoline Treasure Island</p>
            </div>

            <div className=" mt-8 max-sm:mt-2 flex max-sm:justify-center">
              {/* Your logo goes here */}
              <img src={P2500} className='pointIcon' alt="Logo" />
            </div>
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
            <div className='mt-8 flex-col items-center justify-center lg:hidden'>
              <img src={sec11} alt="" className="sec11-mobile mb-4" />
              <img src={sec12} alt="" className='sec12-mobile' />
            </div>
          </div>

          <div className='block max-sm:hidden'>
            <div className='sec11 '>
              {/* Image for sec11 */}
            </div>
            <div className='sec12 w-[500px]'>
              {/* Image for sec12 */}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 Starting  */}
      <section>
        <div className='div3 flex flex-col lg:flex-row items-center max-sm:justify-around max-sm:space-y-[-300px] lg:space-x-[-100px]'>
          <div className='block text-center lg:text-left lg:ml-40'>
            <h3 className='text-primary'>Zone 2</h3>
            <h4 className='text-secondary'>Battlefront Bay</h4>

            <div className="flex flex-row items-center mt-10 space-x-2">
              <img src={keyIcon} alt="" className="mr-2" />
              <div className="flex-grow">
                <p className="text-2xl keys">Paintball Arena</p>
              </div>
              <img className='self-start lg:self-center pointIcon ' src={P2500} alt="" />
            </div>
            <div className='flex flex-row items-center space-x-2 mt-4'>
              <img src={keyIcon} alt="" className="mr-0 lg:mr-2" />
              <div className="flex-grow">
                <p className='text-2xl keys'>Gel Blast Arena</p>
              </div>
              <img className='self-start lg:self-center pointIcon' src={P1500} alt="" />
            </div>

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
          </div>

          <div className='flex flex-row space-x-8 justify-center items-center'>
            <div className='sec21 ml-40 max-sm:hidden'></div>
            <div className='sec22 max-sm:hidden'></div>
            <img src={sec21} className=' lg:hidden w-44 h-44' alt="" />
            <img src={sec22} className=' lg:hidden w-44 h-44' alt="" />
          </div>
        </div>
      </section>



      {/* Section 3 starting  */}

      <section>
        <div className='div4 flex flex-col max-sm:justify-around max-sm:space-y-[-300px] lg:flex-row  items-center lg:space-y-0'>
          <div className='block text-center lg:text-left lg:ml-40'>
            <h3 className='text-primary'>Zone 3</h3>
            <h4 className='text-secondary'>Ropes & Ridges</h4>

            <div className="flex flex-row items-center mt-10 space-x-2">
              <img src={keyIcon} alt="" className="mr-2" />
              <div className="flex-grow">
                <p className="text-2xl max-sm:hidden keys">Low Ropes <br /> Challenge</p>
                <p className="text-2xl lg:hidden keys">Low Ropes Challenge</p>
              </div>
              <img className='self-start lg:self-center pointIcon' src={P2500} alt="" />
            </div>
            <div className='flex flex-row items-center space-x-2 mt-4'>
              <img src={keyIcon} alt="" className="mr-2" />
              <div className="flex-grow">
                <p className='text-2xl keys max-sm:hidden'>High Ropes <br /> Haven</p>
                <p className='text-2xl keys lg:hidden'>High Ropes Haven</p>
              </div>
              <img className='self-start lg:self-center pointIcon' src={P1500} alt="" />
            </div>

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
          </div>

          <div className='flex flex-row space-x-8'>
            <div className='sec31 ml-40 max-sm:hidden'></div>
            <div className='sec32 max-sm:hidden'></div>
            <img src={sec31} className='lg:hidden  w-44 h-44' alt="" />
            <img src={sec32} className='lg:hidden  w-44 h-44' alt="" />
          </div>
        </div>
      </section>


      {/* Zone 4 starting  */}

      <section className='section4'>
        <div className='div5 flex flex-col lg:flex-row max-sm:justify-around max-sm:space-y-[-300px] items-center lg:space-y-0'>
          <div className='block text-center lg:text-left lg:ml-40'>
            <h3 className='text-primary'>Zone 4</h3>
            <h4 className='text-secondary'>Thrill Peaks</h4>

            <div>
              <div className="flex flex-row items-center mt-10 space-x-2">
                <img src={keyIcon} alt="" className="mr-2" />
                <div className="flex-grow">
                  <p className="text-2xl keys max-sm:hidden">Giant Swing <br /> Skybound</p>
                  <p className="text-2xl keys lg:hidden">Giant Swing Skybound</p>
                </div>
                <img className='self-start lg:self-center pointIcon' src={P5000} alt="" />
              </div>
              <div className='flex flex-row items-center space-x-2 mt-4'>
                <img src={keyIcon} alt="" className="mr-2" />
                <div className="flex-grow">
                  <p className='text-2xl keys'>Sky Cyclist's Trail</p>
                </div>
                <img className='self-start lg:self-center pointIcon' src={P3000} alt="" />
              </div>
              <div className="flex flex-row items-center space-x-2 mt-4">
                <img src={keyIcon} alt="" className="mr-2" />
                <div className="flex-grow">
                  <p className="text-2xl keys max-sm:hidden">Commando Climb <br /> Net</p>
                  <p className="text-2xl keys lg:hidden">Commando Climb Net</p>
                </div>
                <img className='self-start lg:self-center pointIcon' src={P500} alt="" />
              </div>
              <div className='flex flex-row items-center space-x-2 mt-4'>
                <img src={keyIcon} alt="" className="mr-2" />
                <div className="flex-grow">
                  <p className='text-2xl keys'>Peak Rock Climb</p>
                </div>
                <img className='self-start lg:self-center pointIcon' src={P2000} alt="" />
              </div>
            </div>


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
          </div>

          <div className='flex flex-col space-y-5'>
            <div className='flex flex-row lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0'>
              <div className='sec41 max-sm:hidden ml-40'></div>
              <div className='sec42 max-sm:hidden'></div>
              <img src={sec41} className='lg:hidden w-52 h-52' alt="" />
              <img src={sec42} className='lg:hidden w-52 h-52' alt="" />
            </div>
            <div className='flex flex-row lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0'>
              <div className='sec43 max-sm:hidden ml-40'></div>
              <div className='sec44 max-sm:hidden'></div>
              <img src={sec43} className='lg:hidden w-52 h-52' alt="" />
              <img src={sec44} className='lg:hidden w-52 h-52' alt="" />
            </div>
          </div>
        </div>
      </section>


      {/* Zone 5 Starting  */}

      <section className='section5'>
        <div className='div6 flex flex-col lg:flex-row max-sm:justify-around max-sm:space-y-[-300px] items-center lg:space-y-0 lg:space-x-32'>
          <div className='block text-center lg:text-left lg:ml-40'>
            <h3 className='text-primary'>Zone 5</h3>
            <h4 className='text-secondary'>Inflatable Isle</h4>

            <div>
              <div className="flex flex-row items-center mt-10 space-x-2">
                <img src={keyIcon} alt="" className="mr-2" />
                <div className="flex-grow">
                  <p className="text-2xl keys max-sm:hidden">Meltdown <br /> Madness</p>
                  <p className="text-2xl keys lg:hidden">Meltdown Madness</p>
                </div>
                <img className='self-start lg:self-center pointIcon' src={P1000} alt="" />
              </div>
              <div className='flex flex-row items-center space-x-2 mt-4'>
                <img src={keyIcon} alt="" className="mr-2" />
                <div className="flex-grow">
                  <p className='text-2xl keys max-sm:hidden'>Bucking Bull <br /> Arena</p>
                  <p className='text-2xl keys lg:hidden'>Bucking Bull Arena</p>
                </div>
                <img className='self-start lg:self-center pointIcon' src={P1000} alt="" />
              </div>
              <div className="flex flex-row items-center space-x-2 mt-4">
                <img src={keyIcon} alt="" className="mr-2" />
                <div className="flex-grow">
                  <p className="text-2xl keys max-sm:hidden">Kid's Obstacle <br /> Odyssey</p>
                  <p className="text-2xl keys lg:hidden">Kid's Obstacle Odyssey</p>
                </div>
                <img className='self-start lg:self-center pointIcon' src={P500} alt="" />
              </div>
              <div className='flex flex-row items-center space-x-2 mt-4'>
                <img src={keyIcon} alt="" className="mr-2" />
                <div className="flex-grow">
                  <p className='text-2xl keys'>Sumo Showdown</p>
                </div>
                <img className='self-start lg:self-center pointIcon' src={P500} alt="" />
              </div>
            </div>

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
          </div>

          <div className='flex flex-col space-y-5'>
            <div className='flex flex-row lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0'>
              <div className='sec51 max-sm:hidden ml-20'></div>
              <div className='sec52 max-sm:hidden'></div>
              <img src={sec51} className='lg:hidden w-52 h-52' alt="" />
              <img src={sec52} className='lg:hidden w-52 h-52' alt="" />
            </div>
            <div className='flex flex-row lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0'>
              <div className='sec53 max-sm:hidden ml-20'></div>
              <div className='sec54 max-sm:hidden'></div>
              <img src={sec53} className='lg:hidden w-52 h-52' alt="" />
              <img src={sec54} className='lg:hidden w-52 h-52' alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Zone 6 starting  */}

      <section className='section6'>
        <div className='div7 flex flex-col lg:flex-row max-sm:justify-around max-sm:space-y-[-300px] items-center lg:space-y-0 lg:space-x-32'>
          <div className='block text-center lg:text-left lg:ml-40'>
            <h3 className='text-primary'>Zone 6</h3>
            <h4 className='text-secondary'>Marksman's Meadow</h4>

            <div className="flex flex-row items-center mt-10 space-x-2">
              <img src={keyIcon} alt="" className="mr-2" />
              <div className="flex-grow">
                <p className="text-2xl keys">Archery Alley</p>
              </div>
              <img className='self-start lg:self-center pointIcon' src={P500} alt="" />
            </div>
            <div className='flex flex-row items-center space-x-2 mt-4'>
              <img src={keyIcon} alt="" className="mr-2" />
              <div className="flex-grow">
                <p className='text-2xl keys'>Shooter's Range</p>
              </div>
              <img className='self-start lg:self-center pointIcon' src={P1000} alt="" />
            </div>

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
          </div>

          <div className='flex flex-col space-y-5'>
            <div className='flex flex-row lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0'>
              <div className='sec61 max-sm:hidden ml-20'></div>
              <div className='sec62 max-sm:hidden'></div>
              <img src={sec61} className='lg:hidden w-52 h-52' alt="" />
              <img src={sec62} className='lg:hidden w-52 h-52' alt="" />
            </div>
          </div>
        </div>
      </section>


      {/* Zone 7 Starting  */}

      <section className='section7'>
        <div className='div8 flex flex-col lg:flex-row max-sm:justify-around max-sm:space-y-[-300px] items-center lg:space-y-0 lg:space-x-32'>
          <div className='block text-center lg:text-left lg:ml-40'>
            <h3 className='text-primary'>Zone 7</h3>
            <h4 className='text-secondary'>Speedster's Circuit</h4>

            <div className="flex flex-row items-center justify-center mt-10 space-x-2">
              <img src={keyIcon} alt="" className="mr-2" />
              <p className="text-2xl keys">Pedal Power Go Kart</p>
              <img className='pointIcon max-sm:hidden mt-5' src={P1000} alt="" />
            </div>
            <div className="flex flex-row justify-center items-center mt-2 space-x-2">
              <img className='pointIcon mt-5 lg:hidden' src={P1000} alt="" />
            </div>

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
          </div>

          <div className='flex flex-col space-y-5'>
            <div className='flex flex-wrap lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0'>
              <div className='sec71 max-sm:hidden ml-20'></div>
              <img src={sec71} className='lg:hidden w-[350px]' alt="" />
            </div>
          </div>
        </div>
      </section>


      {/* Zone 8 Starting  */}

      <section className='section8'>
        <div className='div9 flex flex-col lg:flex-row max-sm:justify-around max-sm:space-y-[-300px] items-center lg:space-y-0 lg:space-x-32'>
          <div className='block text-center lg:text-left lg:ml-40'>
            <h3 className='text-primary'>Zone 8</h3>
            <h4 className='text-secondary'>Adrenaline Airspace</h4>

            <div className="flex flex-col space-y-4 mt-10">
              <div className="flex flex-row items-center space-x-2">
                <img src={keyIcon} alt="" className="mr-2" />
                <div className="flex-grow">
                  <p className="text-2xl keys max-sm:hidden">Rocket Ejector <br />Launch</p>
                  <p className="text-2xl keys lg:hidden">Rocket Ejector Launch</p>
                </div>
                <img className='self-start lg:self-center pointIcon' src={P2500} alt="" />
              </div>
              <div className="flex flex-row items-center space-x-2">
                <img src={keyIcon} alt="" className="mr-2" />
                <div className="flex-grow">
                  <p className='text-2xl keys'>Gyro Sphere 360</p>
                </div>
                <img className='self-start lg:self-center pointIcon' src={P1500} alt="" />
              </div>
              <div className="flex flex-row items-center space-x-2">
                <img src={keyIcon} alt="" className="mr-2" />
                <div className="flex-grow">
                  <p className='text-2xl keys'>Cyclone Cycle 360</p>
                </div>
                <img className='self-start lg:self-center pointIcon' src={P1000} alt="" />
              </div>
            </div>

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
          </div>

          <div className='flex flex-col space-y-5'>
            <div className='flex flex-wrap lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0'>
              <div className='sec81 max-sm:hidden '></div>
              <div className='sec82 max-sm:hidden'></div>
              <img src={sec81} className='lg:hidden w-52 h-52' alt="" />
              <img src={sec82} className='lg:hidden w-52 h-52' alt="" />
            </div>

            <div className='flex justify-center lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0'>
              <div className='sec83 max-sm:hidden'></div>
              <img src={sec83} className='lg:hidden w-52 h-52' alt="" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Zone