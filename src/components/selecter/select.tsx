import React, { useRef, useState } from 'react'
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
    <div className='container'>
<button onClick={() => setOpen(open => (!open))} type="button" className="Group">
        
        <span className="selectLabel">{label}</span>
        
        <div className="selectBox">
          <span className="selectText">{selectedOption.text}</span>
        </div>
        
        <span className="Arrow">
          <svg className="h-5 w-5 text-gray-400 group-hover:text-indigo-400 group-focus:text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
          </svg>
        </span>

</button>

{open && <ul ref={selectRef} className="DontKnow">

{options.map((option: any) => (
  <li key={option.value} onClick={() => {onSelect(option)}} className="liSelect">
    
    <div className="SelectersBox">
      <span className="text">{option.value.toUpperCase() + ' - ' + option.text}</span>
    </div>

    {option.value === selectedOption.value && <span className="SelectArrow">
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
      </svg>
    </span>}

  </li>
))}

</ul>}
    </div>
  )
}

export default Selecter