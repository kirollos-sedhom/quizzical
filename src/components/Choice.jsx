import React from 'react'
// steps:
/*
1- give internal state to each answer, let it know if it is true or false ✅
2- give internal state to each answer, let it know if selected or not
3- if answer is selected, switch color and clicked state
4- when check asnwers is clicked, look at each answer
  - if it is the correct and selected, make it green and increase score by 1
  - if it is incorrect and selected, make it red
  - if it is not selected, make it gray



*/
// const [selected, setSelected] = React.useState(false)
export default function Choice(props){
    const [selected, setSelected] = React.useState(props.selected)
    function handleClick(){
        setSelected(prev => !prev)
    }
    const styles = {
        backgroundColor: selected? "var(--selected-answer)": "transparent"

    }
    return (
        <li className='answer' style={styles} onClick={handleClick}>{props.value}</li>
    )
}


