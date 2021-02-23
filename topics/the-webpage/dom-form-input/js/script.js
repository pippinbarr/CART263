let picker = document.getElementById(`color-picker`);

picker.addEventListener(`input`, function(event) {
  let color = picker.value;
  document.body.style[`background-color`] = color;
});