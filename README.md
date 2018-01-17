Self Destructing ToDo List
=================

Link to Application
-------------------

[Self-Destro-ToDoList](http://ilitvak.github.io/Self-Destro-TodoList/)

What is it? 
-----------------
One of my projects at Bloc.io while doing the apprenticeship program was to create a to-do list that would delete tasks after a period of time. Using AngularJs allowed me to create a more dynamic and fluid user experience. When you input a todo into the application you are given a Up & Down arrow to allow the user to push the priority of the task up for higher priority or vise versa. You may also delete the todo using the garbage icon.

Self Destructing ToDo List is built with [AngularJS](https://angularjs.org/), [Express](http://expressjs.com/), [Node.js](https://www.npmjs.com/) and [Firebase.io](https://www.firebase.com/) using Nitrious.io. 

Self Destructing ToDo List utilizes a single-page architecture using [AngularJS](https://angularjs.org/) to provide the user with a fluid experience. [Firebase.io](https://www.firebase.com/) stores the tasks in their database and when the time is up, it is automatically deleted. 

Languages Used
---------------
- [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
- [Sass](http://sass-lang.com/)
- Had some jQuery, but switched over to [AngularJS](https://angularjs.org/)

Definitions of Commands
-----------------------

**[NPM](https://www.npmjs.com/)** - Node Package Manager (Server Manager)

**[Grunt](http://gruntjs.com/)** - looks for files using a defined pattern so that it knows what to compile and copy and where to put it. To edit the files that Grunt watches, look at the array of files in the watch task in [Gruntfile.js](https://github.com/carmenvkrol/bloc-pomodoro/blob/master/gruntfile.js)

Installation Steps:
-------------------

You should already have [Node.js](https://www.npmjs.com/) installed before cloning.


Start by cloning the repository.

`$ git clone https://github.com/ilitvak/Self-Destructing-To-Do-List.git`


This application uses [Grunt](http://gruntjs.com/) to run tasks.  Install the Grunt Command Line Interface (`grunt-cli`) locally on your machine.


`$ npm install -g grunt-cli`

Once that's complete, install the remaining project dependencies by running

`$ npm install`

Running the Application
------------
Two tabs must be open in the terminal in order to run this application.

In one tab, run

`$ npm start`

In the second tab, run

`$ grunt`

The application runs on port 3000 - configured in the [`Gruntfile.js`]. To change the port, modify the number highlighted below

```js
connect: {
  server: {
    options: {
      // Change this value here to the desired port number
      port: 3000,
      hostname: 'localhost',
      base: './dist',
      useAvailablePort: true
    }
  }
}
```

Screenshots
-----------

![Imgur](http://i.imgur.com/L2nqEo9.png)

