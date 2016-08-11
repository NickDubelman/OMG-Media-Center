import React from 'react'

const Breadcrumbs = ({path}) => {
  let result
  return(
    <div className='breadcrumbs'>
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
  <span className='breadcrumb'>
    <h4>
      {item} 
    </h4>
    {!last ? (<BreadcrumbSeparator />) : null}
  </span>
)

const BreadcrumbSeparator = () => (
  <i className='fa fa-angle-right separator' aria-hidden={true}></i>
)

export default Breadcrumbs