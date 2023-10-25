import Header from "./Header";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../data/Api";
import Carousel from "./Carousel";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("order", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const projects = [];
      querySnapshot.forEach((doc) => {
        projects.push({ id: doc.id, data: doc.data() });
      });
      setProjects(projects); ``
    });
    return unsubscribe;
  }, [projects])

  return (
    <div className="projects-page">
      <Header text={'PROJECTS'} />
      <Carousel projects={projects} />
    </div>
  );
}

export default Projects;
