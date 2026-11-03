"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function CyberGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability gracefully
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      // Graceful fallback to static CSS gradient if WebGL is disabled
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 15, 30);
    camera.lookAt(0, 0, 0);

    // Grid Dimensions
    const size = 60;
    const divisions = 45;
    const geometry = new THREE.PlaneGeometry(size, size, divisions, divisions);
    geometry.rotateX(-Math.PI / 2);

    // Save initial vertex positions
    const posAttribute = geometry.attributes.position;
    const originalY = new Float32Array(posAttribute.count);
    for (let i = 0; i < posAttribute.count; i++) {
      originalY[i] = posAttribute.getY(i);
    }

    // Material with custom cyber grid styling
    const material = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = -6;
    scene.add(mesh);

    // Interactive point cloud nodes at vertices
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x00e599,
      size: 0.12,
      transparent: true,
      opacity: 0.35,
    });
    const points = new THREE.Points(geometry, pointsMaterial);
    points.position.y = -6;
    scene.add(points);

    // Pointer tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Window Resizing
    const handleResize = () => {
      if (!container) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Subtle camera tilt reacting to pointer
      camera.position.x = mouse.x * 4;
      camera.position.y = 15 + mouse.y * 2;
      camera.lookAt(0, -2, 0);

      // Undulating mathematical surface displacement
      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const u = positions.getX(i);
        const w = positions.getZ(i);

        // Distance from center for radial ripple
        const dist = Math.sqrt(u * u + w * w);
        const wave1 = Math.sin(dist * 0.35 - elapsedTime * 1.5) * 0.9;
        const wave2 = Math.cos(u * 0.2 + elapsedTime * 0.8) * 0.5;
        const cursorInfluence = Math.exp(-((u - mouse.x * 20) ** 2 + (w - mouse.y * -20) ** 2) / 35) * 2.2;

        positions.setY(i, originalY[i] + wave1 + wave2 + cursorInfluence);
      }
      positions.needsUpdate = true;

      mesh.rotation.y = elapsedTime * 0.02;
      points.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 20%, rgba(0, 240, 255, 0.04) 0%, rgba(5, 7, 11, 0.95) 70%, #05070B 100%)",
      }}
      aria-hidden="true"
    />
  );
}

