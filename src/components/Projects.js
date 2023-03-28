import Header from "./Header";
import { db } from "../data/Api";
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { fit } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from '@cloudinary/url-gen';
import { AdvancedImage } from "@cloudinary/react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'projects'))
    onSnapshot(q, (querySnapshot) => {
      setProjects(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }, [projects])

  function getImg(name) {
    const img = new CloudinaryImage(`/projects screenshots/${name}`, { cloudName: 'dcfrq5i2y' }).resize(fit().width(800).height(250));
    return img
  }

  return (
    <div className=" projects-page">
      <Header text={'PROJECTS'} />
      <div className="projects">
        {projects.map(project => (
          <div className="project" key={project.id}>
            {project.data.name}
            <AdvancedImage cldImg={getImg(project.data.name)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
