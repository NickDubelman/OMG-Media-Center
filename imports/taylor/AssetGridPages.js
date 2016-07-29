import React from 'react'

const AssetGridPages = ({perPage, totalResults}) => {
  console.log(perPage, totalResults)
  let totalPages = Math.ceil(totalResults/perPage)
  let pages = new Array(totalPages)
  for(let i=0; i<totalPages; i++){
    pages[i]=i+1
  }
  return(
    <div>
      {pages.map((page)=> <h1 style={pageNumber}>{page}</h1>)}
    </div>
  )
}

export default AssetGridPages

let pageNumber = {display: 'inline-block', paddingRight: 10}