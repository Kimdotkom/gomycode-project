import React from 'react'
import { Form} from 'react-bootstrap'

const FilterAnnonce = ({ inputSearch, setInputSearch}) => {
  return (
    <div>
        <Form.Control type="text" placeholder="Search ... "
        value={inputSearch}/>
    </div>
  )
}

export default FilterAnnonce