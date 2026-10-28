import React from 'react';
import type {TodoListProps} from '../../types/todo';
import TodoItem from '../TodoItem/TodoItem';




const TodoList: React.FC<TodoListProps> = ({todos, onDeleteTodo, onToggleCompleteTodo, onUpdateTodo}) => {
    return (
        <div>
            {
                todos.length == 0 ?
                    (<p>No todos yet!</p>) :
                (
                    todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onDelete={onDeleteTodo} onToggleComplete={onToggleCompleteTodo} onUpdate={onUpdateTodo} />
                    ))
                )
                
            }
        </div>
    );
};

export default TodoList;