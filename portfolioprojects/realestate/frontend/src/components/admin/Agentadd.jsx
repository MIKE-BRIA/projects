import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAgent,
  fetchAgents,
  removeAgent,
} from "../../store/slices/agentSlice";
import { useLocation } from "react-router-dom";
import { withSwal } from "react-sweetalert2";
import { Bars } from "react-loading-icons";
// import axios from "axios";

export function Agentadd({ swal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const { agents, status } = useSelector((state) => state.agents);
  const location = useLocation();

  function handlesubmitdata(e) {
    e.preventDefault();

    const data = { name, email, phoneNumber };
    //add agent to database
    dispatch(addAgent(data))
      .unwrap()
      .then(() => {
        // Clear the input fields after successful submission
        setName("");
        setEmail("");
        setPhoneNumber("");
        dispatch(fetchAgents());
      })
      .catch((err) => {
        console.error("Failed to add agent: ", err);
      });
  }

  useEffect(() => {
    dispatch(fetchAgents());
  }, [dispatch, location]);

  //*deleting House
  function deleteAgent(agent) {
    swal
      .fire({
        title: "Delete House",
        html: `<p>Are you sure you want to delete <strong>${agent.name.toUpperCase()}</strong>?</p>`,
        // text: `Are you sure you want to delete ${product.title}?`,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Delete",
        confirmButtonColor: "#d55",
        reverseButtons: true,
        didOpen: () => {},
        didClose: () => {},
      })
      .then(async (result) => {
        const agentId = agent._id;
        if (result.isConfirmed) {
          await dispatch(removeAgent(agentId));

          dispatch(fetchAgents());
        }
      });
  }

  return (
    <>
      <main>
        <form action="" onSubmit={handlesubmitdata} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Agent Name"
              className="housedata w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter Agent Email"
              className="housedata w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Agent Phone Number"
              className="housedata w-full"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button type="submit" className="btn-primary w-full">
              Add Agent
            </button>
          </div>
        </form>
        {status === "loading" && (
          <div className="flex justify-center items-center h-screen">
            <Bars />
          </div>
        )}

        <div className="table-container mt-4">
          <table className="basic">
            <thead>
              <tr>
                <td>Agent name</td>
                <td>Agent Email</td>
                <td>Agent PhoneNumber</td>

                <td></td>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent) => (
                <tr key={agent._id}>
                  <td>{agent.name}</td>
                  <td>{agent.email}</td>
                  <td>{agent.phoneNumber}</td>

                  <td className="flex gap-3">
                    <button className=" bg-gray-700 text-white text-sm py-1 rounded-sm px-2 inline-flex gap-1 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                      Edit
                    </button>
                    <button
                      className=" btn-cancel text-black text-sm py-1 rounded-sm px-2 inline-flex gap-1 mr-2"
                      onClick={() => deleteAgent(agent)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default withSwal(({ swal }) => {
  return <Agentadd swal={swal} />;
});
