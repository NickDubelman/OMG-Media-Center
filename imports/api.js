import { Meteor } from 'meteor/meteor'
import '/environment.js'

/* 
  Set options for HTTP requests to MediaSiloAPI.
  Headers are stored in environment variables for security.
  
  In development, an environment.js file is used to set environment variables.
  In production, these are set via Heroku control panel or command line. 
*/
let options = 
  {headers: {
    'Accept': '*/*',
    'MediaSiloHostContext': process.env.MediaSiloHostContext,
    'MediaSiloApiKey': process.env.MediaSiloApiKey,
    'authorization': process.env.MediaSiloAuthorization,
  }}

Meteor.methods({
	'getFolder'(folderId){
    this.unblock()
    try {
      let result = HTTP.get('https://api.mediasilo.com/v3/folders/'+folderId, options)
      return result      
    } catch (e){
      throw new Meteor.Error(500, 'GET Folder failed', e)
    }

	},
	'getFolderAssets'(folderId, pageNumber){
    this.unblock()
    try {
      let result = HTTP.get('https://api.mediasilo.com/v3/folders/'+folderId+'/assets?_pageSize=8&_page='+pageNumber, 
        options)
      return result
    } catch (e){
      throw new Meteor.Error(500, 'GET Assets from Folder failed', e)
    }
	}
})
