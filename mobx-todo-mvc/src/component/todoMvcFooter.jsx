import React from 'react'
import './todoMvcList.scss'

class TodoMvcList extends React.PureComponent {
  render() {
    const {
      completedData,
      deleteCompleted,
      setSeleted,
      list,
      selected,
    } = this.props
    return (
      <div className="footer">
        <span className="todo-count">
          <strong>{list.length - completedData}</strong>
          <span> items left</span>
        </span>
        <ul className="filters">
          <li
            onClick={() => setSeleted('#/')}
            className={selected === '#/' || selected === '' ? 'selected' : ''}
          >
            <a href="#/">All</a>
          </li>
          <span></span>
          <li
            onClick={() => setSeleted('#/active')}
            className={selected === '#/active' ? 'selected' : ''}
          >
            <a href="#/active">Active</a>
          </li>
          <span></span>
          <li
            onClick={() => setSeleted('#/completed')}
            className={selected === '#/completed' ? 'selected' : ''}
          >
            <a href="#/completed">Completed</a>
          </li>
          <span></span>
        </ul>
        {completedData > 0 && (
          <button onClick={deleteCompleted} className="clear-completed">
            Clear completed
          </button>
        )}
      </div>
    )
  }
}

export default TodoMvcList
