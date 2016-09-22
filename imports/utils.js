import React from 'react'

import Dropdown from '/imports/components/Dropdown'

function createDropdownItems(items, theme){
  return(
    items.map((item, i)=>(
      <Dropdown 
        key={i} label={item.label} 
        id={item.id} subitems={item.subitems}
        eldest={item.eldest} theme={theme} />
    ))
  )
}

export {createDropdownItems}