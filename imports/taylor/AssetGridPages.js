import React from 'react'
import { connect } from 'react-redux'

import { getFolderAssets, setPage } from '/imports/actions'

const AssetGridPages = ({currFolder, perPage, totalResults, goToPage, currPage, currChunk, loadChunkSize}) => {
  let totalPages = Math.ceil(totalResults/perPage)
  if (totalPages == 1) return(<div />)
  let pages = new Array(totalPages)
  for(let i=0; i<totalPages; i++){
    pages[i]=i+1
  }
  return(
    <div style={assetGridPages}>
      {pages.map((page)=> {
        let styling = 'page-number'
        if (page === currPage) styling+=' curr-page'
        return(
          <div key={'page'+page} className={styling} onClick={goToPage.bind(this, currFolder, perPage, page, currPage, currChunk, loadChunkSize)}>
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
    goToPage: (folderId, perPage, pageNumber, currPage, currChunk, loadChunkSize) => {
      if ( pageNumber === currPage ) { return }
      let chunkNumber = Math.ceil(( pageNumber * perPage ) / loadChunkSize )
      if ( currChunk === chunkNumber ) { 
        console.log(pageNumber, perPage, currChunk, loadChunkSize)
        // dispatch action to move the pagination 'window'
        // this action will change the slice of the loadedAssets array that is currently 'active'
        dispatch(setPage(perPage, pageNumber, currChunk, loadChunkSize))
      }
      else{
        dispatch(getFolderAssets(folderId, loadChunkSize, chunkNumber, perPage, pageNumber))
      } 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetGridPages)

let assetGridPages = {
  marginTop: 20,
  marginBottom: 30,
  marginLeft: 15
}

let pageNumberActive = {
  backgroundColor: '#4bab49',
}