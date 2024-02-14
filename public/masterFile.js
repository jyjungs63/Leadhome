webix.ready(function () {
    webix.ui({
        cols: [{},  // vertical spacer
        {
            rows: [
                {},  // horizontal spacer
                title,
                proeject_table,
                fileBtn,
                nextBtn,
                {}  // horizontal spacer
            ],
        },
        {} // vertical spacer
        ]
    });

    var rdata = JSON.parse(localStorage.getItem("login_data"));
    company = rdata.company
    //DB : JSON FILE 목록 도출
    webix.ajax().put('/ajaxMasterFile', company).then(function (data) {
        var js = data.json();
        var new_js = [];

        for (var i = 0; i < js.length; i++) {
            new_js.push({
                id: js[i].PJNO,
                pjno: js[i].PJNO,
                ship: js[i].NAME.replace(/"/g, ''),
                date: js[i].DATE.replace(/"/g, ''),
                manager: js[i].MANAGER.replace(/"/g, ''),
                click: js[i].BTN
            })
        }

        $$("table").define("data", new_js);
    })
})

var title = {
    label: "<span class='mainLabel'>Master File</span>",
    view: "label",
    align: "center"
};

var fileBtn = {
    view: "uploader",
    value: "프로젝트 등록",
    autosend: false,
    multiple: false,
    on: {
        onBeforeFileAdd: function (upload) {
            var file = upload.file;
            var reader = new FileReader();

            reader.onload = function () {
                var fileContent = JSON.parse(reader.result);
                var project_no = fileContent.Basic_Data.Project_NO

                var rdata = JSON.parse(localStorage.getItem("login_data"));
                company = rdata.company

                // 동일한 PROJECT가 존재할 경우
                same = webix.ui({
                    view: "window",
                    modal: true,
                    height: 250,
                    width: 300,
                    position: "center",
                    body: {
                        view: "form",
                        elements: [{
                            template: "동일한 프로젝트가 존재합니다.",
                            view: "template"
                        },
                        {
                            cols: [
                                {
                                    label: "Data Update", view: "button", click: function () {
                                        var data = { "pjno": project_no, "file": reader.result }
                                        webix.ajax().put('/ajaxUpdateData', JSON.stringify(data));

                                        webix.ajax().put('/ajaxMasterFile', company).then(function (data) {
                                            var js = data.json();
                                            var new_js = [];

                                            for (var i = 0; i < js.length; i++) {
                                                new_js.push({
                                                    id: js[i].PJNO,
                                                    pjno: js[i].PJNO,
                                                    ship: js[i].NAME.replace(/"/g, ''),
                                                    date: js[i].DATE.replace(/"/g, ''),
                                                    manager: js[i].MANAGER.replace(/"/g, ''),
                                                    click: js[i].BTN
                                                })
                                            }

                                            $$("table").clearAll();
                                            $$("table").define("data", new_js);
                                            $$("table").refresh();
                                        })
                                        this.getTopParentView().hide();
                                    }
                                },
                                {
                                    label: "Close", view: "button", click: function () {
                                        this.getTopParentView().hide();
                                    }
                                }
                            ]
                        }]
                    }
                })

                //새로운 DATA 입력 시
                update = webix.ui({
                    view: "window",
                    modal: true,
                    height: 250,
                    width: 300,
                    position: "center",
                    body: {
                        view: "form",
                        elements: [{
                            template: "새로운 프로젝트가 등록되었습니다.",
                            view: "template"
                        },
                        {
                            label: "Confirm", view: "button", click: function () {

                                webix.ajax().put('/ajaxMasterFile', company).then(function (data) {
                                    var js = data.json();
                                    var new_js = [];

                                    for (var i = 0; i < js.length; i++) {
                                        new_js.push({
                                            id: js[i].PJNO,
                                            pjno: js[i].PJNO,
                                            ship: js[i].NAME.replace(/"/g, ''),
                                            date: js[i].DATE.replace(/"/g, ''),
                                            manager: js[i].MANAGER.replace(/"/g, ''),
                                            click: js[i].BTN
                                        })
                                    }

                                    $$("table").clearAll();
                                    $$("table").define("data", new_js);
                                    $$("table").refresh();
                                })

                                this.getTopParentView().hide();
                            }
                        }]
                    }
                })

                //PROJECT NO 확인
                webix.ajax('/ajaxProject').then(function (data) {
                    var js = data.json();

                    for (var i = 0; i < js.length; i++) {
                        if (js[i].ProjectNO == project_no && js[i].Company == company) {
                            same.show();
                            update.close();
                            break
                        }
                        else {
                            var rdata = JSON.parse(localStorage.getItem("login_data"));
                            company = rdata.company
                            var data = { "pjno": project_no, "company": company , "file": reader.result}
                            webix.ajax().put('/ajaxInsertData', JSON.stringify(data));

                            update.show();
                        }
                    }
                })
            }

            reader.readAsText(file);
            return true;
        }
    }
}

var proeject_table = {
    columns: [
        {
            id: "click", header: { text: "SELECT", css: { "text-align": "center" } }, width: 100, template: "{common.radio()}", css: { "text-align": "center" }
        },
        { id: "pjno", header: { text: "PROJECT NO", css: { "text-align": "center" } }, fillspace: true, css: { "text-align": "center" } },
        { id: "ship", header: { text: "SHIP TITLE", css: { "text-align": "center" } }, fillspace: true, css: { "text-align": "center" } },
        { id: "date", header: { text: "DATE", css: { "text-align": "center" } }, fillspace: true, css: { "text-align": "center" } },
        { id: "manager", header: { text: "PROJECT MANAGER", css: { "text-align": "center" } }, fillspace: true, css: { "text-align": "center" } }
    ],
    view: "datatable",
    id: "table",
    on: {
        onCheck: function (rowId) {
        }
    }
}

//Main 화면으로 연결
var nextBtn = {
    view: "button",
    value: "Next",
    click: function () {
        var rdata = JSON.parse(localStorage.getItem("login_data"));        
        uid = rdata.id
        company = rdata.company

        var project_no = $$("table")._item_clicked.row

        var data = { "pjno": project_no, "company": company}
        webix.ajax().put('/ajaxSelectProject', JSON.stringify(data));

        location.href = './main.html?id=' + uid;
    }
}

