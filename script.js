document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const car = urlParams.get('car');
    
    if (car) {
        const carData = {
            'toyota-corolla-white': { model: 'Toyota Corolla', basePrice: 20000 },
            'ford-f150-red': { model: 'Ford F-150', basePrice: 35000 },
            'bmw-3-series-black': { model: 'BMW 3 Series', basePrice: 45000 }
        };
        
        const carInfo = carData[car];
        document.getElementById('car-model').textContent = carInfo.model;
        document.getElementById('car-price').textContent = `$${carInfo.basePrice}`;
        
        const totalPriceElement = document.getElementById('total');
        const total = carInfo.basePrice;
        totalPriceElement.textContent = total;
        
        document.getElementById('color-select').addEventListener('change', updatePrice);
        document.getElementById('engine-select').addEventListener('change', updatePrice);
        document.getElementById('sunroof').addEventListener('change', updatePrice);
        document.getElementById('navigation').addEventListener('change', updatePrice);
    }
});

function updatePrice() {
    const basePrice = parseFloat(document.getElementById('car-price').textContent.replace('$', ''));
    let totalPrice = basePrice;
    
    const color = document.getElementById('color-select').value;
    if (color === 'red') totalPrice += 500;
    else if (color === 'blue') totalPrice += 700;
    
    const engine = document.getElementById('engine-select').value;
    if (engine === '2.0L') totalPrice += 1500;
    else if (engine === '3.0L') totalPrice += 3000;
    
    const sunroof = document.getElementById('sunroof').checked ? 1000 : 0;
    const navigation = document.getElementById('navigation').checked ? 500 : 0;
    
    totalPrice += sunroof + navigation;
    
    document.getElementById('total').textContent = totalPrice;
}