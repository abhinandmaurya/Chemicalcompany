"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function MoleculeAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 15

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5

    // Create atoms
    const createAtom = (color: string, position: THREE.Vector3) => {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32)
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.8,
      })
      const atom = new THREE.Mesh(geometry, material)
      atom.position.copy(position)

      // Add glow
      const glowGeometry = new THREE.SphereGeometry(0.6, 32, 32)
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.3,
      })
      const glow = new THREE.Mesh(glowGeometry, glowMaterial)
      atom.add(glow)

      return atom
    }

    // Create bonds
    const createBond = (start: THREE.Vector3, end: THREE.Vector3) => {
      const direction = new THREE.Vector3().subVectors(end, start)
      const length = direction.length()

      const geometry = new THREE.CylinderGeometry(0.1, 0.1, length, 8)
      const material = new THREE.MeshBasicMaterial({
        color: 0x88ccff,
        transparent: true,
        opacity: 0.6,
      })

      const bond = new THREE.Mesh(geometry, material)

      // Position and rotate the bond
      bond.position.copy(start)
      bond.position.add(direction.multiplyScalar(0.5))
      bond.lookAt(end)
      bond.rotateX(Math.PI / 2)

      return bond
    }

    // Create a molecule structure
    const createMolecule = () => {
      const moleculeGroup = new THREE.Group()

      // Define atom positions
      const positions = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(2, 1, 1),
        new THREE.Vector3(-1, 2, -1),
        new THREE.Vector3(-2, -1, 2),
        new THREE.Vector3(1, -2, -2),
        new THREE.Vector3(3, -1, 0),
        new THREE.Vector3(-3, 0, -1),
      ]

      // Create atoms
      const atoms = positions.map((pos, i) => {
        const color = i % 2 === 0 ? "#00ffaa" : "#0088ff"
        return createAtom(color, pos)
      })

      // Add atoms to molecule
      atoms.forEach((atom) => moleculeGroup.add(atom))

      // Create bonds between atoms
      for (let i = 0; i < atoms.length; i++) {
        for (let j = i + 1; j < atoms.length; j++) {
          // Only create bonds between some atoms to avoid a fully connected graph
          if (j === i + 1 || (i === 0 && j < 4)) {
            const bond = createBond(atoms[i].position.clone(), atoms[j].position.clone())
            moleculeGroup.add(bond)
          }
        }
      }

      return moleculeGroup
    }

    // Create multiple molecules
    for (let i = 0; i < 5; i++) {
      const molecule = createMolecule()

      // Position molecules randomly in space
      molecule.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20)

      // Random rotation
      molecule.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)

      scene.add(molecule)
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      scene.clear()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0" />
}

