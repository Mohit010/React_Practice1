import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
   <>
     <div className = "home" id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children.</p>
        </div>


    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi incidunt aspernatur quia, dicta sed cum exercitationem est, inventore rerum aliquid ut dolor laborum. A excepturi voluptatibus nihil quas pariatur accusamus molestiae voluptas quam ducimus ipsum at, blanditiis ad, id unde ab omnis sunt. Doloremque, est ea. Est veritatis excepturi laborum quam, ipsum neque odit voluptas iure, facilis veniam doloribus aut reprehenderit suscipit accusantium voluptatum cumque deleniti, molestiae obcaecati voluptatibus fugit eligendi officia rerum. Maiores, id iste nihil modi exercitationem explicabo fuga earum porro possimus corrupti doloribus necessitatibus libero dolores? Beatae voluptas aliquam esse a hic quisquam quia inventore fugiat. Commodi?</p>
        </div>
    </div>

    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{animationDelay:"0.3s"}}>
                  <AiFillGoogleCircle/>
                  <p>Google</p>
                </div>
                <div style={{animationDelay:"0.5s"}}>
                  <AiFillAmazonCircle/>
                  <p>Amazon</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                  <AiFillYoutube/>
                  <p>Youtube</p>
                </div>
                <div style={{animationDelay:"1s"}}>
                  <AiFillInstagram/>
                  <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>

   </>
  )
}

export default Home