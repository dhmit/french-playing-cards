# French Playing Cards

Access the website at https://frenchplayingcards.mit.edu/.

From 1650 to 1850, the French spread enlightenment, gained and lost one empire and began another, and overthrew a centuries-old monarchy. They also played card games. This site explores the history of French playing cards in this period as an unusual and insightful source for the history of the Old Regime, the French Revolution, and early Nineteenth-Century France. You will find details about manufacturing procedures, the material aspects of the playing cards, and the changing iconography of French face cards. A bibliography provides suggestions for further reading. And for those of you interested in gaming, we will offer the opportunity to play a few of the most popular card games of the period, using the historical deck of cards of your choice!


## Developer Instructions

1. Follow instructions [here](https://urop.dhlab.mit.edu/intro/) (https://urop.dhlab.mit.edu/intro/) to install the necessary packages.
    - Visual Studio Code
    - Python 3.11
    - Node.js 18.14
    - npm 9.3.1

2. Follow the instructions [here](https://urop.dhlab.mit.edu/paris-installation-guide/) from our "This Was Paris in 1970", substituting the information for this repository, to install the project locally. 

3. In VSCode, run "Launch site" from **Run and Debug** on the left-side activity bar to start both the backend and the frontend. Run "Run frontend" or "Run backend" to run them individually.

4. To run from the command line:
    - For the backend, navigate to playing-cards/backend and run `python manage.py runserver`. 
    - For the frontend, run `npm start`. 


## Before running this branch on the server for the first time:

2. `pip install openai` and `pip install dotenv`
3. Generate OpenAI API key 
4. Create .env file and add `OPENAI_API_KEY={API key}`


## Solitaire Documentation

1. Background info: this branch contains the code for a historic Solitaire game. The rules of Solitaire are the same, the only difference is that this deck uses the historic cards from the decks in the database! The goal is to incorporate 3 decks: Portrait de Paris (pre-revolutionary), Dugourc (revolutionary), and J-L David (post-revolutionary).

2. Overview of components: there are 3 components for Solitaire, all found in frontend/compononents/pages. From highest level to lowest level, they are: Games.js, SolitaireGame.js, SolitaireCard.js. Games.js contains the code for the ‘Play Games!’ landing page, and it renders SolitaireGame.js. SolitaireGame.js contains the bulk of the Solitaire code, from rendering all the stacks of cards to controlling the logic/rules of the game. Each card in the game is rendered as an instance of the SoltiaireCard.js component. The only thing SolitaireCard.js does is render a singular card as an image (showing either the front or the back of the card). 

3. The Solitaire rules are modeled after that of the Google Solitaire game (you can just google ‘solitaire’ and it’s the first window that pops up). If needed, this article provides a good rundown of the Solitaire terminology and rules: https://www.usatoday.com/story/graphics/2022/12/18/how-to-play-solitaire-card-game-rules/10626190002/ 

4. Detailed documentation: more documentation on what the code does can be found as comments in the files of each component.

5. Next things to do, in order of priority (these are also logged in the 'Issues' tab of this repo): (1) There is a bug where the waste pile does not fully empty out when the stock pile is refreshed (see comments in SolitaireGame.js for more details); (2) The game implements a 2-click method to transfer cards, but the goal should be for the user to click and drag on cards. Besides providing a better user experience, clicking and dragging cards also allows multiple cards to be transferred at the same time, such as when the user is moving multiple cards from one tableau stack to another tableau stack; (3) Right now the solitaire game only uses the card images from the Paris deck for simplicity, but the other 2 deck images should also be incorporated. This should be relatively simple to implement since some of the static code, such as image pathways, just needs to be changed to dynamic; (4) An ‘undo’ button should be employed so the user can undo their most recent move; (5) the game should have a background, such as a wooden table.

Email alyssachoi026@gmail.com if there's confusion with any existing code