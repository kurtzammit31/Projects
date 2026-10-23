import React from 'react';
import type {TodoItemProps} from '../../types/todo';
import styles from './TodoItem.module.css';

const TodoItem: React.FC <TodoItemProps> = ({todo, onDelete, onToggleComplete}) => {

    return (
        <div className={styles.todoItem}>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggleComplete(todo.id)} className={styles.checkbox}/>
            <span className={todo.completed ? styles.completed : ''}>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)} className={styles.deleteButton}>Delete</button>
        </div>
    );
};

export default TodoItem;