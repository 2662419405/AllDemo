import { observable, action, computed } from 'mobx'

class Store {
  name = 'mobx'

  @observable selected = '#/'
  @observable list = []

  @action.bound addTodo(title) {
    this.list.push({
      title,
      id: new Date().getTime(),
      completed: false,
    })
  }

  @action.bound seletedAll() {
    if (this.list.length - this.completedData === 0) {
      this.list.filter(v => (v.completed = false))
    } else {
      this.list.filter(v => (v.completed = true))
    }
  }

  @action.bound deleteHandler(index) {
    this.list.splice(index, 1)
  }

  @action.bound changeTodo(id) {
    this.list.filter(v => {
      v.id === id && (v.completed = !v.completed)
    })
  }

  @action.bound doubleEditVal(id, value) {
    this.list.filter(v => {
      v.id === id && (v.title = value)
    })
  }

  @action.bound setSelected(value) {
    this.selected = value
  }

  @action.bound deleteCompleted() {
    const newList = this.list.filter(v => v.completed === false)
    this.list = [...newList]
  }

  @computed get filterList() {
    if (this.selected === '#/' || this.selected === '') {
      return this.list
    } else if (this.selected === '#/active') {
      return this.list.filter(v => v.completed === true)
    } else {
      return this.list.filter(v => v.completed === false)
    }
  }

  @computed get completedData() {
    return this.list.filter(v => v.completed === true).length
  }
}

export default Store
