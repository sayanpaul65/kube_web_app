function docker(para1, para2, para3 = '0', para4 = '0') {
    var xhr = new XMLHttpRequest();
    var query = document.getElementById("in").value.toLowerCase();
    xhr.open("GET", `http://192.168.43.237/cgi-bin/my.py?x=${query}&y=${para1}&z=${para2}&f=${para3}`, true);
    xhr.send();
    xhr.onload = function () {
        var output = xhr.responseText;
        document.getElementById("para1").innerHTML = output;
    }
};
function createdeploy() {
    var name = prompt('Enter Deployment/Pod Name');
    var image = prompt('Enter Image Name');
    docker(name, image);
};
function deletedeploy() {
    var name = prompt('Enter Deployment/Pod Name you want to delete');
    docker(name);
};
function replicatedeploy() {
    var name = prompt('Enter Deployment Name you want to replicate');
    var count = prompt('Enter Replica Count')
    docker(name, count);
};
function namespace() {
    var name = prompt('Enter Name of you Namespace');
    docker(name);
};
function servicelb() {
    var name = prompt('Enter Deployment/Pod name you want to be exposed');
    var port = prompt('Enter Target Port Number');
    docker(name, port);
};
function deleteservice() {
    var name = prompt('Enter service name to be deleted');
    docker(name);
};
function destroy() {
    alert('Do you really want to destory whole Infrastructure?');
    docker();
};
function list() {
    docker();
};


function ask() {
    var str = document.getElementById('in').value
    var lowercase = str.toLowerCase();
    var arr = lowercase.split(" ");
    if (((arr.indexOf("deploy") > -1) || (arr.indexOf("deployment") > -1) || (arr.indexOf("pod") > -1) || (arr.indexOf("container") > -1) ) && ((arr.indexOf("launch") > -1) || (arr.indexOf("create") > -1))) {
        createdeploy();
    }

    else if (((arr.indexOf("delete") > -1) || (arr.indexOf("remove") > -1)) && ((arr.indexOf("pod") > -1) || (arr.indexOf("container") > -1) ||(arr.indexOf("deploy") > -1) || (arr.indexOf("deployment") > -1))) {
        deletedeploy();
    }

    else if (((arr.indexOf("create") > -1) || (arr.indexOf("scale") > -1) || (arr.indexOf("replicate") > -1)) && ((arr.indexOf("pod") > -1) ||(arr.indexOf("container") > -1) ||(arr.indexOf("deploy") > -1) || (arr.indexOf("replica") > -1) || (arr.indexOf("replicas") > -1) || (arr.indexOf("deployment") > -1))) {
        replicatedeploy();
    }

    else if (((arr.indexOf("create") > -1) || (arr.indexOf("make") > -1) || (arr.indexOf("remove") > -1) || (arr.indexOf("delete") > -1)) && ((arr.indexOf("namespace") > -1) || (arr.indexOf("room") > -1))) {
        namespace();
    }

    else if (((arr.indexOf("expose") > -1) || (arr.indexOf("create") > -1)) && ((arr.indexOf("deployment") > -1) || (arr.indexOf("service") > -1) || (arr.indexOf("load balancer") > -1) || (arr.indexOf("pod") > -1) || (arr.indexOf("svc") > -1))) {
        servicelb();
    }

    else if (((arr.indexOf("remove") > -1) || (arr.indexOf("delete") > -1)) && ((arr.indexOf("service") > -1) || (arr.indexOf("load balancer") > -1) || (arr.indexOf("svc") > -1))) {
        deleteservice();
    }

    else if (((arr.indexOf("remove") > -1) || (arr.indexOf("delete") > -1) || (arr.indexOf("destroy") > -1)) && ((arr.indexOf("infrastructure") > -1) || (arr.indexOf("everything") > -1) || (arr.indexOf("all") > -1))) {
        destroy();
    }
    else if ((arr.indexOf("kubectl") > -1)) {
        docker();
    }
    else if ((arr.indexOf("docker") > -1)) {
        docker();
    }
    else if (((arr.indexOf("list") > -1)|| (arr.indexOf("show") > -1) || (arr.indexOf("display") > -1)) && ((arr.indexOf("pod") > -1) || (arr.indexOf("pods") > -1)|| (arr.indexOf("svc") > -1) || (arr.indexOf("deploy") > -1)|| (arr.indexOf("deployment") > -1)|| (arr.indexOf("containers") > -1)|| (arr.indexOf("service") > -1))) {
        docker();
    }
    else {
        alert("Oops!!! Use kubernetes Commands")
    }
};


