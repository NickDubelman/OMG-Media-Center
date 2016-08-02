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
        dispatch(setFolderName(name))
      }
    })
  }
}

export function getFolderAssets(folderId, perPage, pageNumber){
  return (dispatch) => {
    Meteor.call('getFolderAssets', folderId, perPage, pageNumber, (err, res) => {
      if(err){
        console.log(err)
        dispatch(setFolderAssets([], 0))
      }
      else{
        let assets = res.data
        let totalResults = res.headers["total-results"]
        dispatch(setFolderAssets(assets, totalResults))
      }
    })
  }
}  

export function setFolderName(name){
  return { type: 'SET_FOLDER_NAME', name }
}

export function setFolderAssets(assets, totalResults){
  return { type: 'SET_FOLDER_ASSETS', assets, totalResults}
}