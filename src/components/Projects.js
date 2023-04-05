import Header from "./Header";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../data/Api";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "projects"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const projects = [];
      querySnapshot.forEach((doc) => {
        projects.push({ id: doc.id, data: doc.data() });
      });
      setProjects(projects);
    });
    return unsubscribe;
  }, [projects])

  return (
    <div className=" projects-page">
      <Header text={'PROJECTS'} />
      <div className="projects">
        {
          projects.map(project => (
            <div key={project.id} className="project">
              {
                project.data.dynamic ?
                  <Link to='/projects/details' state={project} exact='true'><h1>{project.data.name}</h1></Link>
                  :
                  <></>
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Projects;
