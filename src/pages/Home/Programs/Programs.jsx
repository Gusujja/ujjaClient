import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming React Router is being used
import styles from './Programs.module.css'; // Assuming you're using CSS Modules
import femalejiujitsu from "../../../assets/images/femalejiujitsuimg.jpg"
import over40 from "../../../assets/images/Over40.jpg"
import teenagers from "../../../assets/images/teenagers.jpg"
import beginners from "../../../assets/images/beginners.jpg"
import kids from "../../../assets/images/kids.jpg"

const Programs = () => {
  const navigate = useNavigate();

  const imageLinks = [
    { src: femalejiujitsu, alt: 'femalejiujitsu', link: '/femalepage' },
    { src: over40 , alt: 'over40JiuJitsu', link: '/over40' },
    { src: teenagers, alt: 'teenagersJiuJitsu', link: '/teenagers' },
    { src: beginners, alt: 'beginnersJiuJitsu', link: '/beginners' },
    { src: kids, alt: 'kidsJiuJitsu', link: '/kids' },
  ];

  return (
    <div className={styles.container}>
      <p className={styles.header}>CLICK ON ANY OF THE PROGRAM BELOW TO SIGN UP FOR A FREE ONE DAY TRAIL</p>
      <div className={styles.imageGrid}>
        {imageLinks.map((image, index) => (
            
          <div
            key={index}
            className={styles.imageWrapper}
            onClick={() => navigate(image.link)}
          >
            
            <img
              src={image.src}
              alt={image.alt}
              className={styles.image}
            />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
