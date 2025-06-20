"use client";

import { useState } from "react";
import styles from "@/components/destination/destination.module.css";
import { PlanetCard } from "./PlanetCard";
import { PlanetWishlistItem } from "./PlanetWishlistItem";

const PLANETS = [
  {
    name: "Europa",
    description:
      "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
    thumbnail: "/destination/image-europa.png",
  },
  {
    name: "Mars",
    description:
      "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
    thumbnail: "/destination/image-mars.png",
  },
  {
    name: "Moon",
    description:
      "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
    thumbnail: "/destination/image-moon.png",
  },
  {
    name: "Titan",
    description:
      "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
    thumbnail: "/destination/image-titan.png",
  },
];

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  const onAddOrRemovePlanet = (name) => {
    if (selectedPlanets.includes(name)) {
      setSelectedPlanets(selectedPlanets.filter((planet) => planet !== name));
    } else {
      setSelectedPlanets([...selectedPlanets, name]);
    }
  };

  const isPlanetSelected = selectedPlanets.length > 0;

  return (
    <div>
      <h1>Select Your Favorite Planets</h1>

      {/* Our Planet Cards */}
      <section className={styles.planetCards}>
        {PLANETS.map((planet) => (
          <PlanetCard
            key={planet.name}
            name={planet.name}
            description={planet.description}
            thumbnail={planet.thumbnail}
            isSelected={selectedPlanets.includes(planet.name)}
            onAddOrRemovePlanet={onAddOrRemovePlanet}
          />
        ))}
      </section>

      {/* Selection */}
      <div>
        <p>Is any planet selected? {isPlanetSelected ? "Yes" : "No"}</p>
        <p>Number of selected planets: {selectedPlanets.length}</p>
        <p>Selected Planets: {selectedPlanets.join(", ")}</p>
      </div>

      {/* Wishlist */}
      <div>
        <h2>Your Wishlist</h2>
        {selectedPlanets.map((planetName) => {
          const planet = PLANETS.find((p) => p.name === planetName);
          return (
            <PlanetWishlistItem
              key={planet.name}
              name={planet.name}
              thumbnail={planet.thumbnail}
              onRemove={() => onAddOrRemovePlanet(planet.name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Destinations;
