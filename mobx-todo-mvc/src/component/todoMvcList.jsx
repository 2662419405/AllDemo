import React, { Fragment } from 'react'
import { observer } from 'mobx-react'
import TodoMvcITem from './todoMvcItem'
import TodoMvcFooter from './todoMvcFooter'
import './todoMvcList.scss'

@observer
class TodoMvcList extends React.PureComponent {
  state = {
    value: '',
  }

  render() {
    const { value } = this.state
    const {
      name,
      completedData,
      filterList,
      addTodo,
      deleteHandler,
      changeTodo,
      doubleEditVal,
      seletedAll,
      deleteCompleted,
      setSelected,
      selected,
    } = this.props.store
    return (
      <div className="todoapp">
        <div className="header">
          <h1>{name}</h1>
          <input
            type="text"
            placeholder="请填写内容"
            value={value}
            onChange={e => this.setState({ value: e.target.value })}
            onKeyDown={e =>
              e.keyCode === 13 &&
              value.length !== 0 &&
              (addTodo(value), this.setState({ value: '' }))
            }
          />
        </div>
        {filterList.length > 0 && (
          <Fragment>
            <div className="main">
              <input id="box" className="toggle-all" type="checkbox" />
              <label htmlFor="box" onClick={seletedAll} className="com"></label>
              <ul className="todo-list">
                {filterList.map((v, i) => {
                  return (
                    <TodoMvcITem
                      changeItem={id => changeTodo(id)}
                      deleteHandler={index => deleteHandler(index)}
                      doubleEditVal={(id, value) => doubleEditVal(id, value)}
                      key={v.id}
                      list={v}
                      index={i}
                    />
                  )
                })}
              </ul>
            </div>
            <TodoMvcFooter
              deleteCompleted={deleteCompleted}
              setSeleted={val => setSelected(val)}
              selected={selected}
              list={filterList}
              completedData={completedData}
            />
          </Fragment>
        )}
      </div>
    )
  }
}

export default TodoMvcList
