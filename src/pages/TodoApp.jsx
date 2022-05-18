import React from 'react';
// Importing components
import Header from '../components/Header';
import TodoInput from '../components/TodoInput';
// import TodoList from '../components/TodoList';
import TodoStep from '../components/TodoStep';
import Footer from '../components/Footer';

const TodoApp = () => {
  return (
    <>
        <Header/>
        <h1>What's the Projects for Today?</h1>
        <TodoInput/>
        {/* <TodoList/> */}
        <TodoStep/>
        <Footer/>
    </>
  )
}

export default TodoApp