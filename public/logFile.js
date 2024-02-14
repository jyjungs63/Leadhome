const param = new URLSearchParams(location.search);
const id = param.get('id');

webix.ready(function () {
    webix.ui({
        cols: [{},  // vertical spacer
        {
            rows: [
                {},  // horizontal spacer
                title,
                project_table,
                //fileBtn,
                nextBtn,
                {}  // horizontal spacer
            ],
        },
        {} // vertical spacer
        ]
    });


    //DB : JSON FILE 목록 도출
    webix.ajax().put('/ajaxGetLog', id).then(function (data) {
        var js = data.json();
        var new_js = [];

        for (var i = 0; i < js.length; i++) {
            new_js.push({
                id: js[i].Id,
                company: js[i].Company,
                date: js[i].Rdate,
                user_event: js[i].User_event
            })
        }

        $$("table").define("data", new_js);
        //$$("table").parse(new_js);
    })
})

var title = {
    label: "<span class='mainLabel'>Log Status </span>",
    view: "label",
    align: "center"
};


var project_table = {
    columns: [
        { id: "id", header: { text: "ID", css: { "text-align": "center" } }, fillspace: true, css: { "text-align": "center" } },
        { id: "company", header: { text: "COMPANY", css: { "text-align": "center" } }, fillspace: true, css: { "text-align": "center" } },
        { id: "date", header: { text: "DATE", css: { "text-align": "center" } }, fillspace: true, css: { "text-align": "center" } },
        { id: "user_event", header: { text: "EVENT", css: { "text-align": "center" } }, fillspace: true, css: { "text-align": "center" } }
    ],
    view: "datatable",
    id: "table"
}

//Main 화면으로 연결
var nextBtn = {
    view: "button",
    value: "Next",
    click: function () {
        location.href = './masterFile.html?id=' + id;
    }
}

