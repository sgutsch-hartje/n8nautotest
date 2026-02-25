document.getElementById('kebabForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const bread = document.querySelector('select[name="bread"]').value;
    const meat = document.querySelector('select[name="meat"]').value;
    const salad = document.querySelector('select[name="salad"]').value;
    const summary = document.getElementById('orderSummary');
    summary.innerHTML = `Your order: <br>Bread: ${bread}<br>Meat: ${meat}<br>Salad: ${salad}`;
});