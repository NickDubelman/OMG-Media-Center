# OMG Media Center

OMG Media Center is an app for OMG Media Group to create media "portals" for our clients. These portals use the Mediasilo API to pull assets from whichever folders a given client would like to highlight. 

This app strives to mimic Mediasilo Quicksites, while providing clients with additional customization options (rather than just styling). It contains several React components meant to provide an API to quickly and easily create templates for these sites.  

## Packages:
* Meteor
* React
* React-Bootstrap
* React-Router
* ReactRouterSSR

## Usage:
To run thus app you need to have both meteor and npm installed.

1. git clone this repo
2. npm install
3. meteor

##Motivation:
This app was created because we had a client who wanted to simply add a mailto link (for contact purposes) on their quicksite. Unfortunately, Mediasilo only allows customizations of quicksites by way of CSS. 

##Future Work:
Currently, these quicksites need to be created by someone with an understanding of web development, specifically someone who understands React. 

Ideally, there would be an app that would allow non-tech inclined users of Mediasilo to create customizable quicksites. This app would essentially be a lightweight CMS to allow users to create public-facing websites displaying their assets. It would improve on the current implementation of Mediasilo Quicksites by allowing users to add text content, add images, add a contact form, etc to a theme of their choosing, instead of just allowing styling changes to a prebuilt theme. Furthermore, it would allow users to theme their quicksite via a GUI with color pickers instead of a CSS file.
