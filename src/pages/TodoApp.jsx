import React from 'react';
// Importing components
import Header from '../components/Header';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

const TodoApp = () => {
  return (
    <>
        <Header/>
        <h1>What's the Projects for Today?</h1>
        <TodoInput/>
        <TodoList/>
        <Footer/>
    </>
  )
}

export default TodoApp