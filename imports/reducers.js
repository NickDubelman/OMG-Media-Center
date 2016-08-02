//reducers.js

let initialState = {
  modalActive: false,
  activeAsset: null,
  folderName: '',
  assets: null,
  totalResults: 0
}

export default function rootReducer(state = initialState, action){
  switch(action.type){
    case 'OPEN_MODAL':
      return { ...state, modalActive: true, activeAsset: action.index }
    case 'CLOSE_MODAL':
      return { ...state, modalActive: false }
    case 'SET_FOLDER_NAME':
      return { ...state, folderName: action.name }
    case 'SET_FOLDER_ASSETS':
      return { ...state, assets: action.assets, totalResults: action.totalResults }
    default:
      return state
  }
}