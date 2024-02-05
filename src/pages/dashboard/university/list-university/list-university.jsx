import  { useState, useEffect } from "react";
import Table from "../../../../components/table/table";
import DataTable from "../../../../components/table/DataTable";
import axios from "axios";
import config from  '../../../../../config.json' 

const ListUniversity = () => {
  const [universities, setUniversities] = useState([]);
  const [col, setCol] = useState([]);
  const HEAD = [
    "Logo",
    "Nom établissement",
    "Adresse",
    "",
    "Actions",
  ];
  const getData = async () => {
    try {
      let response = await axios.get(`${config.apiUrl}/universities/`);
      if (response.data.status === 200) {
        console.log("data", response.data.data);
        setUniversities(response.data.data);
        setCol(Object.keys(universities[0]));
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
   getData();
  }, [])
  
  console.log(col);

  return (
    <div className="student-list py-10 px-8">
      <h1 className="text-4xl">Liste des établissements</h1>
      <div className="tableContainer mt-6">
        <Table headerTable={HEAD}  />
      </div>
    </div>
  );
};

export default ListUniversity;
