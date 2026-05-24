// code here, goodluck!!
"use strict";

const prompt = require("prompt-sync")();

// =========================
// VALIDATION FUNCTIONS
// =========================

function getValidNumber(message) {
  while (true) {
    const input = prompt(message);
    const number = Number(input);

    if (!isNaN(number)) {
      return number;
    }

    console.log("❌ Input harus berupa angka!");
  }
}

function getValidOperator() {
  const validOperators = ["+", "-", "*", "/", "%", "**"];

  while (true) {
    const operator = prompt(
      "Masukkan operator (+, -, *, /, %, **): "
    );

    if (validOperators.includes(operator)) {
      return operator;
    }

    console.log("❌ Operator tidak valid!");
  }
}

// =========================
// MATH FUNCTIONS
// =========================

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: tidak bisa dibagi dengan nol";
  }

  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    return "Error: modulo dengan nol tidak diperbolehkan";
  }

  return a % b;
}

function power(a, b) {
  return a ** b;
}

// =========================
// RESULT ANALYSIS
// =========================

function analyzeResult(result) {
  console.log("\n===== ANALISIS HASIL =====");

  console.log("Tipe data:", typeof result);

  if (typeof result === "number") {
    // Positif, negatif, atau nol
    if (result > 0) {
      console.log("Nilai: Positif");
    } else if (result < 0) {
      console.log("Nilai: Negatif");
    } else {
      console.log("Nilai: Nol");
    }

    // Integer atau desimal
    if (Number.isInteger(result)) {
      console.log("Jenis angka: Integer");

      // Genap atau ganjil
      console.log(
        result % 2 === 0 ? "Kategori: Genap" : "Kategori: Ganjil"
      );
    } else {
      console.log("Jenis angka: Desimal");
    }
  } else {
    console.log(result ?? "Tidak ada hasil");
  }
}

// =========================
// MAIN PROGRAM
// =========================

console.log("==================================");
console.log(" INTERACTIVE CALCULATOR PROGRAM ");
console.log("==================================");

while (true) {
  console.log("\n=== Kalkulator ===");

  const firstNumber = getValidNumber(
    "Masukkan angka pertama: "
  );

  const operator = getValidOperator();

  const secondNumber = getValidNumber(
    "Masukkan angka kedua: "
  );

  let result;

  switch (operator) {
    case "+":
      result = add(firstNumber, secondNumber);
      break;

    case "-":
      result = subtract(firstNumber, secondNumber);
      break;

    case "*":
      result = multiply(firstNumber, secondNumber);
      break;

    case "/":
      result = divide(firstNumber, secondNumber);
      break;

    case "%":
      result = modulo(firstNumber, secondNumber);
      break;

    case "**":
      result = power(firstNumber, secondNumber);
      break;

    default:
      result = "Operator tidak dikenali";
  }

  console.log("\n===== HASIL =====");
  console.log(
    `${firstNumber} ${operator} ${secondNumber} =`,
    result
  );

  analyzeResult(result);

  // Exit mechanism
  const continueProgram = prompt(
    '\nApakah ingin lanjut? (yes/no): '
  ).toLowerCase();

  if (continueProgram === "no") {
    console.log("\nProgram selesai. Terima kasih!");
    break;
  }
}