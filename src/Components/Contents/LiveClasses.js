import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Dropdown from 'react-bootstrap/Dropdown';
import Sidebar from '../Dashboard/Sidebar';
import Header from '../Header';

function LiveClasses() {
    const columns = [
        
        { field: 'Live Lesson Name', headerName: 'Live Lesson Name', width: 230 },
        { field: 'Type', headerName: 'Type', width: 100 },
        {
            field: 'Course Name',
            headerName: 'Course Name',
            type: 'text',
            width: 230,
        },
        {
            field: 'Status',
            headerName: 'Status',
        
            sortable: false,
            width: 90,
            
        },

        {
            field: 'Start Date & Time',
            headerName: 'Start Date & Time',
            type: 'text',
            width: 170,
        },

        {
            field: 'End Date & Time',
            headerName: 'End Date & Time',
            type: 'text',
            width: 170,
        },
        
        
    ];

    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <>
            <div className='d-flex'>
            <div>
                <Header />
            </div>
                <div>
                    <Sidebar />
                </div>

                <section style={{ position: "fixed", right: "1rem", width: "80%", height: "100vh" ,zIndex:"-99",marginTop:"3.5rem"}}>
                    <div>
                        <h1>Live Classes</h1>
                        <p>View and manage your live classes</p>
                    </div>
                    <div className="d-flex justify-content-end mb-3"> 
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ border: "1px solid gray" }}>
                                Select column
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <Paper sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                    
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                            sx={{ border: 0 }}
                        />
                    </Paper>
                </section>
            </div>
        </>
    );
}

export default LiveClasses;
