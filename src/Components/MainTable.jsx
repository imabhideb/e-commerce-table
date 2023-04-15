import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { TableData } from './TableData'
import { TableColumns } from './TableColumn'

const MainTable = () => {

    const [data, setData] = useState(TableData)

    const handleSearch =(e) => {
        const newData = TableData.filter(row => {
            return row.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setData(newData)
    }


  return (
      <div className='w-[1200px] justify-center items-center gap-10 flex flex-col text-center mt-4 pb-10'>
        <div>
              <input className='bg-slate-200 w-[600px] h-[60px] pl-5 border-none rounded-lg outline-none text-[20px] placeholder:text-gray-500' type="text" onChange={handleSearch} placeholder='Search you items here...' />
        </div>
        <DataTable
            title="Choose your comfort"
            style={{fontSize: 25}}
            columns={TableColumns}
            data={data}
            fixedHeader
            pagination
            customStyles={customStyles} 
        ></DataTable>
    </div>
  )
}

export default MainTable


const customStyles = {
    headCells: {
        style: {
            fontSize: '20px'
        },
    },
};
