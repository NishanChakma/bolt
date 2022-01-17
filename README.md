# Bolt

#Flow

1. Splash screen.
2. On the welcome screen you can go login screen and another option is going to the homepage.
3. In Homepage if you click the phone back press button and you didn't logged in it will show an alert to back to the login screen. If already logged in you can see the LOGOUT option.
4. In Homepage if you press any item and you didn't logged in it will redirect to the login page.
5. Login screen has phone number validation and also login button.
6. If the phone number is valid it will show a modal and you can copy the OTP.
7. Verify button has validation. It will not accept wrong OTP or empty data. You can also paste your OTP directly.
8. There are some data on the homepage which is coming from 2 arrays.
9. In checkout if you didn't click the Checkout button within 20 seconds it will redirect to the homepage.
10. Checkout page has an increase and decreases counter. You can also delete the item.
11. Checkout page subtotal, discount, shipping, and total data are dynamic.
12. I used redux persists to store the session. So once you logged in you will be still logged in until you click log out. And the checkout data will also be stored in local storage. So, if you exist the app it will be still signed in.

#Features
-app icon
-android version control
-splash screen
-animation
-javascript svg
-array addition
-array update
-array delete
-validations
-loading screen
-redux-saga combine with redux-thunk
-redux persists with logger
-Auth session
-dynamic route
-stack navigation with drawer navigation and many more

Note: Due to I used drawer navigation I had to use react native reanimated. And remote debugger is not supported in reanimated v2. So you have to use flipper to see the console. And reanimated use hermes engine. It will reduce the app size.

Thank you!
