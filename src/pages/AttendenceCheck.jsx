import { useParams } from "react-router-dom";
import { students } from "../data/data";
import { Button } from "bootstrap";
export const Attendence = () => {
  const { id } = useParams();

  return (
    <>
      <div className="py-20">
        <table className="w-full m-auto bg-neutral-50 p-5">
          <thead className="bg-indigo-400 font-light">
            <tr>
              <th>INDEX</th>
              <th>IMAGE</th>
              <th>CODE</th>
              <th>NAME</th>
              <th>Attend</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr>
                <td className="p-5">{index + 1}</td>
                <td className="flex justify-center">
                  <img src={student.image} alt="studentimg" className="w-28" />
                </td>
                <td>{student.code}</td>
                <td>{student.name}</td>
                <td>
                  <div className="text-lime-500 font-medium">
                    <input name={"attend" + student.code} type="radio" />{" "}
                    Attented{" "}
                  </div>
                  <div className="text-red-500 font-medium">
                    <input name={"attend" + student.code} type="radio" /> Absent{" "}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" class="btn btn-outline-success">Submit</button>
    </>
  );
};
