# Rock Paper Scissors coded with React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I coded a basic game of Rock paper scissors as a way to practice and get a bit more familiar with coding with React.

## Pictures and thoughts
Pictres: ![pic](image.png)

This is the part where I share my thoughts. I coded the rock paper scissors as I had before in the past with a switch statement case. A way to make the many cases a bit less bloated was the use of an array I named choices where it contained ['Rock', 'Paper', 'Scissors'] corresponding with 0, 1, 2 index. I am not too sure as of writing this readme whether the way I declared the array was right or conformed to how you would do it. I originally had choices inside the state which resulted in an error stating that this.choices was null/dne so I set this.choices to ['Rock', 'Paper', 'Scissors'] outside of this.state similar to how I binded the clickHandler. The array allowed for less typing. 

I also made use of the es6 syntax where you could have `${variable}` to make life easier to display what happened in the form of a result sentence. 

I split the components into two components: Computer.js and GameComponent.js. Computer.js had three buttons, one for each choice the player would make which onClick would signal to GameComponent, the parent component of Computer which would then randomize a Computer decision and then update and render the new state with the result of the round. I'm not 100% sure as of the moment how I should have gone about splitting the code up with regards to components. I could have skipped the Computer.js component and had all the code in 1 big file in GameComponent. I could have also split up GameComponent into other files/components to make it less fat.

## Conclusion

This rock paper scissors is very barebones and minimal with only 3 buttons, a div for the score and a div for a sentence telling the round result.
This was coded in less than 2 hours.
This was a decent coding session for my current level of skill to help me consolidate a bit of the React and js I learned recently.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
