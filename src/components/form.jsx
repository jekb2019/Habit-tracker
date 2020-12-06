import React, {memo} from 'react';

const Form = memo((props) => {
    // Using React Refs
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault(); //브라우저가 자동으로 새로고침되는걸 막음
        const name = inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value = '';
    }

   return (
       <div className="form">
           <form ref={formRef} className="add-form" onSubmit={onSubmit}>
               <input ref={inputRef} className="add-input" type="text" placeholder="Habit"></input>
               <button className="add-button">Add</button>
           </form>
       </div>
   );
});
export default Form;