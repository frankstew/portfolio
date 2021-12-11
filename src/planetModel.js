import * as THREE from 'three'; 


function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}


class Planet {
    constructor(textureURL, normalMapURL, size, location, rotationSpeed = randomNum(0.0001, 0.05), rotationDirection = null , orbitSpeed = randomNum(0.001, 0.01), orbitDirection = Math.random() < 0.5 ? -1 : 1) {
        this.radius = location[0];
        this.initialPolarAngle = location[1];
        this.planetBody = this.createPlanet(textureURL, normalMapURL, size, this.cartesianFromPolar(this.radius, this.initialPolarAngle));
        this.rotationSpeed = rotationSpeed;

        this.setRotationDirection(rotationDirection);

        this.orbitSpeed = orbitSpeed;
        this.orbitDirection = orbitDirection;
    }

    setRotationDirection = function(rotationDirection) {
        if (rotationDirection == null) {
            var rotDirIndex = Math.floor(randomNum(1, 4));
            if (rotDirIndex == 1) {
                this.rotationDirection = [1, 0, 0];
            }
            else if (rotDirIndex == 2) {
                this.rotationDirection = [0, 1, 0];
            }
            else this.rotationDirection = [0, 0, 1];
        }
        else {
            this.rotationDirection = rotationDirection;
        }
        if 
        (Math.random() < 0.5) {
            this.rotationDirection[0] *= -1;
            this.rotationDirection[1] *= -1;
            this.rotationDirection[2] *= -1;
        }
    }

    cartesianFromPolar = function(radius, angle) {
        // angle in radians
        return [radius * Math.cos(angle), radius * Math.sin(angle), 0];
    }
    

    createPlanet = function(texturePath, normalMapPath, size, location) {
        const planetTexture = new THREE.TextureLoader().load(texturePath);
        const planetNormalMap = new THREE.TextureLoader().load(normalMapPath);

        const planet = new THREE.Mesh(
            new THREE.SphereGeometry(size[0], size[1], size[2]),
            new THREE.MeshStandardMaterial( {
            map: planetTexture,
            normalMap: planetNormalMap,
            })
        );
        
        planet.position.x = location[0];
        planet.position.y = location[1];
        planet.position.z = location[2];
        return planet;
    }


    lengthOfVec = function(vec) {
        var len = 0;
        for(var i = 0; i < vec.length; i++) {
            len += vec[i] * vec[i];
        }
        return Math.sqrt(len);
    }

    rotatePlanet = function() {
        // use as unit vec
        var rotDirLength = this.lengthOfVec(this.rotationDirection);
        this.planetBody.rotation.x += this.rotationSpeed * this.rotationDirection[0] / rotDirLength; 
        this.planetBody.rotation.y += this.rotationSpeed * this.rotationDirection[1] / rotDirLength; 
        this.planetBody.rotation.z += this.rotationSpeed * this.rotationDirection[2] / rotDirLength; 
    }

    orbitPlanet = function() {
        if (this.planetBody.position.y < 0){
            var currentPolarAngle = -Math.acos(this.planetBody.position.x / this.radius);
        }
        else {
            var currentPolarAngle = Math.acos(this.planetBody.position.x / this.radius);
        }

        currentPolarAngle += this.orbitDirection * this.orbitSpeed;
        this.planetBody.position.x = this.radius * Math.cos(currentPolarAngle);
        this.planetBody.position.y = this.radius * Math.sin(currentPolarAngle);
    }
}

export default Planet;