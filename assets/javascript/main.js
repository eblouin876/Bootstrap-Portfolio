const hangman = new Card("Hangman", "A basic hangman game built from HTML, CSS, and JavaScript", "assets/images/Hangman.jpg", "https://eblouin876.github.io/Word-Guess-Game/")
const starWarsRPG = new Card("Star Wars RPG", "Basic Star Wars RPG built with HTML, CSS, JavaScript, and JQuery", "assets/images/star-wars.jpg", "https://eblouin876.github.io/unit-4-game/")
const Trivia = new Card("Trivia Game", "A basic trivia game with multiple categories of questions to choose from built off of an open source trivia API", "assets/images/trivia.jpeg", "https://eblouin876.github.io/TriviaGame/")
const GifTastic = new Card("Gif Tastic", "A simple page where you can go to generate random Gifs by subject, play and puase, and choose to download", "assets/images/gif.gif", "https://eblouin876.github.io/Gif-Tastic/")
let portfolio = [hangman, starWarsRPG, Trivia, GifTastic]

portfolio.forEach(function (each) {
    each.makeCard("portfolio-container")
})