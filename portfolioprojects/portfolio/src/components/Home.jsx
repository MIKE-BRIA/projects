const Home = () => {
  return (
    <>
      <main className="bg-blue-100 p-4 rounded-t-lg max-w-large m-auto flex flex-col items-center">
        <div className="flex w-full md:w-9/12 m-auto py-6 md:py-28 flex-col gap-2 md:flex-row items-center">
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <h2>Brian Michael</h2>
            <h1 className="font-bold text-xl my-4">Software Engineer</h1>
            <p>
              I am a software Engineer who wants to build products that will
              change one or two things about how people do their daily work. I
              am passionate about working with people who help me improve in my
              skill sets, i love working with a team that is collaborative.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="mailto:michaelbrian466@gmail.com">
                <button className="bg-blue-600 px-2 py-1 text-white rounded-lg hover:bg-blue-900">
                  Get in Touch
                </button>
              </a>
              <div className="flex items-center gap-1">
                <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                <p className="text-gray-700">Available now</p>
              </div>
            </div>
            <div className="mt-4">
              <p>
                View my
                <a
                  href="https://github.com/MIKE-BRIA"
                  className="bg-gray-600 text-white p-2 cursor-pointer rounded-lg"
                >
                  Github
                </a>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            <img
              src="/images/work.jpg"
              alt="Work"
              className="rounded-2xl h-full object-cover"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
