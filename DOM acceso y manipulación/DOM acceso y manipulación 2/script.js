const thumbnailsContainer = document.getElementById('thumbnails');
const mainImageContainer = document.getElementById('main-image');
const fullImage = document.getElementById('full-image');
const imageDescription = document.getElementById('image-description');

const imagesData = [
    { src: 'mouse.jpg', description: 'Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos. PRECIO : $92.900 ENVIO GRATIS' },
    { src: 'audifono.jpg', description: '¡Experimenta la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los CAT STN-28 no te pierdes ningún detalle y escuchas el audio tal y como fue diseñado por los creadores. PRECIO : $72.000' },
    { src: 'pantalla.jpg', description: 'LG busca entender a los usuarios para ofrecerles óptimas soluciones y nuevas experiencias a través de la evolución tecnológica. Disfruta de la perfecta combinación de diseño, calidad y rendimiento que la empresa te ofrece en este monitor. PRECIO $334.999 mas costos de envio.' },
    { src: 'pcgamer.jpg', description: 'TORRE POWER GROUP L18, FUENTE REAL 350W, BOARD AMD A520M, PROCESADOR AMD RYZEN 7 5700X, GRAFICOS NVIDIA GEFORCE GT 730 2GB DDR3, RAM DDR4 32GB BLINDADA 3200MHZ 1X32GB (Ó 2X16GB), SSD 480GB (Ó DISCO DURO 1TB) PRECIO : $ 2.500.000 pesos con un descuento del 19% mas envio gratis a todo destino. ' },
    { src: 'sillagamer.jpg', description: 'La selección de una silla adecuada es muy importante para prevenir futuras lesiones. Con esta silla Xtrike Me, tendrás la comodidad y el bienestar que necesitas a lo largo de tu jornada. Además, puedes ubicarla en cualquier parte de tu casa u oficina ya que su diseño se adapta a múltiples entornos. ¡Dale a tus espacios un toque más moderno! PRECIO: $542.900 . Mas un descuento del 20% el envio te cobra segun el lugar de destino. ' },
];

imagesData.forEach((image, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.innerHTML = `<img src="${image.src}" alt="Miniatura ${index + 1}" onclick="showImage(${index})">`;
    thumbnailsContainer.appendChild(thumbnail);
});

function showImage(index) {
    const selectedImage = imagesData[index];
    fullImage.src = selectedImage.src;
    imageDescription.textContent = selectedImage.description;

    const allImages = document.querySelectorAll('.main-image img');
    allImages.forEach(img => img.style.display = 'none');
    fullImage.style.display = 'block';
}
