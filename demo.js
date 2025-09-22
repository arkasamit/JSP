let yourScore = 89  // Example score for you
let friendScore = 80;  // Example score for your friend

if (yourScore > 80) {
    // Inside your friend's score (This part is unclear, you may want to handle it specifically)
    console.log("Inside your friend's score.");
} else if (friendScore > 80) {
    console.log("Go for lunch with your friend.");
} else if (friendScore >= 60) {
    console.log("Good luck next time.");
} else if (friendScore >= 40) {
    // Keep your friend's message unseen (doing nothing here as per your instructions)
    // If you want to log or perform some other action, you can do it here
} else {
    console.log("Block your friend.");
}

if (yourScore < 80) {
    console.log("Go home, sleep, and act sad.");
}