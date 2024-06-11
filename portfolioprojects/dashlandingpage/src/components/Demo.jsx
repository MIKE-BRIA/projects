const Demo = () => {
  return (
    <>
      <main className="bg-slate-100 p-4 max-w-large m-auto rounded-t-lg flex flex-col justify-center items-center">
        <div className="text-center w-full md:w-3/6">
          <h1 className="mb-4 mt-6 text-2xl">
            Get things done faster with already made Dashboards Templates
          </h1>
          <p className="text-lg mb-4">
            we are here to make your development journey smooth and faster with
            easy to intergrate Dashboards
          </p>
          <div className="flex flex-col md:flex-row gap-2 mt-3 justify-center">
            <button className="bg-blue-600 px-2 py-1 text-white rounded-lg">
              Get started for free
            </button>
            <button className="bg-white px-2 py-2 text-black rounded-lg">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-full md:w-3/4 mt-20">
          <img src="images/jashboard.jpg" alt="" className="shadow-2xl" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-20">
          <div className="border rounded-xl p-2 flex flex-col gap-3 w-full md:w-1/3">
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
                d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
              />
            </svg>
            <h2 className="text-md font-semibold">Ecommerce Dashboard</h2>
            <p>
              We have more than 200 templates for eccommerce Dashboard that you
              can us for your store. We also provide updates on different api
              endpoints that you can use
            </p>
          </div>
          <div className="border rounded-xl p-2 flex flex-col gap-3 w-full md:w-1/3">
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
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>
            <h2 className="text-md font-semibold">Social Dashboard</h2>
            <p>
              We have more than 200 templates for social dashboards that is
              designed to be used with a number of upto 1000 different usecase
            </p>
          </div>
          <div className="border rounded-xl p-2 flex flex-col gap-3 w-full md:w-1/3">
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
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            <h2 className="text-md font-semibold">
              Mobile Responsive Dashboard
            </h2>
            <p>
              You can use our Dashboards even on your mobile device, that is you
              will have access to the dashboard from anywhere and at anytime
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Demo;
