const confirmPW = document.getElementById("confirmPassword");
const pw = document.getElementById("passWord");
const createAcctBtn = document.getElementById("createAcctBtn");
const notMatchMsg = document.getElementById("notMatchMsg");

confirmPW.oninput = function() {
  console.log("fired");
  if(pw.value !== confirmPW.value) {
    notMatchMsg.style.display = "block";
    pw.classList.add("error");;
    confirmPW.classList.add("error");
    createAcctBtn.disabled = true;
    createAcctBtn.style.cursor = "not-allowed";
  } 
  else {
    notMatchMsg.style.display = "none";
    pw.classList.remove("error");
    confirmPW.classList.remove("error");
    createAcctBtn.disabled = false;
    createAcctBtn.style.cursor = "pointer";
  }
}

pw.oninput = function() {
  console.log("fired")
  if(pw.value !== confirmPW.value) {
    notMatchMsg.style.display = "block";
    pw.classList.add("error");
    confirmPW.classList.add("error");
    createAcctBtn.disabled = true;
    createAcctBtn.style.cursor = "not-allowed";
  } 
  else {
    notMatchMsg.style.display = "none";
    pw.classList.remove("error");
    confirmPW.classList.remove("error");
    createAcctBtn.disabled = false;
    createAcctBtn.style.cursor = "pointer";
  }
}
