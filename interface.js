/* Buttons and check functions */
var nucleicAcidsMenu;
var pauseButton;
var rotationMenu;
var formulasButton;
var lightButton;
var sliderLightX;
var sliderLightY;
var sliderLightZ;
var animateAdeButton;
var animateThyButton;
var animateCytButton;
var animateGuaButton;
var animateUraButton;
var animateDNAButton;

/* Function options for the user interface */
var commands = { 
  Nucleic_Acid:function(value){
    if(value == 1)
      isDna = false;
    else{
      isDna = true;
    }
    //renderer.render(scene, camera);
  },

  Pause: function(){
    if (!pause){
      pause = true;
      pauseButton.name('Rotate');
    } else{
      pause = false;
      pauseButton.name('Pause');
    }
  },

  Rotations: function(value){
    if (value == 0){
      rotationX = false;
      rotationY = true;
      rotationZ = false;
      rotationXYZ = false;
    } else if (value == 1){
      rotationX = true;
      rotationY = false;
      rotationZ = false;
      rotationXYZ = false;
    } else if (value == 2){
      rotationX = false;
      rotationY = false;
      rotationZ = true;
      rotationXYZ = false;
    }else{
      rotationX = false;
      rotationY = false;
      rotationZ = false;
      rotationXYZ = true;
      //render();
    }
  },

  Remove_All_Lights: function(){
    if (allLights){
      allLights = false;
      lightButton.name('Lights On');
    } else{
      allLights = true;
      lightButton.name('Lights Off');
    }
  },

  Chemical_Formulas: function(){
    if (chemicalFormulas){
      chemicalFormulas = false;
      formulasButton.name('Show Formulas');
    } else{
      chemicalFormulas = true;
      formulasButton.name('Hide Formulas');
    }
  },

  Build_Adenine: function(){
    animateAde = false;
    if (animateAde){
        animateAde = false;
        animateMoleculesButton.name('Build Molecule');
    }else {
        adenineRandomPositions();
        animateAde = true;
    } 
  },

  Build_Thymine: function(){
    animateThy = false;
    if (animateThy){
        animateThy = false;
        animateMoleculesButton.name('Build Molecule');
    }else if (isDna) {
        thymineRandomPositions();
        animateThy = true;
    } 
  },

  Build_Cytosine: function(){
    animateCyt = false;
    if (animateCyt){
        animateCyt = false;
        animateMoleculesButton.name('Build Molecule');
    }else {
        cytosineRandomPositions();
        animateCyt = true;
    } 
  },

  Build_Guanine: function(){
    animateGua = false;
    if (animateGua){
        animateGua = false;
        animateMoleculesButton.name('Build Molecule');
    }else {
        guanineRandomPositions();
        animateGua = true;
    } 
  },

  Build_Uracil: function(){
    animateUra = false;
    if (animateUra){
        animateUra = false;;
        animateMoleculesButton.name('Build Molecule');
    }else {
        uracilRandomPositions();
        animateUra = true;
    } 
  },

  AnimateDNA: function(){
    if (animateDNA){
        animateDNA = false;
        animateDNA.name('Animate DNA');
    }else {
        animateDNA = true;
    } 
  }


};


/* Slider to change the position of one light (Adenine's Light) */
var controller = new function() {
    this.LightX = -78;
    this.LightY = 30;
    this.LightZ = -20;
}();


/* GUI Interface */
var gui = new dat.GUI({ autoplace: false, width: 280 } );
nucleicAcidsMenu = gui.add(commands, 'Nucleic_Acid', nucleicAcids_list).name('Nucleic Acid').onChange(commands.Nucleic_Acid);
pauseButton = gui.add(commands, 'Pause');
animateDNAButton = gui.add(commands, 'AnimateDNA').name('Animate DNA');

/* Folder with all the options for the molecules */
var moleculesFolder = gui.addFolder('Molecules');
rotationMenu = moleculesFolder.add(commands, 'Rotations', rotations_list).name('Rotation').onChange(commands.Rotations);
formulasButton = moleculesFolder.add(commands, 'Chemical_Formulas').name('Show Formulas');
lightButton = moleculesFolder.add(commands, 'Remove_All_Lights').name('Remove Lights');
animateAdeButton = moleculesFolder.add(commands, 'Build_Adenine').name('Build Adenine');
animateThyButton = moleculesFolder.add(commands, 'Build_Thymine').name('Build Thymine');
animateCytButton = moleculesFolder.add(commands, 'Build_Cytosine').name('Build Cytosine');
animateGuaButton = moleculesFolder.add(commands, 'Build_Guanine').name('Build Guanine');
animateUraButton = moleculesFolder.add(commands, 'Build_Uracil').name('Build Uracil');
moleculesFolder.open();

/* Folder contains the options for changing one light */
var lightFolder = gui.addFolder('Change One Light'); 
sliderLightX = lightFolder.add(controller, 'LightX', -180, 180).onChange( function(){
  if(allLights)
    lightAdenine.position.x = (controller.LightX);
});
sliderLightY = lightFolder.add(controller, 'LightY', -180, 180).onChange( function(){
  if(allLights)
    lightAdenine.position.y = (controller.LightY);
});
sliderLightZ = lightFolder.add(controller, 'LightZ', -180, 180).onChange( function(){
  if(allLights)
    lightAdenine.position.z = (controller.LightZ);
});
lightFolder.open();

