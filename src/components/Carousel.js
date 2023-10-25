import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css"

import { Mousewheel } from "swiper";

export default function Carousel({ projects }) {

    return (
        <>
<<<<<<< HEAD
            {/* <Swiper
                className="projects"
                direction={"vertical"}
                slidesPerView={5}
                spaceBetween={100}
                s
                mousewheel={true}
                modules={[Mousewheel]}
                effect="fade"
=======
            <Swiper
                className="projects"
                direction={"vertical"}
                slidesPerView={3}
                spaceBetween={100}
                // mousewheel={{
                //     sensitivity: 0.5
                // }}
                mousewheel={true}
                modules={[Mousewheel]}

>>>>>>> cdd73bd9fa813e1ef9d34c1806d811996d69f187
            >
                {projects.map((project) => (
                    project.data.dynamic ?
                        <SwiperSlide className='project' key={project.id}
                            style={{ "--img": `url(${project.data.img})` }}>
                            <Link to='/projects/details' state={project} exact='true'>{project.data.name}</Link>
                        </SwiperSlide>
                        : null
                ))}
<<<<<<< HEAD
            </Swiper> */}
            <div className="projects">
                {projects.map((project) => (
                    project.data.dynamic ?
                        <div className="swiper-slide project" key={project.id} style={{ "--img": `url(${project.data.img})` }}>
                            <Link to='/projects/details' state={project} exact='true'>{project.data.name}</Link>
                        </div>
                        : null
                ))}
            </div>
=======
            </Swiper>
>>>>>>> cdd73bd9fa813e1ef9d34c1806d811996d69f187
        </>
    );
}
