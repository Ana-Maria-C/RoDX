
// console.log("year: " + year.innerHTML);
const year = document.getElementById("year").textContent = localStorage.getItem("textvalue");
console.log("text " + text);
// afisare grafic/tabel
function displayImage() {
    let selectedOption = document.getElementById("select-options").value;
    if (selectedOption === 'Grafic') {
        document.getElementById("display-image").src = "./info/grafic.png";
    } else {
        document.getElementById("display-image").src = "./info/tabel.png";
    }
    
}

