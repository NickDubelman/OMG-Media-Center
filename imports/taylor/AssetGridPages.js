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
    <div style={assetGridPages}>
      {pages.map((page)=> {
        let styling = 'page-number'
        if (page === currPage) styling+=' curr-page'
        return(
          <div key={'page'+page} className={styling} onClick={goToPage.bind(this, currFolder, perPage, page, currPage)}>
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

let assetGridPages = {
  marginTop: 20,
  marginBottom: 30,
  marginLeft: 15
}

let pageNumberActive = {
  backgroundColor: '#4bab49',
}