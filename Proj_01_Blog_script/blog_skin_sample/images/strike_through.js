function toggleStrikethrough() {
      var sTags = document.getElementsByTagName("s");
      for (var i = 0; i < sTags.length; i++) {
        if (sTags[i].classList.contains("hidden")) {
          sTags[i].classList.remove("hidden");
          sTags[i].style.textDecoration = "line-through";
        } else {
          sTags[i].classList.add("hidden");
          sTags[i].style.textDecoration = "none";
        }
      }
    }