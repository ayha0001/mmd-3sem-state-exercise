"use client";
// Importer CSS filen
import "../component-style/like-counter-exercise.css";
// TODO for studerende: Importer useState fra React
import { useState } from "react";

export default function LikeCounterExercise() {
  // state-variabel. Starter på false, altså at den ikke er liket. setIsLiked bruges til at ændre den senere
  // Bruges til at bestemme om knappen skal vises som liked eller ej, hvilket hjerte ikon det har og hvilken CSS-klasse den får
  const [isLiked, setIsLiked] = useState(false);
  // state-variabel. Starter på 0 (altså 0 likes). Når man klikker stiger den i like og når man klikker igen, falder den i likes
  // Styrer tallet, som brugeren ser når de liker
  const [likes, setLikes] = useState(0);

  // Funktion der definerer hvad der sker når brugeren klikker på like-knappen
  function handleLike() {
    // Hvis opslaget ikke allerede er liket
    if (isLiked === false) {
      // Skift isLiked til true (brugeren har nu liket opslaget)
      setIsLiked(true);
      // Øg liket med 1
      setLikes(likes + 1);
      // Hvis ikke, så er opslaget allerede liket
    } else {
      // isLiked skiftes til false (brugeren har nu fjernet sit like)
      setIsLiked(false);
      // Sænk likes med 1
      setLikes(likes - 1);
    }
  }
  return (
    <div className='exercise-container'>
      <div className='post-card'>
        {/* Header */}
        <div className='post-header'>
          <h1 className='exercise-title'>Like Counter Øvelse</h1>
          <p className='exercise-description'>Få opslagets like-knap til at tælle likes</p>
        </div>

        {/* Post indhold */}
        <div className='post-content'>
          <div className='post-image'>
            <span className='post-image-text'>🎉</span>
          </div>
          <p className='post-text'>
            Dette er et fantastisk opslag! Klik på like-knappen nedenfor for at vise din støtte. Knappen skal skifte farve og tælleren skal opdateres.
          </p>
        </div>

        {/* Like sektion */}
        <div className='like-section'>
          <button
            // like-button class er altid på
            // Hvis "isLiked" er true, så tilføjes "liked" class'en også til
            // Hvis den er false, tilføjes "", altså ingenting
            className={`like-button${isLiked ? " liked" : ""}`}
            // handleLike linkes til button, så når man klikker på knappen, køre funktionen
            onClick={handleLike}
          >
            {/* Hvis "isLiked" er true, så tilføjes ❤️ i span*/}
            {/* Hvis den er false, tilføjes 🤍 i span*/}
            <span className='heart-icon'>{isLiked ? "❤️" : "🤍"}</span>
            {/* TODO for studerende: Vis "Liked" eller "Like" */}
            {/* Hint: Brug en ternary operator */}
            {isLiked ? "Liked" : "Like"}
          </button>

          <div className='like-count'>
            {/* TODO for studerende: Vis antallet af likes */}
            {/* Hint: Brug likes state variablen */}
            {/* Viser værdien fra likes-state variablen */}
            {/* Tallet opdateres automatisk når brugeren liker/unliker, fordi react selv opdatere det der vises, når en state ændres */}
            likes {likes}
          </div>
        </div>

        {/* Hjælpe information */}
        <div className='help-section'>
          <h3 className='help-title'>🎯 Opgave:</h3>
          <ul className='help-list'>
            <li>Importer useState fra React</li>
            <li>Opret likes state (starter på 0)</li>
            <li>Opret ex. isLiked state (starter på false)</li>
            <li>Implementer handleLike funktionen</li>
            <li>Toggle isLiked og opdater likes tælleren</li>
            <li>Se like-knappen skifte farve og tælleren opdatere!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
