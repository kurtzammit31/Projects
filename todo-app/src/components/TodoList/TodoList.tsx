import React from 'react';
import type {TodoListProps} from '../../types/todo';
import TodoItem from '../TodoItem/TodoItem';
import useRenderCount from '../../hooks/useRenderCount';
import RenderBadge from '../RenderBadge/RenderBadge';




const TodoList: React.FC<TodoListProps> = ({todos, onDeleteTodo, onToggleCompleteTodo, onUpdateTodo}) => {
    const renderCount = useRenderCount();
    return (
        <div>
            <div> 
                <RenderBadge count={renderCount}/>
            </div>
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