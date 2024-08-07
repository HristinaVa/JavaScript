function solve() {
   const resultEl = document.querySelector('textarea[disabled]');
   const checkoutButton = document.querySelector('button.checkout');
   const catalogEls = document.querySelector('.shopping-cart');

   let products = [];
   catalogEls.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON') {
         return;
      }
      if (e.target.textContent.trim() !== 'Add') {
         return;
      }
      const productEl = e.target.closest('.product');
      const name = productEl.querySelector('.product-title').textContent;
      const price = Number(productEl.querySelector('.product-line-price').textContent);
      resultEl.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      products.push({ name, price });
   });
   checkoutButton.addEventListener('click', (e) => {
      const totalPrice = products.reduce((price, product) => price + product.price, 0);
      const productList = [...new Set(products.map(product => product.name))]

      resultEl.value += `You bought ${productList.join(', ')} for ${totalPrice.toFixed(2)}.`

      document.querySelectorAll('button').forEach(el => el.setAttribute('disabled', 'disabled'))
   })
}
