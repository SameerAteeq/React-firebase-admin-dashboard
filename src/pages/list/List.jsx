import React from 'react'
import DataTable from '../../components/dataTable/DataTable'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./list.scss"
const List = () => {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <DataTable />
            </div>
        </div>
    )
}

export default List
