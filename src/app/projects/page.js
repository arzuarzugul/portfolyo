import { getProjects } from '../lib/getProjects';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <h1>Projeler</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Tags: {project.tags.join(', ')}</p>
            <p>Source: {project.source}</p>
            <img src={project.image.url} alt={project.title} width={300} />
          </li>
        ))}
      </ul>
    </div>
  );
}
