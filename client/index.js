import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { IndexRoute, Route, Redirect } from 'react-router'
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr'

import reducers from '/imports/reducers'
import TaylorQuicksite from '/imports/taylor/app'
import ConcoursQuicksite from '/imports/concours'
import FolderAssets from '/imports/components/FolderAssets'
import TaylorHomepage from '/imports/taylor/TaylorHomepage'
import TaylorFolderAssets from '/imports/taylor/TaylorFolderAssets'
import ConcoursHomepage from '/imports/concours/ConcoursHomepage'
import ConcoursFolderAssets from '/imports/concours/ConcoursFolderAssets'

let store
let history
let initialState

const Home = (props) => (
	<div>
		{props.children ? React.cloneElement(props.children, ...props) : null}
	</div>
)

class Homepage extends Component{
  componentWillMount(){
    window.location = 'http://www.theomggroup.com'
  }
  render(){
    return(
      <div />
    )
  }
}

const AppRoutes = (
  <Route path='/' component={Home}>
  	<IndexRoute component={Homepage} />
    <Route path='/taylor' component={TaylorQuicksite}>
      <IndexRoute component={TaylorHomepage} />
      <Route path='folder/:folderId' component={TaylorFolderAssets} />
    </Route>
    <Route path='/concours' component={ConcoursQuicksite}>
      <IndexRoute component={ConcoursHomepage} />
      <Route path='folder/:folderId' component={ConcoursFolderAssets} />
    </Route>
    <Redirect from='/*' to='/' />
  </Route>
)

const historyHook = newHistory => history = newHistory
const dehydrateHook = () => store.getState()
const rehydrateHook = state => initialState = state
const wrapperHook = app => {
  store = applyMiddleware(thunk)(createStore)(reducers, window.devToolsExtension && window.devToolsExtension())
  return <Provider store={store}>{app}</Provider>
}

const clientOptions = { historyHook, rehydrateHook, wrapperHook }
const serverOptions = { historyHook, dehydrateHook }

ReactRouterSSR.Run(AppRoutes, clientOptions, serverOptions)