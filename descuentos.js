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

  const coupons = [
    {
      name: "JuanDC_es_Batman",
      discount: 15,
    },
    {
      name: "pero_no_le_digas_a_nadie",
      discount: 30,
    },
    {
      name: "es_un_secreto",
      discount: 25,
    },
  ];

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + couponValue + " no es válido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
  }

}


