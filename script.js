document.addEventListener('DOMContentLoaded', function() {
    // Botão ver mais fotos
    const btnVerMais = document.getElementById('btnVerMais');
    if (btnVerMais) {
        btnVerMais.addEventListener('click', function() {
            alert('Em um site completo, esta função carregaria mais fotos da galeria!');
            // Aqui poderia ser implementado um carregamento dinâmico de mais imagens
        });
    }

    // Atualizar ano no rodapé
    const anoAtual = new Date().getFullYear();
    const elementoRodape = document.querySelector('.rodape p');
    if (elementoRodape) {
        elementoRodape.innerHTML = elementoRodape.innerHTML.replace('2023', anoAtual);
    }

    // Efeito suave ao rolar para seções
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adicionar classe ativa ao item de navegação correspondente à seção visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});