// *
// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado (lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// *
// Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
  return (lado1*1) + (lado2*1) + (base*1);
}

function areaTriangulo(base, altura) {
  return  (base * altura) / 2
};

console.groupEnd();

// *
// Código del círculo
console.group("Círculos");

function diametroCirculo(radio) {
  return radio * 2;
};

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI
}

console.groupEnd();

// *
// Código del triángulo isósceles
console.group("Triángulo isósceles");

function alturaIsosceles(lado1, lado2, base) {
  if(lado1===lado2 && lado2 != base) {
    const altura = Math.sqrt((lado1*lado1)-((base*base)/4))
    return altura;
  }
  else {
    return "No es un triángulo isósceles";
  }
}

console.groupEnd();


// *
// ***************************
// Aqui interactuamos con HTML
// ***************************

// *
// Cuadrados
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// *
// Triángulos
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("InputTrianguloLado1");
  const lado1 =  inputLado1.value;
  const inputLado2 = document.getElementById("InputTrianguloLado2");
  const lado2 = inputLado2.value;
  const inputBase = document.getElementById("InputTrianguloBase");
  const base = inputBase.value;

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const base = inputBase.value;
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const altura = inputAltura.value;

  const area = areaTriangulo(base, altura);
  alert(area);
}

// *
// Círculo
function calcularDiametroCirculo() {
  const inputRadio = document.getElementById("InputCirculo");
  const radio =  inputRadio.value;

  const diametro = diametroCirculo(radio);
  alert(diametro);
}

function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("InputCirculo");
  const radio =  inputRadio.value;

  const perimetro = perimetroCirculo(radio);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const inputRadio = document.getElementById("InputCirculo");
  const radio =  inputRadio.value;

  const area = areaCirculo(radio);
  alert(area);
}

// *
// Círculo
function calcularAlturaIsosceles() {
  const inputLado1 = document.getElementById("InputIsoscelesLado1");
  const lado1 =  inputLado1.value;
  const inputLado2 = document.getElementById("InputIsoscelesLado2");
  const lado2 = inputLado2.value;
  const inputBase = document.getElementById("InputIsoscelesBase");
  const base = inputBase.value;

  const altura = alturaIsosceles(lado1, lado2, base);
  alert(altura);
}