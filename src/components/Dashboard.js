import React, {useEffect} from "react"
import axiosWithAuthSpotify from "../util/axiosWithAuthSpotify"


import Search from "./Search"
import Likes from "./Likes"
import Suggestions from "./Suggestions"
import SongList from "./SongList"

import {connect} from "react-redux"


import spotifylogo from "../assets/spotifylogo.png" 


const Dashboard = props => {
  useEffect(() => {

  })
   
//   const getSongs = () => {
//         axiosWithAuthSpotify()
//         .get("https://api.spotify.com/v1/browse/featured-playlists?limit=6")
//         .then(res => {
//             console.log(res)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//   }
   
   
    return (
      <>
      <header className="nav-search">
            <img src={spotifylogo} alt ="" id="logo"/>
           <div className="search-container">
             <div className="search-fnc">
                <Search />
             </div> 
           </div>
        </header>
        {/* <button onClick={getSongs}>Get playlists</button> */}

        <div className="rendered-songs">
            <SongList/>
        <p>{props.id}</p>
        </div>

        <div className="likes-container">
            <Likes />
        </div>

        <div className="suggestions-container">
            <Suggestions />
        </div>
       
    
       
        </>
    
   
   )
}



const mapStateToProps = state => {
   return {
    id: state.id
   } 
}
export default connect(mapStateToProps, {})(Dashboard);



