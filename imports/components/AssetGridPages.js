import React from 'react'
import { connect } from 'react-redux'
import { range } from 'underscore'

import { getFolderAssets, setPage } from '/imports/actions'

const AssetGridPages = ({currFolder, pageSize, totalResults, goToPage, currPage, currChunk, loadChunkSize}) => {
  let totalPages = Math.ceil(totalResults/pageSize)
  if (totalPages == 1) return(<div />)
  let pages = range(1, totalPages+1)
  return(
    <div className='assetGridPages'>
      {pages.map((page)=> {
        let styling = 'pageNumber'
        if (page === currPage) styling+=' active'
        return(
          <div key={'page'+page} className={styling} onClick={goToPage.bind(this, currFolder, pageSize, page, currPage, currChunk, loadChunkSize)}>
            {page}
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currFolder: state.currFolder,
    totalResults: state.totalResults,
    currPage: state.currPage, 
    currChunk: state.currChunk,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    goToPage: (folderId, pageSize, pageNumber, currPage, currChunk, loadChunkSize) => {
      if ( pageNumber === currPage ) { 
        // already on this page, don't do anything
        return 
      }
      // what chunk should I be in?
      let chunkNumber = Math.ceil(( pageNumber * pageSize ) / loadChunkSize )
      if ( currChunk === chunkNumber ) {
        // this page is within current pagination 'window'
        // action: change the slice of the loadedAssets array that is currently 'active'
        dispatch(setPage(pageSize, pageNumber, currChunk, loadChunkSize))
      }
      else{
        // this page must be outside of our currently loaded window
        // action: fetch necessary chunk
        dispatch(getFolderAssets(folderId, loadChunkSize, chunkNumber, pageSize, pageNumber))
      } 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetGridPages)