import React from 'react'

const Breadcrumbs = ({path}) => {
  let result
  return(
    <div style={breadcrumbs}>
      {path.map( (item, i) => {
        if (i === path.length-1){
          return(<Breadcrumb key={'breadcrumb_' + i } item={path[i]} last/>)
        }
        return(<Breadcrumb key={'breadcrumb_' + i } item={path[i]} />)
      })}
    </div>
  )
}

const Breadcrumb = ({item, last}) => (
  <span>
    <h4 style={{display: 'inline-block', fontSize: 16}}>
      {item} 
    </h4>
    {!last ? (<BreadcrumbSeparator />) : null}
  </span>
)

const BreadcrumbSeparator = () => (
  <h4 style={separator}>/</h4>
)

let breadcrumbs = {
  marginBottom: '1.5em'
}

let separator = {
  display: 'inline-block',
  marginLeft: 5, marginRight: 5,
  fontSize: 18, 
  verticalAlign: 'middle'
}

export default Breadcrumbs