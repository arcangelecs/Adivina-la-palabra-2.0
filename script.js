const palabraSecreta = "Elefante";
const respuesta = document.getElementById("respuesta");
const adivinar = document.getElementById("adivinar");
const resultado = document.getElementById("resultado");

adivinar.addEventListener("click", () => {
  if (respuesta.value === palabraSecreta) {
    resultado.textContent = "¡Felicidades! Adivinaste la palabra secreta.";
  } else {
    resultado.textContent = "Lo siento, la respuesta es incorrecta. Intenta de nuevo.";
  }
});