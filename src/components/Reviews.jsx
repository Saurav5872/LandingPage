import React from "react";
import { FaStar } from "react-icons/fa";
import "./Reviews.css";

const reviews = [
  {
    text: "VibeSoft redesigned our website beautifully. Our online traffic has doubled, and customers love the new layout.",
    name: "Kartik Reddy",
    company: "Reddy Electronics, Hyderabad",
  },
  {
    text: "Managing our online store is now effortless. The team guided us through every step, and the results are incredible.",
    name: "Meera Joshi",
    company: "Joshi Fashion House, Mumbai",
  },
  {
    text: "Thanks to their digital marketing strategy, our inquiries increased threefold. Their support has been outstanding.",
    name: "Arjun Kapoor",
    company: "Kapoor Traders, Bangalore",
  },
  {
    text: "The website looks sleek and works perfectly on mobile. Orders are coming in faster than ever.",
    name: "Nisha Verma",
    company: "Verma Bakery, Delhi",
  },
  {
    text: "We’ve gone from serving just our local customers to receiving orders nationwide. Growth has been phenomenal.",
    name: "Rohit Chauhan",
    company: "Chauhan Automobiles, Jaipur",
  },
  {
    text: "Our social media engagement has skyrocketed. The content and design strategies are spot-on.",
    name: "Anjali Gupta",
    company: "Gupta Crafts, Ahmedabad",
  },
  {
    text: "International clients started contacting us soon after the website launch. The site is easy to navigate and mobile-friendly.",
    name: "Sandeep Malhotra",
    company: "Malhotra Agro, Pune",
  },
  {
    text: "The online booking system is super simple. Our clients can schedule appointments in just a few clicks.",
    name: "Pooja Nair",
    company: "Nair Wellness Center, Kochi",
  },
  {
    text: "Our handmade products now reach customers across the globe. The SEO work has been exceptional.",
    name: "Vikram Singh",
    company: "Singh Handicrafts, Udaipur",
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="reviews-section py-5">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold ">What People Are <span className="text-orange">Saying About VibeSoft</span></h1>
        <p className="text-center text-muted mb-4">
          Hear from our satisfied clients who have transformed their businesses with our digital solutions.
        </p>
        <div className="row">
          {reviews.map((review, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="review-card p-4 shadow-sm h-100">
                <div className="review-stars mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <h6 className="reviewer-name mt-3">{review.name}</h6>
                <p className="reviewer-company">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
