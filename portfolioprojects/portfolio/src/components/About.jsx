const techs = [
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "Nodejs",
  "Expressjs",
  "Tailwind CSS",
  "Git/Github",
  "Postman",
  "Mongodb",
];

const About = () => {
  return (
    <>
      <main
        id="about"
        className="bg-blue-100 p-8 max-w-large m-auto flex flex-col items-center "
      >
        <div className="flex flex-col md:flex-row mb-8 w-full md:w-11/12 m-auto items-center">
          <div className="md:w-1/2 w-full mb-4 md:mb-0">
            <img
              src="/images/cool.jpg"
              alt="Cool"
              className="rounded-lg shadow-md object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-8">
            <h1 className="text-xl font-bold mb-4">About Me</h1>
            <p className="mb-4">
              I am currently a student at
              <b> Murang&apos;a University of Technology </b>
              taking a bachelor&apos;s of Medical Laboratory Science. My goal is
              to use the knowledge I have gained over the years to develop
              products that I find passion in and am sure will have an impact on
              humanity.
            </p>
            <p className="mb-4">
              The following are the tech stacks that I use regularly:
            </p>
            <div>
              <ul className="flex flex-wrap gap-3">
                {techs.map((tech) => (
                  <li
                    key="tech"
                    className="bg-blue-400 text-white p-2 rounded-md shadow-md flex items-center"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <button className="border-2 border-black p-2">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
