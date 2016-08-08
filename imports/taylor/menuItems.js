const menuItems=[
  {label: 'Video Assets for Download', eldest: true, subitems:[
    {label: 'Chef Crafted', id: 'b69231a8-3bb6-4ece-90b8-e4fcf804cfce'},
    {label: 'Giving Back', id: '13af8916-ea69-4692-bb27-3a6db5962b5d'},
    {label: 'Organic Choped', id: '51acc793-36bd-4f8f-9db7-4c10a9226bf8'},
    {label: 'Sustainability', id: '394cdc71-6b8e-44a0-b008-d097ef2d7319'},
    {label: 'TF Headquarters', id: '9bb4e142-fc4d-4a59-8100-a8bf608f5fba'},
    {label: 'Taylor Farms Recipes', id: 'e0df1130-628e-48fc-9055-a9f97167844a'}
  ]},
  {label: 'Photo Assets for Download', eldest: true, subitems:[
    {label: 'Giving Back', subitems:[
      {label: 'Scholarships', id: '04784168-36d0-4809-ab75-a79058683677'}
    ]},
    {label: 'Headquarters', id: 'd778478b-1b12-43bb-a688-c8cc65e079f9'},
    {label: 'Products', subitems:[
      {label: 'Chef Crafted', id: '6a1e1265-c93a-43d2-b0df-4bfff95f8958'},
      {label: 'Organic Chopped', id: '2c509f7d-5b2c-4fe1-8f70-6e994e616ab0'}, 
    ]},
    {label: 'Sustainability', subitems:[
      {label: 'Fuel Cells', id: '965e2fb7-b5ee-4631-abe5-5c3e0d6269de'},
      {label: 'Solar', id: 'f36e95f2-abcc-4516-b7b1-dc0e2a262a59'},
      {label: 'Wind', id: '00dab70f-dbf6-4cb5-9fb3-37ff74b544b0'} 
    ]}
  ]},
  {label: 'News Releases', eldest: true, subitems:[
    {label: 'General News', id: '1935f1b5-de27-4e5a-ba56-b3dca15de4ba'},
    {label: 'Giving Back', id: '45549345-fc4d-47c2-b81a-1cc18ca7e897'},
    {label: 'Products', id: '44a30e83-c87a-4d02-a2c4-e84da23e75cf'},
    {label: 'Sustainability', id: 'd8d8a832-b870-44f8-82cc-3ed347365bb0'},
  ]} 
]

const rootNode={
  subitems: [
    {label: 'Video Assets for Download', eldest: true, subitems:[
      {label: 'Chef Crafted', id: 'b69231a8-3bb6-4ece-90b8-e4fcf804cfce'},
      {label: 'Giving Back', id: '13af8916-ea69-4692-bb27-3a6db5962b5d'},
      {label: 'Organic Choped', id: '51acc793-36bd-4f8f-9db7-4c10a9226bf8'},
      {label: 'Sustainability', id: '394cdc71-6b8e-44a0-b008-d097ef2d7319'},
      {label: 'TF Headquarters', id: '9bb4e142-fc4d-4a59-8100-a8bf608f5fba'},
      {label: 'Taylor Farms Recipes', id: 'e0df1130-628e-48fc-9055-a9f97167844a'}
    ]},
    {label: 'Photo Assets for Download', eldest: true, subitems:[
      {label: 'Giving Back', subitems:[
        {label: 'Scholarships', id: '04784168-36d0-4809-ab75-a79058683677'}
      ]},
      {label: 'Headquarters', id: 'd778478b-1b12-43bb-a688-c8cc65e079f9'},
      {label: 'Products', subitems:[
        {label: 'Chef Crafted', id: '6a1e1265-c93a-43d2-b0df-4bfff95f8958'},
        {label: 'Organic Chopped', id: '2c509f7d-5b2c-4fe1-8f70-6e994e616ab0'}, 
      ]},
      {label: 'Sustainability', subitems:[
        {label: 'Fuel Cells', id: '965e2fb7-b5ee-4631-abe5-5c3e0d6269de'},
        {label: 'Solar', id: 'f36e95f2-abcc-4516-b7b1-dc0e2a262a59'},
        {label: 'Wind', id: '00dab70f-dbf6-4cb5-9fb3-37ff74b544b0'} 
      ]}
    ]},
    {label: 'News Releases', eldest: true, subitems:[
      {label: 'General News', id: '1935f1b5-de27-4e5a-ba56-b3dca15de4ba'},
      {label: 'Giving Back', id: '45549345-fc4d-47c2-b81a-1cc18ca7e897'},
      {label: 'Products', id: '44a30e83-c87a-4d02-a2c4-e84da23e75cf'},
      {label: 'Sustainability', id: 'd8d8a832-b870-44f8-82cc-3ed347365bb0'},
    ]} 
  ]
}

export { rootNode }

export default menuItems