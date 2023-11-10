function countdown(seconds) {
    // Base case: countdown reaches zero
    if (seconds === 0) {
        console.log("Blast off!");
        return;
    }

    // Log the current countdown value
    console.log(`T-${seconds} seconds`);

    // Recursive call with a decremented value
    countdown(seconds - 1);
}

// Start the countdown from 5 seconds
countdown(5);
