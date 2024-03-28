import React, { useState, useEffect } from 'react';
import { Rating } from '@mui/material/';
import { BiExpandAlt } from "react-icons/bi";
import "../styles/tours.css";

const tourData = [
  { 
    image: require("../images/uk.jpg"), 
    rating: 4, 
    price: 27, 
    country: "United Kingdom" 
  },
  { 
    image: require("../images/czech.jpg"), 
    rating: 3.5, 
    price: 38, 
    country: "Czech Republic" 
  },
  { 
    image: require("../images/finland.jpg"), 
    rating: 2, 
    price: 24, 
    country: "Finland" 
  },
  { 
    image: require("../images/norway.jpg"), 
    rating: 5, 
    price: 32, 
    country: "Norway" 
  },
  { 
    image: require("../images/switzerland.jpg"), 
    rating: 1, 
    price: 155, 
    country: "Switzerland" 
  },
  { 
    image: require("../images/ireland.jpg"), 
    rating: 3.5, 
    price: 201, 
    country: "Ireland" 
  },
  { 
    image: require("../images/italy.jpg"), 
    rating: 4, 
    price: 75, 
    country: "Italy" 
  },
  { 
    image: require("../images/france.jpg"), 
    rating: 2, 
    price: 100, 
    country: "France" 
  },
  { 
    image: require("../images/spain.jpg"), 
    rating: 4, 
    price: 45, 
    country: "Spain" 
  },
  { 
    image: require("../images/greece.jpg"), 
    rating: 3, 
    price: 78, 
    country: "Greece" 
  },
  { 
    image: require("../images/turkey.jpg"), 
    rating: 2, 
    price: 28, 
    country: "Turkey" 
  },
  { 
    image: require("../images/germany.jpg"), 
    rating: 1, 
    price: 32, 
    country: "Germany" 
  },
  { 
    image: require("../images/usa.jpg"), 
    rating: 5, 
    price: 50, 
    country: "United States" 
  }
];

export default function Tours() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImage = () => {
      const imagePromises = tourData.map(tour => new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve();
        img.src = tour.image;
      }));
      Promise.all(imagePromises).then(() => setImagesLoaded(true));
    };

    loadImage();
  }, []);

  return (
    <div className={`tours p-2 m-0 ${imagesLoaded ? 'loaded' : ''}`}>
      <h1 id='tours'>Available <span className="specialText">Tours</span></h1>
      <div className="row m-0 p-0 toursList d-flex gap-3 justify-content-center">
        {tourData.map((tour, index) => (
          <div className="card m-0 p-0 col-lg-3 col-md-4 col-sm-5" key={index}>
            <img 
              src={tour.image} 
              className={`card-img-top ${imagesLoaded ? 'loaded' : ''}`} 
              alt={`Tour ${index + 1}`} 
            />
            <div className="card-body">
              <h5 className="card-title tourDuration fw-normal">7 days</h5>
              <p className="card-text tourDescription fw-medium">{tour.country}</p>
              <div className="container-fluid d-flex gap-2">
                <Rating
                  name={`rating-${index}`}
                  value={tour.rating}
                  precision={0.5}
                  readOnly
                  className='rating'
                />
              </div>
              <div className="container-fluid d-flex justify-content-between align-items-baseline">
                <p>From <span className='tourPrice'>${tour.price}</span></p>
                <a href="#" className="btn btn-primary s-flex justify-content-end m-1" id="viewTourButtons"> Details &nbsp;&nbsp;<BiExpandAlt className='fs-5 '/></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
