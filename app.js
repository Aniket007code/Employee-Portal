console.log("Hello");
var selectedRow = null;

const btn = document.getElementsByClassName(".addBtnDesign")
// btn.addEventListener("click", (event) => {
//     console.log("btn was clicked");
//   });

function formSubmit(){
    console.log("Btn was clicked");
    var newFormData = readFormData();

    // console.log(newFormData);
    if(selectedRow == null){
     insertRecord(newFormData);

    }else{
        updateRecord(newFormData);

    }

 

   
    
}

function readFormData() {
    var formData = {};
    formData["uniqueId"] = document.getElementById("uniqueId").value
    formData["fullName"] = document.getElementById("fullName").value
    formData["age"] = document.getElementById("age").value
    formData["emailId"] = document.getElementById("emailId").value
    formData["gender"] =  document.querySelector('input[name=gender111]:checked').value;  //('input[name="gender1"]:checked').value;
    formData["designation"] = document.getElementById("designation").value
    // formData["imgUrl"] = document.getElementById("imgUrl").value  
    

    


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
  console.log(data.gender)

  let cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.designation;

  let cell7 = newRow.insertCell(6);  
  cell7.innerHTML = `<button class = "viewBtn" onClick = "onView(this)" >view</button>
                     <button class="updateBtn" onClick = "onEdit(this)">update</button> 
                     <button class="deleteBtn" onClick = "onDelete(this)">delete</button>`
  

}

function onEdit(td) {
    checked = true;
    console.log("View btn");
     selectedRow = td.parentElement.parentElement;
    // console.log(selectedRow);
    document.getElementById("uniqueId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;

    document.getElementById("age").value = selectedRow.cells[2].innerHTML;

    document.getElementById("emailId").value = selectedRow.cells[3].innerHTML;


    document.querySelector('#gender2').value = selectedRow.cells[4].innerHTML;
    // console.log(selectedRow.cells[4].innerHTML +"  onedit");
    // console.log(document.querySelector('input[name="gender1"]:checked').value + "doc wala");


    document.getElementById("designation").value = selectedRow.cells[5].innerHTML;
    // document.getElementById("imgUrl").value = selectedRow.cells[6].innerHTML;


    


}
function updateRecord(newFormData) {
    console.log("updaterecord")
    selectedRow.cells[0].innerHTML = newFormData.uniqueId;
    selectedRow.cells[1].innerHTML = newFormData.fullName;

    selectedRow.cells[2].innerHTML = newFormData.age;

    selectedRow.cells[3].innerHTML = newFormData.emailId;

    selectedRow.cells[4].innerHTML = newFormData.gender;          //bas ismai hi error hay
    console.log("ur hello");                                   // ider hi erroe aa rha hay
    // console.log(newFormData.gender);   
    // console.log(selectedRow.cells[4].innerHTML);


    selectedRow.cells[5].innerHTML = newFormData.designation;
    // selectedRow.cells[6].innerHTML = newFormData.imgUrl;

    
}

function onView(newFormData){
    // console.log("view element");
    // let alertData = readFormData()
    openDialog();
    resetForm();

       var newData3 = readFormData();
    // console.log(newData3)

}

function onDelete(td) {
    console.log("delete btn");
    row = td.parentElement.parentElement;
    document.getElementById("employeeDetails").deleteRow(row.rowIndex);
    resetForm();
}






function openDialog() {

    var dialog = document.getElementById('dialog');
    dialog.style.display = 'block';
    var openData1 = readFormData();

    console.log(openData1.imgUrl);
    document.getElementById("id1").innerHTML = openData1.uniqueId;
    document.getElementById("id2").innerHTML = openData1.fullName;
    document.getElementById("id3").innerHTML = openData1.age;
    document.getElementById("id4").innerHTML = openData1.emailId;
    document.getElementById("id5").innerHTML = openData1.gender;
    document.getElementById("id6").innerHTML = openData1.designation;
    document.getElementById("id7").innerHTML = `<img src='${openData1.imgUrl}'>`;







   
}

function closeDialog() {
    var dialog = document.getElementById('dialog');
    dialog.style.display = 'none';
}



function resetForm(){
    document.getElementById("uniqueId").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    document.getElementById("emailId").value = "";
    document.querySelector('input[name="gender111"]:checked').checked = false;
    document.getElementById("designation").value = "";
    // document.getElementById("imgUrl").value = "";


    selectedRow = null;
    //ider wo checked ko false kar
    // document.querySelector('input[name=gender111]:checked=false')

    // document.querySelector('input[name=gender111]:checked').value="";
   
}