# Lion Gym
#### Hypermedia Applications Project - 2015

Project requerements were to retrieve all the data asyncronously from an extrnal PHP server.   
Working demo: http://daniele-salvagni.github.io/hyp-lion-gym/app/#/


## Informations

- CSS is written in [LESS](http://lesscss.org/) on top of [Bootstrap](http://getbootstrap.com/), the site template has been created manually from scratch.
- The website is a "single page" app, only the parts of the page that changes are loaded asynchronously from another server using [AngularJS](https://angularjs.org/).
- Twitter [APIs](https://dev.twitter.com/rest/reference/get/statuses/user_timeline) are used to get the timeline of the instructors.
- Google Maps [Javascript APIs](https://developers.google.com/maps/documentation/javascript/) and AngularJS [ng-map](http://ngmap.github.io/) module are used to get [custom themed](https://developers.google.com/maps/documentation/javascript/styling) the map of the gym location.
- [jQuery](https://jquery.com/) is used to dinamically change the header aspect based on the position of the page and to make the background outube video responsive (and by some Bootstrap components like Carousel).

Note: some things are different on mobile/desktop (for example the home page video is not loaded on mobile to save resources)

### Screenshot

![Screenshot](http://i.imgur.com/sQ55YRw.png)
