const Learn = () => {
  return (
    <main
      id="support"
      className="bg-gray-100 p-8 max-w-large m-auto flex flex-col"
    >
      <div className="flex m-auto justify-center flex-col md:flex-row items-center">
        <div className="md:w-3/5 md:mr-4">
          <h1 className="text-2xl font-bold mb-4">
            We offer support to new customers
          </h1>
          <p className="text-gray-700 leading-relaxed">
            With a lot of dashboards and components you may be overwhelmed, and
            that is why we provide support and documentation for all of the
            components and new customers.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row w-full md:w-2/5 mt-4 ">
          <button className="bg-white text-black p-2 w-full rounded-lg mb-4 hover:bg-gray-200 ">
            Learn more
          </button>
          <button className="bg-blue-600 w-full text-white p-2 rounded-lg hover:bg-blue-900 ">
            Get started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Learn;
