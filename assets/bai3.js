function grade(score) {
  if (score >= 0 && score <= 100) {
    if (score > 90) {
      document.getElementById("result").innerHTML = "Exelence";
      document.getElementById("result").style.color = "Red";
    } else if (score > 80) {
      document.getElementById("result").innerHTML = "Very Good";
      document.getElementById("result").style.color = "Red";
    } else if (score > 60) {
      document.getElementById("result").innerHTML = "Fair";
      document.getElementById("result").style.color = "Green";
    } else if (score >= 50) {
      document.getElementById("result").innerHTML = "Medium";
      document.getElementById("result").style.color = "Green";
    } else {
      document.getElementById("result").innerHTML = "Fail";
      document.getElementById("result").style.color = "Blue";
    }
  } else {
    alert("Score must be between 0 and 100");
  }
}
