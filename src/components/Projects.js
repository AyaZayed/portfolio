import Header from "./Header";
import { db } from "../data/Api";
import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"

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

  console.log(projects)

  return (
    <div className=" projects-page">
      <Header text={'PROJECTS'} />
      <div className="projects">
        {projects.map(project => (
          <div className="project" key={project.id}>
            {project.data.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
