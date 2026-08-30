import * as THREE from 'three';

const shape = new THREE.Shape();
shape.moveTo(0, 3);
shape.quadraticCurveTo(0.5, 3, 2, -1.5);
shape.quadraticCurveTo(2.2, -2.5, 1.5, -2.5);
shape.lineTo(-2, -2.5);
shape.quadraticCurveTo(-2.8, -2.5, -2, -0.5);
shape.lineTo(-0.5, 2.5);
shape.quadraticCurveTo(0, 3, 0, 3);

const holePath = new THREE.Path();
holePath.moveTo(0.1, 1.5);
holePath.lineTo(-1.2, -1.5);
holePath.quadraticCurveTo(-1.4, -1.8, -0.8, -1.8);
holePath.lineTo(1.2, -1.8);
holePath.quadraticCurveTo(1.4, -1.8, 0.5, 1.5);
holePath.quadraticCurveTo(0.3, 2, 0.1, 1.5);
shape.holes.push(holePath);

const extrudeSettings = { depth: 0.5, bevelEnabled: true };
try {
  const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  console.log("Success! Vertices:", geo.attributes.position.count);
} catch (e) {
  console.error("Error creating geometry:", e);
}
