let subtotal = 0;

const calculateTax = subtotal => {
  const tax = subtotal * 0.13;
  const formattedTax = tax.toFixed(2);
  return formattedTax;
};

const calculateTotal = subtotal => {
  const tax = calculateTax(subtotal);
  const total = parseFloat(subtotal) + parseFloat(tax);
  const formattedTotal = total.toFixed(2);
  return formattedTotal;
};

const getImgLink = title => {
  let imgLink;
  switch (title) {
    case 'amla':
      imgLink = "http://127.0.0.1:5500/images/amla-removebg-preview.png";
      break;
    case 'cauliflower':
      imgLink = "http://127.0.0.1:5500/images/Cauliflower-removebg-preview.png";
      break;
    case 'grapes':
      imgLink = 'http://127.0.0.1:5500/images/grapes-removebg-preview.png';
      break;
    case 'dryfruits':
      imgLink = 'http://127.0.0.1:5500/images/dryfruit1-removebg-preview.png';
      break;
    case 'Mango':
      imgLink = 'http://127.0.0.1:5500/images/mango-removebg-preview.png';
      break;
      case 'potato':
        imgLink = 'http://127.0.0.1:5500/images/potato1.png';
        break;
      case 'garlic':
      imgLink = 'http://127.0.0.1:5500/images/garlic1.png';
      break;
      case 'tomato':
      imgLink = 'http://127.0.0.1:5500/images/tomato1.png';
      break;
      case 'apple':
      imgLink = 'http://127.0.0.1:5500/images/apple1.png';
      break;
      case 'watermelon':
      imgLink = 'http://127.0.0.1:5500/images/watermelon-removebg-preview.png';
      break;
      case 'smallpack':
      imgLink = 'http://127.0.0.1:5500/images/small_pack-removebg-preview.png';
      break;
      case 'mediumpack':
      imgLink = 'http://127.0.0.1:5500/images/medium_pack-removebg-preview.png';
      break;
      case 'megapack':
      imgLink = 'http://127.0.0.1:5500/images/mega_pack-removebg-preview.png';
      break;
  }

  return imgLink;
};

$('.add-button').on('click', function () {
  const title = $(this).data('title');
  const price = $(this).data('price');
  const imgLink = getImgLink(title);

  const element = `
    <li class="cart-item">
      <img src=" ${imgLink}" alt="${title}">
      <div class="cart-item-dets">
        <p class="cart-item-heading">${title}</p>
        <p class="g-price"> ₹${price}</p>
      </div>
    </li>
  `;
  $('.cart-items').append(element);

  subtotal = subtotal + price;

  const formattedSubtotal = subtotal.toFixed(2);
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal);

  $('.cart-math').html(`
    <p class="cart-math-item">
      <span class="cart-math-header">Subtotal:</span>
      <span class="g-price subtotal"> ₹${formattedSubtotal}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Tax:</span>
      <span class="g-price tax"> ₹${tax}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Total:</span>
      <span class="g-price total"> ₹${total}</span>
    </p>
  `);
});

function cartpurchase() {
  alert ("The products has been purchased");
}