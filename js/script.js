const data = [
    {"title": "Steak & Shrimp", "img": "img/ESPECIALES WEB/carne asada.jpg", 'alt': "carne_asada_1", 'info': "Steak and shrimp, covered with melted cheese. Served with rice, refried beans and tortillas."},
    {"title": "CARNE ASADA", "img": "img/ESPECIALES WEB/carne asada.jpg", 'alt': "carne_asada", 'info': " Grilled skirt steak. Served with rice, refried beans, guacamole salad, pico and tortillas."},
    {"title": "Chimichanga", "img": "img/ESPECIALES WEB/chimicanga2.jpg", 'alt': "chimicanga", 'info': "Beef Grill Honey Sauce with Paprica"},
    {"title": "Mexcantina Platte", "img": "img/ESPECIALES WEB/mexcantina plate.jpg", 'alt': "mexcantina_plate", 'info': "Beef Grill Honey Sauce with Paprica"},
    {"title": "Enchiladas Oaxaqueñas", "img": "img/ESPECIALES WEB/enchilada oaxaca2.jpg", 'alt': "enchilada", 'info': "Beef Grill Honey Sauce with Paprica"},
    {"title": "Carnitas Michoacan", "img": "img/ESPECIALES WEB/carnitas.jpg", 'alt': "carnitas", 'info': "Beef Grill Honey Sauce with Paprica"},
];

function agregarContenedores() {
    // Obtener el contenedor principal por su ID
    var container = document.getElementById('container_check');

    // Iterar sobre los datos y crear elementos dinámicos
    data.forEach(item => {
        var card = document.createElement('div');
        card.className = 'card_specials';

        var img = document.createElement('img');
        img.src = item.img;
        img.alt = item.alt;

        var infoDiv = document.createElement('div');
        infoDiv.className = 'card_specials_info';

        var title = document.createElement('h4');
        title.textContent = item.title;

        var info = document.createElement('p');
        info.textContent = item.info;

        // Agregar elementos al div de información
        infoDiv.appendChild(title);
        infoDiv.appendChild(info);

        // Agregar imagen y div de información al contenedor principal
        card.appendChild(img);
        card.appendChild(infoDiv);

        // Agregar la tarjeta al contenedor principal
        container.appendChild(card);
    });
}

// Llama a la función para agregar los contenedores
agregarContenedores();

