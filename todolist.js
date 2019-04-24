
// loading to/do-Item template from index.html
const template = document.querySelector("#todo-item");

//  XML HTTP REQUEST TO "LOAD" the Demo Data for the TASK TABLE
let xhr = new XMLHttpRequest();

// opening the file using get method of http
xhr.open('GET', 'data.json');

// choosing the response type -> json
xhr.responseType = 'json';

// send the request
xhr.send();

// when the callback is responding do
xhr.onload = function () {
    // if status wasn't 200 = 'OK' send Error
    if(xhr.status !== 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
    }
    else {
        const data = xhr.response;

        // for each element in the json file do:
        // creating new copy of the template
        // inserting element.data to the correct place on the copy of template
        data.forEach(function (element) {
            let item = document.importNode(template.content, true);
            let todoItem = item.querySelector("tr");
            item.querySelector("#id").innerHTML = element.id;
            item.querySelector("#task").innerHTML = element.task;
            item.querySelector("#deadline").innerHTML = element.deadline;
            item.querySelector("#progress").style.width = `${element.percentage}%`;

            // if task is finished check the checkbox and add class 'completed' to the item
            if(element.finished === true){
                item.querySelector("#checkbox").setAttribute( "checked", "checked");
                todoItem.classList.add('completed');
            }

            // event listener to check every time  that the checkbox is checked or unchecked
            item.querySelector("#checkbox").addEventListener('change', function () {
                if(this.checked){
                    todoItem.classList.add('completed');
                }
                else{
                    todoItem.classList.remove('completed');
                }
            });
            // appending the item to the table
            $("tbody").append(item);

        })
    }
};