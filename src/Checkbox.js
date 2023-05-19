import React,{useState} from 'react'
export default function Checkbox(){
  const data=['bihar','jharkhand','delhi','Bangalore','chennai']
  const[updateData,setUpdateData]=useState(data)
  const[show,setShow]=useState('')
  function handleClick(ele){
    setShow(ele)
  }
  function handleDelete(ele){
    setUpdateData((updateData)=>updateData.filter((y)=>y!==ele))
  }
  return(
    <div>
      {updateData.map((ele,id)=><p key={id}>
        <input
        type='checkbox'
        id={ele}
         value={ele}
         onClick={()=>handleClick(ele)}/>
           {ele}
          {show === ele ? 
            <button onClick={() => handleDelete(ele)}>Delete</button>
        : null}
      </p>)}
    </div>
  )
}

//This code is a React component called Checkbox that renders a list of checkboxes with corresponding labels. The component maintains an array of data called updateData using the useState hook, with an initial value of data.

// Here's a breakdown of the code:

// The data array contains a list of strings representing different locations.
// The updateData state variable is initialized using the useState hook, and it is set to the data array. This state variable will be used to keep track of the current data.
// The show state variable is initialized using the useState hook and is initially set to an empty string. This state variable will be used to track the currently selected checkbox's value.
// The handleClick function is defined to handle the click event of a checkbox. It takes the selected element as an argument and updates the show state variable with the selected element's value.
// The handleDelete function is defined to handle the deletion of an element from the updateData state variable. It takes the element to be deleted as an argument and uses the setUpdateData function to update the state by filtering out the selected element.
// The component's render function returns a <div> element containing a list of checkboxes and labels. The updateData array is mapped over, and for each element, a <p> element is rendered with a unique key attribute.
// Inside each <p> element, an <input> element of type 'checkbox' is rendered with an id, value, and an onClick event handler that calls the handleClick function with the current element's value.
// The element's label is also displayed next to the checkbox.
// If the current element's value matches the show state variable, a delete button is rendered.
// When the delete button is clicked, it calls the handleDelete function with the current element's value to remove it from the updateData array.
// Finally, the component is exported as the default export of the module.
// Overall, this component displays a list of checkboxes with labels, allows selecting one checkbox at a time, and provides the ability to delete the selected item.




