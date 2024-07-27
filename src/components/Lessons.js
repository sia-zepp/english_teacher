import React, { useEffect, useRef, useState } from 'react';
import './Lessons.css';
import CourseCard from './CourseCard';
import CourseDescription from './CourseDescription';
import lessonImage from '../assets/images/5843671063886676135.jpg'; // Adjust the path as needed

const lessonsData = [
    { 
        id: 3,
        title: 'Индивидуальные уроки английского онлайн',
        description: 'Подробнее о занятиях',
        detailedDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit pulvinar sem vitae maximus. Vestibulum sodales quam nisl, eget ultricies tellus ullamcorper eget. Donec ut arcu vitae leo laoreet pellentesque. Ut rhoncus, ligula quis vehicula euismod, tellus massa tristique mauris, a maximus nisl neque et quam. Vestibulum at est a lacus consequat vestibulum. Morbi rutrum odio libero, id auctor elit porta non. Nulla facilisi. Nam aliquam eros eget eros dignissim euismod. Quisque sagittis ac nibh vitae semper. Vivamus interdum enim lectus, non suscipit enim maximus et. Sed lorem sem, egestas quis ultrices eu, malesuada in libero. Nulla lacinia sapien posuere, tincidunt magna at, maximus orci. Aliquam faucibus mauris vitae sapien tincidunt imperdiet. Vivamus congue commodo aliquet. Suspendisse potenti. Vestibulum vehicula massa eget felis tincidunt commodo. Nulla facilisi. Donec eget finibus augue, at lobortis dolor. Mauris in pellentesque ipsum. Ut auctor mi vitae feugiat volutpat. Nulla feugiat urna nec nisl semper tristique. Vestibulum condimentum rutrum sem. In turpis augue, sollicitudin semper scelerisque id, tempus eget tellus. Nulla commodo ipsum sit amet metus efficitur porta. Praesent pretium ante eu arcu porta, in posuere quam pretium. Nam id euismod felis. Sed scelerisque pharetra hendrerit. Morbi euismod hendrerit metus, vitae convallis leo porttitor quis. Proin a odio sit amet massa lobortis tempor et quis nunc. Pellentesque iaculis dictum interdum. Suspendisse ornare nisl non dui interdum, quis aliquet lorem laoreet.',
        show: false,
        price: '100 Eur',
        isClickable: true, // This description is clickable
    },
    { 
        id: 4,
        title: 'Уроки английского в группе онлайн',
        description: 'Подробнее о занятиях',
        detailedDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit pulvinar sem vitae maximus. Vestibulum sodales quam nisl, eget ultricies tellus ullamcorper eget. Donec ut arcu vitae leo laoreet pellentesque. Ut rhoncus, ligula quis vehicula euismod, tellus massa tristique mauris, a maximus nisl neque et quam. Vestibulum at est a lacus consequat vestibulum. Morbi rutrum odio libero, id auctor elit porta non. Nulla facilisi. Nam aliquam eros eget eros dignissim euismod. Quisque sagittis ac nibh vitae semper. Vivamus interdum enim lectus, non suscipit enim maximus et. Sed lorem sem, egestas quis ultrices eu, malesuada in libero. Nulla lacinia sapien posuere, tincidunt magna at, maximus orci. Aliquam faucibus mauris vitae sapien tincidunt imperdiet. Vivamus congue commodo aliquet. Suspendisse potenti. Vestibulum vehicula massa eget felis tincidunt commodo. Nulla facilisi. Donec eget finibus augue, at lobortis dolor. Mauris in pellentesque ipsum. Ut auctor mi vitae feugiat volutpat. Nulla feugiat urna nec nisl semper tristique. Vestibulum condimentum rutrum sem. In turpis augue, sollicitudin semper scelerisque id, tempus eget tellus. Nulla commodo ipsum sit amet metus efficitur porta. Praesent pretium ante eu arcu porta, in posuere quam pretium. Nam id euismod felis. Sed scelerisque pharetra hendrerit. Morbi euismod hendrerit metus, vitae convallis leo porttitor quis. Proin a odio sit amet massa lobortis tempor et quis nunc. Pellentesque iaculis dictum interdum. Suspendisse ornare nisl non dui interdum, quis aliquet lorem laoreet.',
        show: false,
        price: '200 Eur',
        isClickable: true, // This description is clickable
    },
    { 
        id: 5,
        title: <>Разговорный клуб <strong className="highlight">онлайн</strong></>, 
        description: 'Подробнее о занятиях',
        detailedDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit pulvinar sem vitae maximus. Vestibulum sodales quam nisl, eget ultricies tellus ullamcorper eget. Donec ut arcu vitae leo laoreet pellentesque. Ut rhoncus, ligula quis vehicula euismod, tellus massa tristique mauris, a maximus nisl neque et quam. Vestibulum at est a lacus consequat vestibulum. Morbi rutrum odio libero, id auctor elit porta non. Nulla facilisi. Nam aliquam eros eget eros dignissim euismod. Quisque sagittis ac nibh vitae semper. Vivamus interdum enim lectus, non suscipit enim maximus et. Sed lorem sem, egestas quis ultrices eu, malesuada in libero. Nulla lacinia sapien posuere, tincidunt magna at, maximus orci. Aliquam faucibus mauris vitae sapien tincidunt imperdiet. Vivamus congue commodo aliquet. Suspendisse potenti. Vestibulum vehicula massa eget felis tincidunt commodo. Nulla facilisi. Donec eget finibus augue, at lobortis dolor. Mauris in pellentesque ipsum. Ut auctor mi vitae feugiat volutpat. Nulla feugiat urna nec nisl semper tristique. Vestibulum condimentum rutrum sem. In turpis augue, sollicitudin semper scelerisque id, tempus eget tellus. Nulla commodo ipsum sit amet metus efficitur porta. Praesent pretium ante eu arcu porta, in posuere quam pretium. Nam id euismod felis. Sed scelerisque pharetra hendrerit. Morbi euismod hendrerit metus, vitae convallis leo porttitor quis. Proin a odio sit amet massa lobortis tempor et quis nunc. Pellentesque iaculis dictum interdum. Suspendisse ornare nisl non dui interdum, quis aliquet lorem laoreet.',
        show: false,
        price: '300 Eur',
        isClickable: true, // This description is clickable
    },
    // Add more lessons as needed
];

const Lessons = () => {
    const [activeLesson, setActiveLesson] = useState(null);
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

        const cards = containerRef.current.querySelectorAll('.lesson-card');
        cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.2}s`;
            observer.observe(card);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleCardClick = (lessonId) => {
        setActiveLesson(lessonId);
    };

    return (
        <div id="lessons" className="lessons-container" ref={containerRef}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={lessonImage} alt="Lessons" className="lessons-image" />
                    </div>
                    <div className="col-md-8">
                        <h2 className="section-title">Уроки</h2>
                        <div className="timeline-lessons">
                            {lessonsData.map((lesson, index) => (
                                <div className="lesson-card" key={lesson.id}>
                                    <CourseCard 
                                        id={lesson.id}
                                        title={lesson.title} 
                                        description={lesson.description}
                                        price={lesson.price}
                                        detailedDescription={lesson.detailedDescription} 
                                        isClickable={lesson.isClickable}
                                        show={lesson.show} // Pass the show prop
                                        onClick={() => handleCardClick(lesson.id)} // Handle click
                                    />
                                </div>
                            ))}
                        </div>
                        {activeLesson && (
                            <CourseDescription 
                                course={lessonsData.find((lesson) => lesson.id === activeLesson)} 
                                onClose={() => setActiveLesson(null)} 
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lessons;
