document.getElementById("colorBtn").addEventListener("click", function() {
  const box = document.getElementById("box");
  const text = document.getElementById("message");

  // Start background and text color transition
  box.style.backgroundColor = "white";
  text.style.color = "green";

  // Listen for the end of the text color transition
  text.addEventListener("transitionend", function handler(event) {
    if (event.propertyName === "color") {
      // Add "!" exactly after the text turns green
      if (!text.innerText.endsWith("!")) {
        text.innerText += "!";
      }
      // Remove the listener so it only happens once
      text.removeEventListener("transitionend", handler);
    }
  });
});
