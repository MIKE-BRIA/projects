const Datacard = ({ title, data }) => {
  return (
    <>
      <main className=" mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <div className="flex items-center justify-center bg-gray-200 rounded-lg p-6">
            <p className="text-4xl font-bold text-gray-700">{data}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Datacard;
