import React from 'react'

import Dropdown from '/imports/components/Dropdown'

import { store } from '/client'
import { setFolderParent, setFolderSiblings } from '/imports/actions'

/*

dfs(node, folderId, list): 

Given a node in a tree, a folderId that designates a node we are looking for, and an 
array that will hold our result, this function performs a depth-first traversal of the
tree and finds the path from a rootNode to a node that contains a folderId equal to 
the one we are looking for. It stores this path as the labels of the nodes in the path 
ordered by [eldestAncestor, ... , parentOfNode, nodeOfInterest]

*/
export function dfs(node, folderId, list){
  if (node.subitems){
    for(let i=0; i<node.subitems.length; i++){
      let subitem = node.subitems[i]
      if (dfs(subitem, folderId, list)){
        if(node.label){
          list.unshift(node.label)
        }
        return true
      }
    }  
  }
  if (node.id === folderId){
    list.unshift(node.label)
    return true
  }
  return false
}


/* 

getParent(node, folderId):

Given a node in a tree and a folderId that designates a node whose parent we are looking 
for, this function performs a depth-first traversal of the tree and finds the parent of 
the node that has a folderId equal to the one we are looking for. It then dispatches an
action to set the state of folderParentLabel equal to the label on the parent node.
*/
export function getParent(node, folderId){
  if(node.subitems){
    for(let i=0; i<node.subitems.length; i++){
      let subitem = node.subitems[i]
      if (getParent(subitem, folderId)){
        if(node.label){
          //dispatch action to set folderParentLabel
          store.dispatch(setFolderParent(node))
        }
        return false
      }
    }     
  }
  if (node.id === folderId){
    return true
  }
  return false
}

/*

*/
export function getParentByLabel(node, label){
  if(node.subitems){
    for(let i=0; i<node.subitems.length; i++){
      let subitem = node.subitems[i]
      if (getParentByLabel(subitem, label)){
        if(node.label){
          //dispatch action to set folderParentLabel
          store.dispatch(setFolderParent(node))
        }
        return false
      }
    }     
  }
  if (node.label){
    if (node.label.toLowerCase() === label){
      return true
    }
  }
  return false
}
      

/*

*/
export function getSiblings(node, folderId){
  if(node.subitems){
    for(let i=0; i<node.subitems.length; i++){
      let subitem = node.subitems[i]
      if (getSiblings(subitem, folderId)){
        if(node.label){
          //dispatch action to set folderSiblings
          store.dispatch(setFolderSiblings(node.subitems))
        }
        return false
      }
    }     
  }
  if (node.id === folderId){
    return true
  }
  return false
}

/*

*/
export function getSiblingsByLabel(node, label){
  if(node.subitems){
    for(let i=0; i<node.subitems.length; i++){
      let subitem = node.subitems[i]
      if (getSiblingsByLabel(subitem, label)){
        if(node.label){
          //dispatch action to set folderSiblings
          store.dispatch(setFolderSiblings(node.subitems))
        }
        return false
      }
    }     
  }
  if(node.label){
    if (node.label.toLowerCase() === label){
      return true
    }
  }
  return false
}

/*

*/
export function findFirstLeaf(node){
  if(node.subitems){
    for(let i=0; i<node.subitems.length; i++){
      let subitem = node.subitems[i]
      return findFirstLeaf(subitem)
    }     
  }
  return node.id
}

/*

*/
export function findFirstLeafByLabel(node, label){
  if(node.label){
    if(node.label.toLowerCase() === label) {
      return node.subitems[0] 
    }    
  }
  if(node.subitems){
    for(let i=0; i<node.subitems.length; i++){
      let subitem = node.subitems[i]
      if( findFirstLeafByLabel(subitem, label) ){
        return findFirstLeafByLabel(subitem, label)
      }
    }     
  }
  return false
}


/*

createDropdownItems(items, slug, theme):

*/
export function createDropdownItems(items, slug, theme){
  return(
    items.map((item, i)=>(
      <Dropdown 
        key={i} label={item.label} id={item.id}
        subitems={item.subitems} eldest={item.eldest} 
        slug={slug} theme={theme} />
    ))
  )
}
