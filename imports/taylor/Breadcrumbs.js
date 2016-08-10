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
    <h4 style={breadcrumb}>
      {item} 
    </h4>
    {!last ? (<BreadcrumbSeparator />) : null}
  </span>
)

const BreadcrumbSeparator = () => (
  <i style={separator} className='fa fa-angle-right' aria-hidden={true}></i>
)

let breadcrumbs = {
  paddingLeft: 15,
  marginTop: '0.7em',
  marginBottom: '0.7em'
}

let breadcrumb = {display: 'inline-block', fontSize: 18}

let separator = {
  display: 'inline-block',
  marginLeft: 7, marginRight: 7,
  fontSize: 18,
}

export default Breadcrumbs