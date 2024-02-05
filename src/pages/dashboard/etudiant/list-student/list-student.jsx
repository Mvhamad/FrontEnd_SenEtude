import{ useEffect, useState } from 'react';
import Table from '../../../../components/table/table';
import axios from 'axios';
import config from '../../../../../config.json';

const ListStudents = () => {
  const columns = [
    { title: '#', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' }
  ];
  const [users, setUsers] = useState([])
  
  const fetchData = async()=>{
    let response= await axios.get(`${config.apiUrl}/users`);
    console.log(response)
    if (response && response.data){
      setUsers(response.data)
    }
  };

  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <div className='student-list py-10 px-8'>
      <h1 className='text-4xl'>
        Liste des étudiants
      </h1>
      <div className='tableContainer mt-6'>
        <Table headerTable={columns} />
      </div>
    </div>
  )
}

export default ListStudents