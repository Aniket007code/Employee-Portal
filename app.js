console.log("Hello");

const btn = document.getElementsByClassName(".addBtnDesign")
// btn.addEventListener("click", (event) => {
//     console.log("btn was clicked");
//   });

function formSubmit(){
    console.log("Btn was clicked");
    let newFormData = readFormData();
    console.log(newFormData);
    insertRecord(newFormData);
}


function readFormData() {
    var formData = {};
    formData["uniqueId"] = document.getElementById("uniqueId").value
    formData["fullName"] = document.getElementById("fullName").value
    formData["age"] = document.getElementById("age").value
    formData["emailId"] = document.getElementById("emailId").value
    formData["gender"] =  document.querySelector('input[name="gender1"]:checked').value;
    formData["designation"] = document.getElementById("designation").value
    formData["action"] = document.getElementById("designation")


    // formData["fullName"] = document.getElementById("fullName").value
    // console.log(formData["gender"]);




    return formData;
}

function insertRecord(data){
  let table = document.getElementById("employeeDetails").getElementsByTagName('tbody')[0];
  let newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.uniqueId;

  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.fullName;

  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.age;

  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.emailId;

  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.gender;

  let cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.designation;

  let cell7 = newRow.insertCell(6);  
  cell7.innerHTML = `<button class = "viewBtn" onClick = "onEdit(this)">view</button>
                     <button class="updateBtn">update</button> 
                     <button class="deleteBtn">delete</button>`
  

}

function onEdit(td) {
    console.log("View btn");
    let selectedRow = td.parentElement.parentElement;
    console.log(selectedRow);
    document.getElementById("uniqueId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;

    document.getElementById("age").value = selectedRow.cells[2].innerHTML;

    document.getElementById("emailId").value = selectedRow.cells[3].innerHTML;

    document.querySelector('input[name="gender1"]:checked').value = selectedRow.cells[4].innerHTML;

    document.getElementById("designation").value = selectedRow.cells[5].innerHTML;

    
}