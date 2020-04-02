import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import AddTraining from './AddFunctionT';




export default function Trainings() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => fetchData(), []);

    const fetchData = () => {

            fetch("https://customerrest.herokuapp.com/gettrainings")
            .then(response => response.json())
            .then(data => setTrainings(data))   
    }
    
    const deleteT = (link) => {
        if(window.confirm("Are you sure?")){
            fetch(link, {method:'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
    }
    const saveTraining = (training) =>{
        fetch("https://customerrest.herokuapp.com/api/trainings", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(training)
            
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
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
            accessor: 'customer',
        Cell: row => <div>{row.value.firstname} {row.value.lastname}</div>
            
        
        
           
            
        },
        {
            filterable: false,
            sortable: false,
            accessor: 'id',
            Cell: row => <button onClick={() => deleteT(' https://customerrest.herokuapp.com/api/trainings/'+ row.value)}>Delete</button>
            
        }
    
    ]

    return(
        <div>
            <AddTraining saveTraining={saveTraining} />
            <ReactTable filterable={true} data={trainings} columns={columns}/>
        </div>
    );
}

