import React from 'react'
import './pages.css'
import { P1000, P1500, P2000, P2500, P3000, P500, P5000, activityZoneText, bookNow, keyIcon, sec11, sec12 } from '../../assets'

const zone = () => {
  return (
    <div className=''>
      <section className='section0 w-full'>
        <div className='div1'>
          <div className=" flex justify-center mt-20">
            <img src={activityZoneText} alt="" />
          </div>
        </div>
      </section>


      <section >
        <div className='div2 flex justify-center align-middle items-center pl-20 space-x-52'>
          <div className='block text-left'>
            <h3 className='text-primary'>Zone 1</h3>
            <h4 className='text-secondary'>Bounce Harbor</h4>
            <div className="flex items-center">
              <img src={keyIcon} alt="" className="mr-2" />
              <p className="text-2xl keys">Trampoline Treasure Island</p>
            </div>

            <div className=" mt-8">
              {/* Your logo goes here */}
              <img src={P2500} className='pointIcon' alt="Logo" />
            </div>
            <button className="book-now mt-8">
              <img src={bookNow} alt="" />
            </button>
          </div>

          <div className='block'>
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
        <div className=' div3 flex justify-center align-middle items-center space-x-32'>
          <div className='block text-left'>
            <h3 className='text-primary'>Zone 2</h3>
            <h4 className='text-secondary'>Battlefront Bay</h4>

            <div className="flex items-center mt-10">
              <img src={keyIcon} alt="" className="mr-2" />
              <p className="text-2xl keys">Paintball Arena</p>
              <img className='pointIcon' src={P2500} alt="" />
            </div>
            <div className='flex items-center'>
              <img src={keyIcon} alt="" className="mr-2" />
              <p className='text-2xl keys'>Gel Blast Arena</p>
              <img className='pointIcon' src={P1500} alt="" />
            </div>

            <button className="book-now mt-8">
              <img src={bookNow} alt="" />
            </button>
          </div>

          <div className=' flex'>
            <div className='sec21'>
              {/* Image for sec11 */}
            </div>
            <div className='sec22'>
              {/* Image for sec12 */}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 starting  */}

      <section>
        <div className='div4 flex justify-center align-middle items-center space-x-32'>
          <div className='block text-left'>
            <h3 className='text-primary'>Zone 3</h3>
            <h4 className='text-secondary'>Ropes & Ridges</h4>

            <div className="flex items-center mt-10">
              <img src={keyIcon} alt="" className="mr-2" />
              <p className="text-2xl keys">Low Ropes <br /> Challenge</p>
              <img className='pointIcon ml-5' src={P2500} alt="" />
            </div>
            <div className='flex items-center'>
              <img src={keyIcon} alt="" className="mr-2" />
              <p className='text-2xl keys'>High Ropes <br /> Haven</p>
              <img className='pointIcon ml-3' src={P1500} alt="" />
            </div>

            <button className="book-now mt-8">
              <img src={bookNow} alt="" />
            </button>
          </div>

          <div className=' flex'>
            <div className='sec31'>
              {/* Image for sec11 */}
            </div>
            <div className='sec32'>
              {/* Image for sec12 */}
            </div>
          </div>
        </div>
      </section>

      {/* Zone 4 starting  */}

      <section className='section4'>
        <div className='div5 flex justify-center align-middle items-center space-x-52'>
          <div className='block text-left'>
            <h3 className='text-primary'>Zone 4</h3>
            <h4 className='text-secondary'>Thrill Peaks</h4>

            <div>
              <div className="flex items-center mt-10">
                <img src={keyIcon} alt="" className="mr-2" />
                <p className="text-2xl keys">Giant Swing <br /> Skybound</p>
                <img className='pointIcon ml-24' src={P5000} alt="" />
              </div>
              <div className='flex items-center'>
                <img src={keyIcon} alt="" className="mr-2" />
                <p className='text-2xl keys'>Sky Cyclist's Trail</p>
                <img className='pointIcon ml-12' src={P3000} alt="" />
              </div>
              <div className="flex items-center">
                <img src={keyIcon} alt="" className="mr-2" />
                <p className="text-2xl keys">Commando Climb <br /> Net</p>
                <img className='pointIcon ml-8' src={P500} alt="" />
              </div>
              <div className='flex items-center'>
                <img src={keyIcon} alt="" className="mr-2" />
                <p className='text-2xl keys'>Peak Rock Climb</p>
                <img className='pointIcon ml-12' src={P2000} alt="" />
              </div>
            </div>

            <div className="logo mt-8">
              {/* Your logo goes here */}

            </div>
            <button className="book-now mt-8">
              <img src={bookNow} alt="" />
            </button>
          </div>

          <div className=' space-y-5'>
            <div className=' flex'>
              <div className='sec41'>
                {/* Image for sec11 */}
              </div>
              <div className='sec42'>
                {/* Image for sec12 */}
              </div>
            </div>

            <div className=' flex'>
              <div className='sec43'>
                {/* Image for sec11 */}
              </div>
              <div className='sec44'>
                {/* Image for sec12 */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone 5 Starting  */}

      <section className='section5'>
        <div className='div6 flex justify-center align-middle items-center space-x-52'>
          <div className='block text-left'>
            <h3 className='text-primary'>Zone 5</h3>
            <h4 className='text-secondary'>Inflatable Isle</h4>

            <div>
              <div className="flex items-center mt-10">
                <img src={keyIcon} alt="" className="mr-2" />
                <p className="text-2xl keys">Meltdown <br /> Madness</p>
                <img className='pointIcon ml-[120px]' src={P1000} alt="" />
              </div>
              <div className='flex items-center'>
                <img src={keyIcon} alt="" className="mr-2" />
                <p className='text-2xl keys'>Bucking Bull <br /> Arena</p>
                <img className='pointIcon ml-24' src={P1000} alt="" />
              </div>
              <div className="flex items-center">
                <img src={keyIcon} alt="" className="mr-2" />
                <p className="text-2xl keys">Kid's Obstacle <br /> Odysse</p>
                <img className='pointIcon ml-20' src={P500} alt="" />
              </div>
              <div className='flex items-center'>
                <img src={keyIcon} alt="" className="mr-2" />
                <p className='text-2xl keys'>Sumo Showdown</p>
                <img className='pointIcon ml-12' src={P500} alt="" />
              </div>
            </div>

            <button className="book-now mt-8">
              <img src={bookNow} alt="" />
            </button>
          </div>

          <div className=' space-y-5'>
            <div className=' flex'>
              <div className='sec51'>
                {/* Image for sec11 */}
              </div>
              <div className='sec52'>
                {/* Image for sec12 */}
              </div>
            </div>

            <div className=' flex'>
              <div className='sec53'>
                {/* Image for sec11 */}
              </div>
              <div className='sec54'>
                {/* Image for sec12 */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone 6 starting  */}

      <section className='section6'>
        <div className='div7 flex justify-center align-middle items-center space-x-32'>
          <div className='block align-middle text-left'>
            <h3 className='text-primary'>Zone 6</h3>
            <h4 className='text-secondary'>Marksman's Meadow</h4>


            <div className="flex items-center mt-10">
              <img src={keyIcon} alt="" className="mr-2" />
              <p className="text-2xl keys">Archery Alley</p>
              <img className='pointIcon ml-12' src={P500} alt="" />
            </div>
            <div className='flex items-center'>
              <img src={keyIcon} alt="" className="mr-2" />
              <p className='text-2xl keys'>Shooter's Range</p>
              <img className='pointIcon ml-5' src={P1000} alt="" />
            </div>

            <div className="logo mt-8">
              {/* Your logo goes here */}

            </div>
            <button className="book-now mt-8">
              <img src={bookNow} alt="" />
            </button>
          </div>

          <div className=' flex'>
            <div className='sec61'>
              {/* Image  */}
            </div>
            <div className='sec62'>
              {/* Image  */}
            </div>
          </div>
        </div>
      </section>

      {/* Zone 7 Starting  */}

      <section className='section7'>
      <div className='div8 flex justify-center align-middle items-center space-x-32'>
          <div className='block align-middle text-left'>
            <h3 className='text-primary'>Zone 7</h3>
            <h4 className='text-secondary'>Speedster's Circuit</h4>


            <div className="flex items-center mt-10">
              <img src={keyIcon} alt="" className="mr-2" />
              <p className="text-2xl keys">Pedal Power Go Kart</p>
            </div>
            <img className='pointIcon mt-5' src={P1000} alt="" />

            <div className="logo mt-8">
              {/* Your logo goes here */}

            </div>
            <button className="book-now mt-8">
              <img src={bookNow} alt="" />
            </button>
          </div>

          <div className=' flex'>
            <div className='sec71'>
              {/* Image  */}
            </div>
          </div>
        </div>
      </section>

      {/* Zone 8 Starting  */}

      <section className='section8'>
        <div className='div9 flex justify-center text-left align-middle items-center space-x-52'>
          <div className='block align-middle'>
            <h3 className='text-primary'>Zone 8</h3>
            <h4 className='text-secondary'>Adrenaline Airspace</h4>
            
            <div className="flex items-center mt-10">
              <img src={keyIcon} alt="" className="mr-2" />
              <p className="text-2xl keys">Rocket Ejector <br />Launch</p>
              <img className='pointIcon ml-12' src={P2500} alt="" />
            </div>
            <div className='flex items-center'>
              <img src={keyIcon} alt="" className="mr-2" />
              <p className='text-2xl keys'>Gyro Sphere 360</p>
              <img className='pointIcon ml-5' src={P1500} alt="" />
            </div>
            <div className='flex items-center'>
              <img src={keyIcon} alt="" className="mr-2" />
              <p className='text-2xl keys'>Cyclone cycle 360</p>
              <img className='pointIcon ml-5' src={P1000} alt="" />
            </div>

            <button className="book-now mt-8">
              <img src={bookNow} alt="" />
            </button>
          </div>

          <div className=' space-y-5'>
            <div className=' block'>
              <div className=' flex flex-wrap space-x-5'>
                <div className='sec81'>
                  {/* <img src="" alt="" /> */}
                </div>
                <div className='sec82'>
                  {/* <img src="" alt="" /> */}
                </div>
              </div>
            </div>

            <div className='flex justify-center align-middle'>
              <div className='sec83'>
                {/* <img src="" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default zone