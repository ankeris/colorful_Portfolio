function buildRgbaCSSProperty(color, alpha) {
  return  'rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', '+ alpha + ')';
}

function BackgroundColorChange(){
          // the main opacity level
        var a = 1;
        // some colors chosen for DOM elements backgrounds
        var blue = [51, 102, 153];
        var grey = [66, 82, 102];
        var darkgreen = [25, 102, 102];
        var lightgreen = [62, 116, 89];
        var brown = [96, 86, 57];

        var colorSelection = [blue, grey, darkgreen, lightgreen, brown];

        // pick the random color for background as the event is clicked
        var color = colorSelection[Math.floor(Math.random() * colorSelection.length)];

        // the elements i want to have 'opacity = 1' are selected here
        var subsection = document.querySelectorAll(".childElement-column-photo, .childElement-sub-section, .sub-section, .modal-header, .modal-footer");

                for (var i = 0; i < subsection.length; i++) {
                      subsection[i].style.backgroundColor = buildRgbaCSSProperty(color, a);
                }

        a = 0.8; //? ? ? ? ? 

        // I want this body element to have the same color but with 0.5 opacity
        document.body.style.backgroundColor = buildRgbaCSSProperty(color, a);
}
