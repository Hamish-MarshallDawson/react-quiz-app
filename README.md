# Quiz App

## Project Description

This is a simple quiz application built with React.js. The application presents a series of questions to the user, allows them to select answers, and calculates the final score based on correct answers. The state of the quiz is managed using the React Context API.

## Features

- Multiple-choice questions
- Interactive quiz interface
- Score calculation
- Dynamic question navigation
- End screen with final score display

## Technologies Used

- React.js
- CSS

## Getting Started

### Prerequisites

Ensure you have the following software installed on your local development machine:

- Node.js (https://nodejs.org/)

### Installation

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/your-username/quiz-app-react.git
   ```

2. Navigate to the project directory:

   ```sh
   cd quiz-app-react
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:3000` to view the quiz.

## Project Structure

```
quiz-app-react/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Components/
│   │   ├── Quiz.js
│   │   └── ...
│   ├── Helpers/
│   │   ├── Contexts.js
│   │   ├── QuestionBank.js
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── ...
```

- `public/`: Contains the HTML file and other public assets.
- `src/`: Contains the React components, CSS, and JavaScript files.
  - `Components/`: Contains the individual component files (`Quiz.js`, etc.).
  - `Helpers/`: Contains helper files for the quiz (`Contexts.js`, `QuestionBank.js`).
  - `App.js`: Main React component that initializes the app.
  - `App.css`: Styles for the application.
  - `index.js`: Entry point for the React application.

## Quiz Logic

### Main Components

- `Quiz.js`: The main component that handles the quiz logic and state.
- `Contexts.js`: Contains the context used to manage global state.
- `QuestionBank.js`: Contains the array of questions for the quiz.

### State Management

- `currQuestion`: Index of the current question being displayed.
- `optionChosen`: Stores the chosen option for the current question.
- `score`: Keeps track of the user's score.
- `setGameState`: Function to update the state of the game (e.g., from quiz to end screen).

### Functions

- `correctAnswer()`: Checks if the chosen option is correct and updates the score.
- `nextQuestion()`: Advances to the next question.
- `finishQuiz()`: Ends the quiz and displays the final score.

## Styling

The CSS styles are defined in `App.css` to provide a simple and clean layout for the quiz application.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Contributions and improvements are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy taking the quiz! If you have any questions or feedback, feel free to open an issue in the repository.
