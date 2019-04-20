
const template = document.querySelector("#todo-item");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function () {
    if(xhr.status !== 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
    }
    else {
        const data = xhr.response;
        data.forEach(function (element) {
            let item = document.importNode(template.content, true);
            let todoItem = item.querySelector("tr");
            item.querySelector("#id").innerHTML = element.id;
            item.querySelector("#task").innerHTML = element.task;
            item.querySelector("#deadline").innerHTML = element.deadline;
            item.querySelector("#progress").style.width = `${element.percentage}%`;
            if(element.finished === true){
                item.querySelector("#checkbox").setAttribute( "checked", "checked");
                todoItem.classList.add('completed');
            }
            item.querySelector("#checkbox").addEventListener('change', function () {
                if(this.checked){
                    todoItem.classList.add('completed');
                }
                else{
                    todoItem.classList.remove('completed');
                }
            });
            $("table").append(item);

        })
    }
};