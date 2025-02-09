let noCount = 0;
const messages = [
    "Are you sure? 🥺",
    "Really sure?? 😭",
    "Think again... 😢",
    "You're breaking my heart 💔",
    "Last chance! 😖",
    "Okay fine, you win... 😞 (just kidding, say YES!)"
];

document.getElementById("yesBtn").addEventListener("click", () => {
    document.getElementById("message").innerText = "Yay! 🎉 See you on Valentine's! ❤️";
});

document.getElementById("noBtn").addEventListener("click", () => {
    if (noCount < messages.length) {
        document.getElementById("message").innerText = messages[noCount];
        noCount++;
    } else {
        document.getElementById("message").innerText = "No isn't an option anymore! 😆";
        document.getElementById("noBtn").style.display = "none";
    }
});
