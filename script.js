var tools = [
  {
    name: "Hypothes.is",
    type: "Writing/Editing",
    spice: "Easy"
  },
  {
    name: "Hemingway",
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
    name: "Camtasia",
    type: "Video",
    spice: "Medium"
  },
  {
    name: "AdobePhotoshop",
    type: "Photo Editing",
    spice: "Hard"
  },
  {
    name: "AdobePremierePro",
    type: "Video",
    spice: "Hard"
  },
  {
    name: "Rise",
    type: "Storytelling, Writing/Editing",
    spice: "Easy"
  },
  {
    name: "AdobeIllustrator",
    type: "Photo Editing",
    spice: "Hard"
  },
  {
    name: "Zoom",
    type: "Video",
    spice: "Easy"
  },
  {
    name: "GoogleSuite",
    type: "Project Planning, Writing/Editing, Storytelling",
    spice: "Easy"
  }/*copy the following as needed to add new tools and paste it here:
  ,
  {
  name: "ToolName",
  type: "Tool Type",
  spice: "complexity"
}*/
];

const diffLabels = document.querySelectorAll(
  "#diffHeader-easy, #diffHeader-medium, #diffHeader-hard"
);
function loadPage() {
  var mediaTypeSel = document.getElementById("mediaType").value;
  var difficultySel = document.getElementById("diffLevel").value;
  sessionStorage.setItem("mediaTypeSel", mediaTypeSel);
  sessionStorage.setItem("difficultySel", difficultySel);
  location.href="results.html";
}

function findTools() {
var mediaTypeSel = sessionStorage.getItem("mediaTypeSel"), difficultySel = sessionStorage.getItem("difficultySel");

console.log(mediaTypeSel);
console.log(difficultySel);
for (let i = 0; i < tools.length; i++) {
    if (
      tools[i].type.includes(mediaTypeSel) &&
      difficultySel === tools[i].spice
    ) {
      document.getElementById(tools[i].name).style.display = "block";
    } else if (
      tools[i].type.includes(mediaTypeSel) &&
      difficultySel === "All"
    ) {
     document.getElementById(tools[i].name).style.display = "block";

    } else if (
      mediaTypeSel === "All" &&
      difficultySel === tools[i].spice
    ) {
      document.getElementById(tools[i].name).style.display = "block";
    } else if (mediaTypeSel === "All" && difficultySel === "All") {
      document.getElementById(tools[i].name).style.display = "block";
    }
  }

}
function prevPage() {
  history.back();
}
function showInfo() {
  sessionStorage.setItem("buttonPressed", event.target.id);
  location.href="info.html";
}
function loadInfo() {
  var buttonPressed = sessionStorage.getItem("buttonPressed");
  document.getElementById(buttonPressed).style.display="block";
}
