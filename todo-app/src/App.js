import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <header class="header">
        <div class="container">
          <nav class="navbar flex--jc-sb">
            <h1 class="navbar__logo">todo</h1>
            <div class="navbar__theme-toggler">
              <img src="./images/icon-moon.svg" alt="moon" class="theme-icon" />
              <input
                type="checkbox"
                name="themetoggle"
                id="themeToggle"
                placeholder="Create a new todo..."
                class="theme-toggler"
              />
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div class="containter todo">
          <section class="add-todo">
            <div class="add-todo__toggler">
              <button class="toggler"><img src="" alt="" class="bg"/></button>
            </div>
            <input type="text" name="newTodo" id="newTodo" class="add-todo_input"/>
          </section>
          <section class="todo-list">

            <aside class="item todo-list__navigation">
              <p class="todo-list__qty">0 items left</p>
              <ul class="todo-list__filter-wrapper">
                <li><a href="#">All</a></li>
                <li><a href="#">Active</a></li>
                <li><a href="#">Completed</a></li>
              </ul>
              <ul class="todo-list__tools-wrapper">
                <li><a href="#">Clear Completed</a></li>
              </ul>
            </aside>
          </section>
        </div>
      </main>

      <footer>
        <p class="instruction">Drag and drop to reorder list</p>
      </footer>
    </div>
  );
}

export default App;
