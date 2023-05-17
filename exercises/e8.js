import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  let planets = data.planets;
  var planet = planets.find(function(planet) {
    if (planet.moonsCount >= 1) {
      return planet.moons.includes(moonName);
    } else {
      return null;
    }
  });
  return planet.name;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
