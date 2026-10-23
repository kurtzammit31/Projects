import React, { useState } from 'react';
import type {AddTodoFormProps} from '../../types/todo';
import styles from './AddTodoForm.module.css';

const AddTodoForm: React.FC<AddTodoFormProps> = ({onAddTodo}) => {
    //Storing the text of the input box as its state defaulting to an empty string
    const [inputValue, setInputValue] = useState<string>('');

    //Function that is called when the submit button is pressed
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        //Prevents page reload
        e.preventDefault();
        //Checks contents of the inputValue
        if (inputValue.trim() !== '') {
            //Adds todo item thorugh onAddTodoCallBack
            onAddTodo(inputValue.trim());
            //Resets the input value to empty
            setInputValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" placeholder="Enter todo" className={styles.input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}>
            </input>

            <button type="submit" className={styles.submitButton}>Add Todo</button>
            
        </form>
    );
};

export default AddTodoForm;