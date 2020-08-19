
/* Atoms and connections in Thymine molecula */

var carbon1 = new THREE.Mesh(ball, brownMat);
var carbon2 = new THREE.Mesh(ball, brownMat);
var carbon3 = new THREE.Mesh(ball, brownMat);
var carbon4 = new THREE.Mesh(ball, brownMat);
var carbon5 = new THREE.Mesh(ball, brownMat);
var hydrogen1 = new THREE.Mesh(ball, blueMat);
var hydrogen2 = new THREE.Mesh(ball, blueMat);
var hydrogen3 = new THREE.Mesh(ball, blueMat);
var hydrogen4 = new THREE.Mesh(ball, blueMat);
var hydrogen5 = new THREE.Mesh(ball, blueMat);
var hydrogen6 = new THREE.Mesh(ball, blueMat);
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
var conn13 = new THREE.Mesh(rect, grayMat);
var conn14 = new THREE.Mesh(rect, grayMat);
var conn15 = new THREE.Mesh(rect, grayMat);


/* Building Thymine molecula */

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

oxygen1.position.x = 2;
oxygen1.position.y = 6;

conn8.rotation.z = 50 * Math.PI/180; 
conn8.rotation.y = 90 * Math.PI/180; 
conn8.position.x = 6.5;
conn8.position.y = -1.5;
conn8.position.z = 2.5;

carbon5.position.x = 7;
carbon5.position.y = 0.5;
carbon5.position.z = 5;

conn9.rotation.z = -110 * Math.PI/180; 
conn9.rotation.y = 30 * Math.PI/180; 
conn9.position.x = 4.5;
conn9.position.y = 1.5;
conn9.position.z = 6;

hydrogen1.position.x = 2;
hydrogen1.position.y = 2;
hydrogen1.position.z = 8;

conn10.rotation.z = 100 * Math.PI/180; 
conn10.rotation.y = 90 * Math.PI/180; 
conn10.position.x = 7.5;
conn10.position.y = 0.5;
conn10.position.z = 8;

hydrogen2.position.x = 7.5;
hydrogen2.position.y = 0;
hydrogen2.position.z = 11;

conn11.rotation.z = 110 * Math.PI/180; 
conn11.rotation.y = 30 * Math.PI/180; 
conn11.position.x = 9.5;
conn11.position.y = 2;
conn11.position.z = 4;

hydrogen3.position.x = 11;
hydrogen3.position.y = 3;
hydrogen3.position.z = 3;

conn12.rotation.z = 120 * Math.PI/180; 
conn12.rotation.y = 90 * Math.PI/180; 
conn12.position.x = 7;
conn12.position.y = -11.5;
conn12.position.z = 2.5;

hydrogen4.position.x = 7;
hydrogen4.position.y = -13;
hydrogen4.position.z = 5;

conn13.position.x = 2;
conn13.position.y = -16;

hydrogen5.position.x = 2;
hydrogen5.position.y = -19;

conn14.rotation.z = 120 * Math.PI/180; 
conn14.rotation.y = 90 * Math.PI/180; 
conn14.position.x = -3;
conn14.position.y = -11.5;
conn14.position.z = 2.5;

oxygen2.position.x = -3;
oxygen2.position.y = -12.5;
oxygen2.position.z = 5;

conn15.rotation.z = 50 * Math.PI/180; 
conn15.rotation.y = 90 * Math.PI/180; 
conn15.position.x = -3;
conn15.position.y = -1.5;
conn15.position.z = 2.5;

hydrogen6.position.x = -3;
hydrogen6.position.y = 0.5;
hydrogen6.position.z = 5;


thymineMolecule.add(carbon1);
thymineMolecule.add(conn1);
thymineMolecule.add(nitrogen1);
thymineMolecule.add(conn2);
thymineMolecule.add(carbon2);
thymineMolecule.add(conn3);
thymineMolecule.add(nitrogen2);
thymineMolecule.add(conn4);
thymineMolecule.add(carbon3);
thymineMolecule.add(conn5);
thymineMolecule.add(carbon4);
thymineMolecule.add(conn6);
thymineMolecule.add(conn7);
thymineMolecule.add(oxygen1);
thymineMolecule.add(conn8);
thymineMolecule.add(carbon5);
thymineMolecule.add(conn9);
thymineMolecule.add(hydrogen1);
thymineMolecule.add(conn10);
thymineMolecule.add(hydrogen2);
thymineMolecule.add(conn11);
thymineMolecule.add(hydrogen3);
thymineMolecule.add(conn12);
thymineMolecule.add(hydrogen4);
thymineMolecule.add(conn13);
thymineMolecule.add(hydrogen5);
thymineMolecule.add(conn14);
thymineMolecule.add(oxygen2);
thymineMolecule.add(conn15);
thymineMolecule.add(hydrogen6);


thymineMolecule.position.x = -65;
thymineMolecule.position.y = 10; //30
thymineMolecule.position.z = -40;


/* Thymine's Light */

/*lightThymine.position.x = 22; 
lightThymine.position.y = 30; 
lightThymine.position.z = -20; 
lightThymine.target = thymineMolecule;*/


