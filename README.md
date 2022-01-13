# Notify-Device

#Flow

1. Splash screen.
2. On the welcome screen you can go log in and another option is the direct homepage.
3. If the back press button clicks and you didn't logged in it will show an alert to back to the homepage. If logged in you can see the checkout page.
4. Login screen has phone number validation and also login button.
5. If the phone number is valid it will show a modal and you can copy the OTP.
6. Verify button has validation. It will not accept wrong OTP or empty data. You can also paste your OTP directly.
7. There are some data on the homepage which is coming from 2 arrays.
8. In checkout if you didn't click the Checkout button within 20 seconds it will redirect to the homepage.
9. Checkout page has an increase and decreases counter. You can also delete the item.
10. Checkout page subtotal, discount, shipping, and total data are dynamic.

Note: Due to I used drawer navigation I had to use react native reanimated module. And remote debugger is not supported in reanimated v2. So you have to use flipper to see the console. And reanimated use hermes engine true. It will reduce the app size.

Thank you!
