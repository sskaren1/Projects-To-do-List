// Importing pages
import TodoApp from './pages/TodoApp'
// Importing styles of Ant design
// import 'antd/dist/antd.css'; 
import 'antd/dist/antd.min.css';
// Importing styles sass
import './styles/base/global.scss'

function App() {
  return (
    <div>
      <TodoApp/>
    </div>
  );
}

export default App;
