import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import AddClient from './AddFunction';
import EditCustomer from './EditCustomer';

export default function Customerlist() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {

        fetch("https://customerrest.herokuapp.com/api/customers")
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const deleteC = (link) => {
        if(window.confirm("Are you sure?")){
            fetch(link, {method:'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }

    }
    const saveClient = (customer) =>{
        fetch("https://customerrest.herokuapp.com/api/customers", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }
    const columns = [
        {
            Header: 'First Name',
            accessor: 'firstname'

        },
        {
            Header: 'Last Name',
            accessor: 'lastname'

        },
        {
            Header: 'Address',
            accessor: 'streetaddress'

        },
        {
            Header: 'Postal',
            accessor: 'postcode'

        },
        {
            Header: 'City',
            accessor: 'city'

        },
        {
            Header: 'Email',
            accessor: 'email'

        },
        {
            Header: 'Phone',
            accessor: 'phone'

        },
        {
            filterable: false,
            sortable: false,
            Cell: row => <EditCustomer c={row.original}/>

        },

        {
            filterable: false,
            sortable: false,
            accessor: 'links[0].href',
            Cell: row => <button onClick={() => deleteC(row.value)}>Delete</button>
            
        }
    
    ]

    return(
        
        <div>
            <AddClient saveClient={saveClient} />
            <ReactTable defaultPagesize={10}filterable={true} data={customers} columns={columns}/>
        </div>
    );
}

