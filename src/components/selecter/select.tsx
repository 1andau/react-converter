import React, { useRef, useState } from 'react'
import Select from 'react-select';
import { MenuItem } from '@mui/material';
import onClickOutSide from './onClickOutSide';

const Selecter = ({options, stateChanger, label, value}:any) => {

const [open, setOpen] = useState(false);
const [selectedOption, setSelectedOption] = useState<any>(options[0])

const selectRef = useRef<any>()
//Метод pop() удаляет последний элемент из массива и возвращает его значение

React.useEffect(() => {
setSelectedOption(options.filter((option:any) => option.value === value).pop() ?? options[0]);
})

const onSelect = (option:any) => {
  stateChanger(option.value)
  setSelectedOption(option)
  setOpen(false)
}

onClickOutSide(selectRef, () => setOpen(false)); 


  return (
    <div>
      {label}
<Select
className="select"
        defaultValue={selectedOption}
        // onClick = {() => setOpen(open => (!open))}
        options={options}
      />

    </div>
  )
}

export default Selecter