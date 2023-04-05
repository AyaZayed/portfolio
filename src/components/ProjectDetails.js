import { CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";
// import { fit } from "@cloudinary/url-gen/actions/resize";
import { Link, useLocation } from 'react-router-dom';

export default function ProjectDetails() {
    const location = useLocation();
    const project = location.state;

    function getImg(name) {
        const img = new CloudinaryImage(`/projects screenshots/${name}`, { cloudName: 'dcfrq5i2y' });
        return img
    }

    return (
        <div className="project-details">
            <h1>{project.data.name}</h1>
            <h3>{project.data.framework}</h3>
            <p>{project.data.description}</p>
            <div className="project-details-img">
                <AdvancedImage cldImg={getImg(project.data.name)} plugins={[placeholder('blur'), responsive()]} />
            </div>
            <Link to={project.data.github} target='/blank'>Github</Link>
            <Link to={project.data.website} target='/blank'>Website</Link>
        </div>
    )
}
