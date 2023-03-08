import React, { useRef, useState } from 'react'
import Select from 'react-select';
import onClickOutSide from './onClickOutSide';

const Selecter = ({options, stateChanger, label, value}:any) => {

const [open, setOpen] = useState(false);
const [selectedOption, setSelectedOption] = useState<any>(options[0])

const selectRef = useRef<any>()
//Метод pop() удаляет последний элемент из массива и возвращает его значение.22 окт. 2022 г.

React.useEffect(() => {
setSelectedOption(options.filter((option:any) => option.value === value).pop() ?? options[0]);
})

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