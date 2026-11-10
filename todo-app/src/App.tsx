import React, { useState } from 'react';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import type { Todo , FilterType} from './types/todo';
import TodoList from './components/TodoList/TodoList';
import styles from './App.module.css';
import FilterButtons from './components/FilterButtons/FilterButton';
import TodoFooter from './components/TodoFooter/TodoFooter';
import DevBar from './components/DevBar/DevBar';
import useRenderCount from './hooks/useRenderCount';
import RenderBadge from './components/RenderBadge/RenderBadge';


const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<FilterType>('all');

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(), // Using timestamp as a simple unique ID
            text: text,
            completed: false // New todos are not completed by default
        };
        setTodos([...todos, newTodo]); //Instantiating a new array with the spread operator
        //So react will detect changes and re-render
    };

    //similar to the spread operator, filter create a new arry
    //So react will detect changes and re-render
    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id)); //Filtering out the todo with the given id
    }

    const toggleCompleteTodo = (id: number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    };

    const updateTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
    };

    const filteredTodos : Todo[] = todos.filter(todo => {
        if (filter === 'active') 
            return !todo.completed;
        if (filter === 'completed') 
            return todo.completed;
        return true;
    });

    const onClearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    }

    const renderCount = useRenderCount();

    const resetTodos = () => {
        setTodos([]);
    }

    const seedTodos = (count: number) => setTodos([
        ...todos,
        ...Array.from({ length: count }, (_, i) => ({
            id: Date.now() + i, // Using timestamp + index as a simple unique ID
            text: `Seeded Todo ${i + 1}`,
            completed: false
        }))
    ]);
    


    return (
        <div className={styles.app}>

            <h1 className={styles.title}>
             Todo App
             <small>
                <RenderBadge count = {renderCount}/>
             </small>
             </h1>
            <DevBar onSeed={seedTodos} onReset={resetTodos}/>
            <AddTodoForm onAddTodo={addTodo} />
            <FilterButtons activeFilter={filter} onFilterChange={(setFilter)} />
            <TodoList todos={filteredTodos} onDeleteTodo={deleteTodo} onToggleCompleteTodo={toggleCompleteTodo} onUpdateTodo={updateTodo} />
            <TodoFooter todos={todos} onClearCompleted={onClearCompleted} />
        </div>
    );
};

export default TodoApp;