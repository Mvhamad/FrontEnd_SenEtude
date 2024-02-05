import './etablissement.css';
import { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import { data } from './school';

const ListEtablissement = () => {
  const [products, setProducts] = useState(data);
  return (
    <div className='ListEtablissement'>
       <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name"></Column>
                <Column field="age" header="Age"></Column>
                <Column field="gender" header="Gender"></Column>
            </DataTable>
    </div>
  )
}
        
export default ListEtablissement

