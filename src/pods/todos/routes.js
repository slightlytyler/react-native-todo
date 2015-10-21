'use strict'

import { TodosIndexContainer } from 'pods/todos/index/container'

export function TodosIndexRoute(getNavigator) {
  return {
    name: 'todos.index',
    title: 'Todos',
    subTitle: 'A general list',
    component: TodosIndexContainer,
  }
}

import { TodoFormContainer } from 'pods/todos/form/container'

export function NewTodoRoute() {
  return {
    name: 'todos.new',
    title: 'New Todo',
    subTitle: 'What needs doing?',
    component: TodoFormContainer
  }
}

export function EditTodoRoute(rowData, rowID) {
  return {
    name: rowData.text,
    component: TodoFormContainer,
    passProps: { item: rowData, rowID: rowID }
  }
}