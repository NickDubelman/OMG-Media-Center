import React from 'react'
import { connect } from 'react-redux'

import { getFolderAssets } from '/imports/actions'

const AssetGridPages = ({currFolder, perPage, totalResults, goToPage, currPage}) => {
  let totalPages = Math.ceil(totalResults/perPage)
  let pages = new Array(totalPages)
  for(let i=0; i<totalPages; i++){
    pages[i]=i+1
  }
  return(
    <div>
      {pages.map((page)=> 
        <h1 key={'page'+page} style={pageNumber} onClick={goToPage.bind(this, currFolder, perPage, page, currPage)}>
          {page}
        </h1>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currFolder: state.currFolder,
    totalResults: state.totalResults,
    currPage: state.currPage
  }
}

const mapDispatchToProps = dispatch => {
  return{
    goToPage: (folderId, perPage, pageNumber, currPage) => {
      if ( pageNumber === currPage ) { return }
      dispatch(getFolderAssets(folderId, perPage, pageNumber))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetGridPages)

let pageNumber = {display: 'inline-block', paddingRight: 10, cursor: 'pointer'}