const projects = [
  {
    img: "/images/project1.jpg",
    title: "Project 1",
    parag: "This is a description of Project 1.",
    tech: ["react"],
    link: "https://live-demo-link.com",
    github: "https://github.com/username/project1",
  },
  {
    img: "/images/project2.jpg",
    title: "Project 2",
    parag: "This is a description of Project 2.",
    tech: ["react", "tailwind css"],
    link: "https://live-demo-link.com",
    github: "https://github.com/username/project2",
  },
];

const Projects = () => {
  return (
    <>
      <main
        id="projects"
        className="bg-blue-100 p-8 max-w-large m-auto flex flex-col items-center"
      >
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div className="flex flex-col md:flex-row flex-wrap gap-10 w-full md:w-10/12">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={project.img}
                alt={project.title}
                className="rounded-t-lg w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl text-center font-bold mb-2">
                  {project.title}
                </h2>
                <p className="mb-4 text-center">{project.parag}</p>
                <h3 className="text-lg text-center font-semibold mb-2">
                  Technology Used:
                </h3>
                <ul className="flex flex-wrap gap-2 text-center mb-4">
                  {project.tech.map((tech, index) => (
                    <li
                      key={index}
                      className=" bg-blue-400 text-white p-2 rounded-md shadow-md flex items-center"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col md:flex-row gap-2">
                  <a href={project.link}>
                    <button className="bg-blue-600 text-white px-2 py-2 w-full  hover:bg-blue-900">
                      View Live Demo
                    </button>
                  </a>
                  <a href={project.github}>
                    <button className="bg-gray-600 text-white px-4 py-2 w-full  hover:bg-gray-900">
                      View Code on GitHub
                    </button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default Projects;
