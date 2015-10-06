'use strict'

import React from 'react-native'
import { Provider } from 'react-redux/native'
import { fromJS } from 'immutable'

import configureStore from '../configureStore'

import { setState } from 'pods/todos/actions'
import { TodosIndexContainer } from 'pods/todos/index/container'

var { NavigatorIOS } = React;

var store = configureStore();

store.dispatch(setState(fromJS({
  todos: {
    list: [{
      id: 1,
      text: 'Learn react and redux',
      complete: true
    }, {
      id: 2,
      text: '...',
      complete: true
    }, {
      id: 3,
      text: 'Profit',
      complete: false
    }],

    filter: 'all'
  }
})));

export default class react_native_starter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <NavigatorIOS
                style={{flex: 1}}
                initialRoute={{component: TodosIndexContainer, title: 'Todos'}}/>
        }
      </Provider>
    )
  }
}
