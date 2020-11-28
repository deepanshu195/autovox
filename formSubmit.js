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
    {
      key: "inputCategory",
      value: "",
      apiKey: "Category",
    },
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
  callAirTable(objectToSend);
}
form.addEventListener("submit", handleForm);
function callAirTable(data) {
  fetch("https://api.airtable.com/v0/appIwdY3JfUChjVCR/Autovox", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer keyGBHPMqCwYEKnMe",
    },
    body: JSON.stringify({
      records: [
        {
          fiel: data,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
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
