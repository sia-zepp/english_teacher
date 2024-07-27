import React from 'react';
import './About.css';
import aboutImage from '../assets/images/5843671063886676137.jpg'; // Adjust the path as needed
import CardAbout from './CardAbout';

const aboutTexts = [
  { id: 1, text: 'Преподаю General English' },
  { id: 2, text: 'Готовлю к государственным экзаменам 9 и 12 классов' },
  { id: 3, text: 'Преподаю онлайн с 2018 года и за это время помогла привить любовь к английскому более 100+ ученикам' },
  { id: 4, text: 'Имеется опыт работы в школе' },
  { id: 5, text: 'Бакалавриат "Учитель английского языка и психологии" в Латвийском университете.' },
  { id: 6, text: <>Получила сертификат <strong className='tupik'>TESOL</strong> (международный сертификат преподавателя для не носителей английского).</> },
  { id: 7, text: 'Получила сертификат от Cambridge Assessment English "Teaching English Online".' },
  { id: 8, text: '3 года жила заграницей для совершенствования английского' },
  { id: 9, text: 'На данный момент прохожу обучение и подготовку для сдачи кембриджского экзамена CAE' },
  { id: 10, text: 'Работаю с подростками от 13 лет и взрослыми' }
];

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center about-image-container">
                        <img src={aboutImage} alt="About Me" className="about-image" />
                        <div className="decorative-heart"></div>
                    </div>
                    <div className="col-md-8">
                        <h1>Обо мне</h1>
                        <div className="row">
                            {aboutTexts.map((item) => (
                                <CardAbout key={item.id} id={item.id} text={item.text} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(About);
