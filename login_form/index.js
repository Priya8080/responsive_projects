window.onload = function () {
  document.querySelector("button").addEventListener("click", userlogin);

  function userlogin() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("inpassword").value.trim();

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValid) {
      document.getElementById("result").innerText = "Invalid Email!";
    } else if (password.length < 6) {
      document.getElementById("result").innerText = "Password must be at least 6 characters";
    } else {
      document.getElementById("result").innerText = "Login Successful!";
    }
  }
};
