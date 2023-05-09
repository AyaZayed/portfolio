import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css"

import { Mousewheel, EffectFade } from "swiper";

export default function Carousel({ projects }) {
    return (
        <>
            <Swiper
                className="projects"
                direction={"vertical"}
                slidesPerView={4}
                spaceBetween={0}
                mousewheel={true}
                modules={[Mousewheel, EffectFade]}
            >
                {projects.map((project) => (
                    project.data.dynamic ?
                        <SwiperSlide className='project' key={project.id}>
                            {
                                <>
                                    <img src='https://res.cloudinary.com/dcfrq5i2y/image/upload/v1680661537/projects%20backgrounds/word_recognizer_jpf25j.png' alt="letters" />
                                    <Link to="/projects/details" state={project} exact='true'>{project.data.name}</Link>
                                </>
                            }
                        </SwiperSlide>
                        : null
                ))}
            </Swiper>
        </>
    );
}
