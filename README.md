# MakingChallenge
##### This file will describe the general aspects that were taken for the development of the challenge.

## File dir structure:

- **vendors**/
  - js
    - jquery-3.4.1.min.js
- **resources**/
  - css/
    - style.css // css no minified
    - /min
      - style.css // css minified
- **sass**/
   - _banner.scss
   - _footer.scss
   - _mediaqueries.scss
   - _modalprofile.scss // modal of profile cards
   - _navbar.scss
   - _profilecard.scss
   - style.scss
- **js**/
   - scripts.js // open and close functions
   - shared.js // social media shared counts AJAX
- **images**/
   - acolor.png
   - Avatar.jpg
   - Avatar.png
   - Avatar-color.png // Avatar.jpg editing
   - color.png
   - Mask.jpg
   - social/
     - Facebook.png
     - Facebook_dark.png // Facebook.png edited
     - Instagram.png
     - linkedin.png
     - Twitter.png
     - Twitter_dark.png // Twitter.png edited
     - Youtube.png
     
##  Points to mark

- The preprocessor I chose was **scss** because I find it easier to handle its syntax.
- The background tone of the mobile menu is part of a pant palette generated with coolors.co based on the colors given in the **mockup**.
- I had to **crop** and **change** the image format of ***Avatar.jpg*** to **.png** so that it looks fully round and has a transparent background. I also had to darken the social media icons to make them more visible in the modal.
- The task runner automation was done with **Gulp** in the file ***gulpfile.js*** The file has two atomizations: the **minification** of css code in the folder "min" inside the css folder and the **compilation** of scss file.
- The integration of social media **shared counters** was done with the file ***shared.js***
- **I removed** the modal image in resolutions lower than 360px in order to preserve the readability of the text.  I didn't have enough time to find a better alternative.
- The **opening and closing** of the modal and the mobile menu are made with an ***onlick*** event with JavaScript.
- I avoided the use of **external source icons** respecting the interpretation of the requirements specification.

## Decision-making of responsive approach

The responsive design was made with **three breakpoints**:</br>

- 700px y 768px (i had to add one more to resolve an issue with the text banner height) for **tablets**
- 360px for **small smartphones**</br>

The positioning of all elements of the webpage were done with ***flexbox*** as well as the positioning of modal and it's content. This helped me a lot to **reposition** the elements respecting the position of it's brother elements when the screen size changes.
The navbar items are transformed in a menu button when the width of the screen changes below **700 pixels** and opens with an **onclick** event to cover the whole screen.</br>
I've paid **special attention** to the resposive behavior in screen sizing in Apple devices such as **IPads** and **IPhones**.

## Comments

I am aware that there are details of the design to be fixed, like the design of the social media icons in the footer or in the modal.
I didn't had enough time to spare, but I would have improved this amongst other things .</br></br>
I appreciate Hernan and Nazareno for having taken the time to explain to me about relatives units, flexbox, transition and the difference of Sass and Scss since they where keywords at the time of the technical research and also to Salome because not just the technical interview but the whole selection process was an enlightening experience for me, beyond the decision you make.
