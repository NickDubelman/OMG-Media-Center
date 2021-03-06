//reducers.js

let initialState = {
  pageSize: 8,
  loadChunkSize: 32,
  modalActive: false,
  activeAsset: null,
  currFolder: null,
  folderName: '',
  loadedAssets: null, 
  assets: null,
  totalResults: 0,
  currPage: 1,
  currChunk: 1,
  folderParentLabel: null,
  folderSiblings: []
}

export default function rootReducer(state = initialState, action){
  switch(action.type){
    case 'OPEN_MODAL':
      return { ...state, modalActive: true, activeAsset: action.index }
    case 'CLOSE_MODAL':
      return { ...state, modalActive: false }
    case 'SET_CURR_FOLDER':
      return { ...state, currFolder: action.folderId, folderName: action.name }
    case 'SET_FOLDER_ASSETS': {
      let startIndex = ((action.currPage - 1) * action.pageSize) - ( action.loadChunkSize * (action.currChunk-1) )
      let loadedAssets = action.assets
      let displayedAssets = [...loadedAssets.slice(startIndex,startIndex+action.pageSize)]
      return { 
        ...state, 
        loadedAssets,
        assets: displayedAssets, 
        totalResults: action.totalResults, 
        currPage: action.currPage,
        currChunk: action.currChunk,
      }
    }
    case 'SET_PAGE': {
      let startIndex = ((action.pageNumber - 1) * action.pageSize) - ( action.loadChunkSize * (action.currChunk-1) )
      let loadedAssets = state.loadedAssets
      let displayedAssets = [...loadedAssets.slice(startIndex,startIndex+action.pageSize)]
      return {
        ...state,
        assets: displayedAssets,
        currPage: action.pageNumber
      }
    }
    case 'INITIALIZE_ASSETS': {
      return {
        ...initialState, 
        folderParentLabel: state.folderParentLabel,
        folderSiblings: state.folderSiblings
      }
    }
    case 'SET_FOLDER_PARENT': {
      return{
        ...state, 
        folderParentLabel: action.parent.label
      }
    }
    case 'SET_FOLDER_SIBLINGS': {
      return{
        ...state, 
        folderSiblings: action.siblings
      }
    }
    default:
      return state
  }
}