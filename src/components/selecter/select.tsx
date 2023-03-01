import React, { useRef, useState } from 'react'
import Select from 'react-select';

const Selecter = ({options}:any) => {

const [open, setOpen] = useState(false);
const [selectedOption, setSelectedOption] = useState<any>(options[0])

const selectRef = useRef<any>()



  return (
    <div>
<Select
className="select"
        defaultValue={selectedOption}
        options={options}
      />

    </div>
  )
}

export default Selecter