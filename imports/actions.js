//actions.js

export function openModal(index){
  return { type: 'OPEN_MODAL', index }
}

export function closeModal(){
  return { type: 'CLOSE_MODAL' }
}

export function getFolder(folderId){
  return (dispatch) => {
    // dispatch action to initialize assets to null
    dispatch(initializeAssets())
    Meteor.call('getFolder', folderId, (err, res) => {
      if(err){
        console.log(err)
      }
      else{
        let name = res.data.name
        // dispatch Redux action to set name
        dispatch(setCurrFolder(folderId, name))
      }
    })
  }
}

export function getFolderAssets(folderId, loadChunkSize, chunkNumber, pageSize, currPage){
  return (dispatch) => {
    Meteor.call('getFolderAssets', folderId, loadChunkSize, chunkNumber, (err, res) => {
      if(err){
        console.log(err)
        dispatch(setFolderAssets([], 0, pageSize, 1))
      }
      else{
        let assets = res.data
        let totalResults = res.headers["total-results"]
        dispatch(setFolderAssets(assets, totalResults, pageSize, currPage, chunkNumber, loadChunkSize ))
      }
    })
  }
}  

export function setCurrFolder(folderId, name){
  return { type: 'SET_CURR_FOLDER', folderId, name }
}

export function setFolderAssets(assets, totalResults, pageSize, currPage, currChunk, loadChunkSize){
  return { type: 'SET_FOLDER_ASSETS', assets, totalResults, pageSize, currPage, currChunk, loadChunkSize }
}

export function setPage(pageSize, pageNumber, currChunk, loadChunkSize){
  return { type: 'SET_PAGE', pageSize, pageNumber, currChunk, loadChunkSize }
}

export function initializeAssets(){
  return { type: 'INITIALIZE_ASSETS' }
}
