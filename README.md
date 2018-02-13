# Secure Web (HTTPS) Server

![Secure Web Server](./https.png)

##Simple HTTPS web server for local debugging of web apps

Feb 2018 by Glenn Inn,  glenninn@yahoo.com

This Node JS application creates a secure web server (HTTPS) to serve pages locally on your dev laptop.


### To Install
1. Download the files from this git repository
2. give the command `npm install`

### To Run
The application is contained in the server.js file.  It accepts optional parameters when launched.


`node server.js htmlpages_folder https_port`

The `htmlpages_folder` is the location of the root directory containing the html pages that the server hosts.  This field is *optional* and defaults to `./html`

The `https_port` is the TCP port that the server will answer on when an HTTPS request is made.  This field is *optional* and defaults to 243.



### To Test

This project includes a simple `index.html` file that the server hosts from its default folder `./html` location

Browse to: `https://localhost/` and the browser window will show:

`hello there`



