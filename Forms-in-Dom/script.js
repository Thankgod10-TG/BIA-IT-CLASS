const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Functions to validate the form inputs

function validateForm() {
  let isValid = true;
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Regular expression for basic email validation

  if (name === "") {
    alert("Name must be filled out");
    isValid = false;
  }

  if (email === "") {
    alert("email must be filled out");
    isValid = false;
  }

  if (password === "") {
    alert("password must be filled out");
    isValid = false;
  }

  return isValid;
}

// Attach the validationForm function to the form's submit event.preventing default

form.addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault(); //prevent form submission if validation fails
  } else {
    // Store form data in an object in localSrorage
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
    localStorage.setitem("formData", JSON.stringify(formData));
    alert("Form submitted successfully!");
    // Optionally, you can clear the form after subm
    form.reset();
  }
});

function displayStoredDate() {
  const storedData = JSON.parse(localStorage.getItem("formData")) || [];
  storageData.innerHTML = "";

  if (storageData.length === 0) {
    storageData.innerHTML = "<p> No data stored. </p>";
    return;
  }

  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = " <th>Name</th> <th>Email</th> <th>Password</th>";
  table.appendChild(headerRow);

  storedData.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td> ${data.name}</td><td> ${data.email}</td><td> ${data.password}</td>`;
    table.appendChild(row);
  });

  storedData.appendChild(table);
}
