document.addEventListener("DOMContentLoaded", function() {
    var select = document.getElementById("subject");
    var options = select.options;


    var optionIndex = Array.from(options).findIndex(option => option.classList.contains('subject-text'));

    if (optionIndex !== -1) {
        select.options[optionIndex].textContent = "Building Landing pages";
    }
});
