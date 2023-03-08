import React from 'react'

const onClickOutSide = (ref:any, handler:any) => {
//Метод contains позволяет проверить,
// содержит ли один элемент внутри себя другой

React.useEffect(() => {
    const listener = (event: any) => {
if(!ref.current || ref.current.contains(event.target) ){
    return;
}
handler(event);
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

return () => {
    document.removeEventListener('mousedown', listener);
    document.removeEventListener('touchstart', listener);
}
}, [ref, handler])
}

export default onClickOutSide