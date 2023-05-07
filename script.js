document.addEventListener('DOMContentLoaded', () => {
  const floorSelect = document.getElementById('floorSelect');
  const roomSelect = document.getElementById('roomSelect');
  const bookingForm = document.getElementById('bookingForm');
  const resetButton = document.getElementById('resetButton');

  for (let i = 3; i <= 27; i++){
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `Этаж ${i}`;
    floorSelect.appendChild(option);
  }

  for (let i = 1; i <= 10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `Переговорная ${i}`;
    roomSelect.appendChild(option);
  }

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let message = "Встреча назначена на " + datePicker.value + " в " +timePicker.value + " в здании башни " + towerSelect.value + " на " + floorSelect.value + " этаже" + " в комнате " + roomSelect.value;
    alert(message)
    const formData = {
      tower: towerSelect.value,
      floor: floorSelect.value,
      room: roomSelect.value,
      date: datePicker.value,
      time: timePicker.value,
      comment: commentTextarea.value
    };
    bookingForm.reset();
    console.log(JSON.stringify(formData));
  });

  resetButton.addEventListener('click', () => {
    bookingForm.reset();
  });
})