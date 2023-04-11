import React, { useEffect, useState } from "react";
import axios from "axios";
import { QueryForm } from "../components/QueryForm";

export default function Home() {
  const [handFeatures, setHandFeatures] = useState([]);

  useEffect(() => {
    loadHandFeatures();
  }, []);

  const loadHandFeatures = async () => {
    const result = await axios.get("http://localhost:8080/handfeatures");
    setHandFeatures(result.data);
  };

  return (
    <>
      <div
        style={{
          padding: "16px 0",
          background: "#f5f5f5",
        }}
      >
        Hand Test
      </div>
      <QueryForm></QueryForm>
      <div className="container">
        <div className="py-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">candidate_id</th>
                <th scope="col">session_id</th>
                <th scope="col">source</th>
                <th scope="col">test_type</th>
                <th scope="col">year</th>
                <th scope="col">m_cd</th>
                <th scope="col">cov_cd</th>
                <th scope="col">m_tf</th>
                <th scope="col">cov_tf</th>
                <th scope="col">cov_a</th>
                <th scope="col">ttc</th>
                <th scope="col">m_iti</th>
                <th scope="col">iiv</th>
                <th scope="col">ms</th>
                <th scope="col">dos</th>
                <th scope="col">doa</th>
                <th scope="col">tastest_id</th>
              </tr>
            </thead>
            <tbody>
              {handFeatures.map((handFeatures, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{handFeatures.candidate_id}</td>
                  <td>{handFeatures.session_id}</td>
                  <td>{handFeatures._source}</td>
                  <td>{handFeatures.test_type}</td>
                  <td>{handFeatures._year}</td>
                  <td>{handFeatures.m_cd}</td>
                  <td>{handFeatures.cov_cd}</td>
                  <td>{handFeatures.m_tf}</td>
                  <td>{handFeatures.cov_tf}</td>
                  <td>{handFeatures.cov_a}</td>
                  <td>{handFeatures.ttc}</td>
                  <td>{handFeatures.m_iti}</td>
                  <td>{handFeatures.iiv}</td>
                  <td>{handFeatures.ms}</td>
                  <td>{handFeatures.dos}</td>
                  <td>{handFeatures.doa}</td>
                  <td>{handFeatures.tastest_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
