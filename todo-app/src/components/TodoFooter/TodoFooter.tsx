import React from 'react';
import styles from './TodoFooter.module.css';
import type { TodoFooterProps  } from '../../types/todo';
import useRenderCount from '../../hooks/useRenderCount';
import RenderBadge from '../RenderBadge/RenderBadge';




const TodoFooter: React.FC<TodoFooterProps> = ({ todos, onClearCompleted }) => {
    const renderCount = useRenderCount();
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.counters}>
                    <div className={styles.counter}>
                        Total Todos: {todos.length}
                    </div>
                    <div className={styles.counter}>
                        Active Todos: {todos.filter(todo => !todo.completed).length}
                    </div>
                    <div className={styles.counter}>
                        Completed Todos: {todos.filter(todo => todo.completed).length}
                    </div>
                    {
                    todos.some(t => t.completed) ?
                    <button  className={styles.clearButton} onClick={() => onClearCompleted()}>
                        Clear Completed
                    </button> : null
                    }
                </div> 
                <div>
                    <RenderBadge count={renderCount}/>
                </div>
            </div>
        </footer>
    );
};

export default TodoFooter;