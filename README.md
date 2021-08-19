# Tic-Tac-Toe
[Try it out on GitHub Pages](https://rch79.github.io/MS2-TicTacToe/)

This is a simple 2-player (local) Tic-Tac-Toe game. The users select whether player 1 will be using 'X' or 'O' on the main page. The remaining shape is assigned automatically to player 2. The winner at the end of each round scores a point. No points are assigned if the round ends in a tie. The first player to score 5 points wins the game. 

![Responsive Mockup](https://github.com/rch79/MS2-TicTacToe/blob/main/assets/images/mockups.PNG)


### Existing Features

- __Start page__

  - The page where the players make their selection prior to the start of the game. There are two interactive features on this page:
    - **The 'X' and the 'O' buttons:** Player 1 makes the selection by clicking on either the 'X' or the 'O' button. The remaining choice is automatically assigned to player 2.
    - **The Start Game button:** The game starts once this button is clicked, provided that the users have made their selection. An error message will be displayed if no selection has been made.

    ![Start Page](https://github.com/rch79/MS2-TicTacToe/blob/main/assets/images/start_page.PNG)


- __The Game Page__

  - On each turn, the player clicks on an empty postion in the 3x3 grid to place an 'X' or an 'O'. If the position has already been selected on a prior turn, an alert message will be displayed on the screen.
  - The round ends once three 'X's or 'O's are placed in a row (horizontally, vertically or diagonally). The winning positions will be highlighted in green. The game ends in a tie if the winning conditions are not met and the board is fully populated.
  - At the end of each round, provided it did not end in a tie, the winning player's score will be incremented by 1 point.
  - The first player to score 5 points is declared the winner. The page will refresh after this to reset the game.

    ![Game Page](https://github.com/rch79/MS2-TicTacToe/blob/main/assets/images/game_page.PNG)



### Features Left to Implement

- At some point it would be an interesting challenge to include some sort of rudimentary AI to enable single-player matched.  


## Testing 

Google Chrome developer tools were used to test resposive design. Both pages scale correclty on the following screen sizes:

  - Moto G4 (360 x 640)
  - Galaxy S5 (360 X 640)
  - Pixel 2 (411 x 731)
  - Pixel 2 XL (411 X 823)
  - iPhone 5/SE (320 x 568)
  - iPhone 6/7/8 (375 x 667)
  - iPhone 6/7/8 Plus (414 x 736)
  - iPhone X (375 X 812)
  - iPad (768 x 1024)
  - iPad Pro (1024 x 1366)
  - Surface Duo (540 x 720)


### Bugs (fixed)

At first players were able to keep clicking on and filling in empty positions in the 3x3 grid between the end of a round and the beginning of a new one, triggering additional victory event loops before the new round began, which in turn caused additional, unwanted player score increments. The issue was resolved with the inclusion of a check on whether the player is clicking on the 3x3 grid in between rounds and if that is the case, the script disregards player inputs until the new round has started.

### Validator Testing 

- HTML
  - No errors were returned when running the site through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Frch79.github.io%2FMS2-TicTacToe%2F).

- CSS
  - No errors were found when running the site through the official [Jigsaw validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Frch79.github.io%2FMS2-TicTacToe%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).

- JavaScript
  - No errors were found when running the script through [JSHint](https://jshint.com/) with the *new Javascript features (ES6)* option enabled:  
  


   <img src="https://github.com/rch79/MS2-TicTacToe/blob/main/assets/images/jshint_results.PNG">

### Lighthouse Reports:

 - __Mobile:__

<img src="https://github.com/rch79/MS2-TicTacToe/blob/main/assets/images/lighthouse_report_mobile.PNG">


 - __Desktop:__

<img src="https://github.com/rch79/MS2-TicTacToe/blob/main/assets/images/lighthouse_report_desktop.PNG">



## Deployment

- The site was developed using the Windows 10 version of Sublime Text, in conjunction with the Github Desktop client.
- Because of the simple layout of the pages, no wireframes were used in the design stage.
- The site was deployed to Github Pages using the following steps:
  - In the GitHub repository, navigate to the Settings tab. 
  - From the source section drop-down menu, select the Master Branch.
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 
- Link to the game on GitHub pages: https://rch79.github.io/MS2-TicTacToe/ 


## Credits 

### Content 

- The HTML and CSS layouts for the board game grid were sourced from Hammad Ahmed's [Tic-Tac-Toe game layout with CSS grid layout Codepen page](https://codepen.io/shammadahmed/pen/JOWEGW).
- This README file was created using the README template provided by the [Code Institute](https://codeinstitute.net/). The language used to describe the GitHub deployment process was copied verbatim from the template.
- The fonts [Bangers](https://fonts.google.com/specimen/Bangers) and [Montserrat](https://fonts.google.com/specimen/Montserrat) are available on the [Google Fonts](https://fonts.google.com/) website.

### Media

- The reponsive site mockups were created using the [Multi Device Website Mockup Generator](https://techsini.com/multi-mockup/index.php).


## Acknowledgements

- A huge thank you to my mentor Spence Barriball, who has provided me with invaluable guidance throughout this process.
- Thank you to the Code Institute team for the enjoyable lessons and excellent reference materials.
