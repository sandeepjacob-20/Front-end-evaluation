document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('requestForm');
    const empID = document.getElementById('empid');
    const empName = document.getElementById('empname');
    const project = document.getElementById('project');
    const cause = document.getElementById('cause');
    const source = document.getElementById('source');
    const destination = document.getElementById('destination');
    const fromDate = document.getElementById('fromDate');
    const noOfDays = document.getElementById('noOfDays');
    const modeOfTravel = document.getElementById('modeOfTravel');

    //restricting the fromDate 
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    fromDate.min = reformatDate(minDate);

    const idError = document.getElementById('idError');
    const nameError = document.getElementById('nameError');
    const projectError = document.getElementById('projectError');
    const causeError = document.getElementById('causeError');
    const sourceError = document.getElementById('sourceError');
    const destinationError = document.getElementById('destinationError');
    const noOfDaysError = document.getElementById('noOfDaysError');
    const modeError = document.getElementById('modeError');

    form.addEventListener('submit', function (event) {
        //prevent auto submit
        event.preventDefault();

        //validation - empid
        if(!empID.value.trim()){
            idError.textContent = "Employee ID is required";
        }else
            idError.textContent = '';
        
        //validation - empname
        if(!empName.value.trim()){
            nameError.textContent = "Employee Name is required";
        }else    
            nameError.textContent = '';

        //validation - project
        if(!project.value.trim()){
            projectError.textContent = "Project is required";   
        }else
            projectError.textContent = '';

        //validation - cause    
        if(!cause.value.trim()){
            causeError.textContent = "Cause is required";   
        }else    
            causeError.textContent = '';    
            
        //validation - source
        if(!source.value.trim()){
            sourceError.textContent = "Source is required"; 
        }else    
            sourceError.textContent = '';

        //validation - destination
        if(!destination.value.trim()){
            destinationError.textContent = "Destination is required";   
        }else    
            destinationError.textContent = '';

        //validation - fromDate
        if(!fromDate.value){
            fromDateError.textContent = "From Date is required";
        }else  
            fromDateError.textContent = '';
            
        //validation - noOfDays
        if(!noOfDays.value || noOfDays.value<0){
            noOfDaysError.textContent = "No of Days cannot be empty or less than 0";
        }else
            noOfDaysError.textContent = '';
        
        //validation - modeOfTravel
        if(!modeOfTravel.value){
            modeError.textContent = "Mode of Travel is required";
        }else
            modeError.textContent = '';
    });
});

//fucntion that calculates the toDate based on the number of days and from date
function getToDate(){
    const fromDate = document.getElementById('fromDate');
    const numDays = document.getElementById('noOfDays');
    const toDate = document.getElementById('toDate');
    const date = new Date(fromDate.value);
    date.setDate(date.getDate() + parseInt(numDays.value));
    toDate.value = reformatDate(date);
}

// function to convert dateb object into the accepted format
function reformatDate(date){
    return `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,"0")}-${date.getDate().toString().padStart(2,"0")}`;
}