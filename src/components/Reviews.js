import React from 'react';
import './Reviews.css';
import reviewImage1 from '../assets/images/1.webp';
import reviewImage2 from '../assets/images/2.webp';
import reviewImage3 from '../assets/images/3.webp';
import reviewImage4 from '../assets/images/4.webp';

import testImage from '../assets/images/2024-07-27_04h02_50.png';
import bigImage from '../assets/images/2024-07-27_04h17_34.png';

const reviewsData = [
  {
    id: 1,
    image: reviewImage1,
    alt: 'Customer review 1',
  },
  {
    id: 2,
    image: reviewImage2,
    alt: 'Customer review 2',
  },
  {
    id: 3,
    image: reviewImage3,
    alt: 'Customer review 3',
  },
  {
    id: 4,
    image: reviewImage4,
    alt: 'Customer review 4',
  },
  {
    id: 5,
    image: reviewImage1,
    alt: 'Customer review 5',
  },
];

const Reviews = () => {
  return (
    <div className="reviews" id="reviews">
      <div className="container">
        <h2 className="reviews-title">Отзывы</h2>
        <div id="reviewsCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            {reviewsData.map((review, index) => (
              <li
                key={review.id}
                data-target="#reviewsCarousel"
                data-slide-to={index}
                className={index === 0 ? 'active' : ''}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {reviewsData.map((review, index) => (
              <div key={review.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={review.image} alt={review.alt} className="review-image d-block" />
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#reviewsCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#reviewsCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Reviews);
