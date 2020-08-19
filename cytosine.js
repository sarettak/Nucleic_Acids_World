
/* Atoms and connections in Cytosine molecula */

var carbon1 = new THREE.Mesh(ball, brownMat);
var carbon2 = new THREE.Mesh(ball, brownMat);
var carbon3 = new THREE.Mesh(ball, brownMat);
var carbon4 = new THREE.Mesh(ball, brownMat);
var hydrogen1 = new THREE.Mesh(ball, blueMat);
var hydrogen2 = new THREE.Mesh(ball, blueMat);
var hydrogen3 = new THREE.Mesh(ball, blueMat);
var hydrogen4 = new THREE.Mesh(ball, blueMat);
var hydrogen5 = new THREE.Mesh(ball, blueMat);
var nitrogen1 = new THREE.Mesh(ball, whiteMat);
var nitrogen2 = new THREE.Mesh(ball, whiteMat);
var nitrogen3 = new THREE.Mesh(ball, whiteMat);
var oxygen1 = new THREE.Mesh(ball, redMat);
var conn1 = new THREE.Mesh(rect, grayMat);
var conn2 = new THREE.Mesh(rect, grayMat);
var conn3 = new THREE.Mesh(rect, grayMat);
var conn4 = new THREE.Mesh(rect, grayMat);
var conn5 = new THREE.Mesh(rect, grayMat);
var conn6 = new THREE.Mesh(rect, grayMat);
var conn7 = new THREE.Mesh(rect, grayMat);
var conn8 = new THREE.Mesh(rect, grayMat);
var conn9 = new THREE.Mesh(rect, grayMat);
var conn10 = new THREE.Mesh(rect, grayMat);
var conn11 = new THREE.Mesh(rect, grayMat);
var conn12 = new THREE.Mesh(rect, grayMat);
var conn13 = new THREE.Mesh(rect, grayMat);


/* Building Cytosine molecula */

carbon1.rotation.z = 90 * Math.PI/180; 
carbon1.position.x = 2;

conn1.rotation.z = 50 * Math.PI/180; 
conn1.position.x = 4.7;
conn1.position.y = -2;

carbon2.rotation.z = 90 * Math.PI/180; 
carbon2.position.x = 6.5;
carbon2.position.y = -3.5;

conn2.position.x = 6.5;
conn2.position.y = -7.0;

carbon3.rotation.z = 90 * Math.PI/180; 
carbon3.position.x = 6.5;
carbon3.position.y = -10.0;

conn3.rotation.z = 120 * Math.PI/180; 
conn3.position.x = 4.7;
conn3.position.y = -12;

nitrogen1.rotation.z = 90 * Math.PI/180; 
nitrogen1.position.x = 2;
nitrogen1.position.y = -13;

conn4.rotation.z = 50 * Math.PI/180; 
conn4.position.x = -1;
conn4.position.y = -12;

carbon4.rotation.z = 90 * Math.PI/180; 
carbon4.position.x = -2.5;
carbon4.position.y = -10.0;

conn5.position.x = -2.5;
conn5.position.y = -7;

nitrogen2.rotation.z = 90 * Math.PI/180; 
nitrogen2.position.x = -2.5;
nitrogen2.position.y = -3.5;

conn6.rotation.z = 120 * Math.PI/180; 
conn6.position.x = 0;
conn6.position.y = -1.5;

conn7.position.x = 2;
conn7.position.y = 3;

nitrogen3.position.x = 2;
nitrogen3.position.y = 6;

conn8.rotation.z = -140 * Math.PI/180; 
conn8.rotation.y = 180 * Math.PI/180; 
conn8.rotation.x = 60 * Math.PI/180; 
conn8.position.x = 4;
conn8.position.y = 6.5;
conn8.position.z = 2;

hydrogen1.position.x = 6;
hydrogen1.position.y = 7;
hydrogen1.position.z = 3;

conn9.rotation.z = -140 * Math.PI/180; 
conn9.rotation.x = 60 * Math.PI/180; 
conn9.position.x = 0;
conn9.position.y = 6.5;
conn9.position.z = 2;

hydrogen2.position.x = -2;
hydrogen2.position.y = 7;
hydrogen2.position.z = 3;

conn10.rotation.z = 120 * Math.PI/180; 
conn10.rotation.y = 90 * Math.PI/180; 
conn10.position.x = 6.5;
conn10.position.y = -5;
conn10.position.z = 2.5;

hydrogen3.position.x = 6.5;
hydrogen3.position.y = -6.5;
hydrogen3.position.z = 5.5;

conn11.rotation.z = 120 * Math.PI/180; 
conn11.rotation.y = 90 * Math.PI/180; 
conn11.position.x = 6.5;
conn11.position.y = -11.5;
conn11.position.z = 2.5;

hydrogen4.position.x = 6.5;
hydrogen4.position.y = -13;
hydrogen4.position.z = 5.5;

conn12.position.x = 2;
conn12.position.y = -16.5;

hydrogen5.position.x = 2;
hydrogen5.position.y = -19.5;

conn13.rotation.z = 120 * Math.PI/180; 
conn13.rotation.y = 90 * Math.PI/180; 
conn13.position.x = -2.5;
conn13.position.y = -11.5;
conn13.position.z = 2.5;

oxygen1.position.x = -2.5;
oxygen1.position.y = -13;
oxygen1.position.z = 5.5;



cytosineMolecule.add(carbon1);
cytosineMolecule.add(conn1);
cytosineMolecule.add(carbon2);
cytosineMolecule.add(conn2);
cytosineMolecule.add(carbon3);
cytosineMolecule.add(conn3);
cytosineMolecule.add(nitrogen1);
cytosineMolecule.add(conn4);
cytosineMolecule.add(carbon4);
cytosineMolecule.add(conn5);
cytosineMolecule.add(nitrogen2);
cytosineMolecule.add(conn6);
cytosineMolecule.add(conn7);
cytosineMolecule.add(nitrogen3);
cytosineMolecule.add(conn8);
cytosineMolecule.add(hydrogen1);
cytosineMolecule.add(conn9);
cytosineMolecule.add(hydrogen2);
cytosineMolecule.add(conn10);
cytosineMolecule.add(hydrogen3);
cytosineMolecule.add(conn11);
cytosineMolecule.add(hydrogen4);
cytosineMolecule.add(conn12);
cytosineMolecule.add(hydrogen5);
cytosineMolecule.add(conn13);
cytosineMolecule.add(oxygen1);



cytosineMolecule.position.x = -65;
cytosineMolecule.position.y = 10;
cytosineMolecule.position.z = -40;


/* Cytosine's Light */

/*lightCytosine.position.x = 22; 
lightCytosine.position.y = -30; 
lightCytosine.position.z = -20; 
lightCytosine.target = cytosineMolecule;*/


