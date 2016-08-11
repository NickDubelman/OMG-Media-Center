import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { IndexRoute, Route, browserHistory } from 'react-router'
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr'

import reducers from '/imports/reducers'
import TaylorQuicksite from '/imports/taylor/app'
import FolderAssets from '/imports/components/FolderAssets'

let store
let history
let initialState

const Home = (props) => (
	<div>
		{props.children ? React.cloneElement(props.children, ...props) : null}
	</div>
)

const Homepage = () => (<h2>Homepage</h2>)

const TaylorHomepage = () => (<h1>Taylor's Homepage</h1>)

const AppRoutes = (
  <Route path="/" component={Home}>
  	<IndexRoute component={Homepage} />
    <Route path="/taylor" component={TaylorQuicksite}>
      <IndexRoute component={TaylorHomepage} />
      <Route path="folder/:folderId" component={FolderAssets} />
    </Route>
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