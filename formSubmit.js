function formSubmit(e) {
  e.preventDefault();
}
var form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
  let object = [
    {
      key: "inputName",
      value: "",
      apiKey: "Name",
    },
    {
      key: "inputEmail",
      value: "",
      apiKey: "Email",
    },
    {
      key: "inputOrganization",
      value: "",
      apiKey: "Organization",
    },
    {
      key: "inputYourRole",
      value: "",
      apiKey: "Role",
    },
    {
      key: "inputUseCase",
      value: "",
      apiKey: "IntendedUseCase",
    },
    // {
    //   key: "inputCategory",
    //   value: "",
    //   apiKey: "Category",
    // },
    {
      key: "inputCountry",
      value: "",
      apiKey: "Region",
    },
    {
      key: "inputPhone",
      value: "",
      apiKey: "Phone",
    },
  ];
  let objectToSend = {};
  object.forEach((val) => {
    objectToSend[val.apiKey] = document.getElementById(val.key).value;
  });
  console.log(objectToSend);
  callAirTable(objectToSend);
}
form.addEventListener("submit", handleForm);
function callAirTable(data) {
  fetch("https://api.airtable.com/v0/appcbOK2knQaFkxWJ/Table%201", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer key4SkDrRcyMtDwbG",
    },
    body: JSON.stringify({
      records: [
        {
          fields: data,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("failed-register").style.display = "none";
      document.getElementById("success-register").style.display = "none";

      if (data && data.error) {
        document.getElementById("failed-register").style.display = "inline";
        return;
      }
      document.getElementById("success-register").style.display = "inline";
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("failed-register").style.display = "inline";
    });
}
