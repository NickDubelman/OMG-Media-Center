import React from 'react'
import { IndexRoute, Route } from 'react-router'
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr'

import TaylorQuicksite from '/imports/taylor/app'
import FolderAssets from '/imports/taylor/FolderAssets'

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

ReactRouterSSR.Run(AppRoutes)

