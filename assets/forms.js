//Select Boxes
const selectedAll = document.querySelectorAll(".selected");

selectedAll.forEach((selected) => {
  
  const optionsContainer = selected.previousElementSibling;
  const searchBox = selected.nextElementSibling;
  const optionsList = optionsContainer.querySelectorAll(".option");

  selected.addEventListener("click", () => {

    if (optionsContainer.classList.contains("active")) {
      optionsContainer.classList.remove("active");
    } else {
      let currentActive = document.querySelector(".options-container.active");

      if (currentActive) {
        currentActive.classList.remove("active");
      }

      optionsContainer.classList.add("active");
    }

    searchBox.value = "";
    filterList("");

    if (optionsContainer.classList.contains("active")) {
      searchBox.focus();
    }

  });

  optionsList.forEach((o) => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });

  searchBox.addEventListener("keyup", function (e) {
    filterList(e.target.value);
  });

  const filterList = (searchTerm) => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach((option) => {
      let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
      if (label.indexOf(searchTerm) != -1) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    });
  };
});

//To Show Password
function showHide1(){
  
  var x = document.getElementById("password1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  };

};

function showHide2() {

  var y = document.getElementById("password2");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  };

};

function showHide3() {

  var z = document.getElementById("password3");
  if (z.type === "password") {
    z.type = "text";
  } else {
    z.type = "password";
  };

};

//Checkbox
function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName('check')
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
  })
}

//Edit Button

//One
$("#editor1").click(function(){
  $("#editor1").hide();
  $("#nameSettingFinished").hide();
  $("#editorButton1").show();
  $("input.name").show();
});

$("#editorButton1").click(function(){
  $("#editorButton1").hide();
  $("input.name").hide();
  $("#editor1").show();
  $("#nameSettingFinished").show();
});

//Two
$("#editor2").click(function(){
  $("#editor2").hide();
  $("#phoneSettingFinished").hide();
  $("#editorButton2").show();
  $("input.phone").show();
});

$("#editorButton2").click(function(){
  $("#editorButton2").hide();
  $("input.phone").hide();
  $("#editor2").show();
  $("#phoneSettingFinished").show();
});

//Three
$("#editor3").click(function(){
  $("#editor3").hide();
  $("#identitySettingFinished").hide();
  $("#editorButton3").show();
  $("input.identity").show();
});

$("#editorButton3").click(function(){
  $("#editorButton3").hide();
  $("input.identity").hide();
  $("#editor3").show();
  $("#identitySettingFinished").show();
});

//Four
$("#editor4").click(function(){
  $("#editor4").hide();
  $("#citySettingFinished").hide();
  $("#editorButton4").show();
  $(".select-area-1").show();
});

$("#editorButton4").click(function(){
  $("#editorButton4").hide();
  $(".select-area-1").hide();
  $("#editor4").show();
  $("#citySettingFinished").show();
});

//Five
$("#editor5").click(function(){
  $("#editor5").hide();
  $("#emailSettingFinished").hide();
  $("#editorButton5").show();
  $("input.email").show();
});

$("#editorButton5").click(function(){
  $("#editorButton5").hide();
  $("input.email").hide();
  $("#editor5").show();
  $("#emailSettingFinished").show();
});

//Six
$("#editor6").click(function(){
  $("#editor6").hide();
  $("#passwordSettingFinished").hide();
  $("#editorButton6").show();
  $(".all-passwords").show();
  $(".all-passwords input").show();
});

$("#editorButton6").click(function(){
  $("#editorButton6").hide();
  $(".all-passwords").hide();
  $(".all-passwords input").hide();
  $("#editor6").show();
  $("#passwordSettingFinished").show();
});

//Seven
$("#editor7").click(function(){
  $("#editor7").hide();
  $(".selected-softwares").hide();
  $(".select-area-2").show();
  $("#editorButton7").show();
});

$("#editorButton7").click(function(){
  $("#editorButton7").hide();
  $(".select-area-2").hide();
  $(".selected-softwares").show();
  $("#editor7").show();
});