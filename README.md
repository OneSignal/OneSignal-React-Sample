# OneSignal ReactJS Sample App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Advanced OneSignal setup with ReactJS

Inside of your **App.js** file, you will enter the following lines of code:

```javascript
window.OneSignal = window.OneSignal || [];
const OneSignal = window.OneSignal;
```

The code above will make the `window` object aware of the `OneSignal` property. This will allow you to have access to the OneSignal SDK properties after the SDK has loaded into your web application.
In the same file we will create a `useEffect`. This hook will have the initialization code needed to trigger OneSignal. Remember to add the dependency array `[]`  to your `useEffect` hook. The `init()` method from OneSignal can only be called once and the dependency array will help us to avoid that the useEffect gets triggered multiple times firing the `init()` method.

```javascript
useEffect(() => {
   OneSignal.push(() => {
     OneSignal.init(
       {
         appId: "YOUR-APP-ID"
       },
     )
   });
 }, []);
 ```

Now, you can keep expanding your code to make use of different features of the OneSignal SDK across your ReactJS app by passing the `OneSignal` variable to different components. You can also use the custom code setup to modify the configurations of your prompt inside of your ReactJS application without using the OneSignal dashboard. To learn more about the Web Push SDK visit our web push SDK documentation
