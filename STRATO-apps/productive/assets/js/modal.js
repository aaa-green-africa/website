function openModal(evt, modalName) {
  // Declare all variables
  var i, modal, buttonpink; span

  // Get all elements with class="tabcontent" and hide them
  modal = document.getElementsByClassName("modal");
  for (i = 0; i < modal.length; i++) {
    modal[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  buttonpink = document.getElementsByClassName("buttonpink");
  for (i = 0; i < buttonpink.length; i++) {
    buttonpink[i].className = buttonpink[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(modalName).style.display = "block";
  evt.currentTarget.className += " active";

  // Get all elements with class="close" and remove the class "active"
  span = document.getElementsByClassName("close").style.display = "none";
}

