import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// create a functional component Globe
const Globe = () => {
  // create a reference to the globe element
  const globeEl = useRef();

  // use effect hook to run the code once the component is mounted
  useEffect(() => {
    // create a new WebGLRenderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    globeEl.current.appendChild(renderer.domElement);

    // create a new Scene and Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 250;

    // add ambient and directional light to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 9.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(50, 50, 50);
    scene.add(directionalLight);

    // create particles for the globe
    const particleCount = 15000;
    const particles = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];

    // create a color for the particles
    const color = new THREE.Color();
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      const x = 100 * Math.sin(phi) * Math.cos(theta);
      const y = 100 * Math.sin(phi) * Math.sin(theta);
      const z = 100 * Math.cos(phi);

      positions.push(x, y, z);

      color.setHSL(0.6, 1.0, 0.7);
      colors.push(color.r, color.g, color.b);
    }

    // set the attributes for the particles
    particles.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    particles.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    // create a material for the particles
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
    });

    // create a particle system and add it to the scene
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // create a chunk of atoms (small dots) inside the sphere
    const atomCount = 500;
    const atoms = new THREE.BufferGeometry();
    const atomPositions = [];
    const atomColors = [];

    // create a color for the atoms
    for (let i = 0; i < atomCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      // Reduce the size by 25%
      const x = 15 * Math.sin(phi) * Math.cos(theta); // Reduced from 20
      const y = 15 * Math.sin(phi) * Math.sin(theta); // Reduced from 20
      const z = 15 * Math.cos(phi); // Reduced from 20

      atomPositions.push(x, y, z);

      color.setHSL(0.0, 1.0, 0.5); // Red color for atoms
      atomColors.push(color.r, color.g, color.b);
    }

    // set the attributes for the atoms
    atoms.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(atomPositions, 3)
    );
    atoms.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(atomColors, 3)
    );

    // create a material for the atoms
    const atomMaterial = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
    });

    // create an atom system and add it to the scene
    const atomSystem = new THREE.Points(atoms, atomMaterial);
    scene.add(atomSystem);

    // create orbit controls for the camera
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    // prevent zooming when ctrl key is pressed
    renderer.domElement.addEventListener("wheel", (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    });

    // handle pinch to zoom on touch devices
    let isPinching = false;
    let initialDistance = null;

    renderer.domElement.addEventListener("touchstart", (event) => {
      if (event.touches.length === 2) {
        isPinching = true;
        initialDistance = Math.hypot(
          event.touches[0].clientX - event.touches[1].clientX,
          event.touches[0].clientY - event.touches[1].clientY
        );
      }
    });

    renderer.domElement.addEventListener("touchmove", (event) => {
      if (isPinching && event.touches.length === 2) {
        const currentDistance = Math.hypot(
          event.touches[0].clientX - event.touches[1].clientX,
          event.touches[0].clientY - event.touches[1].clientY
        );
        const delta = currentDistance - initialDistance;
        camera.position.z -= delta * 0.1;
        initialDistance = currentDistance;
      }
    });

    renderer.domElement.addEventListener("touchend", () => {
      isPinching = false;
      initialDistance = null;
    });

    // create a raycaster and mouse vector for detecting mouse enter events
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // handle mouse move events to detect atom area
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(atomSystem);

      if (intersects.length > 0) {
        document.body.classList.add("no-cursor");
      } else {
        document.body.classList.remove("no-cursor");
      }
    };

    // handle click events to redirect to /secret
    const onClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(atomSystem);

      if (intersects.length > 0) {
        window.location.href = "/secret";
      }
    };

    // add event listeners for mouse move and click
    renderer.domElement.addEventListener("mousemove", onMouseMove);
    renderer.domElement.addEventListener("click", onClick);

    // create an animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.0005; // Reduced rotation speed
      controls.update();
      renderer.render(scene, camera);
    };

    // start the animation loop
    animate();

    // handle window resize
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      renderer.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
    };

    // add event listener for window resize
    window.addEventListener("resize", handleResize);

    // clean up function to remove event listeners and child elements
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousemove", onMouseMove);
      renderer.domElement.removeEventListener("click", onClick);
      while (globeEl.current.firstChild) {
        globeEl.current.removeChild(globeEl.current.firstChild);
      }
    };
  }, []);

  // return the globe element
  return <div ref={globeEl} className="w-screen h-screen"></div>;
};

// export the Globe component
export default Globe;
