function myFunction() {
  var x = document.getElementById("myDropdown");
  if (x.className === "dropdown") {
      x.className = "responsiveDropdown";
  } else {
    x.className = "dropdown";
  }
    
  var y = document.getElementById("myDrop");
  if (y.className === "drop1") {
      y.className = "responsiveDrop1";
  } else {
    y.className = "drop1";
  }
    
    var z = document.getElementById("myContent");
    if (z.className === "dropdown-content") {
        z.className = "responsiveContent";
  } else {
    z.className = "dropdown-content";
  }
    
    var k = document.getElementById("link2");
    if (k.className === "link2") {
        k.className = "responsivelink2";
  } else {
    k.className = "link2";
  }
    
    var l = document.getElementById("link3");
    if (l.className === "link3") {
        l.className = "responsivelink3";
  } else {
    l.className = "link3";
  }
}