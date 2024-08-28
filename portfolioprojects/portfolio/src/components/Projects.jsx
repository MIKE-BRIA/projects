const projects = [
  {
    img: "/images/threads.png",
    title: "threads clone",
    parag:
      "This is a clone of threads that is also almost familiar to twitter. This project helped me understand socket.io and more other things",
    tech: [
      "react",
      "nodejs",
      "chakra-ui",
      "javascript",
      "Git/Github",
      "socket.io",
      "tailwind css",
      "mongodb",
    ],
    link: "https://threads-m0a4.onrender.com",
    github: "https://github.com/MIKE-BRIA/threads",
  },
  {
    img: "/projectimages/dashboo.png",
    title: "Saas Landing Page",
    parag:
      "This is a Landing page for a Saas company that deals in building custom dashboard for their users at an affordable price",
    tech: ["React", "Tailwind css", "Git/Github", "Javascript"],
    link: "https://dashland.web.app/",
    github:
      "https://github.com/MIKE-BRIA/projects/tree/master/portfolioprojects/dashlandingpage",
  },
  {
    img: "/images/funiturestore.png",
    title: "Funiture store",
    parag:
      "This is an ecommerce platform for selling funiture items. The funiture are grouped into category",
    tech: [
      "react",
      "nodejs",
      "chakra-ui",
      "javascript",
      "Git/Github",
      "tailwind css",
      "mongodb",
      "postman",
      "redux",
    ],
    link: "https://funiturestore.onrender.com",
    github: "https://github.com/MIKE-BRIA/funiturestore",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-10/12">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white p-0 rounded-lg shadow-md "
            >
              <img
                src={project.img}
                alt={project.title}
                className="rounded-t-lg w-full h-56  object-cover"
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
