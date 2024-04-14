// Script for collapsible content blocks
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Script for collapsible sets
var collSet = document.getElementsByClassName("collapsible-set");

for (var j = 0; j < collSet.length; j++) {
  collSet[j].addEventListener("click", function() {
    this.classList.toggle("active");
    var contentSet = this.nextElementSibling;
    if (contentSet.style.display === "block") {
      contentSet.style.display = "none";
    } else {
      contentSet.style.display = "block";
    }
  });
}
