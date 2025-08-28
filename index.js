// JavaScript para el Equipo Mario Kart - Presentación General

// Datos de los corredores del equipo Mario Kart
const racersData = {
    juan: {
        name: 'Juan "El Rápido"',
        icon: '👨',
        description: 'Velocidad máxima y precisión en las curvas',
        stats: {
            velocidad: 95,
            aceleracion: 90,
            manejo: 85,
            peso: 70
        },
        bio: 'Juan es nuestro corredor estrella, conocido por su velocidad excepcional y su capacidad para mantener la línea perfecta en las curvas más difíciles. Su experiencia en carreras de karting desde la infancia lo ha convertido en un piloto impecable que siempre encuentra la ruta más rápida hacia la victoria.'
    },
    pedro: {
        name: 'Pedro "El Estratega"',
        icon: '👨‍💼',
        description: 'Planificación perfecta y táctica de carrera',
        stats: {
            velocidad: 80,
            aceleracion: 85,
            manejo: 90,
            peso: 75
        },
        bio: 'Pedro es el cerebro del equipo. Su enfoque estratégico le permite analizar cada pista y competidor, adaptando su estilo de conducción según las condiciones. Siempre tiene un plan B y C, lo que lo convierte en un rival impredecible y temido en las carreras.'
    },
    carlos: {
        name: 'Carlos "El Loco"',
        icon: '🍄',
        description: 'Maniobras arriesgadas y adrenalina pura',
        stats: {
            velocidad: 85,
            aceleracion: 95,
            manejo: 75,
            peso: 65
        },
        bio: 'Carlos es el alma salvaje del equipo. Sus maniobras arriesgadas y su estilo de conducción agresivo lo han convertido en el favorito de los fanáticos. Aunque a veces sus movimientos son impredecibles, su valentía y determinación lo han llevado a lograr victorias imposibles.'
    },
    matius: {
        name: 'Matius "El Forajido"',
        icon: '🦍',
        description: 'Poder bruto y resistencia máxima',
        stats: {
            velocidad: 70,
            aceleracion: 75,
            manejo: 80,
            peso: 95
        },
        bio: 'Matius es la fuerza bruta del equipo. Su peso y potencia le dan una ventaja única en las rectas largas y en las colisiones. Aunque no es el más rápido, su resistencia y determinación lo convierten en un oponente formidable que nunca se rinde, sin importar las circunstancias.'
    },
    maria: {
        name: 'María "La Reina"',
        icon: '👸',
        description: 'Elegancia y gracia en la pista',
        stats: {
            velocidad: 90,
            aceleracion: 85,
            manejo: 95,
            peso: 60
        },
        bio: 'María es la reina de la pista, combinando velocidad con una gracia excepcional. Su manejo perfecto del kart y su capacidad para mantener la calma bajo presión la han convertido en una de las corredoras más respetadas. Su estilo elegante y preciso es la envidia de todos los competidores.'
    }
};

// Elementos del DOM
const modal = document.getElementById('racerModal');
const modalContent = modal.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');
const racerCards = document.querySelectorAll('.racer-card');

// Función para mostrar el modal
function showModal(racerId) {
    const racer = racersData[racerId];
    if (!racer) return;

    // Actualizar contenido del modal
    const modalIcon = modal.querySelector('.modal-character-icon');
    const modalTitle = modal.querySelector('.modal-title');
    const bioText = modal.querySelector('.bio-text');

    modalIcon.textContent = racer.icon;
    modalTitle.textContent = racer.name;
    bioText.textContent = racer.bio;

    // Animar las barras de estadísticas
    animateStats(racer.stats);

    // Mostrar modal con animación
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Agregar clase para animación de entrada
    modalContent.classList.add('modal-enter');
}

// Función para animar las estadísticas
function animateStats(stats) {
    const statFills = document.querySelectorAll('.stat-fill');
    const statLabels = document.querySelectorAll('.stat-label');
    
    // Actualizar etiquetas y animar barras
    Object.entries(stats).forEach(([stat, value], index) => {
        if (statLabels[index]) {
            statLabels[index].textContent = stat.charAt(0).toUpperCase() + stat.slice(1);
        }
        
        if (statFills[index]) {
            statFills[index].style.width = '0%';
            
            // Animar la barra después de un pequeño delay
            setTimeout(() => {
                statFills[index].style.width = value + '%';
            }, index * 200);
        }
    });
}

// Función para cerrar el modal
function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalContent.classList.remove('modal-enter');
}

// Event listeners principales
document.addEventListener('DOMContentLoaded', function() {
    // Event listener para las tarjetas de corredores
    racerCards.forEach(card => {
        card.addEventListener('click', function() {
            const racerId = this.getAttribute('data-racer');
            
            // Si es Matius, redirigir a su página
            if (racerId === 'matius') {
                window.location.href = 'matias-presentacion/matias-index.html';
            } else {
                // Para otros corredores, mostrar el modal
                showModal(racerId);
            }
        });
    });

    // Event listener para cerrar modal
    closeModal.addEventListener('click', closeModalFunc);

    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalFunc();
        }
    });

    // Inicializar animaciones y efectos
    initializeAnimations();
    addHoverEffects();
    addScrollEffects();
});

// Función para inicializar animaciones
function initializeAnimations() {
    // Animaciones de entrada para las tarjetas
    animateCardsOnLoad();
    
    // Efecto de power-up para el título
    addPowerUpEffect();
}

// Función para animar las tarjetas al cargar la página
function animateCardsOnLoad() {
    const cards = document.querySelectorAll('.racer-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Función para agregar efectos de hover
function addHoverEffects() {
    // Efecto de partículas en las tarjetas
    racerCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            addParticleEffect(card);
            addItemBoxEffect(card);
        });
    });

    // Efecto de boost en los botones
    document.querySelectorAll('.view-racer-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            addBoostEffect(button);
        });
    });
}

// Función para agregar efecto de partículas
function addParticleEffect(card) {
    const particles = document.createElement('div');
    particles.className = 'particles';
    particles.innerHTML = '✨';
    
    card.appendChild(particles);
    
    setTimeout(() => {
        particles.remove();
    }, 1000);
}

// Función para agregar efecto de item box
function addItemBoxEffect(card) {
    const itemBox = document.createElement('div');
    itemBox.className = 'item-box';
    itemBox.innerHTML = '❓';
    
    card.appendChild(itemBox);
    
    setTimeout(() => {
        itemBox.remove();
    }, 500);
}

// Función para agregar efecto de boost
function addBoostEffect(button) {
    button.style.transform = 'scale(1.2)';
    button.style.boxShadow = '0 0 20px #ff3333';
    
    setTimeout(() => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 5px 15px rgba(255, 51, 51, 0.4)';
    }, 200);
}

// Función para agregar efectos de scroll
function addScrollEffects() {
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        
        // Agregar clase de efecto de scroll
        document.body.classList.add('scrolling');
        
        scrollTimeout = setTimeout(() => {
            document.body.classList.remove('scrolling');
        }, 150);
    });
}

// Función para agregar efecto de power-up
function addPowerUpEffect() {
    const title = document.querySelector('.main-title');
    if (title) {
        title.style.animation = 'powerUp 2s ease-out';
        
        setTimeout(() => {
            title.style.animation = 'glow 2s ease-in-out infinite alternate';
        }, 2000);
    }
}

// Función para agregar efecto de "drift" al hacer scroll
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    
    // Agregar clase de efecto de drift
    document.body.classList.add('scrolling');
    
    scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
    }, 150);
});

// Función para agregar efecto de "power-up" al cargar la página
function addPageLoadEffects() {
    // Efecto de entrada para el título
    const title = document.querySelector('.main-title');
    if (title) {
        title.style.animation = 'powerUp 2s ease-out';
        
        setTimeout(() => {
            title.style.animation = 'glow 2s ease-in-out infinite alternate';
        }, 2000);
    }
    
    // Efecto de entrada para las banderas
    const flags = document.querySelectorAll('.flag-icon');
    flags.forEach((flag, index) => {
        flag.style.animation = `wave 2s ease-in-out infinite ${index * 0.5}s`;
    });
}

// Llamar función de efectos al cargar
window.addEventListener('load', addPageLoadEffects);

// Función para agregar efecto de "boost" al hacer clic en los elementos
function addClickBoostEffect(element) {
    element.style.transform = 'scale(1.1)';
    element.style.boxShadow = '0 0 20px rgba(255, 51, 51, 0.4)';
    
    setTimeout(() => {
        element.style.transform = 'scale(1)';
        element.style.boxShadow = '';
    }, 200);
}

// Agregar efecto de boost a los elementos clickeables
document.querySelectorAll('.racer-card').forEach(element => {
    element.addEventListener('click', () => {
        addClickBoostEffect(element);
    });
});

// Función para agregar efecto de "item box" al hacer hover en las tarjetas
function addItemBoxEffect(card) {
    const itemBox = document.createElement('div');
    itemBox.className = 'item-box';
    itemBox.innerHTML = '❓';
    
    card.appendChild(itemBox);
    
    setTimeout(() => {
        itemBox.remove();
    }, 500);
}

// Agregar efecto de item box al hacer hover
racerCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        addItemBoxEffect(card);
    });
});

// Función para agregar efecto de "boost" al hacer clic en los botones
function addBoostEffect(button) {
    button.style.transform = 'scale(1.2)';
    button.style.boxShadow = '0 0 20px #ff3333';
    
    setTimeout(() => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 5px 15px rgba(255, 51, 51, 0.4)';
    }, 200);
}

// Agregar efecto de boost a los botones
document.querySelectorAll('.view-racer-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        addBoostEffect(button);
    });
});

// Función para agregar efecto de "power-up" al cargar la página
function addPowerUpEffect() {
    const title = document.querySelector('.main-title');
    if (title) {
        title.style.animation = 'powerUp 2s ease-out';
        
        setTimeout(() => {
            title.style.animation = 'glow 2s ease-in-out infinite alternate';
        }, 2000);
    }
}

// Llamar función de power-up al cargar
window.addEventListener('load', addPowerUpEffect);
