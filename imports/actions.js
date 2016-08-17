//actions.js

export function openModal(index){
  return { type: 'OPEN_MODAL', index }
}

export function closeModal(){
  return { type: 'CLOSE_MODAL' }
}

export function getFolder(folderId){
  return (dispatch) => {
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

export function getFolderAssets(folderId, loadChunkSize, chunkNumber, perPage, currPage){
  return (dispatch) => {
    Meteor.call('getFolderAssets', folderId, loadChunkSize, chunkNumber, (err, res) => {
      if(err){
        console.log(err)
        dispatch(setFolderAssets([], 0, perPage, 1))
      }
      else{
        let assets = res.data
        let totalResults = res.headers["total-results"]
        dispatch(setFolderAssets(assets, totalResults, perPage, currPage, chunkNumber, loadChunkSize ))
      }
    })
  }
}  

export function setCurrFolder(folderId, name){
  return { type: 'SET_CURR_FOLDER', folderId, name }
}

export function setFolderAssets(assets, totalResults, perPage, currPage, currChunk, loadChunkSize){
  return { type: 'SET_FOLDER_ASSETS', assets, totalResults, perPage, currPage, currChunk, loadChunkSize }
}

export function setPage(perPage, pageNumber, currChunk, loadChunkSize){
  return { type: 'SET_PAGE', perPage, pageNumber, currChunk, loadChunkSize }
}

export function initializeAssets(){
  return { type: 'INITIALIZE_ASSETS' }
}
