var tools = [
  {
    name: "Hypothes.is",
    type: "Writing/Editing",
    spice: "Easy"
  },
  {
    name: "Hemmingway",
    type: "Writing/Editing",
    spice: "Easy"
  },
  {
    name: "Padlet",
    type: "Project Planning, Writing/Editing",
    spice: "Easy"
  },
  {
    name: "Vyond",
    type: "Animation, Video",
    spice: "Medium"
  },
  {
    name: "H5P",
    type: "Video",
    spice: "Medium"
  },
  {
    name: "Screencast-o-matic",
    type: "Video",
    spice: "Easy"
  },
  {
    name: "Twine",
    type: "Storytelling",
    spice: "Hard"
  },
  {
    name: "Rise",
    type: "Writing/Editing",
    spice: "Medium"
  }
];
const diffLabels = document.querySelectorAll(
  "#diffHeader-easy, #diffHeader-medium, #diffHeader-hard"
);

function findTools() {
  var mediaTypeSel = document.getElementById("mediaType");
  var difficultySel = document.getElementById("difficultyLevel");

  for (let i = 0; i < tools.length; i++) {
    if (
      tools[i].type.includes(mediaTypeSel.value) &&
      difficultySel.value === tools[i].spice
    ) {
      document.getElementById(tools[i].name).style.display = "block";
    } else if (
      tools[i].type.includes(mediaTypeSel.value) &&
      difficultySel.value === "All"
    ) {
     document.getElementById(tools[i].name).style.display = "block";
      
    } else if (
      mediaTypeSel.value === "All" &&
      difficultySel.value === tools[i].spice
    ) {
      document.getElementById(tools[i].name).style.display = "block";
    } else if (mediaTypeSel.value === "All" && difficultySel.value === "All") {
      document.getElementById(tools[i].name).style.display = "block";
      diffLabels.forEach(function (id) {
        id.style.display = "block";
      });
    } else {
      document.getElementById(tools[i].name).style.display = "none";
      diffLabels.forEach(function (id) {
        id.style.display = "none";
      });
    }
  }
}
