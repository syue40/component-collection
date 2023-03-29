import React, { useEffect, useState } from "react";
import MovieGallery from "../components/MovieGallery";
export default function BrowseMovies(props) {
    useEffect(() => {
        // This function will run after the component renders for the first time
        // You can fetch data or perform any other side effect here
        if(props.movies){
            setMovieDemoObjects(props.movies)
        }
        
        // Return a cleanup function to be executed before the component unmounts
        return () => {
          // Clean up any resources (such as event listeners or timers) here
        };
      }, [props.movies]); // The empty array means this hook will only run once when the component mounts
    

    const [movieDemoObjects, setMovieDemoObjects] = useState([
        {
          title: "Ace of Spades",
          // "poster":,
          description: "Jay-Z, need I say more?",
          genre: "Horror",
        },
        {
          title: "Bruichladdich",
          // "poster":,
          description: "Decent taste",
          genre: "Romance",
        },
        {
          title: "Casamigos",
          // "poster":,
          description: "Tequila brand by a celebrity",
          genre: "Comedy",
        },
        {
          title: "Dalmore",
          // "poster":,
          description: "Pretty good, commercial whisky",
          genre: "Romance",
        },
        {
          title: "Espolon",
          // "poster":,
          description: "Decent tequila",
          genre: "Comedy",
        },
        {
          title: "Flecha Azul",
          // "poster":,
          description: "Really good tequila",
          genre: "Comedy",
        },
        {
          title: "Glen's Vodka",
          // "poster":,
          description: "Glen made this, it's good",
          genre: "Comedy"
        },{
          title: "Ace of Spades",
          // "poster":,
          description: "Jay-Z, need I say more?",
          genre: "Horror",
        },
        {
          title: "Bruichladdich",
          // "poster":,
          description: "Decent taste",
          genre: "Romance",
        },
        {
          title: "Casamigos",
          // "poster":,
          description: "Tequila brand by a celebrity",
          genre: "Comedy",
        },
        {
          title: "Dalmore",
          // "poster":,
          description: "Pretty good, commercial whisky",
          genre: "Romance",
        },
        {
          title: "Espolon",
          // "poster":,
          description: "Decent tequila",
          genre: "Comedy",
        },
        {
          title: "Flecha Azul",
          // "poster":,
          description: "Really good tequila",
          genre: "Comedy",
        },
        {
          title: "Glen's Vodka",
          // "poster":,
          description: "Glen made this, it's good",
          genre: "Comedy"
        },
      ]);

  return (
    <div class="m-5">
        <MovieGallery movies={movieDemoObjects}/>
    </div>
  );
}
