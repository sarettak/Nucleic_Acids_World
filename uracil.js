
/* Atoms and connections in Uracil molecula */

var carbon1 = new THREE.Mesh(ball, brownMat);
var carbon2 = new THREE.Mesh(ball, brownMat);
var carbon3 = new THREE.Mesh(ball, brownMat);
var carbon4 = new THREE.Mesh(ball, brownMat);
var hydrogen1 = new THREE.Mesh(ball, blueMat);
var hydrogen2 = new THREE.Mesh(ball, blueMat);
var hydrogen3 = new THREE.Mesh(ball, blueMat);
var hydrogen4 = new THREE.Mesh(ball, blueMat);
var nitrogen1 = new THREE.Mesh(ball, whiteMat);
var nitrogen2 = new THREE.Mesh(ball, whiteMat);
var oxygen1 = new THREE.Mesh(ball, redMat);
var oxygen2 = new THREE.Mesh(ball, redMat);
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



/* Building Uracil molecula */

carbon1.rotation.z = 90 * Math.PI/180; 
carbon1.position.x = 2;

conn1.rotation.z = 50 * Math.PI/180; 
conn1.position.x = 4.7;
conn1.position.y = -2;

nitrogen1.rotation.z = 90 * Math.PI/180; 
nitrogen1.position.x = 6.5;
nitrogen1.position.y = -3.5;

conn2.position.x = 6.5;
conn2.position.y = -7.0;

carbon2.rotation.z = 90 * Math.PI/180; 
carbon2.position.x = 6.5;
carbon2.position.y = -10.0;

conn3.rotation.z = 120 * Math.PI/180; 
conn3.position.x = 4.7;
conn3.position.y = -12;

nitrogen2.rotation.z = 90 * Math.PI/180; 
nitrogen2.position.x = 2;
nitrogen2.position.y = -13;

conn4.rotation.z = 50 * Math.PI/180; 
conn4.position.x = -1;
conn4.position.y = -12;

carbon3.rotation.z = 90 * Math.PI/180; 
carbon3.position.x = -2.5;
carbon3.position.y = -10.0;

conn5.position.x = -2.5;
conn5.position.y = -7;

carbon4.rotation.z = 90 * Math.PI/180; 
carbon4.position.x = -2.5;
carbon4.position.y = -3.5;

conn6.rotation.z = 120 * Math.PI/180; 
conn6.position.x = 0;
conn6.position.y = -1.5;

conn7.position.x = 2;
conn7.position.y = 3;

oxygen1.position.x = 2;
oxygen1.position.y = 6;

conn8.rotation.z = 50 * Math.PI/180; 
conn8.rotation.y = 90 * Math.PI/180; 
conn8.position.x = 6.5;
conn8.position.y = -1.5;
conn8.position.z = 2.5;

hydrogen1.position.x = 7;
hydrogen1.position.y = 0.5;
hydrogen1.position.z = 5;

conn9.rotation.z = 120 * Math.PI/180; 
conn9.rotation.y = 90 * Math.PI/180; 
conn9.position.x = 7;
conn9.position.y = -11.5;
conn9.position.z = 2.5;

oxygen2.position.x = 7;
oxygen2.position.y = -13;
oxygen2.position.z = 5;

conn10.position.x = 2;
conn10.position.y = -16;

hydrogen2.position.x = 2;
hydrogen2.position.y = -19;

conn11.rotation.z = 120 * Math.PI/180; 
conn11.rotation.y = 90 * Math.PI/180; 
conn11.position.x = -3;
conn11.position.y = -11.5;
conn11.position.z = 2.5;

hydrogen3.position.x = -3;
hydrogen3.position.y = -12.5;
hydrogen3.position.z = 5;

conn12.rotation.z = 50 * Math.PI/180; 
conn12.rotation.y = 90 * Math.PI/180; 
conn12.position.x = -3;
conn12.position.y = -1.5;
conn12.position.z = 2.5;

hydrogen4.position.x = -3;
hydrogen4.position.y = 0.5;
hydrogen4.position.z = 5;


uracilMolecule.add(carbon1);
uracilMolecule.add(conn1);
uracilMolecule.add(nitrogen1);
uracilMolecule.add(conn2);
uracilMolecule.add(carbon2);
uracilMolecule.add(conn3);
uracilMolecule.add(nitrogen2);
uracilMolecule.add(conn4);
uracilMolecule.add(carbon3);
uracilMolecule.add(conn5);
uracilMolecule.add(carbon4);
uracilMolecule.add(conn6);
uracilMolecule.add(conn7);
uracilMolecule.add(oxygen1);
uracilMolecule.add(conn8);
uracilMolecule.add(hydrogen1);
uracilMolecule.add(conn9);
uracilMolecule.add(oxygen2);
uracilMolecule.add(conn10);
uracilMolecule.add(hydrogen2);
uracilMolecule.add(conn11);
uracilMolecule.add(hydrogen3);
uracilMolecule.add(conn12);
uracilMolecule.add(hydrogen4);

uracilMolecule.position.x = -65;
uracilMolecule.position.y = 10;
uracilMolecule.position.z = -40;



/* Uracil's Light */
/*lightUracil.position.x = 22; 
lightUracil.position.y = 30; 
lightUracil.position.z = -20; 
lightUracil.target = uracilMolecule;*/

