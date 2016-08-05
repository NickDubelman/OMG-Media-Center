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

export function getFolderAssets(folderId, perPage, pageNumber, loadMore){
  return (dispatch) => {
    Meteor.call('getFolderAssets', folderId, perPage, pageNumber, (err, res) => {
      if(err){
        console.log(err)
        dispatch(setFolderAssets([], 0, 1))
      }
      else{
        let assets = res.data
        let totalResults = res.headers["total-results"]
        if(loadMore){
          dispatch(concatFolderAssets(assets, totalResults, pageNumber))
        }
        else{
          dispatch(setFolderAssets(assets, totalResults, pageNumber))
        }
      }
    })
  }
}  

export function setCurrFolder(folderId, name){
  return { type: 'SET_CURR_FOLDER', folderId, name }
}

export function setFolderAssets(assets, totalResults, currPage){
  return { type: 'SET_FOLDER_ASSETS', assets, totalResults, currPage}
}

export function concatFolderAssets(assets, totalResults, currPage){
  return { type: 'CONCAT_FOLDER_ASSETS', assets, totalResults, currPage}
}