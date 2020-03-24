import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default function Trainings() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {

        fetch("https://customerrest.herokuapp.com/gettrainings")
        .then(response => response.json())
        .then(data => setCustomers(data))   
    }
    const columns = [
        {
            Header: 'Date',
            accessor: 'date'

        },
        {
            Header: 'Duration(min)',
            accessor:'duration'

        },
        {
            Header: 'Activity',
            accessor: 'activity'

        },
        {
            Header: 'Customer',
            accessor: 'customer.firstname'
        }
        
    
    ]

    return(
        <div>
            <ReactTable filterable={true} data={customers} columns={columns}/>
        </div>
    );
}

