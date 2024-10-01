import React, { useState, useEffect } from 'react';
// steps:
/*
1- give internal state to each answer, let it know if it is true or false ✅
2- give internal state to each answer, let it know if selected or not ✅
3- if answer is selected, switch color and clicked state ✅
4- when check asnwers is clicked, look at each answer ✅
  - if it is the correct and selected, make it green and increase score by 1
  - if it is incorrect and selected, make it red
  - if it is not selected, make it gray



*/
// const [selected, setSelected] = React.useState(false)
export default function Choice(props) {
    let { value, correct, selected, isChecked, onSelect } = props;
    const [loading, setLoading] = useState(true);

    const styles = {
        backgroundColor: selected ? "var(--selected-answer)" : "transparent",
        cursor: isChecked ? "default" : "pointer"
    };
      // If the user has checked the answers, update the colors based on correctness
      if (isChecked) {
        if (selected && correct) {
            styles.backgroundColor = "#94D7A2"; // Correct answer selected
            styles.border = "none"
        } else if (selected && !correct) {
            styles.backgroundColor = "#F8BCBC"; // Incorrect answer selected
            styles.opacity = 0.5; // Disable the unselected answers
            styles.border = "none"
            styles.disabled = true
        } else if (!selected) {
            styles.backgroundColor = "#F5F7FB"; // Unselected answers
            styles.opacity = 0.5; // Disable the unselected answers
        }
    }
    return (
      <li
        className={`answer ${props.selected ? "selected" : ""}`}
        style={styles}
        onClick={()=>{
            props.onSelect()
   
        }} 
      >
        {props.value}
      </li>
    );
  }

