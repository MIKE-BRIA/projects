const Getstarted = () => {
  return (
    <>
      <main className="bg-slate-100 p-4 max-w-large m-auto  flex flex-col ">
        <section className="flex w-full md:w-4/6 shadow-lg rounded-lg justify-center p-6 mt-24 items-center m-auto">
          <div className="">
            <h2 className="text-md mb-4 font-semibold">
              Getting started with DashBoo is easier than ever
            </h2>
            <p>
              with lots of templates to choose from you can pick and customize
              the template you find nice to use for your application
            </p>
            <button className="bg-blue-600 px-2 mt-6 py-1 flex gap-3 text-white rounded-lg">
              Get started for free
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div className=" p-6">
            <img src="images/Confirm.png" alt="" className="w-80" />
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-6 justify-center mt-28">
          <div className="flex gap-2 w-full md:w-1/4">
            <h1>1M+</h1>
            <p>Customers that visit DashBoo everymonth</p>
          </div>
          <div className="flex gap-2 w-full md:w-1/4">
            <h1>93%</h1>
            <p>Satisfaction rate from our customers</p>
          </div>
          <div className="flex gap-2 w-full md:w-1/4">
            <h1>4.9</h1>
            <p>Average customer ratings out of 5.0</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Getstarted;
