document.addEventListener("DOMContentLoaded", function () {


    $ajaxUtils.sendGetRequest("json/data.json", function(res) {
        const firstName = res.person[0].name;
        console.log(firstName);
    },
    true
    );
})