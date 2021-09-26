#Tik Tak Toe

Welcome to Tik Tak Toe, the first WDB Bootcamp Dev project!

##Our Plan:
### Using create-react-app, start using
'''
cd tiktaktoe
yarn start
'''
Code Structure:
  - 2 components: Square -> Board (Board renders Squares)
      - Square:
          - Props: index (position on Board), value (whether it is X,O, or empty)
      - Board: 
          - Board: boardSquares[] (list of Squares)  
      - Each position in Tik Tak Toe is a Square, and Board contains 9 Squares.
  - Using window.localStorage for persistence across reloads/replaying game
  - Components rendered within 'Game' page
  - Final page 'Winner' displaying ties, score, and who won/if there is a tie



###bonus points if you can find the wholesome easter egg :)
