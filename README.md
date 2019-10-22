# MakingChallenge
## This file will describe the general aspects that were taken for the development of the challenge.

## FILE STRUCTURE:

- vendors/
  - js
    - jquery-3.4.1.min.js
- resources/
  - css/
    - style.css
    - /min
      - style.css
- sass/
   - _banner.scss
   - _footer.scss
   - _mediaqueries.scss
   - _modalprofile.scss
   - _navbar.scss
   - _profilecard.scss
   - _variables.scss
   - style.scss
- js/
   - scripts.js
   - shared.js
- images/
   - acolor.png
   - Avatar.jpg
   - Avatar.png
   - Avatar-color.png
   - color.png
   - Mask.jpg
   - social/
     - Facebook.png
     - Facebook_dark.png
     - Instagram.png
     - linkedin.png
     - Twitter.png
     - Twitter_dark.png
     - Youtube.png
     
##  Points to mark

- The preprocessor I chose was scss because I find it easier to handle its syntax.
- La automatizacion fue realizada con Gulp en el archivo llamado gulpfile.js y automatiza la conversión de SCSS a CSS y la minificacion de CSS. 
- The background tone of the cell phone menu is part of a pant palette generated with coplors.co based on the colors given in the mockup.
- I had to crop and change the image format "Avatar.jpg" to .png so that it looks fully round and has a transparent background. I also had   to darken the social media icons to make them more visible in the modal.
- The task runner automation was done with gulp in the file gulpfile.js. The file have two atomization: the minification of css code in the   folder "min" inside the css folder and the compilation of scss file.

