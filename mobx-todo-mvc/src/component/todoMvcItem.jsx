import React from 'react'
import { observer } from 'mobx-react'

@observer
class TodoMvcItem extends React.PureComponent {
  state = {
    editInput: false,
    value: this.props.list.title,
  }

  changeItemEdit = () => {
    if (this.state.value.length === 0) {
      this.props.deleteHandler(this.props.index)
      return false
    }
    this.setState({
      editInput: false,
    })
    this.props.doubleEditVal(this.props.list.id, this.state.value)
  }

  render() {
    const { list, index, changeItem, deleteHandler } = this.props
    const { editInput, value } = this.state
    const { changeItemEdit } = this
    return (
      <li
        className={[
          'list-mvc',
          list.completed ? 'competed' : '',
          editInput ? 'editing' : '',
        ].join(' ')}
      >
        <div className="view">
          <input
            onChange={() => changeItem(list.id)}
            type="checkbox"
            className="toggle"
          />
          <label onDoubleClick={() => this.setState({ editInput: !editInput })}>
            {list.title}
          </label>
          <button
            className="destroy"
            onClick={() => deleteHandler(index)}
          ></button>
        </div>
        <input
          value={value}
          onChange={e => this.setState({ value: e.target.value })}
          onBlur={changeItemEdit}
          onKeyUp={e => {
            if (e.keyCode === 13) {
              changeItemEdit()
            }
          }}
          type="text"
          className={editInput ? 'edit' : ''}
        />
      </li>
    )
  }
}

export default TodoMvcItem
