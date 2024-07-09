import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// This component renders a 3D globe with particles and orbit controls.
const Globe = () => {
  // Create a reference to the DOM element that will hold the globe.
  const globeEl = useRef();

  useEffect(() => {
    // Initialize the WebGL renderer and set its size to the window size.
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    // Append the renderer's DOM element to the globeEl reference.
    globeEl.current.appendChild(renderer.domElement);

    // Create the scene, camera, and set up the camera's position.
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 250;

    // Add ambient and directional lights to the scene.
    const ambientLight = new THREE.AmbientLight(0xffffff, 9.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(50, 50, 50);
    scene.add(directionalLight);

    // Generate particles for the globe.
    const particleCount = 10000;
    const particles = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];

    const color = new THREE.Color();
    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      const x = 100 * Math.sin(phi) * Math.cos(theta);
      const y = 100 * Math.sin(phi) * Math.sin(theta);
      const z = 100 * Math.cos(phi);

      positions.push(x, y, z);

      // Color the particles white.
      color.setHSL(0.6, 1.0, 0.7);
      colors.push(color.r, color.g, color.b);
    }

    // Set up the particles' positions and colors.
    particles.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    particles.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    // Create a material for the particles.
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
    });

    // Create the particle system and add it to the scene.
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Add OrbitControls and restrict zoom to pinch gestures.
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Disable zoom with mouse wheel

    // Prevent default scroll behavior when holding Ctrl and scrolling.
    renderer.domElement.addEventListener("wheel", (event) => {
      if (event.ctrlKey) {
        event.preventDefault(); // Prevent default scroll behavior when holding Ctrl
      }
    });

    // Enable zoom with pinch gestures.
    let isPinching = false;
    let initialDistance = null;

    // Handle touch start event to detect pinch gesture.
    renderer.domElement.addEventListener("touchstart", (event) => {
      if (event.touches.length === 2) {
        isPinching = true;
        initialDistance = Math.hypot(
          event.touches[0].clientX - event.touches[1].clientX,
          event.touches[0].clientY - event.touches[1].clientY
        );
      }
    });

    // Handle touch move event to adjust zoom based on pinch gesture.
    renderer.domElement.addEventListener("touchmove", (event) => {
      if (isPinching && event.touches.length === 2) {
        const currentDistance = Math.hypot(
          event.touches[0].clientX - event.touches[1].clientX,
          event.touches[0].clientY - event.touches[1].clientY
        );
        const delta = currentDistance - initialDistance;
        camera.position.z -= delta * 0.1; // Adjust the zoom speed
        initialDistance = currentDistance;
      }
    });

    // Handle touch end event to reset pinch gesture state.
    renderer.domElement.addEventListener("touchend", () => {
      isPinching = false;
      initialDistance = null;
    });

    // Animate the scene.
    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize.
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      renderer.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Clean up on component unmount.
    return () => {
      window.removeEventListener("resize", handleResize);
      while (globeEl.current.firstChild) {
        globeEl.current.removeChild(globeEl.current.firstChild);
      }
    };
  }, []);

  return <div ref={globeEl} style={{ width: "100%", height: "100vh" }}></div>;
};

export default Globe;
