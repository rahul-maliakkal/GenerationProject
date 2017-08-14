Generation Take-Home Coding Challenge
=================================
The App contains 3 main components 
* The Map
* The "Favorite Places" Table
* A Counter

The Map shows markers loaded from the json file and also displays a infobox when hovered on.
To circumvent the OVER_QUERY_LIMIT server error, I used setTimeOut. As each point loads on the map, the counter increments.

I have included 1 test case. This has been done using Enzyme + Jest
To run the test
```
npm test
```

### How do you start?

Clone the repo on your computer

Run
```
npm install
npm start
open http://localhost:3000
```
Read the intro and next steps on localhost:3000
Edit `src/YourComponent.js`.  
Your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

### What do we look for?

* **Correctness**: does the application do what was asked (e.g., all the user stories are complete)? If there is anything missing, does the README explain why it is missing?
* **Code quality**: is the code simple, easy to understand, and maintainable?  Are there any code smells or other red flags? Is the coding style consistent with the language's guidelines? Is it consistent throughout the codebase?
* **Testing**: Are there some unit and some integration tests?
	* We're not looking for full coverage (given time constraint) but just trying to get a feel for your testing skills.
* **UX**:  Is the web interface understandable and pleasing to use? Is it responsive to various screen sizes, and fast to load?
* **Technical choices**: do choices of libraries, databases, architecture etc. seem appropriate for the chosen application?

### Source

This boilerplate project is a mirror plus a few additions from gaearon's react boilerplate (https://github.com/gaearon/react-hot-boilerplate)
