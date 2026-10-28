import React, { useState } from 'react';
import type {TodoItemProps} from '../../types/todo';
import styles from './TodoItem.module.css';

const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete, onToggleComplete, onUpdate}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    return (
        <div className={styles.todoItem}>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggleComplete(todo.id)} className={styles.checkbox}/>

            {isEditing ? (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            onUpdate(todo.id, editText);
                            setIsEditing(false);
                        }
                        if (e.key === 'Escape') {
                            setEditText(todo.text);
                            setIsEditing(false);
                        }
                    }}
                    autoFocus
                />
            ) : (
                <span className={todo.completed ? styles.completed : ''} onDoubleClick={() => setIsEditing(true)}>
                    {todo.text}
                </span>
            )}

            <button onClick={() => onDelete(todo.id)} className={styles.deleteButton}>Delete</button>
        </div>
    );
};

export default TodoItem;