//reducers.js

let initialState = {
  modalActive: false,
  activeAsset: null,
  currFolder: null,
  folderName: '',
  assets: null,
  totalResults: 0,
  currPage: 1,
}

export default function rootReducer(state = initialState, action){
  switch(action.type){
    case 'OPEN_MODAL':
      return { ...state, modalActive: true, activeAsset: action.index }
    case 'CLOSE_MODAL':
      return { ...state, modalActive: false }
    case 'SET_CURR_FOLDER':
      return { ...state, currFolder: action.folderId, folderName: action.name }
    case 'SET_FOLDER_ASSETS':
      return { ...state, assets: action.assets, totalResults: action.totalResults, currPage: action.currPage }
    default:
      return state
  }
}