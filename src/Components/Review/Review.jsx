import React, {useEffect} from 'react'
import './Review.css'

// Improted Images
import user1 from '../Assets/user (1).jpg'
import user2 from '../Assets/user (2).png'
import user3 from '../Assets/user (3).png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Review = () => {
  
 useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='review section'>
      <div className="secContainer">
        <span className="secTitle">
          What People Say
        </span>

        <div className="reviewContainer container grid">

          <div data-aos='fade-up' data-aos-duration='3000' className="singleReview">
            <div className="imgDiv">
              <img src={user1}/>
            </div>

            <p>
            Booking our vacation through Wonder was a game-changer. They took care of every detail, from flights and accommodations to personalized recommendations for sightseeing. Thanks to their expertise, we had a stress-free and unforgettable trip.
            </p>

            <div className="name">
              Nicole Webb
            </div>

          </div>

          <div data-aos='fade-up' data-aos-duration='3500' className="singleReview">
            <div className="imgDiv">
              <img src={user2}/>
            </div>

            <p>
            I highly recommend Wonder, They listened to our preferences and crafted a customized itinerary that perfectly matched our interests. 
            </p>

            <div className="name">
            Lidney Josline
            </div>

          </div>

          <div data-aos='fade-up' data-aos-duration='4000' className="singleReview">
            <div className="imgDiv">
              <img src={user3}/>
            </div>

            <p>
  Wonder provided us with expert guidance, insider tips, and access to exclusive experiences. Their professionalism and dedication ensured that our journey exceeded all expectations.
            </p>

            <div className="name">
            Rupert Loreot
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Review