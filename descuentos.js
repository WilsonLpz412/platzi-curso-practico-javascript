// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function priceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const InputCoupon = document.getElementById("InputCoupon");
  const couponValue = InputCoupon.value;

  let descuento;

  if (!coupons.includes(couponValue)) {
    alert("El cupón " + couponValue + " no es válido");
  } else if (couponValue === "JuanDC_es_Batman") {
    descuento = 15;
  } else if (couponValue === "pero_no_le_digas_a_nadie") {
    descuento = 30;
  } else if (couponValue === "es_un_secreto") {
    descuento = 25;
  }

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultPrice = document.getElementById("ResultPrice");
  resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];