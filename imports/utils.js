import React from 'react'

import Dropdown from '/imports/components/Dropdown'

import {store} from '/client'
import {setFolderParent} from '/imports/actions'

/*

dfs(node, folderId, list): 

Given a node in a tree, a folderId that designates a node we are looking for, and an 
array that will hold our result, this function performs a depth-first traversal of the
tree and finds the path from a rootNode to a node that contains a folderId equal to 
the one we are looking for. It stores this path as the labels of the nodes in the path 
ordered by [eldestAncestor, ... , parentOfNode, nodeOfInterest]

*/
function dfs(node, folderId, list){
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

*/
function getParentLabel(node, folderId){
  if(node.subitems){
    for(let i=0; i<node.subitems.length; i++){
      let subitem = node.subitems[i]
      if (getParentLabel(subitem, folderId)){
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

createDropdownItems(items, slug, theme):

*/
function createDropdownItems(items, slug, theme){
  return(
    items.map((item, i)=>(
      <Dropdown 
        key={i} label={item.label} id={item.id}
        subitems={item.subitems} eldest={item.eldest} 
        slug={slug} theme={theme} />
    ))
  )
}

export {dfs, getParentLabel, createDropdownItems}