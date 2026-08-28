// Lista de las 15 Comunidades / Capillas Filiales
const comunidades = [
    { 
        id: 1, 
        nombre: "Sede Parroquial (Sangre de Cristo)", 
        sector: "Aldea La Labor Vieja (Centro)", 
        horario: "Sábados 06:00 PM | Domingos 08:00 AM y 10:00 AM", 
        mapUrl: "https://maps.google.com/?q=La+Labor+Vieja+San+Pedro+Ayampuc" 
    },
    { 
        id: 2, 
        nombre: "Capilla San José", 
        sector: "Sector El Carmen", 
        horario: "1.er y 3.er Domingo 04:00 PM", 
        mapUrl: "https://maps.google.com/?q=Sector+El+Carmen+San+Pedro+Ayampuc" 
    },
    { 
        id: 3, 
        nombre: "Capilla Virgen de Guadalupe", 
        sector: "Aldea Lo de Reyes", 
        horario: "2.º y 4.º Sábado 04:00 PM", 
        mapUrl: "https://maps.google.com/?q=Lo+de+Reyes+San+Pedro+Ayampuc" 
    },
    { 
        id: 4, 
        nombre: "Capilla Sagrado Corazón de Jesús", 
        sector: "Caserío El Nacimiento", 
        horario: "1.er y 3.er Sábado 05:00 PM", 
        mapUrl: "https://maps.google.com/?q=Caserio+El+Nacimiento+San+Pedro+Ayampuc" 
    },
    { 
        id: 5, 
        nombre: "Capilla San Antonio de Padua", 
        sector: "Sector Los Tubos", 
        horario: "2.º y 4.º Domingo 07:00 AM", 
        mapUrl: "https://maps.google.com/?q=Sector+Los+Tubos+San+Pedro+Ayampuc" 
    },
    { 
        id: 6, 
        nombre: "Capilla Santa Elena", 
        sector: "Caserío El Jícaro", 
        horario: "1.er y 3.er Domingo 02:00 PM", 
        mapUrl: "https://maps.google.com/?q=El+Jicaro+San+Pedro+Ayampuc" 
    },
    { 
        id: 7, 
        nombre: "Capilla Cristo Rey", 
        sector: "Sector La Ceiba", 
        horario: "Domingos 05:00 PM", 
        mapUrl: "https://maps.google.com/?q=Sector+La+Ceiba+San+Pedro+Ayampuc" 
    },
    { 
        id: 8, 
        nombre: "Capilla San Francisco de Asís", 
        sector: "Aldea El Pajarito", 
        horario: "2.º y 4.º Sábado 05:00 PM", 
        mapUrl: "https://maps.google.com/?q=El+Pajarito+San+Pedro+Ayampuc" 
    },
    { 
        id: 9, 
        nombre: "Capilla Virgen del Carmen", 
        sector: "Sector Los Pinos", 
        horario: "1.er y 3.er Domingo 09:00 AM", 
        mapUrl: "https://maps.google.com/?q=Sector+Los+Pinos+San+Pedro+Ayampuc" 
    },
    { 
        id: 10, 
        nombre: "Capilla San Martín de Porres", 
        sector: "Caserío Buena Vista", 
        horario: "2.º y 4.º Domingo 04:00 PM", 
        mapUrl: "https://maps.google.com/?q=Buena+Vista+San+Pedro+Ayampuc" 
    },
    { 
        id: 11, 
        nombre: "Capilla Divino Niño Jesús", 
        sector: "Sector El Rosario", 
        horario: "1.er y 3.er Sábado 04:00 PM", 
        mapUrl: "https://maps.google.com/?q=Sector+El+Rosario+San+Pedro+Ayampuc" 
    },
    { 
        id: 12, 
        nombre: "Capilla San Pedro Apóstol", 
        sector: "San Pedro Ayampuc (Centro)", 
        horario: "Domingos 06:00 AM", 
        mapUrl: "https://maps.google.com/?q=San+Pedro+Ayampuc+Centro" 
    },
    { 
        id: 13, 
        nombre: "Capilla Virgen de la Asunción", 
        sector: "Sector La Laguna", 
        horario: "2.º y 4.º Domingo 11:30 AM", 
        mapUrl: "https://maps.google.com/?q=Sector+La+Laguna+San+Pedro+Ayampuc" 
    },
    { 
        id: 14, 
        nombre: "Capilla San Judas Tadeo", 
        sector: "Sector Las Brisas", 
        horario: "1.er y 3.er Domingo 11:30 AM", 
        mapUrl: "https://maps.google.com/?q=Sector+Las+Brisas+San+Pedro+Ayampuc" 
    },
    { 
        id: 15, 
        nombre: "Capilla Santa Rosa de Lima", 
        sector: "Sector La Esmeralda", 
        horario: "2.º y 4.º Sábado 03:00 PM", 
        mapUrl: "https://maps.google.com/?q=Sector+La+Esmeralda+San+Pedro+Ayampuc" 
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedorComunidades');
    const inputBuscar = document.getElementById('buscarComunidad');

    // Función para renderizar dinámicamente las 15 tarjetas
    function renderizarComunidades(lista) {
        contenedor.innerHTML = '';
        if (lista.length === 0) {
            contenedor.innerHTML = `
                <div class="col-12 text-center text-muted py-5">
                    <i class="bi bi-exclamation-circle fs-1 d-block mb-2 text-warning"></i>
                    <p class="fs-5">No se encontraron comunidades que coincidan con la búsqueda.</p>
                </div>`;
            return;
        }

        lista.forEach(item => {
            const card = document.createElement('div');
            card.className = 'col-md-6 col-lg-4';
            card.innerHTML = `
                <div class="card h-100 border-0 shadow-sm card-hover p-3">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex align-items-center mb-3">
                            <span class="badge bg-danger rounded-circle p-2 me-2">${item.id}</span>
                            <h5 class="card-title fw-bold m-0 text-dark fs-6">${item.nombre}</h5>
                        </div>
                        <p class="text-muted small mb-2">
                            <i class="bi bi-geo-alt-fill text-danger me-1"></i>${item.sector}
                        </p>
                        <p class="card-text text-primary fw-semibold small mb-3">
                            <i class="bi bi-clock-fill me-1"></i>${item.horario}
                        </p>
                        <a href="${item.mapUrl}" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm mt-auto w-100">
                            <i class="bi bi-map me-1"></i>Ver Ubicación GPS
                        </a>
                    </div>
                </div>
            `;
            contenedor.appendChild(card);
        });
    }

    // Renderizado inicial
    renderizarComunidades(comunidades);

    // Búsqueda en vivo por nombre, sector u horario
    if (inputBuscar) {
        inputBuscar.addEventListener('input', (e) => {
            const texto = e.target.value.toLowerCase();
            const filtradas = comunidades.filter(c => 
                c.nombre.toLowerCase().includes(texto) || 
                c.sector.toLowerCase().includes(texto) ||
                c.horario.toLowerCase().includes(texto)
            );
            renderizarComunidades(filtradas);
        });
    }
});