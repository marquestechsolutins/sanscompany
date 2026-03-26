    const variationList = document.getElementById('variationList');
    const variationTemplate = document.getElementById('variationTemplate');
    const addVariationButtons = [document.getElementById('addVariation'), document.getElementById('addVariationTop')];
    const previewNome = document.getElementById('previewNome');
    const previewCategoria = document.getElementById('previewCategoria');
    const previewStatus = document.getElementById('previewStatus');
    const previewVariacoes = document.getElementById('previewVariacoes');
    const nomeInput = document.getElementById('nome');
    const categoriaInput = document.getElementById('categoria');
    const ativoInput = document.getElementById('ativo');
    const resetForm = document.getElementById('resetForm');
    const productForm = document.getElementById('productForm');

    function updateVariationIndexes() {
      [...variationList.children].forEach((card, index) => {
        card.querySelector('.variation-index').textContent = index + 1;
      });
      previewVariacoes.textContent = variationList.children.length || 0;
    }

    function addVariation() {
      const clone = variationTemplate.content.cloneNode(true);
      variationList.appendChild(clone);
      updateVariationIndexes();
    }

    function updatePreview() {
      previewNome.textContent = nomeInput.value.trim() || '—';
      previewCategoria.textContent = categoriaInput.value || '—';
      previewStatus.textContent = ativoInput.checked ? 'Ativo' : 'Inativo';
    }

    addVariationButtons.forEach(btn => btn.addEventListener('click', addVariation));

    variationList.addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-variation')) {
        const card = event.target.closest('.variation-card');
        if (variationList.children.length > 1) {
          card.remove();
          updateVariationIndexes();
        } else {
          alert('Mantenha pelo menos uma variação cadastrada.');
        }
      }
    });

    nomeInput.addEventListener('input', updatePreview);
    categoriaInput.addEventListener('change', updatePreview);
    ativoInput.addEventListener('change', updatePreview);

    resetForm.addEventListener('click', () => {
      setTimeout(() => {
        variationList.innerHTML = '';
        addVariation();
        updatePreview();
      }, 0);
    });

    productForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Protótipo de front-end salvo com sucesso!');
    });

    addVariation();
    updatePreview();