


function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <nav className="navbar flex--jc-sb">
            <h1 className="navbar__logo">todo</h1>
            <div className="navbar__theme-toggler">
              <img src="./images/icon-moon.svg" alt="moon" className="theme-icon" />
              <input
                type="checkbox"
                name="themetoggle"
                id="themeToggle"
                placeholder="Create a new todo..."
                className="theme-toggler"
              />
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="containter todo">
          <section className="add-todo">
            <div className="add-todo__toggler">
              <button className="toggler"><img src="" alt="" className="bg"/></button>
            </div>
            <input type="text" name="newTodo" id="newTodo" className="add-todo_input"/>
          </section>
          <section className="todo-list">

            <aside className="item todo-list__navigation">
              <p className="todo-list__qty">0 items left</p>
              <ul className="todo-list__filter-wrapper">
                <li><a href="#">All</a></li>
                <li><a href="#">Active</a></li>
                <li><a href="#">Completed</a></li>
              </ul>
              <ul className="todo-list__tools-wrapper">
                <li><a href="#">Clear Completed</a></li>
              </ul>
            </aside>
          </section>
        </div>
      </main>

      <footer>
        <p className="instruction">Drag and drop to reorder list</p>
      </footer>
    </div>
  );
}

export default App;
