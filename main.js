function calculate() {

    // Retrieve the values of the input fields
    let mathss = parseFloat(document.getElementById('mathss').value);
    let acc = parseFloat(document.getElementById('acc').value);
    let eco = parseFloat(document.getElementById('eco').value);
    let bst = parseFloat(document.getElementById('bst').value);
    let eng = parseFloat(document.getElementById('eng').value);
    let xit = parseFloat(document.getElementById('xit').value);
    let lo = parseFloat(document.getElementById('lo').value);

    // Calculate the total marks
    let totalMarks = mathss + acc + eco + bst + eng + xit + lo;

    // Calculate the average marks
    let averageMarks = totalMarks / 7;

    // Display the results
     resultMessage = document.getElementById('display');
    if (!isNaN(averageMarks)) {
        resultMessage.innerHTML = "Average marks: " + averageMarks.toFixed(2) + "%";
    } else {
        resultMessage.innerHTML = "Please enter valid marks for all subjects.";
    }
}