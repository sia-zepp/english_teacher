import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import './CourseDescription.css'; // Importing the CourseDescription CSS
import CourseCard from './CourseCard';
import CourseDescription from './CourseDescription';
import servicesImage from '../assets/images/5843671063886676136.jpg'; // Adjust the path as needed

const Services = () => {
  const courses = [
    { 
      id: 1,
      title: 'Первая бесплатная онлайн консультация (20 минут) в Zoom', 
      description: 'Вы получаете тест на уровень языка + анкета про ваш предыдущий опыт в изучении английского (если такой имеется)',
      detailedDescription: 'Подробнее о занятиях',
      show: true,
      isClickable: false, // This description is not clickable
    },
    { 
      id: 2,
      title: 'Постановка целей + обсуждение условий проведения занятий и оплаты', 
      description: '',
      detailedDescription: '',
      show: true,
      isClickable: false, // This description is not clickable
    },
    { 
      id: 3,
      title: 'Индивидуальные уроки английского онлайн', 
      description: 'Подробнее о занятиях',
      detailedDescription: '11111111111111111111111111111111111111111111111111111',
      show: true,
      isClickable: true, // This description is clickable
    },
    { 
      id: 4,
      title: 'Уроки английского в группе онлайн', 
      description: 'Подробнее о занятиях',
      detailedDescription: '222222222222222222222222222222222222222222222222222222',
      show: true,
      isClickable: true, // This description is clickable
    },
    { 
      id: 5,
      title: 'Разговорный клуб онлайн', 
      description: 'Подробнее о занятиях',
      detailedDescription: 'sa',
      show: true,
      isClickable: true, // This description is clickable
    },
  ];

  const [activeCourse, setActiveCourse] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const cards = containerRef.current.querySelectorAll('.services-card');
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.2}s`;
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleCardClick = (courseId) => {
    setActiveCourse(courseId);
  };

  return (
    <div id="services" className="services" ref={containerRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 text-center">
            <h2 className="services-title">Как проходят уроки?</h2>
            <div className="timeline">
              {courses.map((course) => (
                <div className="services-card" key={course.id}>
                  <CourseCard 
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    price={course.price}
                    isClickable={course.isClickable} // Pass the isClickable prop
                    show={course.show}
                    onClick={() => !activeCourse && handleCardClick(course.id)}
                  />
                </div>
              ))}
            </div>
            {activeCourse && (
              <CourseDescription 
                course={courses.find(course => course.id === activeCourse)} 
                onClose={() => setActiveCourse(null)} 
              />
            )}
          </div>
          <div className="col-md-4 text-center">
            <img src={servicesImage} alt="Services" className="services-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
