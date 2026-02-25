function updatePreview() {
  const saddle = document.querySelector('select[name="saddle"]').value;
  const handlebars = document.querySelector('select[name="handlebars"]').value;
  const lights = document.querySelector('select[name="lights"]').value;
  const battery = document.querySelector('select[name="battery"]').value;
  const app = document.querySelector('select[name="app"]').value;
  
  let previewImage = 'https://picsum.photos/seed/contoura-bike-urban/600/400';
  let previewText = 'Your configured bicycle: ';
  
  if (saddle === 'saddle-black') {
    previewImage = 'https://picsum.photos/seed/saddle-black/600/400';
    previewText += 'Black Saddle, ';
  } else {
    previewImage = 'https://picsum.photos/seed/saddle-red/600/400';
    previewText += 'Red Saddle, ';
  }
  
  if (handlebars === 'handlebars-ergonomic') {
    previewImage = 'https://picsum.photos/seed/handlebars-ergonomic/600/400';
    previewText += 'Ergonomic Handlebars, ';
  } else {
    previewImage = 'https://picsum.photos/seed/handlebars-compact/600/400';
    previewText += 'Compact Handlebars, ';
  }
  
  if (lights === 'lights-advanced') {
    previewImage = 'https://picsum.photos/seed/lights-advanced/600/400';
    previewText += 'Advanced Lights, ';
  } else {
    previewImage = 'https://picsum.photos/seed/lights-basic/600/400';
    previewText += 'Basic Lights, ';
  }
  
  if (battery === 'battery-20000') {
    previewImage = 'https://picsum.photos/seed/battery-20000/600/400';
    previewText += '20,000mAh Battery, ';
  } else {
    previewImage = 'https://picsum.photos/seed/battery-10000/600/400';
    previewText += '10,000mAh Battery, ';
  }
  
  if (app === 'app-pro') {
    previewImage = 'https://picsum.photos/seed/app-pro/600/400';
    previewText += 'Pro App';
  } else {
    previewImage = 'https://picsum.photos/seed/app-standard/600/400';
    previewText += 'Standard App';
  }
  
  document.getElementById('previewImage').src = previewImage;
  document.getElementById('previewText').textContent = previewText;
}