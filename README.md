<p align="center"><img src="https://user-images.githubusercontent.com/6751621/28461252-0fc6e73e-6e16-11e7-87a7-2277b3765efa.png"></p>

-----

### Lion Gym - Hypermedia Applications Project (Part two) - 2015
#### Computer Engineering - Politecnico di Milano

This is the second part of the Hypermedia Applications course project, the objective was to implement a fully responsive website from the IDM Interactive Dialogue Models redacted in the first part with some specific technology requirements. The project requirements included to **retrieve all the data asyncronously** from an external server with a PHP and MySQL backend.

Working demo: http://daniele-salvagni.github.io/hyp-lion-gym/app/#/ - The database is no longer online, so most of the data will not load anymore.

### Information

- CSS is written in [LESS](http://lesscss.org/) on top of [Bootstrap](http://getbootstrap.com/), the site template has been created manually from scratch and it is fully responsive.
- The website is a SPA (Single Page Application), all the data is loaded asynchronously from another server using [AngularJS](https://angularjs.org/).
- Twitter [APIs](https://dev.twitter.com/rest/reference/get/statuses/user_timeline) are used to get the timeline of the instructors.
- Google Maps [Javascript APIs](https://developers.google.com/maps/documentation/javascript/) and AngularJS [ng-map](http://ngmap.github.io/) module are used to get a [custom themed](https://developers.google.com/maps/documentation/javascript/styling) map of the gym location.
- [jQuery](https://jquery.com/) is used to dinamically change the header aspect based on the position of the page and to make the background Youtube video responsive (and by some Bootstrap components like Carousel).
- The web app has been tested and deployed also on PhoneGap.

Note: there are some differences on mobile/desktop (for example the home page video is not loaded on mobile to save resources)

### Screenshots

![Animation](https://github.com/daniele-salvagni/hyp-lion-gym/blob/master/screenvid.gif)

![CoursePage](https://github.com/daniele-salvagni/hyp-lion-gym/blob/master/screenshot2.png)
