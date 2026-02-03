const form = document.getElementById("registerForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  try {
    if (number.length === 10) {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, number }),
      });

      const data = await response.json();

      if (response.ok) {
        messageDiv.textContent = "✅ Welcome to our team!";
        setTimeout(() => {
          window.location.href = "home.html";
        }, 1500);
      } else {
        messageDiv.textContent = "❌ Error: " + data.message;
      }
    } else {
      messageDiv.textContent = "❌ Please enter a valid 10-digit number.";
    }
  } catch (error) {
    messageDiv.textContent = "❌ Server error!";
  }
});
