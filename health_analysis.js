const addPatient = document.getElementById('addPatient');
const report = document.getElementById('report');
const btnSearch = document.getElementById('btnSearch');
const patients = [];

function resetForm () {
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('condition').value = '';
    document.querySelector('input[name="gender"] : checked').checked = false;
}