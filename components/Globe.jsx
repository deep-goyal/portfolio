import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Globe = () => {
  const globeEl = useRef();

  useEffect(() => {
    // create a new renderer and set its properties
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    globeEl.current.appendChild(renderer.domElement);

    // create a new scene and camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 250;

    // add ambient and directional lights to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 9.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(50, 50, 50);
    scene.add(directionalLight);

    // generate particles for the globe
    const particleCount = 15000;
    const particles = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];

    const color = new THREE.Color();
    for (let i = 0; i < particleCount; i++) {
      // calculate position and color for each particle
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      const x = 100 * Math.sin(phi) * Math.cos(theta);
      const y = 100 * Math.sin(phi) * Math.sin(theta);
      const z = 100 * Math.cos(phi);

      positions.push(x, y, z);

      color.setHSL(0.6, 1.0, 0.7);
      colors.push(color.r, color.g, color.b);
    }

    // set up the particle system
    particles.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    particles.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // create a red dot and an invisible sphere for interaction
    const redDotGeometry = new THREE.SphereGeometry(1, 32, 32); // Smaller red dot
    const redDotMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const redDot = new THREE.Mesh(redDotGeometry, redDotMaterial);

    const invisibleSphereGeometry = new THREE.SphereGeometry(5, 32, 32); // Larger invisible sphere for clickable area
    const invisibleSphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 0,
    });
    const invisibleSphere = new THREE.Mesh(
      invisibleSphereGeometry,
      invisibleSphereMaterial
    );

    redDot.position.set(50, 50, 50);
    invisibleSphere.position.copy(redDot.position);
    scene.add(redDot);
    scene.add(invisibleSphere);

    // set up orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    // handle wheel event to prevent zooming with control key
    renderer.domElement.addEventListener("wheel", (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    });

    // handle touch events for zooming
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

    // set up raycaster for mouse events
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // handle click event
    const onClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(invisibleSphere);

      if (intersects.length > 0) {
        window.location.href = "/hidden-page";
      }
    };

    // handle mouse move event
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(invisibleSphere);

      if (intersects.length > 0) {
        document.body.classList.add("no-cursor");
      } else {
        document.body.classList.remove("no-cursor");
      }
    };

    // add event listeners for click and mouse move
    renderer.domElement.addEventListener("click", onClick);
    renderer.domElement.addEventListener("mousemove", onMouseMove);

    // animate the scene
    const animate = () => {
      requestAnimationFrame(animate);
      particleSystem.rotation.y += 0.0005; // Reduced rotation speed
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // handle window resize
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      renderer.setSize(innerWidth, innerHeight);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("click", onClick);
      renderer.domElement.removeEventListener("mousemove", onMouseMove);
      while (globeEl.current.firstChild) {
        globeEl.current.removeChild(globeEl.current.firstChild);
      }
    };
  }, []);

  return <div ref={globeEl} style={{ width: "100%", height: "100vh" }}></div>;
};

export default Globe;

// add a clickable cursor style on the red dot
// const style = document.createElement("style");
// style.innerHTML = `
//   .no-cursor {
//     cursor: none;
//   }
// `;
// document.head.appendChild(style);
