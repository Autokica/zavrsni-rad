document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('subtractButton');
    button.addEventListener('click', function() {
        const initialNumber = parseFloat(document.getElementById('initialNumber').value);
        const subtractNumber = parseFloat(document.getElementById('subtractNumber').value);
        if (isNaN(initialNumber) || isNaN(subtractNumber)) {
            alert('Please enter valid numbers');
            return;
  }

        const result = initialNumber - subtractNumber;
        document.getElementById('result').innerText = result;
    });
});
