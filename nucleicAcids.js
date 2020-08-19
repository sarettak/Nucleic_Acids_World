/* List of the nucleic acids */
var acids = ['DNA', 'RNA']; 

/* There is assigned a value (0 or 1) for the menu */
var nucleicAcids_list = {};
for(var i = 0; i < acids.length; i++){
  nucleicAcids_list[acids[i]] = i;
}

/* List of all rotations that can be performed */
var typeRotations = ['Around Y', 'Around X', 'Around Z', 'Around X,Y,Z']; 

/* There is assigned a value (from 0 to 3) for the menu */
var rotations_list = {};
for(var i = 0; i < typeRotations.length; i++){
  rotations_list[typeRotations[i]] = i;
}

var divUracil = document.getElementById("uracilText");
var divThymine = document.getElementById("thymineText");

var formulaUracil = document.getElementById("uracilFormula");
var formulaThymine = document.getElementById("thymineFormula");
var formulaAdenine = document.getElementById("adenineFormula");
var formulaGuanine = document.getElementById("guanineFormula");
var formulaCytosine = document.getElementById("cytosineFormula");


/* Options */
var isDna = true;
var pause = false;
var allLights = true;
var chemicalFormulas = false;
var rotationX = false;
var rotationY = true;
var rotationZ = false;
var rotationXYZ = false;
var animateCyt = true;
var animateAde = true;
var animateGua = true;
var animateThy = true;
var animateUra = true;
var animateDNA = false;
var animateDNA2 = false;


function resizeWindow() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
  }


/* Scene */
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000);

/* Camera */
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 ); 
camera.position.z = 60;
scene.add(camera);

/* Renderer */
var renderer = new THREE.WebGLRenderer();
//renderer.setClearColor(0xFFFFFF);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
window.addEventListener( 'resize', resizeWindow, false );

/* Useful to update the controllers of the sliders in the GUI */
orbitControl = new THREE.OrbitControls(camera, renderer.domElement);


/* Colours for the elements */
var blue = 0x3A5BBB;    // Hydrogen
var white = 0xFFFFFF;   // Nitrogen
var red = 0xDC0101;     // Oxygen
var brown = 0x9A5800;   // Carbon
var gray = 0x757575;    // Connection

/* Geometry for the molecules */
var ball = new THREE.SphereGeometry(2, 32, 32);
var rect = new THREE.CylinderGeometry(0.6, 0.6, 3, 32);

/* Materials for the molecules */
var grayMat = new THREE.MeshPhongMaterial( { color: gray } );
var blueMat = new THREE.MeshPhongMaterial( { color: blue } );
var whiteMat = new THREE.MeshPhongMaterial( { color: white } );
var redMat = new THREE.MeshPhongMaterial( { color: red } );
var brownMat = new THREE.MeshPhongMaterial( { color: brown } );


/* Nitrogenous bases colours */
// DNA and RNA
var guanine = 0xB94ABA;  // purple
var cytosine = 0x44DAD4; // aqua
var adenine = 0xD53858;  // fucsia

// DNA
var thymine = 0x7AE46D;  // light green

// RNA
var uracil = 0x0068DD;  // light blue

/* Lateral structure */
var sides = 0xC0C0C0;  // grey color for the balls


/* Materials for the nitrogenous bases */
var adenineMaterial = new THREE.MeshPhongMaterial( { color: adenine } );
var thymineMaterial = new THREE.MeshPhongMaterial( { color: thymine } );
var guanineMaterial = new THREE.MeshPhongMaterial( { color: guanine } );
var cytosineMaterial = new THREE.MeshPhongMaterial( { color: cytosine } );
var uracilMaterial = new THREE.MeshPhongMaterial( { color: uracil } );
var sidesMaterial = new THREE.MeshPhongMaterial( { color: sides } );

/* Geometry of DNA and RNA */
var tubeGeometry = new THREE.CylinderGeometry(0.3, 0.3, 6, 32);
var ballGeometry = new THREE.SphereGeometry(0.8, 32, 32);


/* Objects */
var dna = new THREE.Object3D();
var rna = new THREE.Object3D();
var rowDNA1 = new THREE.Object3D();
var rowDNA2 = new THREE.Object3D();
var rowDNA3 = new THREE.Object3D();
var rowDNA4 = new THREE.Object3D();
var rowDNA5 = new THREE.Object3D();
var rowDNA6 = new THREE.Object3D();
var rowDNA7 = new THREE.Object3D();
var rowDNA8 = new THREE.Object3D();
var rowDNA9 = new THREE.Object3D();
var rowDNA10 = new THREE.Object3D();
var rowDNA11 = new THREE.Object3D();
var rowDNA12 = new THREE.Object3D();
var rowDNA13 = new THREE.Object3D();
var rowDNA14 = new THREE.Object3D();
var rowDNA15 = new THREE.Object3D();
var rowDNA16 = new THREE.Object3D();
var rowDNA17 = new THREE.Object3D();
var rowDNA18 = new THREE.Object3D();
var rowDNA19 = new THREE.Object3D();
var rowDNA20 = new THREE.Object3D();
var rowDNA21 = new THREE.Object3D();
var rowDNA22 = new THREE.Object3D();
var rowDNA23 = new THREE.Object3D();
var rowDNA24 = new THREE.Object3D();
var rowDNA25 = new THREE.Object3D();
var rowDNA26 = new THREE.Object3D();
var rowDNA27 = new THREE.Object3D();
var rowDNA28 = new THREE.Object3D();
var rowDNA29 = new THREE.Object3D();
var rowDNA30 = new THREE.Object3D();
var rowDNA31 = new THREE.Object3D();
var rowDNA32 = new THREE.Object3D();
var rowDNA33 = new THREE.Object3D();
var rowDNA34 = new THREE.Object3D();
var rowDNA35 = new THREE.Object3D();
var rowDNA36 = new THREE.Object3D();
var rowDNA37 = new THREE.Object3D();
var rowDNA38 = new THREE.Object3D();
var rowDNA39 = new THREE.Object3D();
var rowDNA40 = new THREE.Object3D();


var adenineMolecule = new THREE.Object3D();;
var thymineMolecule = new THREE.Object3D();
var guanineMolecule = new THREE.Object3D();
var cytosineMolecule = new THREE.Object3D();
var uracilMolecule = new THREE.Object3D();


/* Building DNA */
var adenineTubeDNA1 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA1.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA1.position.x = -3;

var thymineTubeDNA1 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA1.rotation.z = 90 * Math.PI/180;
thymineTubeDNA1.position.x = 3;


var guanineTubeDNA2 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA2.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA2.position.x = -3;

var cytosineTubeDNA2 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA2.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA2.position.x = 3;


var thymineTubeDNA3 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA3.rotation.z = 90 * Math.PI/180;
thymineTubeDNA3.position.x = -3;

var adenineTubeDNA3 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA3.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA3.position.x = 3;


var cytosineTubeDNA4 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA4.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA4.position.x = -3;

var guanineTubeDNA4 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA4.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA4.position.x = 3;


var adenineTubeDNA5 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA5.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA5.position.x = -3;

var thymineTubeDNA5 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA5.rotation.z = 90 * Math.PI/180;
thymineTubeDNA5.position.x = 3;


var guanineTubeDNA6 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA6.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA6.position.x = -3;

var cytosineTubeDNA6 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA6.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA6.position.x = 3;


var thymineTubeDNA7 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA7.rotation.z = 90 * Math.PI/180;
thymineTubeDNA7.position.x = -3;

var adenineTubeDNA7 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA7.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA7.position.x = 3;


var cytosineTubeDNA8 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA8.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA8.position.x = -3;

var guanineTubeDNA8 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA8.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA8.position.x = 3;


var adenineTubeDNA9 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA9.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA9.position.x = -3;

var thymineTubeDNA9 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA9.rotation.z = 90 * Math.PI/180;
thymineTubeDNA9.position.x = 3;


var guanineTubeDNA10 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA10.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA10.position.x = -3;

var cytosineTubeDNA10 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA10.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA10.position.x = 3;


var thymineTubeDNA11 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA11.rotation.z = 90 * Math.PI/180;
thymineTubeDNA11.position.x = -3;

var adenineTubeDNA11 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA11.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA11.position.x = 3;


var cytosineTubeDNA12 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA12.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA12.position.x = -3;

var guanineTubeDNA12 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA12.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA12.position.x = 3;


var adenineTubeDNA13 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA13.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA13.position.x = -3;

var thymineTubeDNA13 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA13.rotation.z = 90 * Math.PI/180;
thymineTubeDNA13.position.x = 3;


var guanineTubeDNA14 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA14.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA14.position.x = -3;

var cytosineTubeDNA14 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA14.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA14.position.x = 3;


var thymineTubeDNA15 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA15.rotation.z = 90 * Math.PI/180;
thymineTubeDNA15.position.x = -3;

var adenineTubeDNA15 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA15.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA15.position.x = 3;


var cytosineTubeDNA16 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA16.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA16.position.x = -3;

var guanineTubeDNA16 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA16.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA16.position.x = 3;


var adenineTubeDNA17 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA17.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA17.position.x = -3;

var thymineTubeDNA17 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA17.rotation.z = 90 * Math.PI/180;
thymineTubeDNA17.position.x = 3;


var guanineTubeDNA18 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA18.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA18.position.x = -3;

var cytosineTubeDNA18 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA18.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA18.position.x = 3;


var thymineTubeDNA19 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA19.rotation.z = 90 * Math.PI/180;
thymineTubeDNA19.position.x = -3;

var adenineTubeDNA19 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA19.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA19.position.x = 3;


var cytosineTubeDNA20 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA20.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA20.position.x = -3;

var guanineTubeDNA20 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA20.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA20.position.x = 3;


var adenineTubeDNA21 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA21.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA21.position.x = -3;

var thymineTubeDNA21 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA21.rotation.z = 90 * Math.PI/180;
thymineTubeDNA21.position.x = 3;


var guanineTubeDNA22 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA22.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA22.position.x = -3;

var cytosineTubeDNA22 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA22.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA22.position.x = 3;


var thymineTubeDNA23 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA23.rotation.z = 90 * Math.PI/180;
thymineTubeDNA23.position.x = -3;

var adenineTubeDNA23 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA23.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA23.position.x = 3;


var cytosineTubeDNA24 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA24.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA24.position.x = -3;

var guanineTubeDNA24 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA24.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA24.position.x = 3;


var adenineTubeDNA25 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA25.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA25.position.x = -3;

var thymineTubeDNA25 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA25.rotation.z = 90 * Math.PI/180;
thymineTubeDNA25.position.x = 3;


var guanineTubeDNA26 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA26.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA26.position.x = -3;

var cytosineTubeDNA26 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA26.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA26.position.x = 3;


var thymineTubeDNA27 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA27.rotation.z = 90 * Math.PI/180;
thymineTubeDNA27.position.x = -3;

var adenineTubeDNA27 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA27.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA27.position.x = 3;


var cytosineTubeDNA28 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA28.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA28.position.x = -3;

var guanineTubeDNA28 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA28.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA28.position.x = 3;


var adenineTubeDNA29 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA29.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA29.position.x = -3;

var thymineTubeDNA29 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA29.rotation.z = 90 * Math.PI/180;
thymineTubeDNA29.position.x = 3;


var guanineTubeDNA30 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA30.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA30.position.x = -3;

var cytosineTubeDNA30 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA30.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA30.position.x = 3;


var thymineTubeDNA31 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA31.rotation.z = 90 * Math.PI/180;
thymineTubeDNA31.position.x = -3;

var adenineTubeDNA31 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA31.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA31.position.x = 3;


var cytosineTubeDNA32 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA32.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA32.position.x = -3;

var guanineTubeDNA32= new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA32.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA32.position.x = 3;


var adenineTubeDNA33 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA33.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA33.position.x = -3;

var thymineTubeDNA33 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA33.rotation.z = 90 * Math.PI/180;
thymineTubeDNA33.position.x = 3;


var guanineTubeDNA34 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA34.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA34.position.x = -3;

var cytosineTubeDNA34 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA34.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA34.position.x = 3;


var thymineTubeDNA35 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA35.rotation.z = 90 * Math.PI/180;
thymineTubeDNA35.position.x = -3;

var adenineTubeDNA35 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA35.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA35.position.x = 3;


var cytosineTubeDNA36 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA36.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA36.position.x = -3;

var guanineTubeDNA36 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA36.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA36.position.x = 3;


var adenineTubeDNA37 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA37.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA37.position.x = -3;

var thymineTubeDNA37 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA37.rotation.z = 90 * Math.PI/180;
thymineTubeDNA37.position.x = 3;


var guanineTubeDNA38 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA38.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA38.position.x = -3;

var cytosineTubeDNA38 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA38.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA38.position.x = 3;


var thymineTubeDNA39 = new THREE.Mesh(tubeGeometry, thymineMaterial );
thymineTubeDNA39.rotation.z = 90 * Math.PI/180;
thymineTubeDNA39.position.x = -3;

var adenineTubeDNA39 = new THREE.Mesh(tubeGeometry, adenineMaterial);
adenineTubeDNA39.rotation.z = 90 * Math.PI/180; 
adenineTubeDNA39.position.x = 3;


var cytosineTubeDNA40 = new THREE.Mesh(tubeGeometry, cytosineMaterial);
cytosineTubeDNA40.rotation.z = 90 * Math.PI/180; 
cytosineTubeDNA40.position.x = -3;

var guanineTubeDNA40 = new THREE.Mesh(tubeGeometry, guanineMaterial);
guanineTubeDNA40.rotation.z = 90 * Math.PI/180; 
guanineTubeDNA40.position.x = 3;


var rightSideDNA1 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA1.position.x = 6;
var leftSideDNA1 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA1.position.x = -6;

var rightSideDNA2 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA2.position.x = 6;
var leftSideDNA2 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA2.position.x = -6;

var rightSideDNA3 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA3.position.x = 6;
var leftSideDNA3 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA3.position.x = -6;

var rightSideDNA4 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA4.position.x = 6;
var leftSideDNA4 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA4.position.x = -6;

var rightSideDNA5 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA5.position.x = 6;
var leftSideDNA5 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA5.position.x = -6;

var rightSideDNA6 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA6.position.x = 6;
var leftSideDNA6= new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA6.position.x = -6;

var rightSideDNA7 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA7.position.x = 6;
var leftSideDNA7 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA7.position.x = -6;

var rightSideDNA8 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA8.position.x = 6;
var leftSideDNA8 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA8.position.x = -6;

var rightSideDNA9 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA9.position.x = 6;
var leftSideDNA9 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA9.position.x = -6;

var rightSideDNA10 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA10.position.x = 6;
var leftSideDNA10 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA10.position.x = -6;

var rightSideDNA11 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA11.position.x = 6;
var leftSideDNA11 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA11.position.x = -6;

var rightSideDNA12 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA12.position.x = 6;
var leftSideDNA12 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA12.position.x = -6;

var rightSideDNA13 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA13.position.x = 6;
var leftSideDNA13 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA13.position.x = -6;

var rightSideDNA14 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA14.position.x = 6;
var leftSideDNA14 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA14.position.x = -6;

var rightSideDNA15 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA15.position.x = 6;
var leftSideDNA15 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA15.position.x = -6;

var rightSideDNA16 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA16.position.x = 6;
var leftSideDNA16 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA16.position.x = -6;

var rightSideDNA17 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA17.position.x = 6;
var leftSideDNA17 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA17.position.x = -6;

var rightSideDNA18 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA18.position.x = 6;
var leftSideDNA18 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA18.position.x = -6;

var rightSideDNA19 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA19.position.x = 6;
var leftSideDNA19 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA19.position.x = -6;

var rightSideDNA20 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA20.position.x = 6;
var leftSideDNA20 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA20.position.x = -6;

var rightSideDNA21 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA21.position.x = 6;
var leftSideDNA21 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA21.position.x = -6;

var rightSideDNA22 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA22.position.x = 6;
var leftSideDNA22 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA22.position.x = -6;

var rightSideDNA23 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA23.position.x = 6;
var leftSideDNA23 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA23.position.x = -6;

var rightSideDNA24 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA24.position.x = 6;
var leftSideDNA24 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA24.position.x = -6;

var rightSideDNA25 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA25.position.x = 6;
var leftSideDNA25 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA25.position.x = -6;

var rightSideDNA26 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA26.position.x = 6;
var leftSideDNA26= new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA26.position.x = -6;

var rightSideDNA27 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA27.position.x = 6;
var leftSideDNA27 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA27.position.x = -6;

var rightSideDNA28 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA28.position.x = 6;
var leftSideDNA28 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA28.position.x = -6;

var rightSideDNA29 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA29.position.x = 6;
var leftSideDNA29 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA29.position.x = -6;

var rightSideDNA30 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA30.position.x = 6;
var leftSideDNA30 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA30.position.x = -6;

var rightSideDNA31 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA31.position.x = 6;
var leftSideDNA31 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA31.position.x = -6;

var rightSideDNA32 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA32.position.x = 6;
var leftSideDNA32 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA32.position.x = -6;

var rightSideDNA33 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA33.position.x = 6;
var leftSideDNA33 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA33.position.x = -6;

var rightSideDNA34 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA34.position.x = 6;
var leftSideDNA34 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA34.position.x = -6;

var rightSideDNA35 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA35.position.x = 6;
var leftSideDNA35 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA35.position.x = -6;

var rightSideDNA36 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA36.position.x = 6;
var leftSideDNA36 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA36.position.x = -6;

var rightSideDNA37 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA37.position.x = 6;
var leftSideDNA37 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA37.position.x = -6;

var rightSideDNA38 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA38.position.x = 6;
var leftSideDNA38 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA38.position.x = -6;

var rightSideDNA39 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA39.position.x = 6;
var leftSideDNA39 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA39.position.x = -6;

var rightSideDNA40 = new THREE.Mesh( ballGeometry, sidesMaterial );
rightSideDNA40.position.x = 6;
var leftSideDNA40 = new THREE.Mesh( ballGeometry, sidesMaterial );
leftSideDNA40.position.x = -6;


var i = 0;
rowDNA1.add(adenineTubeDNA1); rowDNA1.add(thymineTubeDNA1);
rowDNA1.add(leftSideDNA1); rowDNA1.add(rightSideDNA1);
rowDNA1.position.y = i*1.5;
rowDNA1.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA2.add(guanineTubeDNA2); rowDNA2.add(cytosineTubeDNA2);
rowDNA2.add(leftSideDNA2); rowDNA2.add(rightSideDNA2);
rowDNA2.position.y = i*1.5;
rowDNA2.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA3.add(thymineTubeDNA3); rowDNA3.add(adenineTubeDNA3);
rowDNA3.add(leftSideDNA3); rowDNA3.add(rightSideDNA3);
rowDNA3.position.y = i*1.5;
rowDNA3.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA4.add(cytosineTubeDNA4); rowDNA4.add(guanineTubeDNA4);
rowDNA4.add(leftSideDNA4); rowDNA4.add(rightSideDNA4);
rowDNA4.position.y = i*1.5;
rowDNA4.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA5.add(adenineTubeDNA5); rowDNA5.add(thymineTubeDNA5);
rowDNA5.add(leftSideDNA5); rowDNA5.add(rightSideDNA5);
rowDNA5.position.y = i*1.5;
rowDNA5.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA6.add(guanineTubeDNA6); rowDNA6.add(cytosineTubeDNA6);
rowDNA6.add(leftSideDNA6); rowDNA6.add(rightSideDNA6);
rowDNA6.position.y = i*1.5;
rowDNA6.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA7.add(thymineTubeDNA7); rowDNA7.add(adenineTubeDNA7);
rowDNA7.add(leftSideDNA7); rowDNA7.add(rightSideDNA7);
rowDNA7.position.y = i*1.5;
rowDNA7.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA8.add(cytosineTubeDNA8); rowDNA8.add(guanineTubeDNA8);
rowDNA8.add(leftSideDNA8); rowDNA8.add(rightSideDNA8);
rowDNA8.position.y = i*1.5;
rowDNA8.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA9.add(adenineTubeDNA9); rowDNA9.add(thymineTubeDNA9);
rowDNA9.add(leftSideDNA9); rowDNA9.add(rightSideDNA9);
rowDNA9.position.y = i*1.5;
rowDNA9.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA10.add(guanineTubeDNA10); rowDNA10.add(cytosineTubeDNA10);
rowDNA10.add(leftSideDNA10); rowDNA10.add(rightSideDNA10);
rowDNA10.position.y = i*1.5;
rowDNA10.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA11.add(thymineTubeDNA11); rowDNA11.add(adenineTubeDNA11);
rowDNA11.add(leftSideDNA11); rowDNA11.add(rightSideDNA11);
rowDNA11.position.y = i*1.5;
rowDNA11.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA12.add(cytosineTubeDNA12); rowDNA12.add(guanineTubeDNA12);
rowDNA12.add(leftSideDNA12); rowDNA12.add(rightSideDNA12);
rowDNA12.position.y = i*1.5;
rowDNA12.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA13.add(adenineTubeDNA13); rowDNA13.add(thymineTubeDNA13);
rowDNA13.add(leftSideDNA13); rowDNA13.add(rightSideDNA13);
rowDNA13.position.y = i*1.5;
rowDNA13.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA14.add(guanineTubeDNA14); rowDNA14.add(cytosineTubeDNA14);
rowDNA14.add(leftSideDNA14); rowDNA14.add(rightSideDNA14);
rowDNA14.position.y = i*1.5;
rowDNA14.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA15.add(thymineTubeDNA15); rowDNA15.add(adenineTubeDNA15);
rowDNA15.add(leftSideDNA15); rowDNA15.add(rightSideDNA15);
rowDNA15.position.y = i*1.5;
rowDNA15.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA16.add(cytosineTubeDNA16); rowDNA16.add(guanineTubeDNA16);
rowDNA16.add(leftSideDNA16); rowDNA16.add(rightSideDNA16);
rowDNA16.position.y = i*1.5;
rowDNA16.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA17.add(adenineTubeDNA17); rowDNA17.add(thymineTubeDNA17);
rowDNA17.add(leftSideDNA17); rowDNA17.add(rightSideDNA17);
rowDNA17.position.y = i*1.5;
rowDNA17.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA18.add(guanineTubeDNA18); rowDNA18.add(cytosineTubeDNA18);
rowDNA18.add(leftSideDNA18); rowDNA18.add(rightSideDNA18);
rowDNA18.position.y = i*1.5;
rowDNA18.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA19.add(thymineTubeDNA19); rowDNA19.add(adenineTubeDNA19);
rowDNA19.add(leftSideDNA19); rowDNA19.add(rightSideDNA19);
rowDNA19.position.y = i*1.5;
rowDNA19.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA20.add(cytosineTubeDNA20); rowDNA20.add(guanineTubeDNA20);
rowDNA20.add(leftSideDNA20); rowDNA20.add(rightSideDNA20);
rowDNA20.position.y = i*1.5;
rowDNA20.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA21.add(adenineTubeDNA21); rowDNA21.add(thymineTubeDNA21);
rowDNA21.add(leftSideDNA21); rowDNA21.add(rightSideDNA21);
rowDNA21.position.y = i*1.5;
rowDNA21.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA22.add(guanineTubeDNA22); rowDNA22.add(cytosineTubeDNA22);
rowDNA22.add(leftSideDNA22); rowDNA22.add(rightSideDNA22);
rowDNA22.position.y = i*1.5;
rowDNA22.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA23.add(thymineTubeDNA23); rowDNA23.add(adenineTubeDNA23);
rowDNA23.add(leftSideDNA23); rowDNA23.add(rightSideDNA23);
rowDNA23.position.y = i*1.5;
rowDNA23.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA24.add(cytosineTubeDNA24); rowDNA24.add(guanineTubeDNA24);
rowDNA24.add(leftSideDNA24); rowDNA24.add(rightSideDNA24);
rowDNA24.position.y = i*1.5;
rowDNA24.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA25.add(adenineTubeDNA25); rowDNA25.add(thymineTubeDNA25);
rowDNA25.add(leftSideDNA25); rowDNA25.add(rightSideDNA25);
rowDNA25.position.y = i*1.5;
rowDNA25.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA26.add(guanineTubeDNA26); rowDNA26.add(cytosineTubeDNA26);
rowDNA26.add(leftSideDNA26); rowDNA26.add(rightSideDNA26);
rowDNA26.position.y = i*1.5;
rowDNA26.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA27.add(thymineTubeDNA27); rowDNA27.add(adenineTubeDNA27);
rowDNA27.add(leftSideDNA27); rowDNA27.add(rightSideDNA27);
rowDNA27.position.y = i*1.5;
rowDNA27.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA28.add(cytosineTubeDNA28); rowDNA28.add(guanineTubeDNA28);
rowDNA28.add(leftSideDNA28); rowDNA28.add(rightSideDNA28);
rowDNA28.position.y = i*1.5;
rowDNA28.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA29.add(adenineTubeDNA29); rowDNA29.add(thymineTubeDNA29);
rowDNA29.add(leftSideDNA29); rowDNA29.add(rightSideDNA29);
rowDNA29.position.y = i*1.5;
rowDNA29.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA30.add(guanineTubeDNA30); rowDNA30.add(cytosineTubeDNA30);
rowDNA30.add(leftSideDNA30); rowDNA30.add(rightSideDNA30);
rowDNA30.position.y = i*1.5;
rowDNA30.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA31.add(thymineTubeDNA31); rowDNA31.add(adenineTubeDNA31);
rowDNA31.add(leftSideDNA31); rowDNA31.add(rightSideDNA31);
rowDNA31.position.y = i*1.5;
rowDNA31.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA32.add(cytosineTubeDNA32); rowDNA32.add(guanineTubeDNA32);
rowDNA32.add(leftSideDNA32); rowDNA32.add(rightSideDNA32);
rowDNA32.position.y = i*1.5;
rowDNA32.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA33.add(adenineTubeDNA33); rowDNA33.add(thymineTubeDNA33);
rowDNA33.add(leftSideDNA33); rowDNA33.add(rightSideDNA33);
rowDNA33.position.y = i*1.5;
rowDNA33.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA34.add(guanineTubeDNA34); rowDNA34.add(cytosineTubeDNA34);
rowDNA34.add(leftSideDNA34); rowDNA34.add(rightSideDNA34);
rowDNA34.position.y = i*1.5;
rowDNA34.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA35.add(thymineTubeDNA35); rowDNA35.add(adenineTubeDNA35);
rowDNA35.add(leftSideDNA35); rowDNA35.add(rightSideDNA35);
rowDNA35.position.y = i*1.5;
rowDNA35.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA36.add(cytosineTubeDNA36); rowDNA36.add(guanineTubeDNA36);
rowDNA36.add(leftSideDNA36); rowDNA36.add(rightSideDNA36);
rowDNA36.position.y = i*1.5;
rowDNA36.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA37.add(adenineTubeDNA37); rowDNA37.add(thymineTubeDNA37);
rowDNA37.add(leftSideDNA37); rowDNA37.add(rightSideDNA37);
rowDNA37.position.y = i*1.5;
rowDNA37.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA38.add(guanineTubeDNA38); rowDNA38.add(cytosineTubeDNA38);
rowDNA38.add(leftSideDNA38); rowDNA38.add(rightSideDNA38);
rowDNA38.position.y = i*1.5;
rowDNA38.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA39.add(thymineTubeDNA39); rowDNA39.add(adenineTubeDNA39);
rowDNA39.add(leftSideDNA39); rowDNA39.add(rightSideDNA39);
rowDNA39.position.y = i*1.5;
rowDNA39.rotation.y = 20*i * Math.PI/180;

i+=1;
rowDNA40.add(cytosineTubeDNA40); rowDNA40.add(guanineTubeDNA40);
rowDNA40.add(leftSideDNA40); rowDNA40.add(rightSideDNA40);
rowDNA40.position.y = i*1.5;
rowDNA40.rotation.y = 20*i * Math.PI/180;


var list_rows =[rowDNA1, rowDNA2, rowDNA3, rowDNA4, rowDNA5, rowDNA6, rowDNA7, rowDNA8, rowDNA9,
				rowDNA10, rowDNA11, rowDNA12, rowDNA13, rowDNA14, rowDNA15, rowDNA16, rowDNA17,
				rowDNA18, rowDNA19, rowDNA20, rowDNA21, rowDNA22, rowDNA23, rowDNA24, rowDNA25, 
				rowDNA26, rowDNA27, rowDNA28, rowDNA29, rowDNA30, rowDNA31, rowDNA32, rowDNA33,
				rowDNA34, rowDNA35, rowDNA36, rowDNA37, rowDNA38, rowDNA39, rowDNA40];
	
for (var i = 0; i <list_rows.length; i++) {
	dna.add(list_rows[i]);
}

dna.position.x = -16; //-12
dna.position.y = -30;
dna.position.z = 0;




/* Building RNA */
for (var i = 0; i <= 40; i++) {
	if (i%4 ==0) {
		var adenineTubeRNA = new THREE.Mesh(tubeGeometry, adenineMaterial);
		adenineTubeRNA.rotation.z = 90 * Math.PI/180; 
		adenineTubeRNA.position.x = -3;
	} else if (i%4 ==1) {
		var guanineTubeRNA = new THREE.Mesh(tubeGeometry, guanineMaterial);
		guanineTubeRNA.rotation.z = 90 * Math.PI/180; 
		guanineTubeRNA.position.x = -3;
	} else if (i%4 ==2) {
		var uracilTubeRNA = new THREE.Mesh(tubeGeometry, uracilMaterial );
		uracilTubeRNA.rotation.z = 90 * Math.PI/180;
		uracilTubeRNA.position.x = -3;

	} else if (i%4 ==3) {
		var cytosineTubeRNA = new THREE.Mesh(tubeGeometry, cytosineMaterial);
		cytosineTubeRNA.rotation.z = 90 * Math.PI/180; 
		cytosineTubeRNA.position.x = -3;
	}

	var leftSideRNA = new THREE.Mesh( ballGeometry, sidesMaterial );
	leftSideRNA.position.x = -6;

	var rowRNA = new THREE.Object3D();

	if (i%4 ==0){
		rowRNA.add(adenineTubeRNA);
	} else if (i%4 ==1) {
		rowRNA.add(guanineTubeRNA);
	} else if (i%4 ==2) {
		rowRNA.add(uracilTubeRNA);
	} else if (i%4 ==3) {
		rowRNA.add(cytosineTubeRNA);
	}

	rowRNA.add(leftSideRNA);

	rowRNA.position.y = i*1.5;
	rowRNA.rotation.y = 20*i * Math.PI/180;

	rna.add(rowRNA);

};

rna.position.x = -16;
rna.position.y = -30; //-12



/* Lights */
var ambient = new THREE.AmbientLight(0xFFFFFF, 0.3);
ambient.position.x = 30; 
ambient.position.y = 0; 
ambient.position.z = 50; 
scene.add(ambient);

var light = new THREE.SpotLight(0xffffff, 2.0, 500);
light.position.x = 0; 
light.position.y = 50; 
light.position.z = 10;  //10 
light.target = dna;
light.angle = 320; //320;
scene.add(light);


/* Instantiate a Spot Light for each molecule  */
var lightAdenine = new THREE.SpotLight(0xffffff, 2.0, 500);
var lightThymine = new THREE.SpotLight(0xffffff, 2.0, 500);
var lightGuanine = new THREE.SpotLight(0xffffff, 2.0, 500);
var lightCytosine = new THREE.SpotLight(0xffffff, 2.0, 500);
var lightUracil = new THREE.SpotLight(0xffffff, 2.0, 500);



// -------------------- Adenine -------------------------
/* Atoms and connections in Adenine molecula */
var carbon1A = new THREE.Mesh(ball, brownMat);
var carbon2A = new THREE.Mesh(ball, brownMat);
var carbon3A = new THREE.Mesh(ball, brownMat);
var carbon4A = new THREE.Mesh(ball, brownMat);
var carbon5A = new THREE.Mesh(ball, brownMat);
var hydrogen1A = new THREE.Mesh(ball, blueMat);
var hydrogen2A = new THREE.Mesh(ball, blueMat);
var hydrogen3A = new THREE.Mesh(ball, blueMat);
var hydrogen4A = new THREE.Mesh(ball, blueMat);
var hydrogen5A = new THREE.Mesh(ball, blueMat);
var nitrogen1A = new THREE.Mesh(ball, whiteMat);
var nitrogen2A = new THREE.Mesh(ball, whiteMat);
var nitrogen3A = new THREE.Mesh(ball, whiteMat);
var nitrogen4A = new THREE.Mesh(ball, whiteMat);
var nitrogen5A = new THREE.Mesh(ball, whiteMat);
var conn1A = new THREE.Mesh(rect, grayMat);
var conn2A = new THREE.Mesh(rect, grayMat);
var conn3A = new THREE.Mesh(rect, grayMat);
var conn4A = new THREE.Mesh(rect, grayMat);
var conn5A = new THREE.Mesh(rect, grayMat);
var conn6A = new THREE.Mesh(rect, grayMat);
var conn7A = new THREE.Mesh(rect, grayMat);
var conn8A = new THREE.Mesh(rect, grayMat);
var conn9A = new THREE.Mesh(rect, grayMat);
var conn10A = new THREE.Mesh(rect, grayMat);
var conn11A = new THREE.Mesh(rect, grayMat);
var conn12A = new THREE.Mesh(rect, grayMat);
var conn13A = new THREE.Mesh(rect, grayMat);
var conn14A = new THREE.Mesh(rect, grayMat);
var conn15A = new THREE.Mesh(rect, grayMat);
var conn16A = new THREE.Mesh(rect, grayMat);
var conn17A = new THREE.Mesh(rect, grayMat);


/* Building Adenine molecula */
carbon1A.rotation.z = 90 * Math.PI/180; 
carbon1A.position.x = 2;

conn1A.rotation.z = 50 * Math.PI/180; 
conn1A.position.x = 4.7;
conn1A.position.y = -2;

carbon2A.rotation.z = 90 * Math.PI/180; 
carbon2A.position.x = 6.5;
carbon2A.position.y = -3.5;

conn2A.position.x = 6.5;
conn2A.position.y = -7.0;

carbon3A.rotation.z = 90 * Math.PI/180; 
carbon3A.position.x = 6.5;
carbon3A.position.y = -10.0;

conn3A.rotation.z = 120 * Math.PI/180; 
conn3A.position.x = 4.7;
conn3A.position.y = -12;

nitrogen1A.rotation.z = 90 * Math.PI/180; 
nitrogen1A.position.x = 2;
nitrogen1A.position.y = -13;

conn4A.rotation.z = 50 * Math.PI/180; 
conn4A.position.x = -1;
conn4A.position.y = -12;

carbon4A.rotation.z = 90 * Math.PI/180; 
carbon4A.position.x = -2.5;
carbon4A.position.y = -10.0;

conn5A.position.x = -2.5;
conn5A.position.y = -7;

nitrogen2A.rotation.z = 90 * Math.PI/180; 
nitrogen2A.position.x = -2.5;
nitrogen2A.position.y = -3.5;

conn6A.rotation.z = 120 * Math.PI/180; 
conn6A.position.x = 0;
conn6A.position.y = -1.5;

conn7A.rotation.z = 110 * Math.PI/180; 
conn7A.position.x = 9;
conn7A.position.y = -3;

nitrogen3A.position.x = 12;
nitrogen3A.position.y = -2.5;

conn8A.rotation.z = 40 * Math.PI/180; 
conn8A.position.x = 14.5;
conn8A.position.y = -4.5;

carbon5A.position.x = 16;
carbon5A.position.y = -6.5;

conn9A.rotation.z = 150 * Math.PI/180; 
conn9A.position.x = 14.5;
conn9A.position.y = -9.5;

nitrogen4A.position.x = 12.5;
nitrogen4A.position.y = -11.5;

conn10A.rotation.z = 80 * Math.PI/180; 
conn10A.position.x = 9.5;
conn10A.position.y = -11;

conn11A.position.x = 2;
conn11A.position.y = 3;

nitrogen5A.position.x = 2;
nitrogen5A.position.y = 6;

conn12A.rotation.z = -140 * Math.PI/180; 
conn12A.rotation.y = 180 * Math.PI/180; 
conn12A.rotation.x = 60 * Math.PI/180; 
conn12A.position.x = 4;
conn12A.position.y = 6.5;
conn12A.position.z = 2;

hydrogen1A.position.x = 6;
hydrogen1A.position.y = 7;
hydrogen1A.position.z = 3;

conn13A.rotation.z = -140 * Math.PI/180; 
conn13A.rotation.x = 60 * Math.PI/180; 
conn13A.position.x = 0;
conn13A.position.y = 6.5;
conn13A.position.z = 2;

hydrogen2A.position.x = -2;
hydrogen2A.position.y = 7;
hydrogen2A.position.z = 3;

conn14A.rotation.z = 120 * Math.PI/180; 
conn14A.rotation.y = 90 * Math.PI/180; 
conn14A.position.x = 16;
conn14A.position.y = -7.5;
conn14A.position.z = 2.5;

hydrogen3A.position.x = 16;
hydrogen3A.position.y = -9;
hydrogen3A.position.z = 5.5;

conn15A.rotation.z = 120 * Math.PI/180; 
conn15A.rotation.y = 90 * Math.PI/180; 
conn15A.position.x = 12.5;
conn15A.position.y = -13;
conn15A.position.z = 3;

hydrogen4A.position.x = 12.5;
hydrogen4A.position.y = -14.5;
hydrogen4A.position.z = 5.5;

conn16A.rotation.z = 120 * Math.PI/180; 
conn16A.rotation.y = 90 * Math.PI/180; 
conn16A.position.x = -2.5;
conn16A.position.y = -11.5;
conn16A.position.z = 3;

hydrogen5A.position.x = -2.5;
hydrogen5A.position.y = -12.5;
hydrogen5A.position.z = 5.5;


var adenineElements = [carbon1A, carbon2A, carbon3A, carbon4A, carbon5A, hydrogen1A, hydrogen2A, hydrogen3A, 
					hydrogen4A, hydrogen5A, nitrogen1A, nitrogen2A, nitrogen3A, nitrogen4A, nitrogen5A, conn1A, 
					conn2A, conn3A, conn4A, conn5A, conn6A, conn7A, conn8A, conn9A, conn10A, conn11A, conn12A,
					conn13A, conn14A, conn15A, conn16A];

/* Create Adenine structure */
for (var i = 0; i < adenineElements.length; i++) {
	adenineMolecule.add(adenineElements[i])
}


adenineMolecule.position.x = -74;
adenineMolecule.position.y = 30;
adenineMolecule.position.z = -40;


/* Adenine's Light */
lightAdenine.position.x = -74; 
lightAdenine.position.y = 30; 
lightAdenine.position.z = -20; 
lightAdenine.target = adenineMolecule;

/* Assign random positions to the atoms and connections of Adenine */
function adenineRandomPositions() {
	for (var i = 0; i < adenineElements.length; i++) {
		adenineElements[i].position.x = Math.random() * (41 - (-20)) + (-20);
		adenineElements[i].position.y = Math.random() * (31 - (-30)) + (-30);
		adenineElements[i].position.z = Math.random() * (21 - (-30)) + (-30);
	}
}

adenineRandomPositions();


// -------------------- Cytosine -------------------------
/* Atoms and connections in Cytosine molecula */
var carbon1C = new THREE.Mesh(ball, brownMat);
var carbon2C = new THREE.Mesh(ball, brownMat);
var carbon3C = new THREE.Mesh(ball, brownMat);
var carbon4C = new THREE.Mesh(ball, brownMat);
var hydrogen1C = new THREE.Mesh(ball, blueMat);
var hydrogen2C = new THREE.Mesh(ball, blueMat);
var hydrogen3C = new THREE.Mesh(ball, blueMat);
var hydrogen4C = new THREE.Mesh(ball, blueMat);
var hydrogen5C = new THREE.Mesh(ball, blueMat);
var nitrogen1C = new THREE.Mesh(ball, whiteMat);
var nitrogen2C = new THREE.Mesh(ball, whiteMat);
var nitrogen3C = new THREE.Mesh(ball, whiteMat);
var oxygen1C = new THREE.Mesh(ball, redMat);
var conn1C = new THREE.Mesh(rect, grayMat);
var conn2C = new THREE.Mesh(rect, grayMat);
var conn3C = new THREE.Mesh(rect, grayMat);
var conn4C = new THREE.Mesh(rect, grayMat);
var conn5C = new THREE.Mesh(rect, grayMat);
var conn6C = new THREE.Mesh(rect, grayMat);
var conn7C = new THREE.Mesh(rect, grayMat);
var conn8C = new THREE.Mesh(rect, grayMat);
var conn9C = new THREE.Mesh(rect, grayMat);
var conn10C = new THREE.Mesh(rect, grayMat);
var conn11C = new THREE.Mesh(rect, grayMat);
var conn12C = new THREE.Mesh(rect, grayMat);
var conn13C = new THREE.Mesh(rect, grayMat);


/* Building Cytosine molecula */
carbon1C.rotation.z = 90 * Math.PI/180; 
carbon1C.position.x = 2;

conn1C.rotation.z = 50 * Math.PI/180; 
conn1C.position.x = 4.7;
conn1C.position.y = -2;

carbon2C.rotation.z = 90 * Math.PI/180; 
carbon2C.position.x = 6.5;
carbon2C.position.y = -3.5;

conn2C.position.x = 6.5;
conn2C.position.y = -7.0;

carbon3C.rotation.z = 90 * Math.PI/180; 
carbon3C.position.x = 6.5;
carbon3C.position.y = -10.0;

conn3C.rotation.z = 120 * Math.PI/180; 
conn3C.position.x = 4.7;
conn3C.position.y = -12;

nitrogen1C.rotation.z = 90 * Math.PI/180; 
nitrogen1C.position.x = 2;
nitrogen1C.position.y = -13;

conn4C.rotation.z = 50 * Math.PI/180; 
conn4C.position.x = -1;
conn4C.position.y = -12;

carbon4C.rotation.z = 90 * Math.PI/180; 
carbon4C.position.x = -2.5;
carbon4C.position.y = -10.0;

conn5C.position.x = -2.5;
conn5C.position.y = -7;

nitrogen2C.rotation.z = 90 * Math.PI/180; 
nitrogen2C.position.x = -2.5;
nitrogen2C.position.y = -3.5;

conn6C.rotation.z = 120 * Math.PI/180; 
conn6C.position.x = 0;
conn6C.position.y = -1.5;

conn7C.position.x = 2;
conn7C.position.y = 3;

nitrogen3C.position.x = 2;
nitrogen3C.position.y = 6;

conn8C.rotation.z = -140 * Math.PI/180; 
conn8C.rotation.y = 180 * Math.PI/180; 
conn8C.rotation.x = 60 * Math.PI/180; 
conn8C.position.x = 4;
conn8C.position.y = 6.5;
conn8C.position.z = 2;

hydrogen1C.position.x = 6;
hydrogen1C.position.y = 7;
hydrogen1C.position.z = 3;

conn9C.rotation.z = -140 * Math.PI/180; 
conn9C.rotation.x = 60 * Math.PI/180; 
conn9C.position.x = 0;
conn9C.position.y = 6.5;
conn9C.position.z = 2;

hydrogen2C.position.x = -2;
hydrogen2C.position.y = 7;
hydrogen2C.position.z = 3;

conn10C.rotation.z = 120 * Math.PI/180; 
conn10C.rotation.y = 90 * Math.PI/180; 
conn10C.position.x = 6.5;
conn10C.position.y = -5;
conn10C.position.z = 2.5;

hydrogen3C.position.x = 6.5;
hydrogen3C.position.y = -6.5;
hydrogen3C.position.z = 5.5;

conn11C.rotation.z = 120 * Math.PI/180; 
conn11C.rotation.y = 90 * Math.PI/180; 
conn11C.position.x = 6.5;
conn11C.position.y = -11.5;
conn11C.position.z = 2.5;

hydrogen4C.position.x = 6.5;
hydrogen4C.position.y = -13;
hydrogen4C.position.z = 5.5;

conn12C.position.x = 2;
conn12C.position.y = -16.5;

hydrogen5C.position.x = 2;
hydrogen5C.position.y = -19.5;

conn13C.rotation.z = 120 * Math.PI/180; 
conn13C.rotation.y = 90 * Math.PI/180; 
conn13C.position.x = -2.5;
conn13C.position.y = -11.5;
conn13C.position.z = 2.5;

oxygen1C.position.x = -2.5;
oxygen1C.position.y = -13;
oxygen1C.position.z = 5.5;


var cytosineElements = [carbon1C, carbon2C, carbon3C, carbon4C, hydrogen1C, hydrogen2C, hydrogen3C, hydrogen4C,
					hydrogen5C, nitrogen1C, nitrogen2C, nitrogen3C, oxygen1C, conn1C, conn2C, conn3C, conn4C,
					conn5C, conn6C, conn7C, conn8C, conn9C, conn10C, conn11C, conn12C, conn13C];

/* Create Cytosine structure */
for (var i = 0; i < cytosineElements.length; i++) {
	cytosineMolecule.add(cytosineElements[i])
}

cytosineMolecule.position.x = 22;
cytosineMolecule.position.y = -30;
cytosineMolecule.position.z = -40;


/* Cytosine's Light */
lightCytosine.position.x = 22; 
lightCytosine.position.y = -30; 
lightCytosine.position.z = -20; 
lightCytosine.target = cytosineMolecule;


/* Assign random positions to the atoms and connections of Cytosine */
function cytosineRandomPositions() {
	for (var i = 0; i < cytosineElements.length; i++) {
		cytosineElements[i].position.x = Math.random() * (41 - (-20)) + (-20);
		cytosineElements[i].position.y = Math.random() * (31 - (-30)) + (-30);
		cytosineElements[i].position.z = Math.random() * (21 - (-30)) + (-30);
	}
}

cytosineRandomPositions();

// -------------------- Guanine -------------------------
/* Atoms and connections in Guanine molecula */
var carbon1G = new THREE.Mesh(ball, brownMat);
var carbon2G = new THREE.Mesh(ball, brownMat);
var carbon3G = new THREE.Mesh(ball, brownMat);
var carbon4G = new THREE.Mesh(ball, brownMat);
var carbon5G = new THREE.Mesh(ball, brownMat);
var hydrogen1G = new THREE.Mesh(ball, blueMat);
var hydrogen2G = new THREE.Mesh(ball, blueMat);
var hydrogen3G = new THREE.Mesh(ball, blueMat);
var hydrogen4G = new THREE.Mesh(ball, blueMat);
var hydrogen5G = new THREE.Mesh(ball, blueMat);
var nitrogen1G = new THREE.Mesh(ball, whiteMat);
var nitrogen2G = new THREE.Mesh(ball, whiteMat);
var nitrogen3G = new THREE.Mesh(ball, whiteMat);
var nitrogen4G = new THREE.Mesh(ball, whiteMat);
var nitrogen5G = new THREE.Mesh(ball, whiteMat);
var oxygen1G = new THREE.Mesh(ball, redMat);
var conn1G = new THREE.Mesh(rect, grayMat);
var conn2G = new THREE.Mesh(rect, grayMat);
var conn3G = new THREE.Mesh(rect, grayMat);
var conn4G = new THREE.Mesh(rect, grayMat);
var conn5G = new THREE.Mesh(rect, grayMat);
var conn6G = new THREE.Mesh(rect, grayMat);
var conn7G = new THREE.Mesh(rect, grayMat);
var conn8G = new THREE.Mesh(rect, grayMat);
var conn9G = new THREE.Mesh(rect, grayMat);
var conn10G = new THREE.Mesh(rect, grayMat);
var conn11G = new THREE.Mesh(rect, grayMat);
var conn12G = new THREE.Mesh(rect, grayMat);
var conn13G = new THREE.Mesh(rect, grayMat);
var conn14G = new THREE.Mesh(rect, grayMat);
var conn15G = new THREE.Mesh(rect, grayMat);
var conn16G = new THREE.Mesh(rect, grayMat);
var conn17G = new THREE.Mesh(rect, grayMat);


/* Building Guanine molecula */
carbon1G.rotation.z = 90 * Math.PI/180; 
carbon1G.position.x = 2;

conn1G.rotation.z = 50 * Math.PI/180; 
conn1G.position.x = 4.7;
conn1G.position.y = -2;

carbon2G.rotation.z = 90 * Math.PI/180; 
carbon2G.position.x = 6.5;
carbon2G.position.y = -3.5;

conn2G.position.x = 6.5;
conn2G.position.y = -7.0;

carbon3G.rotation.z = 90 * Math.PI/180; 
carbon3G.position.x = 6.5;
carbon3G.position.y = -10.0;

conn3G.rotation.z = 120 * Math.PI/180; 
conn3G.position.x = 4.7;
conn3G.position.y = -12;

nitrogen1G.rotation.z = 90 * Math.PI/180; 
nitrogen1G.position.x = 2;
nitrogen1G.position.y = -13;

conn4G.rotation.z = 50 * Math.PI/180; 
conn4G.position.x = -1;
conn4G.position.y = -12;

carbon4G.rotation.z = 90 * Math.PI/180; 
carbon4G.position.x = -2.5;
carbon4G.position.y = -10.0;

conn5G.position.x = -2.5;
conn5G.position.y = -7;

nitrogen2G.rotation.z = 90 * Math.PI/180; 
nitrogen2G.position.x = -2.5;
nitrogen2G.position.y = -3.5;

conn6G.rotation.z = 120 * Math.PI/180; 
conn6G.position.x = 0;
conn6G.position.y = -1.5;

conn7G.rotation.z = 110 * Math.PI/180; 
conn7G.position.x = 9;
conn7G.position.y = -3;

nitrogen3G.position.x = 12;
nitrogen3G.position.y = -2.5;

conn8G.rotation.z = 40 * Math.PI/180; 
conn8G.position.x = 14.5;
conn8G.position.y = -4.5;

carbon5G.position.x = 16;
carbon5G.position.y = -6.5;

conn9G.rotation.z = 150 * Math.PI/180; 
conn9G.position.x = 14.5;
conn9G.position.y = -9.5;

nitrogen4G.position.x = 12.5;
nitrogen4G.position.y = -11.5;

conn10G.rotation.z = 80 * Math.PI/180; 
conn10G.position.x = 9.5;
conn10G.position.y = -11;

conn11G.position.x = 2;
conn11G.position.y = 3;

oxygen1G.position.x = 2;
oxygen1G.position.y = 6;

conn12G.rotation.z = 120 * Math.PI/180; 
conn12G.rotation.y = 90 * Math.PI/180; 
conn12G.position.x = 16;
conn12G.position.y = -7;
conn12G.position.z = 2.5;

hydrogen1G.position.x = 16;
hydrogen1G.position.y = -8.5;
hydrogen1G.position.z = 5.5;

conn13G.rotation.z = 120 * Math.PI/180; 
conn13G.rotation.y = 90 * Math.PI/180; 
conn13G.position.x = 12.5;
conn13G.position.y = -13;
conn13G.position.z = 3;

hydrogen2G.position.x = 12.5;
hydrogen2G.position.y = -14.5;
hydrogen2G.position.z = 5.5;

conn14G.rotation.z = 120 * Math.PI/180; 
conn14G.rotation.y = 90 * Math.PI/180; 
conn14G.position.x = -2.5;
conn14G.position.y = -11.5;
conn14G.position.z = 3;

nitrogen5G.position.x = -2.5;
nitrogen5G.position.y = -13;
nitrogen5G.position.z = 5.5;

conn15G.rotation.z = -60 * Math.PI/180; 
conn15G.rotation.y = 30 * Math.PI/180; 
conn15G.position.x = -5;
conn15G.position.y = -13.5;
conn15G.position.z = 7;

hydrogen3G.position.x = 2;
hydrogen3G.position.y = -15;
hydrogen3G.position.z = 8.5;

conn16G.rotation.z = 120 * Math.PI/180; 
conn16G.rotation.y = 150 * Math.PI/180; 
conn16G.position.x = 0;
conn16G.position.y = -13.5;
conn16G.position.z = 6.5;

hydrogen4G.position.x = -6.5;
hydrogen4G.position.y = -15;
hydrogen4G.position.z = 8.5;

conn17G.rotation.z = 120 * Math.PI/180; 
conn17G.rotation.y = 90 * Math.PI/180; 
conn17G.position.x = -2.5;
conn17G.position.y = -4.5;
conn17G.position.z = 3;

hydrogen5G.position.x = -2.5;
hydrogen5G.position.y = -5.5;
hydrogen5G.position.z = 5.5;

var guanineElements = [carbon1G, carbon2G, carbon3G, carbon4G, carbon5G, hydrogen1G, hydrogen2G, hydrogen3G, 
					hydrogen4G, hydrogen5G, nitrogen1G, nitrogen2G, nitrogen3G, nitrogen4G, nitrogen5G, 
					oxygen1G, conn1G, conn2G, conn3G, conn4G, conn5G, conn6G, conn7G, conn8G, conn9G, conn10G,
					conn11G, conn12G, conn13G, conn14G, conn15G, conn16G, conn17G];

/* Create Guanine structure */
for (var i = 0; i < guanineElements.length; i++) {
	guanineMolecule.add(guanineElements[i])
}


guanineMolecule.position.x = -74;
guanineMolecule.position.y = -30;
guanineMolecule.position.z = -40;


/* Guanine's Light */
lightGuanine.position.x = -74; 
lightGuanine.position.y = -30; 
lightGuanine.position.z = -20; 
lightGuanine.target = guanineMolecule;

/* Assign random positions to the atoms and connections of Guanine */
function guanineRandomPositions() {
	for (var i = 0; i < guanineElements.length; i++) {
		guanineElements[i].position.x = Math.random() * (41 - (-20)) + (-20);
		guanineElements[i].position.y = Math.random() * (31 - (-30)) + (-30);
		guanineElements[i].position.z = Math.random() * (21 - (-30)) + (-30);
	}
}

guanineRandomPositions();

// -------------------- Thymine -------------------------
/* Atoms and connections in Thymine molecula */
var carbon1T = new THREE.Mesh(ball, brownMat);
var carbon2T = new THREE.Mesh(ball, brownMat);
var carbon3T = new THREE.Mesh(ball, brownMat);
var carbon4T = new THREE.Mesh(ball, brownMat);
var carbon5T = new THREE.Mesh(ball, brownMat);
var hydrogen1T = new THREE.Mesh(ball, blueMat);
var hydrogen2T = new THREE.Mesh(ball, blueMat);
var hydrogen3T = new THREE.Mesh(ball, blueMat);
var hydrogen4T = new THREE.Mesh(ball, blueMat);
var hydrogen5T = new THREE.Mesh(ball, blueMat);
var hydrogen6T = new THREE.Mesh(ball, blueMat);
var nitrogen1T = new THREE.Mesh(ball, whiteMat);
var nitrogen2T = new THREE.Mesh(ball, whiteMat);
var oxygen1T = new THREE.Mesh(ball, redMat);
var oxygen2T = new THREE.Mesh(ball, redMat);
var conn1T = new THREE.Mesh(rect, grayMat);
var conn2T = new THREE.Mesh(rect, grayMat);
var conn3T = new THREE.Mesh(rect, grayMat);
var conn4T = new THREE.Mesh(rect, grayMat);
var conn5T = new THREE.Mesh(rect, grayMat);
var conn6T = new THREE.Mesh(rect, grayMat);
var conn7T = new THREE.Mesh(rect, grayMat);
var conn8T = new THREE.Mesh(rect, grayMat);
var conn9T = new THREE.Mesh(rect, grayMat);
var conn10T = new THREE.Mesh(rect, grayMat);
var conn11T = new THREE.Mesh(rect, grayMat);
var conn12T = new THREE.Mesh(rect, grayMat);
var conn13T = new THREE.Mesh(rect, grayMat);
var conn14T = new THREE.Mesh(rect, grayMat);
var conn15T = new THREE.Mesh(rect, grayMat);

/* Building Thymine molecula */
carbon1T.rotation.z = 90 * Math.PI/180; 
carbon1T.position.x = 2;

conn1T.rotation.z = 50 * Math.PI/180; 
conn1T.position.x = 4.7;
conn1T.position.y = -2;

carbon2T.rotation.z = 90 * Math.PI/180; 
carbon2T.position.x = 6.5;
carbon2T.position.y = -3.5;

conn2T.position.x = 6.5;
conn2T.position.y = -7.0;

carbon3T.rotation.z = 90 * Math.PI/180; 
carbon3T.position.x = 6.5;
carbon3T.position.y = -10.0;

conn3T.rotation.z = 120 * Math.PI/180; 
conn3T.position.x = 4.7;
conn3T.position.y = -12;

nitrogen1T.rotation.z = 90 * Math.PI/180; 
nitrogen1T.position.x = 2;
nitrogen1T.position.y = -13;

conn4T.rotation.z = 50 * Math.PI/180; 
conn4T.position.x = -1;
conn4T.position.y = -12;

carbon4T.rotation.z = 90 * Math.PI/180; 
carbon4T.position.x = -2.5;
carbon4T.position.y = -10.0;

conn5T.position.x = -2.5;
conn5T.position.y = -7;

nitrogen2T.rotation.z = 90 * Math.PI/180; 
nitrogen2T.position.x = -2.5;
nitrogen2T.position.y = -3.5;

conn6T.rotation.z = 120 * Math.PI/180; 
conn6T.position.x = 0;
conn6T.position.y = -1.5;

conn7T.position.x = 2;
conn7T.position.y = 3;

oxygen1T.position.x = 2;
oxygen1T.position.y = 6;

conn8T.rotation.z = 50 * Math.PI/180; 
conn8T.rotation.y = 90 * Math.PI/180; 
conn8T.position.x = 6.5;
conn8T.position.y = -1.5;
conn8T.position.z = 2.5;

carbon5T.position.x = 7;
carbon5T.position.y = 0.5;
carbon5T.position.z = 5;

conn9T.rotation.z = -110 * Math.PI/180; 
conn9T.rotation.y = 30 * Math.PI/180; 
conn9T.position.x = 4.5;
conn9T.position.y = 1.5;
conn9T.position.z = 6;

hydrogen1T.position.x = 2;
hydrogen1T.position.y = 2;
hydrogen1T.position.z = 8;

conn10T.rotation.z = 100 * Math.PI/180; 
conn10T.rotation.y = 90 * Math.PI/180; 
conn10T.position.x = 7.5;
conn10T.position.y = 0.5;
conn10T.position.z = 8;

hydrogen2T.position.x = 7.5;
hydrogen2T.position.y = 0;
hydrogen2T.position.z = 11;

conn11T.rotation.z = 110 * Math.PI/180; 
conn11T.rotation.y = 30 * Math.PI/180; 
conn11T.position.x = 9.5;
conn11T.position.y = 2;
conn11T.position.z = 4;

hydrogen3T.position.x = 11;
hydrogen3T.position.y = 3;
hydrogen3T.position.z = 3;

conn12T.rotation.z = 120 * Math.PI/180; 
conn12T.rotation.y = 90 * Math.PI/180; 
conn12T.position.x = 7;
conn12T.position.y = -11.5;
conn12T.position.z = 2.5;

hydrogen4T.position.x = 7;
hydrogen4T.position.y = -13;
hydrogen4T.position.z = 5;

conn13T.position.x = 2;
conn13T.position.y = -16;

hydrogen5T.position.x = 2;
hydrogen5T.position.y = -19;

conn14T.rotation.z = 120 * Math.PI/180; 
conn14T.rotation.y = 90 * Math.PI/180; 
conn14T.position.x = -3;
conn14T.position.y = -11.5;
conn14T.position.z = 2.5;

oxygen2T.position.x = -3;
oxygen2T.position.y = -12.5;
oxygen2T.position.z = 5;

conn15T.rotation.z = 50 * Math.PI/180; 
conn15T.rotation.y = 90 * Math.PI/180; 
conn15T.position.x = -3;
conn15T.position.y = -1.5;
conn15T.position.z = 2.5;

hydrogen6T.position.x = -3;
hydrogen6T.position.y = 0.5;
hydrogen6T.position.z = 5;


var thymineElements = [carbon1T, carbon2T, carbon3T, carbon4T, carbon5T, hydrogen1T, hydrogen2T, hydrogen3T, 
					hydrogen4T, hydrogen5T, hydrogen6T, nitrogen1T, nitrogen2T, oxygen1T, oxygen2T, conn1T,
					conn2T, conn3T, conn4T, conn5T, conn6T, conn7T, conn8T, conn9T, conn10T, conn11T, conn12T,
					conn13T, conn14T, conn15T];

/* Create Thymine structure */
for (var i = 0; i < thymineElements.length; i++) {
	thymineMolecule.add(thymineElements[i])
}


thymineMolecule.position.x = 22;
thymineMolecule.position.y = 30; //30
thymineMolecule.position.z = -40;


/* Thymine's Light */
lightThymine.position.x = 22; 
lightThymine.position.y = 30; 
lightThymine.position.z = -20; 
lightThymine.target = thymineMolecule;

/* Assign random positions to the atoms and connections of Thymine */
function thymineRandomPositions() {
	for (var i = 0; i < thymineElements.length; i++) {
		thymineElements[i].position.x = Math.random() * (41 - (-20)) + (-20);
		thymineElements[i].position.y = Math.random() * (31 - (-30)) + (-30);
		thymineElements[i].position.z = Math.random() * (21 - (-30)) + (-30);
	}
}

thymineRandomPositions();

// -------------------- Uracil -------------------------
/* Atoms and connections in Uracil molecula */
var carbon1U = new THREE.Mesh(ball, brownMat);
var carbon2U = new THREE.Mesh(ball, brownMat);
var carbon3U = new THREE.Mesh(ball, brownMat);
var carbon4U = new THREE.Mesh(ball, brownMat);
var hydrogen1U = new THREE.Mesh(ball, blueMat);
var hydrogen2U = new THREE.Mesh(ball, blueMat);
var hydrogen3U = new THREE.Mesh(ball, blueMat);
var hydrogen4U = new THREE.Mesh(ball, blueMat);
var nitrogen1U = new THREE.Mesh(ball, whiteMat);
var nitrogen2U = new THREE.Mesh(ball, whiteMat);
var oxygen1U = new THREE.Mesh(ball, redMat);
var oxygen2U = new THREE.Mesh(ball, redMat);
var conn1U = new THREE.Mesh(rect, grayMat);
var conn2U = new THREE.Mesh(rect, grayMat);
var conn3U = new THREE.Mesh(rect, grayMat);
var conn4U = new THREE.Mesh(rect, grayMat);
var conn5U = new THREE.Mesh(rect, grayMat);
var conn6U = new THREE.Mesh(rect, grayMat);
var conn7U = new THREE.Mesh(rect, grayMat);
var conn8U = new THREE.Mesh(rect, grayMat);
var conn9U = new THREE.Mesh(rect, grayMat);
var conn10U = new THREE.Mesh(rect, grayMat);
var conn11U = new THREE.Mesh(rect, grayMat);
var conn12U = new THREE.Mesh(rect, grayMat);


/* Building Uracil molecule */
carbon1U.rotation.z = 90 * Math.PI/180; 
carbon1U.position.x = 2;

conn1U.rotation.z = 50 * Math.PI/180; 
conn1U.position.x = 4.7;
conn1U.position.y = -2;

nitrogen1U.rotation.z = 90 * Math.PI/180; 
nitrogen1U.position.x = 6.5;
nitrogen1U.position.y = -3.5;

conn2U.position.x = 6.5;
conn2U.position.y = -7.0;

carbon2U.rotation.z = 90 * Math.PI/180; 
carbon2U.position.x = 6.5;
carbon2U.position.y = -10.0;

conn3U.rotation.z = 120 * Math.PI/180; 
conn3U.position.x = 4.7;
conn3U.position.y = -12;

nitrogen2U.rotation.z = 90 * Math.PI/180; 
nitrogen2U.position.x = 2;
nitrogen2U.position.y = -13;

conn4U.rotation.z = 50 * Math.PI/180; 
conn4U.position.x = -1;
conn4U.position.y = -12;

carbon3U.rotation.z = 90 * Math.PI/180; 
carbon3U.position.x = -2.5;
carbon3U.position.y = -10.0;

conn5U.position.x = -2.5;
conn5U.position.y = -7;

carbon4U.rotation.z = 90 * Math.PI/180; 
carbon4U.position.x = -2.5;
carbon4U.position.y = -3.5;

conn6U.rotation.z = 120 * Math.PI/180; 
conn6U.position.x = 0;
conn6U.position.y = -1.5;

conn7U.position.x = 2;
conn7U.position.y = 3;

oxygen1U.position.x = 2;
oxygen1U.position.y = 6;

conn8U.rotation.z = 50 * Math.PI/180; 
conn8U.rotation.y = 90 * Math.PI/180; 
conn8U.position.x = 6.5;
conn8U.position.y = -1.5;
conn8U.position.z = 2.5;

hydrogen1U.position.x = 7;
hydrogen1U.position.y = 0.5;
hydrogen1U.position.z = 5;

conn9U.rotation.z = 120 * Math.PI/180; 
conn9U.rotation.y = 90 * Math.PI/180; 
conn9U.position.x = 7;
conn9U.position.y = -11.5;
conn9U.position.z = 2.5;

oxygen2U.position.x = 7;
oxygen2U.position.y = -13;
oxygen2U.position.z = 5;

conn10U.position.x = 2;
conn10U.position.y = -16;

hydrogen2U.position.x = 2;
hydrogen2U.position.y = -19;

conn11U.rotation.z = 120 * Math.PI/180; 
conn11U.rotation.y = 90 * Math.PI/180; 
conn11U.position.x = -3;
conn11U.position.y = -11.5;
conn11U.position.z = 2.5;

hydrogen3U.position.x = -3;
hydrogen3U.position.y = -12.5;
hydrogen3U.position.z = 5;

conn12U.rotation.z = 50 * Math.PI/180; 
conn12U.rotation.y = 90 * Math.PI/180; 
conn12U.position.x = -3;
conn12U.position.y = -1.5;
conn12U.position.z = 2.5;

hydrogen4U.position.x = -3;
hydrogen4U.position.y = 0.5;
hydrogen4U.position.z = 5;


var uracilElements = [carbon1U, carbon2U, carbon3U, carbon4U, hydrogen1U, hydrogen2U, hydrogen3U, hydrogen4U,
 					nitrogen1U, nitrogen2U, oxygen1U, oxygen2U, conn1U, conn2U, conn3U, conn4U, conn5U, 
 					conn6U, conn7U, conn8U, conn9U, conn10U, conn11U, conn12U];

/* Create Thymine structure */
for (var i = 0; i < uracilElements.length; i++) {
	uracilMolecule.add(uracilElements[i])
}


uracilMolecule.position.x = 22;
uracilMolecule.position.y = 30;
uracilMolecule.position.z = -40;


/* Uracil's Light */
lightUracil.position.x = 22; 
lightUracil.position.y = 30; 
lightUracil.position.z = -20; 
lightUracil.target = uracilMolecule;


/* Assign random positions to the atoms and connections of Uracil */
function uracilRandomPositions() {
	for (var i = 0; i < uracilElements.length; i++) {
		uracilElements[i].position.x = Math.random() * (41 - (-20)) + (-20);
		uracilElements[i].position.y = Math.random() * (31 - (-30)) + (-30);
		uracilElements[i].position.z = Math.random() * (21 - (-30)) + (-30);
	}
}

uracilRandomPositions();



// --------------------------------------------

var render = function () {
	if (!pause){
		if (isDna){
			/* Removed from the scene */
			scene.remove(rna);
			scene.remove(uracilMolecule);
			divUracil.style.visibility = 'hidden';

			/* Added to the scene */
			scene.add(dna);
			//scene.add(newDna);
			scene.add(thymineMolecule);
			divThymine.style.visibility = 'visible';

			/* Rotations */
			//dna.rotation.y += 0.01;
			for (var i=0; i <list_rows.length; i++) {
				list_rows[i].rotation.y += 0.01;
			}
			

			if (rotationY && rotationX==false && rotationZ==false && rotationXYZ==false){
				thymineMolecule.rotation.y += 0.01;
			} else if (rotationX && rotationY==false && rotationZ==false && rotationXYZ==false){
				thymineMolecule.rotation.x += 0.01;
			} else if (rotationZ && rotationY==false && rotationX==false && rotationXYZ==false){
				thymineMolecule.rotation.z += 0.01;
			} else if (rotationXYZ && rotationX==false && rotationY==false && rotationZ==false) {
				thymineMolecule.rotation.x += 0.01;
				thymineMolecule.rotation.y += 0.01;
				thymineMolecule.rotation.z += 0.01;
			}
		}else{
			/* Removed from the scene */
			scene.remove(dna);
			//scene.remove(newDna);
			scene.remove(thymineMolecule);
			divThymine.style.visibility = 'hidden';

			/* Added to the scene */
			scene.add(rna);
			scene.add(uracilMolecule);
			divUracil.style.visibility = 'visible';

			/* Rotations */
			rna.rotation.y += 0.01;

			if (rotationY && rotationX==false && rotationZ==false && rotationXYZ==false){
				uracilMolecule.rotation.y += 0.01;
			} else if (rotationX && rotationY==false && rotationZ==false && rotationXYZ==false){
				uracilMolecule.rotation.x += 0.01;
			} else if (rotationZ && rotationY==false && rotationX==false && rotationXYZ==false){
				uracilMolecule.rotation.z += 0.01;
			} else if (rotationXYZ && rotationX==false && rotationY==false && rotationZ==false) {
				uracilMolecule.rotation.x += 0.01;
				uracilMolecule.rotation.y += 0.01;
				uracilMolecule.rotation.z += 0.01;
			}

		}
		scene.add(adenineMolecule);
		scene.add(guanineMolecule);
		scene.add(cytosineMolecule);

		if (rotationY && rotationX==false && rotationZ==false && rotationXYZ==false){
			adenineMolecule.rotation.y += 0.01;
			guanineMolecule.rotation.y += 0.01;
			cytosineMolecule.rotation.y += 0.01;
		} else if (rotationX && rotationY==false && rotationZ==false && rotationXYZ==false){
			adenineMolecule.rotation.x += 0.01;
			guanineMolecule.rotation.x += 0.01;
			cytosineMolecule.rotation.x += 0.01;
		} else if (rotationZ && rotationY==false && rotationX==false && rotationXYZ==false){
			adenineMolecule.rotation.z += 0.01;
			guanineMolecule.rotation.z += 0.01;
			cytosineMolecule.rotation.z += 0.01;
		} else if (rotationXYZ && rotationX==false && rotationY==false && rotationZ==false) {
			adenineMolecule.rotation.x += 0.01;
			guanineMolecule.rotation.x += 0.01;
			cytosineMolecule.rotation.x += 0.01;
			adenineMolecule.rotation.y += 0.01;
			guanineMolecule.rotation.y += 0.01;
			cytosineMolecule.rotation.y += 0.01;
			adenineMolecule.rotation.z += 0.01;
			guanineMolecule.rotation.z += 0.01;
			cytosineMolecule.rotation.z += 0.01;
		}
	}

	if (allLights){
		if (isDna){
			scene.remove(lightUracil);
			scene.add(lightThymine);
		} else {
			scene.remove(lightThymine);
			scene.add(lightUracil);
		}
		scene.add(lightAdenine);	
		scene.add(lightGuanine);	
		scene.add(lightCytosine);
	} 
	if (!allLights){
		if (isDna){
			scene.remove(lightThymine);
		} else {
			scene.remove(lightUracil);
		}
		scene.remove(lightAdenine);	
		scene.remove(lightGuanine);	
		scene.remove(lightCytosine);
	}
	if (chemicalFormulas){
		if (isDna){
			formulaThymine.style.visibility = 'visible';
			formulaAdenine.style.visibility = 'visible';
			formulaCytosine.style.visibility = 'visible';
			formulaGuanine.style.visibility = 'visible';
			formulaUracil.style.visibility = 'hidden';
		} else {
			formulaUracil.style.visibility = 'visible';
			formulaAdenine.style.visibility = 'visible';
			formulaCytosine.style.visibility = 'visible';
			formulaGuanine.style.visibility = 'visible';
			formulaThymine.style.visibility = 'hidden';
		}
	}
	if (!chemicalFormulas){
		formulaThymine.style.visibility = 'hidden';
		formulaAdenine.style.visibility = 'hidden';
		formulaCytosine.style.visibility = 'hidden';
		formulaGuanine.style.visibility = 'hidden';
		formulaUracil.style.visibility = 'hidden';
	}
	if (animateCyt){
		var millisec = 500;
		var tween1 = new TWEEN.Tween(carbon1C.position)
			.to({ x: 2, y: 0, z:0 }, millisec)
			.start();
		var tween2 = new TWEEN.Tween(carbon2C.position)
			.to({ x: 6.5, y: -3.5, z:0 }, millisec)
			.start();
		var tween3 = new TWEEN.Tween(carbon3C.position)
			.to({ x: 6.5, y: -10, z:0 }, millisec)
			.start();
		var tween4 = new TWEEN.Tween(nitrogen1C.position)
			.to({ x: 2, y: -13, z:0 }, millisec)
			.start();
		var tween5 = new TWEEN.Tween(carbon4C.position)
			.to({ x: -2.5, y: -10, z:0 }, millisec)
			.start();
		var tween6 = new TWEEN.Tween(nitrogen2C.position)
			.to({ x: -2.5, y: -3.5, z:0 }, millisec)
			.start();
		var tween7 = new TWEEN.Tween(nitrogen3C.position)
			.to({ x: 2, y: 6, z:0 }, millisec)
			.start();
		var tween8 = new TWEEN.Tween(hydrogen1C.position)
			.to({ x: 6, y: 7, z:3 }, millisec)
			.start();
		var tween9 = new TWEEN.Tween(hydrogen2C.position)
			.to({ x: -2, y: 7, z:3 }, millisec)
			.start();
		var tween10 = new TWEEN.Tween(hydrogen3C.position)
			.to({ x: 6.5, y: -6.5, z:5.5 }, millisec)
			.start();
		var tween11 = new TWEEN.Tween(hydrogen4C.position)
			.to({ x: 6.5, y: -13, z:5.5 }, millisec)
			.start();
		var tween12 = new TWEEN.Tween(hydrogen5C.position)
			.to({ x: 2, y: -19.5, z:0 }, millisec)
			.start();
		var tween13 = new TWEEN.Tween(oxygen1C.position)
			.to({ x: -2.5, y: -13, z:5.5 }, millisec)
			.start();

		var tween16 = new TWEEN.Tween(conn1C.position)
			.to({ x: 4.7, y: -2, z:0 }, millisec)
			.start();
		var tween17 = new TWEEN.Tween(conn2C.position)
			.to({ x: 6.5, y: -7, z:0 }, millisec)
			.start();
		var tween18 = new TWEEN.Tween(conn3C.position)
			.to({ x: 4.7, y: -12, z:0 }, millisec)
			.start();
		var tween19 = new TWEEN.Tween(conn4C.position)
			.to({ x: -1, y: -12, z:0 }, millisec)
			.start();
		var tween20 = new TWEEN.Tween(conn5C.position)
			.to({ x: -2.5, y: -7, z:0 }, millisec)
			.start();
		var tween21 = new TWEEN.Tween(conn6C.position)
			.to({ x: 0, y: -1.5, z:0 }, millisec)
			.start();
		var tween22 = new TWEEN.Tween(conn7C.position)
			.to({ x: 2, y: 3, z:0 }, millisec)
			.start();
		var tween23 = new TWEEN.Tween(conn8C.position)
			.to({ x: 4, y: 6.5, z:2 }, millisec)
			.start();
		var tween24 = new TWEEN.Tween(conn9C.position)
			.to({ x: 0, y: 6.5, z:2 }, millisec)
			.start();
		var tween25 = new TWEEN.Tween(conn10C.position)
			.to({ x: 6.5, y: -5, z:2.5 }, millisec)
			.start();
		var tween26 = new TWEEN.Tween(conn11C.position)
			.to({ x: 6.5, y: -11.5, z:2.5 }, millisec)
			.start();
		var tween27 = new TWEEN.Tween(conn12C.position)
			.to({ x: 2, y: -16.5, z:0 }, millisec)
			.start();
		var tween28 = new TWEEN.Tween(conn13C.position)
			.to({ x: -2.5, y: -11.5, z:2.5 }, millisec)
			.start();
	} if (animateAde){
		var millisec = 500;
		var tween1 = new TWEEN.Tween(carbon1A.position)
			.to({ x: 2, y: 0, z:0 }, millisec)
			.start();
		var tween2 = new TWEEN.Tween(carbon2A.position)
			.to({ x: 6.5, y: -3.5, z:0 }, millisec)
			.start();
		var tween3 = new TWEEN.Tween(carbon3A.position)
			.to({ x: 6.5, y: -10, z:0 }, millisec)
			.start();
		var tween4 = new TWEEN.Tween(nitrogen1A.position)
			.to({ x: 2, y: -13, z:0 }, millisec)
			.start();
		var tween5 = new TWEEN.Tween(carbon4A.position)
			.to({ x: -2.5, y: -10, z:0 }, millisec)
			.start();
		var tween6 = new TWEEN.Tween(nitrogen2A.position)
			.to({ x: -2.5, y: -3.5, z:0 }, millisec)
			.start();
		var tween7 = new TWEEN.Tween(nitrogen3A.position)
			.to({ x: 12, y: -2.5, z:0 }, millisec)
			.start();
		var tween8 = new TWEEN.Tween(carbon5A.position)
			.to({ x: 16, y: -6.5, z:0 }, millisec)
			.start();
		var tween9 = new TWEEN.Tween(nitrogen4A.position)
			.to({ x: 12.5, y: -11.5, z:0 }, millisec)
			.start();
		var tween10 = new TWEEN.Tween(nitrogen5A.position)
			.to({ x: 2, y: 6, z:0 }, millisec)
			.start();
		var tween11 = new TWEEN.Tween(hydrogen1A.position)
			.to({ x: 6, y: 7, z:3 }, millisec)
			.start();
		var tween12 = new TWEEN.Tween(hydrogen2A.position)
			.to({ x: -2, y: 7, z:3 }, millisec)
			.start();
		var tween13 = new TWEEN.Tween(hydrogen3A.position)
			.to({ x: 16, y: -9, z:5.5 }, millisec)
			.start();
		var tween16 = new TWEEN.Tween(hydrogen4A.position)
			.to({ x: 12.5, y: -14.5, z:5.5 }, millisec)
			.start();
		var tween17 = new TWEEN.Tween(hydrogen5A.position)
			.to({ x: -2.5, y: -12.5, z:5.5 }, millisec)
			.start();

		var tween18 = new TWEEN.Tween(conn1A.position)
			.to({ x: 4.7, y: -2, z:0 }, millisec)
			.start();
		var tween19 = new TWEEN.Tween(conn2A.position)
			.to({ x: 6.5, y: -7, z:0 }, millisec)
			.start();
		var tween20 = new TWEEN.Tween(conn3A.position)
			.to({ x: 4.7, y: -12, z:0 }, millisec)
			.start();
		var tween21 = new TWEEN.Tween(conn4A.position)
			.to({ x: -1, y: -12, z:0 }, millisec)
			.start();
		var tween22 = new TWEEN.Tween(conn5A.position)
			.to({ x: -2.5, y: -7, z:0 }, millisec)
			.start();
		var tween23 = new TWEEN.Tween(conn6A.position)
			.to({ x: 0, y: -1.5, z:0 }, millisec)
			.start();
		var tween24 = new TWEEN.Tween(conn7A.position)
			.to({ x: 9, y: -3, z:0 }, millisec)
			.start();
		var tween25 = new TWEEN.Tween(conn8A.position)
			.to({ x: 14.5, y: -4.5, z:0 }, millisec)
			.start();
		var tween26 = new TWEEN.Tween(conn9A.position)
			.to({ x: 14.5, y: -9.5, z:0 }, millisec)
			.start();
		var tween27 = new TWEEN.Tween(conn10A.position)
			.to({ x: 9.5, y: -11, z:0 }, millisec)
			.start();
		var tween28 = new TWEEN.Tween(conn11A.position)
			.to({ x: 2, y: 3, z:0 }, millisec)
			.start();
		var tween29 = new TWEEN.Tween(conn12A.position)
			.to({ x: 4, y: 6.5, z:2 }, millisec)
			.start();
		var tween30 = new TWEEN.Tween(conn13A.position)
			.to({ x: 0, y: 6.5, z:2 }, millisec)
			.start();
		var tween31 = new TWEEN.Tween(conn14A.position)
			.to({ x: 16, y: -7.5, z:2.5 }, millisec)
			.start();
		var tween32 = new TWEEN.Tween(conn15A.position)
			.to({ x: 12.5, y: -13, z:3 }, millisec)
			.start();
		var tween33 = new TWEEN.Tween(conn16A.position)
			.to({ x: -2.5, y: -11.5, z:3 }, millisec)
			.start();
	} if (animateGua){
		var millisec = 500;
		var tween1 = new TWEEN.Tween(carbon1G.position)
			.to({ x: 2, y: 0, z:0 }, millisec)
			.start();
		var tween2 = new TWEEN.Tween(carbon2G.position)
			.to({ x: 6.5, y: -3.5, z:0 }, millisec)
			.start();
		var tween3 = new TWEEN.Tween(carbon3G.position)
			.to({ x: 6.5, y: -10, z:0 }, millisec)
			.start();
		var tween4 = new TWEEN.Tween(nitrogen1G.position)
			.to({ x: 2, y: -13, z:0 }, millisec)
			.start();
		var tween5 = new TWEEN.Tween(carbon4G.position)
			.to({ x: -2.5, y: -10, z:0 }, millisec)
			.start();
		var tween6 = new TWEEN.Tween(nitrogen2G.position)
			.to({ x: -2.5, y: -3.5, z:0 }, millisec)
			.start();
		var tween7 = new TWEEN.Tween(nitrogen3G.position)
			.to({ x: 12, y: -2.5, z:0 }, millisec)
			.start();
		var tween8 = new TWEEN.Tween(carbon5G.position)
			.to({ x: 16, y: -6.5, z:0 }, millisec)
			.start();
		var tween9 = new TWEEN.Tween(nitrogen4G.position)
			.to({ x: 12.5, y: -11.5, z:0 }, millisec)
			.start();
		var tween10 = new TWEEN.Tween(oxygen1G.position)
			.to({ x: 2, y: 6, z:0 }, millisec)
			.start();
		var tween11 = new TWEEN.Tween(hydrogen1G.position)
			.to({ x: 16, y: -8.5, z:5.5 }, millisec)
			.start();
		var tween12 = new TWEEN.Tween(hydrogen2G.position)
			.to({ x: 12.5, y: -14.5, z:5.5 }, millisec)
			.start();
		var tween13 = new TWEEN.Tween(nitrogen5G.position)
			.to({ x: -2.5, y: -13, z:5.5 }, millisec)
			.start();
		var tween16 = new TWEEN.Tween(hydrogen3G.position)
			.to({ x: 2, y: -15, z:8.5 }, millisec)
			.start();
		var tween17 = new TWEEN.Tween(hydrogen4G.position)
			.to({ x: -6.5, y: -15, z:8.5 }, millisec)
			.start();
		var tween18 = new TWEEN.Tween(hydrogen5G.position)
			.to({ x: -2.5, y: -5.5, z:5.5 }, millisec)
			.start();

		var tween19 = new TWEEN.Tween(conn1G.position)
			.to({ x: 4.7, y: -2, z:0 }, millisec)
			.start();
		var tween20 = new TWEEN.Tween(conn2G.position)
			.to({ x: 6.5, y: -7, z:0 }, millisec)
			.start();
		var tween21 = new TWEEN.Tween(conn3G.position)
			.to({ x: 4.7, y: -12, z:0 }, millisec)
			.start();
		var tween22 = new TWEEN.Tween(conn4G.position)
			.to({ x: -1, y: -12, z:0 }, millisec)
			.start();
		var tween23 = new TWEEN.Tween(conn5G.position)
			.to({ x: -2.5, y: -7, z:0 }, millisec)
			.start();
		var tween24 = new TWEEN.Tween(conn6G.position)
			.to({ x: 0, y: -1.5, z:0 }, millisec)
			.start();
		var tween25 = new TWEEN.Tween(conn7G.position)
			.to({ x: 9, y: -3, z:0 }, millisec)
			.start();
		var tween26 = new TWEEN.Tween(conn8G.position)
			.to({ x: 14.5, y: -4.5, z:0 }, millisec)
			.start();
		var tween27 = new TWEEN.Tween(conn9G.position)
			.to({ x: 14.5, y: -9.5, z:0 }, millisec)
			.start();
		var tween28 = new TWEEN.Tween(conn10G.position)
			.to({ x: 9.5, y: -11, z:0 }, millisec)
			.start();
		var tween29 = new TWEEN.Tween(conn11G.position)
			.to({ x: 2, y: 3, z:0 }, millisec)
			.start();
		var tween30 = new TWEEN.Tween(conn12G.position)
			.to({ x: 16, y: -7, z:2.5 }, millisec)
			.start();
		var tween31 = new TWEEN.Tween(conn13G.position)
			.to({ x: 12.5, y: -13, z:3 }, millisec)
			.start();
		var tween32 = new TWEEN.Tween(conn14G.position)
			.to({ x: -2.5, y: -11.5, z:3 }, millisec)
			.start();
		var tween33 = new TWEEN.Tween(conn15G.position)
			.to({ x: -5, y: -13.5, z:7 }, millisec)
			.start();
		var tween34 = new TWEEN.Tween(conn16G.position)
			.to({ x: 0, y: -13.5, z:6.5 }, millisec)
			.start();
		var tween35 = new TWEEN.Tween(conn17G.position)
			.to({ x: -2.5, y: -4.5, z:3 }, millisec)
			.start();
	} if (animateThy){
		var millisec = 500;
		var tween1 = new TWEEN.Tween(carbon1T.position)
			.to({ x: 2, y: 0, z:0 }, millisec)
			.start();
		var tween2 = new TWEEN.Tween(carbon2T.position)
			.to({ x: 6.5, y: -3.5, z:0 }, millisec)
			.start();
		var tween3 = new TWEEN.Tween(carbon3T.position)
			.to({ x: 6.5, y: -10, z:0 }, millisec)
			.start();
		var tween4 = new TWEEN.Tween(nitrogen1T.position)
			.to({ x: 2, y: -13, z:0 }, millisec)
			.start();
		var tween5 = new TWEEN.Tween(carbon4T.position)
			.to({ x: -2.5, y: -10, z:0 }, millisec)
			.start();
		var tween6 = new TWEEN.Tween(nitrogen2T.position)
			.to({ x: -2.5, y: -3.5, z:0 }, millisec)
			.start();
		var tween7 = new TWEEN.Tween(oxygen1T.position)
			.to({ x: 2, y: 6, z:0 }, millisec)
			.start();
		var tween8 = new TWEEN.Tween(carbon5T.position)
			.to({ x: 7, y: 0.5, z:5 }, millisec)
			.start();
		var tween9 = new TWEEN.Tween(hydrogen1T.position)
			.to({ x: 2, y: 2, z:8 }, millisec)
			.start();
		var tween10 = new TWEEN.Tween(hydrogen2T.position)
			.to({ x: 7.5, y: 0, z:11 }, millisec)
			.start();
		var tween11 = new TWEEN.Tween(hydrogen3T.position)
			.to({ x: 11, y: 3, z:3 }, millisec)
			.start();
		var tween12 = new TWEEN.Tween(hydrogen4T.position)
			.to({ x: 7, y: -13, z:5 }, millisec)
			.start();
		var tween13 = new TWEEN.Tween(hydrogen5T.position)
			.to({ x: 2, y: -19, z:0 }, millisec)
			.start();
		var tween16 = new TWEEN.Tween(oxygen2T.position)
			.to({ x: -3, y: -12.5, z:5 }, millisec)
			.start();
		var tween17 = new TWEEN.Tween(hydrogen6T.position)
			.to({ x: -3, y: 0.5, z:5 }, millisec)
			.start();

		var tween18 = new TWEEN.Tween(conn1T.position)
			.to({ x: 4.7, y: -2, z:0 }, millisec)
			.start();
		var tween19 = new TWEEN.Tween(conn2T.position)
			.to({ x: 6.5, y: -7, z:0 }, millisec)
			.start();
		var tween20 = new TWEEN.Tween(conn3T.position)
			.to({ x: 4.7, y: -12, z:0 }, millisec)
			.start();
		var tween21 = new TWEEN.Tween(conn4T.position)
			.to({ x: -1, y: -12, z:0 }, millisec)
			.start();
		var tween22 = new TWEEN.Tween(conn5T.position)
			.to({ x: -2.5, y: -7, z:0 }, millisec)
			.start();
		var tween23 = new TWEEN.Tween(conn6T.position)
			.to({ x: 0, y: -1.5, z:0 }, millisec)
			.start();
		var tween24 = new TWEEN.Tween(conn7T.position)
			.to({ x: 2, y: 3, z:0 }, millisec)
			.start();
		var tween25 = new TWEEN.Tween(conn8T.position)
			.to({ x: 6.5, y: -1.5, z:2.5 }, millisec)
			.start();
		var tween26 = new TWEEN.Tween(conn9T.position)
			.to({ x: 4.5, y: 1.5, z:6 }, millisec)
			.start();
		var tween27 = new TWEEN.Tween(conn10T.position)
			.to({ x: 7.5, y: 0.5, z:8 }, millisec)
			.start();
		var tween28 = new TWEEN.Tween(conn11T.position)
			.to({ x: 9.5, y: 2, z:4 }, millisec)
			.start();
		var tween29 = new TWEEN.Tween(conn12T.position)
			.to({ x: 7, y: -11.5, z:2.5 }, millisec)
			.start();
		var tween30 = new TWEEN.Tween(conn13T.position)
			.to({ x: 2, y: -16, z:0 }, millisec)
			.start();
		var tween31 = new TWEEN.Tween(conn14T.position)
			.to({ x: -3, y: -11.5, z:2.5 }, millisec)
			.start();
		var tween32 = new TWEEN.Tween(conn15T.position)
			.to({ x: -3, y: -1.5, z:2.5 }, millisec)
			.start();
	} if (animateUra){
		var millisec = 500;
		var tween1 = new TWEEN.Tween(carbon1U.position)
			.to({ x: 2, y: 0, z:0 }, millisec)
			.start();
		var tween2 = new TWEEN.Tween(nitrogen1U.position)
			.to({ x: 6.5, y: -3.5, z:0 }, millisec)
			.start();
		var tween3 = new TWEEN.Tween(carbon2U.position)
			.to({ x: 6.5, y: -10, z:0 }, millisec)
			.start();
		var tween4 = new TWEEN.Tween(nitrogen2U.position)
			.to({ x: 2, y: -13, z:0 }, millisec)
			.start();
		var tween5 = new TWEEN.Tween(carbon3U.position)
			.to({ x: -2.5, y: -10, z:0 }, millisec)
			.start();
		var tween6 = new TWEEN.Tween(carbon4U.position)
			.to({ x: -2.5, y: -3.5, z:0 }, millisec)
			.start();
		var tween7 = new TWEEN.Tween(oxygen1U.position)
			.to({ x: 2, y: 6, z:0 }, millisec)
			.start();
		var tween8 = new TWEEN.Tween(hydrogen1U.position)
			.to({ x: 7, y: 0.5, z:5 }, millisec)
			.start();
		var tween9 = new TWEEN.Tween(oxygen2U.position)
			.to({ x: 7, y: -13, z:5 }, millisec)
			.start();
		var tween10 = new TWEEN.Tween(hydrogen2U.position)
			.to({ x: 2, y: -19, z:0 }, millisec)
			.start();
		var tween11 = new TWEEN.Tween(hydrogen3U.position)
			.to({ x: -3, y: -12.5, z:5 }, millisec)
			.start();
		var tween12 = new TWEEN.Tween(hydrogen4U.position)
			.to({ x: -3, y: 0.5, z:5 }, millisec)
			.start();

		var tween13 = new TWEEN.Tween(conn1U.position)
			.to({ x: 4.7, y: -2, z:0 }, millisec)
			.start();
		var tween16 = new TWEEN.Tween(conn2U.position)
			.to({ x: 6.5, y: -7, z:0 }, millisec)
			.start();
		var tween17 = new TWEEN.Tween(conn3U.position)
			.to({ x: 4.7, y: -12, z:0 }, millisec)
			.start();
		var tween18 = new TWEEN.Tween(conn4U.position)
			.to({ x: -1, y: -12, z:0 }, millisec)
			.start();
		var tween19 = new TWEEN.Tween(conn5U.position)
			.to({ x: -2.5, y: -7, z:0 }, millisec)
			.start();
		var tween20 = new TWEEN.Tween(conn6U.position)
			.to({ x: 0, y: -1.5, z:0 }, millisec)
			.start();
		var tween21 = new TWEEN.Tween(conn7U.position)
			.to({ x: 2, y: 3, z:0 }, millisec)
			.start();
		var tween22 = new TWEEN.Tween(conn8U.position)
			.to({ x: 6.5, y: -1.5, z:2.5 }, millisec)
			.start();
		var tween23 = new TWEEN.Tween(conn9U.position)
			.to({ x: 7, y: -11.5, z:2.5 }, millisec)
			.start();
		var tween24 = new TWEEN.Tween(conn10U.position)
			.to({ x: 2, y: -16, z:0 }, millisec)
			.start();
		var tween25 = new TWEEN.Tween(conn11U.position)
			.to({ x: -3, y: -11.5, z:2.5 }, millisec)
			.start();
		var tween26 = new TWEEN.Tween(conn12U.position)
			.to({ x: -3, y: -1.5, z:2.5 }, millisec)
			.start();
	} if (animateDNA){
		var tween1 = new TWEEN.Tween(adenineTubeDNA1.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween2 = new TWEEN.Tween(thymineTubeDNA1.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween3 = new TWEEN.Tween(guanineTubeDNA2.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween4 = new TWEEN.Tween(cytosineTubeDNA2.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween5 = new TWEEN.Tween(thymineTubeDNA3.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween6 = new TWEEN.Tween(adenineTubeDNA3.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween7 = new TWEEN.Tween(cytosineTubeDNA4.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween8 = new TWEEN.Tween(guanineTubeDNA4.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween9 = new TWEEN.Tween(adenineTubeDNA5.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween10 = new TWEEN.Tween(thymineTubeDNA5.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween11 = new TWEEN.Tween(guanineTubeDNA6.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween12 = new TWEEN.Tween(cytosineTubeDNA6.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween13 = new TWEEN.Tween(thymineTubeDNA7.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween14 = new TWEEN.Tween(adenineTubeDNA7.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween15 = new TWEEN.Tween(cytosineTubeDNA8.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween16 = new TWEEN.Tween(guanineTubeDNA8.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween17 = new TWEEN.Tween(adenineTubeDNA9.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween18 = new TWEEN.Tween(thymineTubeDNA9.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween19 = new TWEEN.Tween(guanineTubeDNA10.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween20 = new TWEEN.Tween(cytosineTubeDNA10.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween21 = new TWEEN.Tween(thymineTubeDNA11.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween22 = new TWEEN.Tween(adenineTubeDNA11.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween23 = new TWEEN.Tween(cytosineTubeDNA12.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween24 = new TWEEN.Tween(guanineTubeDNA12.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween25 = new TWEEN.Tween(adenineTubeDNA13.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween26 = new TWEEN.Tween(thymineTubeDNA13.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween27 = new TWEEN.Tween(guanineTubeDNA14.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween28 = new TWEEN.Tween(cytosineTubeDNA14.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween29 = new TWEEN.Tween(thymineTubeDNA15.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween30 = new TWEEN.Tween(adenineTubeDNA15.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween31 = new TWEEN.Tween(cytosineTubeDNA16.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween32 = new TWEEN.Tween(guanineTubeDNA16.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween33 = new TWEEN.Tween(adenineTubeDNA17.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween34 = new TWEEN.Tween(thymineTubeDNA17.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween35 = new TWEEN.Tween(guanineTubeDNA18.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween36 = new TWEEN.Tween(cytosineTubeDNA18.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween37 = new TWEEN.Tween(thymineTubeDNA19.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween38 = new TWEEN.Tween(adenineTubeDNA19.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween39 = new TWEEN.Tween(cytosineTubeDNA20.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween40 = new TWEEN.Tween(guanineTubeDNA20.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween41 = new TWEEN.Tween(adenineTubeDNA21.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween42 = new TWEEN.Tween(thymineTubeDNA21.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween43 = new TWEEN.Tween(guanineTubeDNA22.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween44 = new TWEEN.Tween(cytosineTubeDNA22.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween45 = new TWEEN.Tween(thymineTubeDNA23.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween46 = new TWEEN.Tween(adenineTubeDNA23.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween47 = new TWEEN.Tween(cytosineTubeDNA24.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween48 = new TWEEN.Tween(guanineTubeDNA24.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween49 = new TWEEN.Tween(adenineTubeDNA25.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween50 = new TWEEN.Tween(thymineTubeDNA25.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween51 = new TWEEN.Tween(guanineTubeDNA26.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween52 = new TWEEN.Tween(cytosineTubeDNA26.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween53 = new TWEEN.Tween(thymineTubeDNA27.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween54 = new TWEEN.Tween(adenineTubeDNA27.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween55 = new TWEEN.Tween(cytosineTubeDNA28.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween56 = new TWEEN.Tween(guanineTubeDNA28.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween57 = new TWEEN.Tween(adenineTubeDNA29.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween58 = new TWEEN.Tween(thymineTubeDNA29.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween59 = new TWEEN.Tween(guanineTubeDNA30.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween60 = new TWEEN.Tween(cytosineTubeDNA30.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween61 = new TWEEN.Tween(thymineTubeDNA31.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween62 = new TWEEN.Tween(adenineTubeDNA31.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween63 = new TWEEN.Tween(cytosineTubeDNA32.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween64 = new TWEEN.Tween(guanineTubeDNA32.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween65 = new TWEEN.Tween(adenineTubeDNA33.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween66 = new TWEEN.Tween(thymineTubeDNA33.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween67 = new TWEEN.Tween(guanineTubeDNA34.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween68 = new TWEEN.Tween(cytosineTubeDNA34.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween69 = new TWEEN.Tween(thymineTubeDNA35.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween70 = new TWEEN.Tween(adenineTubeDNA35.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween71 = new TWEEN.Tween(cytosineTubeDNA36.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween72 = new TWEEN.Tween(guanineTubeDNA36.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween73 = new TWEEN.Tween(adenineTubeDNA37.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween74 = new TWEEN.Tween(thymineTubeDNA37.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween75 = new TWEEN.Tween(guanineTubeDNA38.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween76 = new TWEEN.Tween(cytosineTubeDNA38.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween77 = new TWEEN.Tween(thymineTubeDNA39.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween78 = new TWEEN.Tween(adenineTubeDNA39.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();
		var tween79 = new TWEEN.Tween(cytosineTubeDNA40.position)
			.to({ x: -10, y: 0, z:0 }, millisec)
			.start();
		var tween80 = new TWEEN.Tween(guanineTubeDNA40.position)
			.to({ x: 10, y: 0, z:0 }, millisec)
			.start();


		var tweenL1 = new TWEEN.Tween(leftSideDNA1.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL2 = new TWEEN.Tween(leftSideDNA2.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL3 = new TWEEN.Tween(leftSideDNA3.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL4 = new TWEEN.Tween(leftSideDNA4.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL5 = new TWEEN.Tween(leftSideDNA5.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL6 = new TWEEN.Tween(leftSideDNA6.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL7 = new TWEEN.Tween(leftSideDNA7.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL8 = new TWEEN.Tween(leftSideDNA8.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL9 = new TWEEN.Tween(leftSideDNA9.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL10 = new TWEEN.Tween(leftSideDNA10.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL11 = new TWEEN.Tween(leftSideDNA11.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL12 = new TWEEN.Tween(leftSideDNA12.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL13 = new TWEEN.Tween(leftSideDNA13.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL14 = new TWEEN.Tween(leftSideDNA14.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL15 = new TWEEN.Tween(leftSideDNA15.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL16 = new TWEEN.Tween(leftSideDNA16.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL17 = new TWEEN.Tween(leftSideDNA17.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL18 = new TWEEN.Tween(leftSideDNA18.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL19 = new TWEEN.Tween(leftSideDNA19.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL20 = new TWEEN.Tween(leftSideDNA20.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL21 = new TWEEN.Tween(leftSideDNA21.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL22 = new TWEEN.Tween(leftSideDNA22.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL23 = new TWEEN.Tween(leftSideDNA23.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL24 = new TWEEN.Tween(leftSideDNA24.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL25 = new TWEEN.Tween(leftSideDNA25.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL26 = new TWEEN.Tween(leftSideDNA26.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL27 = new TWEEN.Tween(leftSideDNA27.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL28 = new TWEEN.Tween(leftSideDNA28.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL29 = new TWEEN.Tween(leftSideDNA29.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL30 = new TWEEN.Tween(leftSideDNA30.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL31 = new TWEEN.Tween(leftSideDNA31.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL32 = new TWEEN.Tween(leftSideDNA32.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL33 = new TWEEN.Tween(leftSideDNA33.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL34 = new TWEEN.Tween(leftSideDNA34.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL35 = new TWEEN.Tween(leftSideDNA35.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL36 = new TWEEN.Tween(leftSideDNA36.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL37 = new TWEEN.Tween(leftSideDNA37.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL38 = new TWEEN.Tween(leftSideDNA38.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL39 = new TWEEN.Tween(leftSideDNA39.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();
		var tweenL40 = new TWEEN.Tween(leftSideDNA40.position)
			.to({ x: -13, y: 0, z:0 }, millisec)
			.start();

		var tweenR1 = new TWEEN.Tween(rightSideDNA1.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR2 = new TWEEN.Tween(rightSideDNA2.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR3 = new TWEEN.Tween(rightSideDNA3.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR4 = new TWEEN.Tween(rightSideDNA4.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR5 = new TWEEN.Tween(rightSideDNA5.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR6 = new TWEEN.Tween(rightSideDNA6.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR7 = new TWEEN.Tween(rightSideDNA7.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR8 = new TWEEN.Tween(rightSideDNA8.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR9 = new TWEEN.Tween(rightSideDNA9.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR10 = new TWEEN.Tween(rightSideDNA10.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR11 = new TWEEN.Tween(rightSideDNA11.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR12 = new TWEEN.Tween(rightSideDNA12.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR13 = new TWEEN.Tween(rightSideDNA13.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR14 = new TWEEN.Tween(rightSideDNA14.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR15 = new TWEEN.Tween(rightSideDNA15.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR16 = new TWEEN.Tween(rightSideDNA16.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR17 = new TWEEN.Tween(rightSideDNA17.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR18 = new TWEEN.Tween(rightSideDNA18.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR19 = new TWEEN.Tween(rightSideDNA19.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR20 = new TWEEN.Tween(rightSideDNA20.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR21 = new TWEEN.Tween(rightSideDNA21.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR22 = new TWEEN.Tween(rightSideDNA22.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR23 = new TWEEN.Tween(rightSideDNA23.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR24 = new TWEEN.Tween(rightSideDNA24.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR25 = new TWEEN.Tween(rightSideDNA25.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR26 = new TWEEN.Tween(rightSideDNA26.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR27 = new TWEEN.Tween(rightSideDNA27.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR28 = new TWEEN.Tween(rightSideDNA28.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR29 = new TWEEN.Tween(rightSideDNA29.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR30 = new TWEEN.Tween(rightSideDNA30.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR31 = new TWEEN.Tween(rightSideDNA31.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR32 = new TWEEN.Tween(rightSideDNA32.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR33 = new TWEEN.Tween(rightSideDNA33.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR34 = new TWEEN.Tween(rightSideDNA34.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR35 = new TWEEN.Tween(rightSideDNA35.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR36 = new TWEEN.Tween(rightSideDNA36.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR37 = new TWEEN.Tween(rightSideDNA37.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR38 = new TWEEN.Tween(rightSideDNA38.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR39 = new TWEEN.Tween(rightSideDNA39.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();
		var tweenR40 = new TWEEN.Tween(rightSideDNA40.position)
			.to({ x: 13, y: 0, z:0 }, millisec)
			.start();

		setTimeout(function(){ animateDNA = false; animateDNA2 = true; }, 7000);

	} if (animateDNA2) {
		var tween1 = new TWEEN.Tween(adenineTubeDNA1.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween2 = new TWEEN.Tween(thymineTubeDNA1.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween3 = new TWEEN.Tween(guanineTubeDNA2.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween4 = new TWEEN.Tween(cytosineTubeDNA2.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween5 = new TWEEN.Tween(thymineTubeDNA3.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween6 = new TWEEN.Tween(adenineTubeDNA3.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween7 = new TWEEN.Tween(cytosineTubeDNA4.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween8 = new TWEEN.Tween(guanineTubeDNA4.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween9 = new TWEEN.Tween(adenineTubeDNA5.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween10 = new TWEEN.Tween(thymineTubeDNA5.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween11 = new TWEEN.Tween(guanineTubeDNA6.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween12 = new TWEEN.Tween(cytosineTubeDNA6.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween13 = new TWEEN.Tween(thymineTubeDNA7.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween14 = new TWEEN.Tween(adenineTubeDNA7.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween15 = new TWEEN.Tween(cytosineTubeDNA8.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween16 = new TWEEN.Tween(guanineTubeDNA8.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween17 = new TWEEN.Tween(adenineTubeDNA9.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween18 = new TWEEN.Tween(thymineTubeDNA9.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween19 = new TWEEN.Tween(guanineTubeDNA10.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween20 = new TWEEN.Tween(cytosineTubeDNA10.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween21 = new TWEEN.Tween(thymineTubeDNA11.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween22 = new TWEEN.Tween(adenineTubeDNA11.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween23 = new TWEEN.Tween(cytosineTubeDNA12.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween24 = new TWEEN.Tween(guanineTubeDNA12.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween25 = new TWEEN.Tween(adenineTubeDNA13.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween26 = new TWEEN.Tween(thymineTubeDNA13.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween27 = new TWEEN.Tween(guanineTubeDNA14.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween28 = new TWEEN.Tween(cytosineTubeDNA14.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween29 = new TWEEN.Tween(thymineTubeDNA15.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween30 = new TWEEN.Tween(adenineTubeDNA15.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween31 = new TWEEN.Tween(cytosineTubeDNA16.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween32 = new TWEEN.Tween(guanineTubeDNA16.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween33 = new TWEEN.Tween(adenineTubeDNA17.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween34 = new TWEEN.Tween(thymineTubeDNA17.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween35 = new TWEEN.Tween(guanineTubeDNA18.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween36 = new TWEEN.Tween(cytosineTubeDNA18.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween37 = new TWEEN.Tween(thymineTubeDNA19.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween38 = new TWEEN.Tween(adenineTubeDNA19.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween39 = new TWEEN.Tween(cytosineTubeDNA20.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween40 = new TWEEN.Tween(guanineTubeDNA20.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween41 = new TWEEN.Tween(adenineTubeDNA21.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween42 = new TWEEN.Tween(thymineTubeDNA21.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween43 = new TWEEN.Tween(guanineTubeDNA22.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween44 = new TWEEN.Tween(cytosineTubeDNA22.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween45 = new TWEEN.Tween(thymineTubeDNA23.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween46 = new TWEEN.Tween(adenineTubeDNA23.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween47 = new TWEEN.Tween(cytosineTubeDNA24.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween48 = new TWEEN.Tween(guanineTubeDNA24.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween49 = new TWEEN.Tween(adenineTubeDNA25.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween50 = new TWEEN.Tween(thymineTubeDNA25.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween51 = new TWEEN.Tween(guanineTubeDNA26.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween52 = new TWEEN.Tween(cytosineTubeDNA26.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween53 = new TWEEN.Tween(thymineTubeDNA27.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween54 = new TWEEN.Tween(adenineTubeDNA27.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween55 = new TWEEN.Tween(cytosineTubeDNA28.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween56 = new TWEEN.Tween(guanineTubeDNA28.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween57 = new TWEEN.Tween(adenineTubeDNA29.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween58 = new TWEEN.Tween(thymineTubeDNA29.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween59 = new TWEEN.Tween(guanineTubeDNA30.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween60 = new TWEEN.Tween(cytosineTubeDNA30.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween61 = new TWEEN.Tween(thymineTubeDNA31.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween62 = new TWEEN.Tween(adenineTubeDNA31.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween63 = new TWEEN.Tween(cytosineTubeDNA32.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween64 = new TWEEN.Tween(guanineTubeDNA32.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween65 = new TWEEN.Tween(adenineTubeDNA33.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween66 = new TWEEN.Tween(thymineTubeDNA33.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween67 = new TWEEN.Tween(guanineTubeDNA34.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween68 = new TWEEN.Tween(cytosineTubeDNA34.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween69 = new TWEEN.Tween(thymineTubeDNA35.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween70 = new TWEEN.Tween(adenineTubeDNA35.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween71 = new TWEEN.Tween(cytosineTubeDNA36.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween72 = new TWEEN.Tween(guanineTubeDNA36.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween73 = new TWEEN.Tween(adenineTubeDNA37.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween74 = new TWEEN.Tween(thymineTubeDNA37.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween75 = new TWEEN.Tween(guanineTubeDNA38.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween76 = new TWEEN.Tween(cytosineTubeDNA38.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween77 = new TWEEN.Tween(thymineTubeDNA39.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween78 = new TWEEN.Tween(adenineTubeDNA39.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();
		var tween79 = new TWEEN.Tween(cytosineTubeDNA40.position)
			.to({ x: -3, y: 0, z:0 }, millisec)
			.start();
		var tween80 = new TWEEN.Tween(guanineTubeDNA40.position)
			.to({ x: 3, y: 0, z:0 }, millisec)
			.start();


		var tweenL1 = new TWEEN.Tween(leftSideDNA1.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL2 = new TWEEN.Tween(leftSideDNA2.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL3 = new TWEEN.Tween(leftSideDNA3.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL4 = new TWEEN.Tween(leftSideDNA4.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL5 = new TWEEN.Tween(leftSideDNA5.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL6 = new TWEEN.Tween(leftSideDNA6.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL7 = new TWEEN.Tween(leftSideDNA7.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL8 = new TWEEN.Tween(leftSideDNA8.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL9 = new TWEEN.Tween(leftSideDNA9.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL10 = new TWEEN.Tween(leftSideDNA10.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL11 = new TWEEN.Tween(leftSideDNA11.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL12 = new TWEEN.Tween(leftSideDNA12.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL13 = new TWEEN.Tween(leftSideDNA13.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL14 = new TWEEN.Tween(leftSideDNA14.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL15 = new TWEEN.Tween(leftSideDNA15.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL16 = new TWEEN.Tween(leftSideDNA16.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL17 = new TWEEN.Tween(leftSideDNA17.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL18 = new TWEEN.Tween(leftSideDNA18.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL19 = new TWEEN.Tween(leftSideDNA19.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL20 = new TWEEN.Tween(leftSideDNA20.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL21 = new TWEEN.Tween(leftSideDNA21.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL22 = new TWEEN.Tween(leftSideDNA22.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL23 = new TWEEN.Tween(leftSideDNA23.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL24 = new TWEEN.Tween(leftSideDNA24.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL25 = new TWEEN.Tween(leftSideDNA25.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL26 = new TWEEN.Tween(leftSideDNA26.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL27 = new TWEEN.Tween(leftSideDNA27.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL28 = new TWEEN.Tween(leftSideDNA28.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL29 = new TWEEN.Tween(leftSideDNA29.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL30 = new TWEEN.Tween(leftSideDNA30.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL31 = new TWEEN.Tween(leftSideDNA31.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL32 = new TWEEN.Tween(leftSideDNA32.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL33 = new TWEEN.Tween(leftSideDNA33.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL34 = new TWEEN.Tween(leftSideDNA34.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL35 = new TWEEN.Tween(leftSideDNA35.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL36 = new TWEEN.Tween(leftSideDNA36.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL37 = new TWEEN.Tween(leftSideDNA37.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL38 = new TWEEN.Tween(leftSideDNA38.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL39 = new TWEEN.Tween(leftSideDNA39.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();
		var tweenL40 = new TWEEN.Tween(leftSideDNA40.position)
			.to({ x: -6, y: 0, z:0 }, millisec)
			.start();

		var tweenR1 = new TWEEN.Tween(rightSideDNA1.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR2 = new TWEEN.Tween(rightSideDNA2.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR3 = new TWEEN.Tween(rightSideDNA3.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR4 = new TWEEN.Tween(rightSideDNA4.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR5 = new TWEEN.Tween(rightSideDNA5.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR6 = new TWEEN.Tween(rightSideDNA6.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR7 = new TWEEN.Tween(rightSideDNA7.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR8 = new TWEEN.Tween(rightSideDNA8.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR9 = new TWEEN.Tween(rightSideDNA9.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR10 = new TWEEN.Tween(rightSideDNA10.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR11 = new TWEEN.Tween(rightSideDNA11.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR12 = new TWEEN.Tween(rightSideDNA12.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR13 = new TWEEN.Tween(rightSideDNA13.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR14 = new TWEEN.Tween(rightSideDNA14.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR15 = new TWEEN.Tween(rightSideDNA15.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR16 = new TWEEN.Tween(rightSideDNA16.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR17 = new TWEEN.Tween(rightSideDNA17.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR18 = new TWEEN.Tween(rightSideDNA18.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR19 = new TWEEN.Tween(rightSideDNA19.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR20 = new TWEEN.Tween(rightSideDNA20.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR21 = new TWEEN.Tween(rightSideDNA21.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR22 = new TWEEN.Tween(rightSideDNA22.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR23 = new TWEEN.Tween(rightSideDNA23.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR24 = new TWEEN.Tween(rightSideDNA24.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR25 = new TWEEN.Tween(rightSideDNA25.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR26 = new TWEEN.Tween(rightSideDNA26.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR27 = new TWEEN.Tween(rightSideDNA27.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR28 = new TWEEN.Tween(rightSideDNA28.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR29 = new TWEEN.Tween(rightSideDNA29.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR30 = new TWEEN.Tween(rightSideDNA30.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR31 = new TWEEN.Tween(rightSideDNA31.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR32 = new TWEEN.Tween(rightSideDNA32.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR33 = new TWEEN.Tween(rightSideDNA33.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR34 = new TWEEN.Tween(rightSideDNA34.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR35 = new TWEEN.Tween(rightSideDNA35.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR36 = new TWEEN.Tween(rightSideDNA36.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR37 = new TWEEN.Tween(rightSideDNA37.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR38 = new TWEEN.Tween(rightSideDNA38.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR39 = new TWEEN.Tween(rightSideDNA39.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();
		var tweenR40 = new TWEEN.Tween(rightSideDNA40.position)
			.to({ x: 6, y: 0, z:0 }, millisec)
			.start();

		setTimeout(function(){ animateDNA2 = false; }, 7000);
	}
	
	
	
	renderer.render(scene, camera);
	orbitControl.update();
	requestAnimationFrame(render);
	TWEEN.update();
};
render(); 



