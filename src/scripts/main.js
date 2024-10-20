document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');  
    const heroSelection = document.querySelector('header')
    const heightButton = heroSelection.clientHeight;
    const toggleButton = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__menu');

    function toggleMenu() {
        menu.classList.toggle('header__menu--active');
    }


    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMenu);
    }


    function checkScreenSize() {
        if (window.innerWidth > 768) {
            menu.classList.remove('header__menu--active'); 
            toggleButton.style.display = 'none'; 
        } else {
            toggleButton.style.display = 'flex'; 
        }
    }


    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
        if (posicaoAtual < heightButton) {
            ocultaElementosHeader()
        } else {
            exibeElementosHeader()
        }
    });

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAsAbas();
            aba.classList.add('hero__shows__list--is-active')
            removeBotaoAtivo();
            botao.target.classList.add('hero__shows__tabs__button--is-active');
        });
    }

    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('hero__shows__tabs__button--is-active')
        }
    }

    function escondeTodasAsAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');
        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('hero__shows__list--is-active')
        }
    }

    function ocultaElementosHeader() {
        const header = document.querySelector('header')
        header.classList.remove('header--is-transparent')
    }

    function exibeElementosHeader() {
        const header = document.querySelector('header')
        header.classList.add('header--is-transparent')
    }
});
