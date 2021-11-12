function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
  }
  function validate() {
    let result = $("#result");
    let email = $("#email").val();
    email.text("");
    if(validateEmail(email)) {
      email.text(email + " is valid");
    } else {
      email.text(email + " is not valid");
    }
    return false;
  }
