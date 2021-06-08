# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Quick Push Notification Setup In ReactJS

Follow [this instructions](https://documentation.onesignal.com/docs/web-push-typical-setup) to get stated with OneSignal.

In your ReactJS project folder, navigate to the public folder and open the **index.html** file. Inside of the head HTML tag, paste the code you previously copied from the OneSignal page. The code should look like this:

```html
  <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
  <script>
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "YOUR-APP-ID",
      });
    });
  </script>
```

***Note: For advanced setup of OneSignal with ReactJS, reference the [main](https://github.com/OneSignal/OneSignal-React-Sample) branch.***

