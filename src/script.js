
function setupAccordion() {
    // 1. Seleciona APENAS os botões de alternância do acordeão
    const toggleButtons = document.querySelectorAll('.accordion-toggle-btn');

    toggleButtons.forEach(button => {
                // O item pai é o avô do botão (button -> div.accordion-header -> div.accordion-item)
        const item = button.closest('.accordion-item'); 
                // O conteúdo é encontrado pelo ID definido no atributo aria-controls do botão
        const contentId = button.getAttribute('aria-controls');
        const content = document.getElementById(contentId); 

                // 2. Adiciona um "listener" de evento de clique ao botão
        button.addEventListener('click', () => {
                    
                    // 3. Alterna a classe 'active' no item pai
        item.classList.toggle('active');

                    // 4. Lógica de Acessibilidade (ARIA)
        const isExpanded = button.getAttribute('aria-expanded') === 'true' || false;
        button.setAttribute('aria-expanded', !isExpanded);
                    
            if (isExpanded) {
                content.setAttribute('hidden', true); // Esconde o conteúdo
            } else {
                content.removeAttribute('hidden'); // Mostra o conteúdo
            }
        });
    });
}

