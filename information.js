var informationDNA = document.getElementById("infoDNA");
var informationRNA = document.getElementById("infoRNA");
var informationAdenine = document.getElementById("infoAdenine");
var informationThymine = document.getElementById("infoThymine");
var informationCytosine = document.getElementById("infoCytosine");
var informationGuanine = document.getElementById("infoGuanine");
var informationUracil = document.getElementById("infoUracil");


/* Options */
var isDna = true;
var isRna = false;
var isAdenine = false;
var isThymine = false;
var isCytosine = false;
var isGuanine = false;
var isUracil = false;

function resizeWindow() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth/2.5, window.innerHeight );
  }


/* Scene */
var scene = new THREE.Scene();

/* Camera */
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 ); 
camera.position.z = 60;
scene.add(camera);

/* Renderer */
var renderer = new THREE.WebGLRenderer( {alpha: true} );
renderer.setClearColor( 0x000000, 0);
renderer.setSize( window.innerWidth/2.25, window.innerHeight );
//document.body.appendChild( renderer.domElement );
document.getElementById("myScene").appendChild( renderer.domElement );
window.addEventListener( 'resize', resizeWindow, false );

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

var adenineMolecule = new THREE.Object3D();
var thymineMolecule = new THREE.Object3D();
var guanineMolecule = new THREE.Object3D();
var cytosineMolecule = new THREE.Object3D();
var uracilMolecule = new THREE.Object3D();

/* Building DNA and RNA */
for (var i = 0; i <= 40; i++) {
	if (i%4 ==0) {
		var adenineTubeDNA = new THREE.Mesh(tubeGeometry, adenineMaterial);
		adenineTubeDNA.rotation.z = 90 * Math.PI/180; 
		adenineTubeDNA.position.x = -3;

		var thymineTubeDNA = new THREE.Mesh(tubeGeometry, thymineMaterial );
		thymineTubeDNA.rotation.z = 90 * Math.PI/180;
		thymineTubeDNA.position.x = 3;

		// RNA
		var adenineTubeRNA = new THREE.Mesh(tubeGeometry, adenineMaterial);
		adenineTubeRNA.rotation.z = 90 * Math.PI/180; 
		adenineTubeRNA.position.x = -3;


	} else if (i%4 ==1) {
		var guanineTubeDNA = new THREE.Mesh(tubeGeometry, guanineMaterial);
		guanineTubeDNA.rotation.z = 90 * Math.PI/180; 
		guanineTubeDNA.position.x = -3;

		var cytosineTubeDNA = new THREE.Mesh(tubeGeometry, cytosineMaterial);
		cytosineTubeDNA.rotation.z = 90 * Math.PI/180; 
		cytosineTubeDNA.position.x = 3;

		// RNA
		var guanineTubeRNA = new THREE.Mesh(tubeGeometry, guanineMaterial);
		guanineTubeRNA.rotation.z = 90 * Math.PI/180; 
		guanineTubeRNA.position.x = -3;
	} else if (i%4 ==2) {
		var thymineTubeDNA = new THREE.Mesh(tubeGeometry, thymineMaterial );
		thymineTubeDNA.rotation.z = 90 * Math.PI/180;
		thymineTubeDNA.position.x = -3;

		var adenineTubeDNA = new THREE.Mesh(tubeGeometry, adenineMaterial);
		adenineTubeDNA.rotation.z = 90 * Math.PI/180; 
		adenineTubeDNA.position.x = 3;

		// RNA
		var uracilTubeRNA = new THREE.Mesh(tubeGeometry, uracilMaterial );
		uracilTubeRNA.rotation.z = 90 * Math.PI/180;
		uracilTubeRNA.position.x = -3;

	} else if (i%4 ==3) {
		var cytosineTubeDNA = new THREE.Mesh(tubeGeometry, cytosineMaterial);
		cytosineTubeDNA.rotation.z = 90 * Math.PI/180; 
		cytosineTubeDNA.position.x = -3;

		var guanineTubeDNA = new THREE.Mesh(tubeGeometry, guanineMaterial);
		guanineTubeDNA.rotation.z = 90 * Math.PI/180; 
		guanineTubeDNA.position.x = 3;

		// RNA
		var cytosineTubeRNA = new THREE.Mesh(tubeGeometry, cytosineMaterial);
		cytosineTubeRNA.rotation.z = 90 * Math.PI/180; 
		cytosineTubeRNA.position.x = -3;
	}

	var rightSideDNA = new THREE.Mesh( ballGeometry, sidesMaterial );
	rightSideDNA.position.x = 6;
	var leftSideDNA = new THREE.Mesh( ballGeometry, sidesMaterial );
	leftSideDNA.position.x = -6;

	var leftSideRNA = new THREE.Mesh( ballGeometry, sidesMaterial );
	leftSideRNA.position.x = -6;

	var rowDNA = new THREE.Object3D();
	var rowRNA = new THREE.Object3D();

	if (i%4 ==0){
		rowDNA.add(adenineTubeDNA);
		rowDNA.add(thymineTubeDNA);

		rowRNA.add(adenineTubeRNA);
	} else if (i%4 ==1) {
		rowDNA.add(guanineTubeDNA);
		rowDNA.add(cytosineTubeDNA);

		rowRNA.add(guanineTubeRNA);
	} else if (i%4 ==2) {
		rowDNA.add(thymineTubeDNA);
		rowDNA.add(adenineTubeDNA);

		rowRNA.add(uracilTubeRNA);
	} else if (i%4 ==3) {
		rowDNA.add(cytosineTubeDNA);
		rowDNA.add(guanineTubeDNA);

		rowRNA.add(cytosineTubeRNA);
	}


	rowDNA.add(rightSideDNA);
	rowDNA.add(leftSideDNA);
	rowRNA.add(leftSideRNA);

	rowDNA.position.y = i*1.5;
	rowDNA.rotation.y = 20*i * Math.PI/180;
	rowRNA.position.y = i*1.5;
	rowRNA.rotation.y = 20*i * Math.PI/180;

	dna.add(rowDNA);
	rna.add(rowRNA);

};

dna.position.x = -40; //-12
dna.position.y = -30;

rna.position.x = -40;
rna.position.y = -30; //-12



/* Lights */
var ambient = new THREE.AmbientLight(0xFFFFFF, 0.3);
ambient.position.x = 30; 
ambient.position.y = 0; 
ambient.position.z = 50; 
scene.add(ambient);

var light = new THREE.SpotLight(0xffffff, 2.0, 500);
light.position.x = -40; 
light.position.y = 50; 
light.position.z = 10;  //10 
if (isDna){
	light.target = dna;
} else if (isRna) {
	light.target = rna;
} else if (isAdenine) {
	light.target = adenineMolecule;
} else if (isThymine) {
	light.target = thymineMolecule;
} else if (isCytosine) {
	light.target = cytosineMolecule;
} else if (isGuanine) {
	light.target = guanineMolecule;
} else if (isUracil) {
	light.target = uracilMolecule;
}
scene.add(light);



var render = function () {
	if (isDna){
		/* Removed from the scene */
		scene.remove(rna);
		scene.remove(adenineMolecule);
		scene.remove(thymineMolecule);
		scene.remove(cytosineMolecule);
		scene.remove(guanineMolecule);
		scene.remove(uracilMolecule);

		/* Added to the scene */
		scene.add(dna);

		/* Rotations */
		dna.rotation.y += 0.01;

		/* Div Visibility */
		informationDNA.style.visibility = 'visible';
		informationRNA.style.visibility = 'hidden';
		informationAdenine.style.visibility = 'hidden';
		informationThymine.style.visibility = 'hidden';
		informationCytosine.style.visibility = 'hidden';
		informationGuanine.style.visibility = 'hidden';
		informationUracil.style.visibility = 'hidden';

	} else if (isRna){

		/* Removed from the scene */
		scene.remove(dna);
		scene.remove(adenineMolecule);
		scene.remove(thymineMolecule);
		scene.remove(cytosineMolecule);
		scene.remove(guanineMolecule);
		scene.remove(uracilMolecule);

		/* Added to the scene */
		scene.add(rna);

		/* Rotations */
		rna.rotation.y += 0.01;

		/* Div Visibility */
		informationRNA.style.visibility = 'visible';
		informationDNA.style.visibility = 'hidden';
		informationAdenine.style.visibility = 'hidden';
		informationThymine.style.visibility = 'hidden';
		informationCytosine.style.visibility = 'hidden';
		informationGuanine.style.visibility = 'hidden';
		informationUracil.style.visibility = 'hidden';

	} else if (isAdenine){

		/* Removed from the scene */
		scene.remove(dna);
		scene.remove(rna);
		scene.remove(thymineMolecule);
		scene.remove(cytosineMolecule);
		scene.remove(guanineMolecule);
		scene.remove(uracilMolecule);

		/* Added to the scene */
		scene.add(adenineMolecule);

		/* Rotations */
		adenineMolecule.rotation.y += 0.01;

		/* Div Visibility */
		informationRNA.style.visibility = 'hidden';
		informationDNA.style.visibility = 'hidden';
		informationAdenine.style.visibility = 'visible';
		informationThymine.style.visibility = 'hidden';
		informationCytosine.style.visibility = 'hidden';
		informationGuanine.style.visibility = 'hidden';
		informationUracil.style.visibility = 'hidden';

	} else if (isThymine){

		/* Removed from the scene */
		scene.remove(dna);
		scene.remove(rna);
		scene.remove(adenineMolecule);
		scene.remove(cytosineMolecule);
		scene.remove(guanineMolecule);
		scene.remove(uracilMolecule);

		/* Added to the scene */
		scene.add(thymineMolecule);

		/* Rotations */
		thymineMolecule.rotation.y += 0.01;

		/* Div Visibility */
		informationRNA.style.visibility = 'hidden';
		informationDNA.style.visibility = 'hidden';
		informationAdenine.style.visibility = 'hidden';
		informationThymine.style.visibility = 'visible';
		informationCytosine.style.visibility = 'hidden';
		informationGuanine.style.visibility = 'hidden';
		informationUracil.style.visibility = 'hidden';

	} else if (isCytosine){

		/* Removed from the scene */
		scene.remove(dna);
		scene.remove(rna);
		scene.remove(adenineMolecule);
		scene.remove(thymineMolecule);
		scene.remove(guanineMolecule);
		scene.remove(uracilMolecule);

		/* Added to the scene */
		scene.add(cytosineMolecule);

		/* Rotations */
		cytosineMolecule.rotation.y += 0.01;

		/* Div Visibility */
		informationRNA.style.visibility = 'hidden';
		informationDNA.style.visibility = 'hidden';
		informationAdenine.style.visibility = 'hidden';
		informationThymine.style.visibility = 'hidden';
		informationCytosine.style.visibility = 'visible';
		informationGuanine.style.visibility = 'hidden';
		informationUracil.style.visibility = 'hidden';

	} else if (isGuanine){

		/* Removed from the scene */
		scene.remove(dna);
		scene.remove(rna);
		scene.remove(adenineMolecule);
		scene.remove(thymineMolecule);
		scene.remove(cytosineMolecule);
		scene.remove(uracilMolecule);

		/* Added to the scene */
		scene.add(guanineMolecule);

		/* Rotations */
		guanineMolecule.rotation.y += 0.01;

		/* Div Visibility */
		informationRNA.style.visibility = 'hidden';
		informationDNA.style.visibility = 'hidden';
		informationAdenine.style.visibility = 'hidden';
		informationThymine.style.visibility = 'hidden';
		informationCytosine.style.visibility = 'hidden';
		informationGuanine.style.visibility = 'visible';
		informationUracil.style.visibility = 'hidden';

	} else if (isUracil){

		/* Removed from the scene */
		scene.remove(dna);
		scene.remove(rna);
		scene.remove(adenineMolecule);
		scene.remove(thymineMolecule);
		scene.remove(cytosineMolecule);
		scene.remove(guanineMolecule);

		/* Added to the scene */
		scene.add(uracilMolecule);

		/* Rotations */
		uracilMolecule.rotation.y += 0.01;

		/* Div Visibility */
		informationRNA.style.visibility = 'hidden';
		informationDNA.style.visibility = 'hidden';
		informationAdenine.style.visibility = 'hidden';
		informationThymine.style.visibility = 'hidden';
		informationCytosine.style.visibility = 'hidden';
		informationGuanine.style.visibility = 'hidden';
		informationUracil.style.visibility = 'visible';
	}

	
	
	
	renderer.render(scene, camera);
	requestAnimationFrame(render);
};
render(); 



