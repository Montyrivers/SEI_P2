
initial deployment can be found here:

bye-bye-love.surge.sh

Description:  To capture and display fascinating data from Nasa's API's returning interesting positional data and photographs

Objective: to create an immersive, well styled app purported to get viewers to become more interested in NASA's research and exploration.

Challenges:  The API calls I have made so far seem promising, but the way they are structured is challenging to unpack,or in the worst case some of the API targets have poor or dated documentation ie.  the JPL planet viewer has an HTML5 app but all the docs are still for Java.  I foresee myself breaking through the more simple API targets so I can move forward with displaying and styling them in as elegant a way as I can manage.

Current Component Hierarchy:
Router:
App---state to components:
------Epic
------Footer
------JPLViewer
------MarsRover
------SpacePhoto
services: nasa-api-- axios calls

API website:  https://api.nasa.gov/index.html#getting-started

MVP:  A well styled and animated page that loads and displays data smoothly.

-Landing page with astrophoto of the day plus info about the photo

-Near Earth Object Asteroid view with buttons that redirect to pertinant location and 
trajectory data on Nasa website.

-EPIC planet earth 'blue marble' photos taken daily from the space shuttle DSCOVR.

-Mars Curiousity Rover photos rendered either in their entirety or in batches depending upon required network and local resources required to do so. (this one still needs some extra work on my part)

POST MVP:  A seamlessly styled and animated page that loads and displays data smoothly, has more streamlined searching, better organization and maybe even a couple of style related easter eggs.

-A very nice overlay page triggered with darkening of elements beneath devoted to the EPIC DSCOVR photos.

-conditional rendering of data lists and possibly shrinking them down to be displayed within their own modular elements i.e. a scrollable, resizeable window on a sidebar etc














# SEI_P2
