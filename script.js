let selectedCar = null;
let carData = {
    1: {
        manufacturer: 'Toyota',
        model: 'Model X',
        basePrice: 35000,
        options: {
            color: { red: 0, blue: 500, black: 1000 },
            engine: { '1.5L': 0, '2.0L': 2000, '3.0L': 5000 },
            features: { sunroof: 500, navigation: 1000 }
        }
    },
    2: {
        manufacturer: 'Ford',
        model: 'Model Y',
        basePrice: 42000,
        options: {
            color: { red: 0, blue: 500, black: 1000 },
            engine: { '1.5L': 0, '2.0L': 2000, '3.0L': 5000 },
            features: { sunroof: 500, navigation: 1000 }
        }
    }
};

function selectCar(id) {
    selectedCar = id;
    document.getElementById('configurator').style.display = 'block';
    updateConfigurator();
}

function updateConfigurator() {
    const car = carData[selectedCar];
    const colorSelect = document.getElementById('colorSelect');
    const engineSelect = document.getElementById('engineSelect');
    const feature1 = document.getElementById('feature1');
    const feature2 = document.getElementById('feature2');
    const totalPrice = document.getElementById('totalPrice');
    const configImage = document.getElementById('config-image');

    colorSelect.value = 'red';
    engineSelect.value = '1.5L';
    feature1.checked = false;
    feature2.checked = false;

    totalPrice.textContent = `Total: $${car.basePrice}`;
    configImage.src = `https://picsum.photos/seed/car-default/600/400`;
}

function submitOrder() {
    alert('Thank you for your purchase!');
    document.getElementById('configurator').style.display = 'none';
}

// Initialize configurator
updateConfigurator();