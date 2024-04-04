"use client";
import React, { useState } from "react";

//Borde inte använda globala variabler i en React-komponent. Bryter mot princip om kapsling.
// Istället använda lokal tillståndshantering/en kontext!!!
let globalInput = "";

// Dåligt namn på en komponent, också dåligt att blanda svenska+engelska.
// Komponenter borde vara beskrivande och mer konsekventa.
export default function DåligComponent() {
  // Denna onödigt långa variabel borde döpas om till något mer beskrivande som todos, setTodos. Alltså borde variabeln mer beskriva dens syfte eller värde.
  const [skrivnågotvadduvill, setSkrivnågotvadduvill] = useState<string[]>([]);

  // Här gör funktionen mer än en sak, manipulerar globalInput och uppdaterar DOMen. Detta är en av de viktigaste reglerna, att funktioner ska hantera en sak. Borde alltså brytit ut o låtit vardera funktion göra sin grej.
  const görnågotmedGlobalInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    globalInput = event.target.value;
    const fylli = document.getElementById("globalInput") as HTMLInputElement; // Inte bra att direkt manipulera DOM:en, borde använt tillståndshantering och data.
    if (fylli) fylli.value = globalInput; // Borde ha använt state istället för att direkt manipulera DOMen.
  };

  const engammalfunktion = () => {
    //Används inte/ är gammal och därför bör den raderas.
  };

  // Utkommenterad kod ska inte vara kvar
  /* let hejbabariba = "" */

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
      // Man använder vanligtvis inte inline-stilar i JSX-element. Svårt att underhålla kodbasen. Borde istället separerat stil och logik.
    >
      <h1>Todo-app i Spagettikod</h1>
      <input
        id="globalInput"
        onChange={görnågotmedGlobalInput}
        placeholder="Skriv en todo"
        style={{ border: "1px solid black", padding: "4px", margin: "10px" }}
      />
      <button
        onClick={() => {
          // Dubbelkod, borde istället brutit ut och gjort en funktion som hanterar klicket separat. Inte allt ihop; uppdatera tillståndet, rensa globalInput och rensar inputfältet via DOM-manipulation.
          if (globalInput) {
            setSkrivnågotvadduvill([...skrivnågotvadduvill, globalInput]);
            globalInput = "";
            const fylli = document.getElementById(
              "globalInput"
            ) as HTMLInputElement;
            if (fylli) fylli.value = "";
          }
        }}
        style={{
          border: "2px solid black",
          background: "green",
          color: "white",
          padding: "4px",
        }}
      >
        Lägg till
      </button>
      <ul style={{ listStyleType: "square", lineHeight: "2" }}>
        {skrivnågotvadduvill.map((sak, index) => (
          <li
            key={index} // Man ska inte använda index som key i listor ifall de kan ändras.
            style={{ color: "green", textTransform: "uppercase" }}
          >
            {sak}{" "}
            <span onClick={() => alert("Borde inte göra såhär!")}>❌</span>{" "}
            {/* Borde inte ha inline-handlers för händelser. Borde ha gjort en funktion som hanterar klicket istället */}
          </li>
        ))}
      </ul>
    </div>
  );
}
