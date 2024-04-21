import * as THREE from 'three'

import vertexShader from '../shaders/blackHoleParticles/vertex.glsl'
import fragmentShader from '../shaders/blackHoleParticles/fragment.glsl'

function BlackHoleParticlesMaterial()
{
    const material = new THREE.RawShaderMaterial({
        glslVersion: THREE.GLSL3,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
        transparent: true,
        uniforms:
        {
            uTime: { value: 0 },
            uInnerColor: { value: new THREE.Color('#ffd192') },
            uOuterColor: { value: new THREE.Color('#e89360') },
            uViewHeight: { value: 1024 },
            uSize: { value: 0.015 },
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    })

    return material
}

export default BlackHoleParticlesMaterial