
/* Atoms and connections in Adenine molecula */
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
var nitrogen1 = new THREE.Mesh(ball, whiteMat);
var nitrogen2 = new THREE.Mesh(ball, whiteMat);
var nitrogen3 = new THREE.Mesh(ball, whiteMat);
var nitrogen4 = new THREE.Mesh(ball, whiteMat);
var nitrogen5 = new THREE.Mesh(ball, whiteMat);
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
var conn14 = new THREE.Mesh(rect, grayMat);
var conn15 = new THREE.Mesh(rect, grayMat);
var conn16 = new THREE.Mesh(rect, grayMat);
var conn17 = new THREE.Mesh(rect, grayMat);


/* Building Adenine molecula */

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

conn7.rotation.z = 110 * Math.PI/180; 
conn7.position.x = 9;
conn7.position.y = -3;

nitrogen3.position.x = 12;
nitrogen3.position.y = -2.5;

conn8.rotation.z = 40 * Math.PI/180; 
conn8.position.x = 14.5;
conn8.position.y = -4.5;

carbon5.position.x = 16;
carbon5.position.y = -6.5;

conn9.rotation.z = 150 * Math.PI/180; 
conn9.position.x = 14.5;
conn9.position.y = -9.5;

nitrogen4.position.x = 12.5;
nitrogen4.position.y = -11.5;

conn10.rotation.z = 80 * Math.PI/180; 
conn10.position.x = 9.5;
conn10.position.y = -11;

conn11.position.x = 2;
conn11.position.y = 3;

nitrogen5.position.x = 2;
nitrogen5.position.y = 6;

conn12.rotation.z = -140 * Math.PI/180; 
conn12.rotation.y = 180 * Math.PI/180; 
conn12.rotation.x = 60 * Math.PI/180; 
conn12.position.x = 4;
conn12.position.y = 6.5;
conn12.position.z = 2;

hydrogen1.position.x = 6;
hydrogen1.position.y = 7;
hydrogen1.position.z = 3;

conn13.rotation.z = -140 * Math.PI/180; 
conn13.rotation.x = 60 * Math.PI/180; 
conn13.position.x = 0;
conn13.position.y = 6.5;
conn13.position.z = 2;

hydrogen2.position.x = -2;
hydrogen2.position.y = 7;
hydrogen2.position.z = 3;

conn14.rotation.z = 120 * Math.PI/180; 
conn14.rotation.y = 90 * Math.PI/180; 
conn14.position.x = 16;
conn14.position.y = -7.5;
conn14.position.z = 2.5;

hydrogen3.position.x = 16;
hydrogen3.position.y = -9;
hydrogen3.position.z = 5.5;

conn15.rotation.z = 120 * Math.PI/180; 
conn15.rotation.y = 90 * Math.PI/180; 
conn15.position.x = 12.5;
conn15.position.y = -13;
conn15.position.z = 3;

hydrogen4.position.x = 12.5;
hydrogen4.position.y = -14.5;
hydrogen4.position.z = 5.5;

conn16.rotation.z = 120 * Math.PI/180; 
conn16.rotation.y = 90 * Math.PI/180; 
conn16.position.x = -2.5;
conn16.position.y = -11.5;
conn16.position.z = 3;

hydrogen5.position.x = -2.5;
hydrogen5.position.y = -12.5;
hydrogen5.position.z = 5.5;


adenineMolecule.add(carbon1);
adenineMolecule.add(conn1);
adenineMolecule.add(carbon2);
adenineMolecule.add(conn2);
adenineMolecule.add(carbon3);
adenineMolecule.add(conn3);
adenineMolecule.add(nitrogen1);
adenineMolecule.add(conn4);
adenineMolecule.add(carbon4);
adenineMolecule.add(conn5);
adenineMolecule.add(nitrogen2);
adenineMolecule.add(conn6);
adenineMolecule.add(conn7);
adenineMolecule.add(nitrogen3);
adenineMolecule.add(conn8);
adenineMolecule.add(carbon5);
adenineMolecule.add(conn9);
adenineMolecule.add(nitrogen4);
adenineMolecule.add(conn10);
adenineMolecule.add(conn11);
adenineMolecule.add(nitrogen5);
adenineMolecule.add(conn12);
adenineMolecule.add(hydrogen1);
adenineMolecule.add(conn13);
adenineMolecule.add(hydrogen2);
adenineMolecule.add(conn14);
adenineMolecule.add(hydrogen3);
adenineMolecule.add(conn15);
adenineMolecule.add(hydrogen4);
adenineMolecule.add(conn16);
adenineMolecule.add(hydrogen5);


adenineMolecule.position.x = -65;
adenineMolecule.position.y = 10;
adenineMolecule.position.z = -40;


/* Adenine's Light */


/*lightAdenine.position.x = -74; 
lightAdenine.position.y = 30; 
lightAdenine.position.z = -20; 
lightAdenine.target = adenineMolecule;*/




