import Datacard from "../components/admin/Datacard";

const Admin = () => {
  return (
    <>
      <main>
        <div className="flex ">
          <ul className="flex  mx-auto">
            <li>
              <Datacard title="Total No. Houses" data="5489" />
            </li>
            <li>
              <Datacard title="Total Rent Houses" data="5489" />
            </li>
            <li>
              <Datacard title="Total Buy Houses" data="5489" />
            </li>
            <li>
              <Datacard title="Total Agents" data="5489" />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Admin;
