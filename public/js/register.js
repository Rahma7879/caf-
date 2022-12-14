const createAccountBtn = document.getElementById("create-account-btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loggedinp = document.getElementById("loggedin");
createAccountBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    password: password.value,
  };

  const res = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: JSON.stringify(data),
  });
  const respond = await res.text();
  if (respond === "User registered successfully") {
    window.location.href = "/public/index.html";
  } else {
    console.log('failed')
    loggedinp.style.color = "red";
    loggedinp.innerText = "Failed To Register";
  }
});
