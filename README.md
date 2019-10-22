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
     - Facebook_dark.png // Facebook.png editing
     - Instagram.png
     - linkedin.png
     - Twitter.png
     - Twitter_dark.png // Twitter.png editing
     - Youtube.png
     
##  Points to mark

- The preprocessor I chose was **scss** because I find it easier to handle its syntax.
- The background tone of the cell phone menu is part of a pant palette generated with coolors.co based on the colors given in the **mockup**.
- I had to **crop and change** the image format of ***Avatar.jpg*** to **.png** so that it looks fully round and has a transparent background. I also had to darken the social media icons to make them more visible in the modal.
- The task runner automation was done with **Gulp** in the file ***gulpfile.js*** The file have two atomization: the **minification** of css code in the folder "min" inside the css folder and the **compilation** of scss file.
- The integration of social media **shared counters** was done with the file ***shared.js***
- **I removed** the modal image in resolutions lower than 360px in order to preserve the readability of the text.  I don't have time to find a better alternative.
- The **opening and closing** of the modal and the mobile menu are made ***onlick*** event javascript.
- I avoided the use of **external source icons** respecting the interpretation of the requirements specification.

## Desicion-making of responsive approach

The responsive design was made with **three breakpoints**:

- 700px y 768px (i had to add one more to resolve a issue with text banner height) for **tablets**
- 360px for **small smartphones**

The positioning of all elements of the webpage are made with ***flexbox*** as well as the positioning of modal and his content. This helped me a lot to **repositioning** the elements respecting the position of his brother elements when the screen size change.
The navbar items are transformed in a menu button when the width size of the screen change to equal or lower to **700 pixeles** and its open with a **onclick** event of JavaScript where change a default width 0 to a 100% width. Also have a transition effect to soften that.
I paid **special attention** to the resposive behavior in screen sizeing of Apple dispositives such as **IPads** and **IPhones**.

## Comments

I am aware that are details of the design to be fixed as the design of the social media icons in the footer or in the modal but didn't have time to solved it.
I thank Hernan and Nazareno for having explained to me about relatives units, flexbox, transition and the difference of Sass and Scss since they where keywords at the time of technic research. Also to Salome; the whole selection process will be an enlightening experience for me beyond the decision you make.

