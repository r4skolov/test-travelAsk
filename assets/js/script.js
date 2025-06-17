<script>
			const products = document.querySelectorAll('.product');

		products.forEach(product => {
			const button = product.querySelector('[data-product="btn"]');
			if (button) {
				button.setAttribute('data-original', button.innerHTML.trim());
			}
		});

		products.forEach(product => {
			const button = product.querySelector('[data-product="btn"]');

			button.addEventListener('click', () => {
				products.forEach(p => {
					p.classList.remove('active');

					const btn = p.querySelector('[data-product="btn"]');
					if (btn) {

						const original = btn.getAttribute('data-original');
						if (original) btn.innerHTML = original;
					}
				});

				product.classList.add('active');
				button.textContent = 'SELECTED';
			});
		});

		const orderBtn = document.querySelector('[data-order="btn"]');

		orderBtn.addEventListener('click', () => {
			orderBtn.classList.toggle('active');
		});

</script>
