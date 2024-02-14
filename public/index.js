webix.ready(function () {
    webix.ui({
        cols: [{},  // vertical spacer
        {
            rows: [
                {},  // horizontal spacer
                image,
                form,
                {}  // horizontal spacer
            ],
        },
        {} // vertical spacer
        ]
    });
    webix.ajax('/Company').then(function (data) {
        var js = data.json();
        var new_js = [];

        for (var i = 0; i < js.length; i++) {
            new_js.push({
                id: js[i].Value,
                value: js[i].Value
            })
        }

        $$("company").define("options", new_js);
        $$("company").refresh();
    })
})

var image = {
    id: "image", view: "template", template: "<img src='./lib/images/leadship.png' width = '100%' />",
    autoheight: true
}

var company = { id: "company", label: "Company Select", value: "KRISO", view: "richselect", options: [], labelWidth: 200, width: 500 }

var id = {
    id: "id", label: "ID", name: "id", view: "text", labelWidth: 200, width: 500, required: true,
    validate: webix.rules.isNotEmpty, invalidMessage: "아이디를 입력하세요",
    on: {
        "onBlur": function () {
            var result = this.validate()    // validate only this field and show warning message under field if invalid
            this.$scope.validateForm()
        }
    }
}

var pw = {
    id: "password", name: "password", label: "PASSWORD", view: "text", type: "password",
    labelWidth: 200, width: 500, required: true, validate: webix.rules.isNotEmpty, invalidMessage: "비밀번호를 입력하세요",
    on: {
        "onBlur": function () {
            this.validate()
            this.$scope.validateForm()
        }
    }
}

var loginBtn = {
    view: "button",
    value: "Login",
    click: function (id, event) {
        var form = $$('loginForm')
        if (form.validate()) {

            var data = { id: $$("id").getValue(), passwd: $$("password").getValue(), company: $$("company").getValue() }
            var res = callAjax("leadLogin", data, $$("id").getValue())

            var login_data = {
                "id": $$("id").getValue(),
                "company": $$("company").getValue(),
            }

            localStorage.setItem("login_data", JSON.stringify(login_data));
            webix.ajax().put('/ajaxState', $$("company").getValue())
        }
    }

}

var form = {
    id: "loginForm",
    autowidth: true,
    autoheight: true,
    view: "form", scroll: false,
    rows: [
        company,
        id,
        pw,
        loginBtn
    ]
};

function callAjax(fucname, data, id) {
    var res;

    $.ajax({
        url: "/" + fucname,
        method: "POST",
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        timeout: 50000,
        cache: false,
        async: false,
        success: function (response) {
            if (JSON.parse(response)['result'] == "success") {
                if (data['id']== "root")
                {
                    location.href = './logFile.html?id='+ id;
                }
                else
                {
                    location.href = './masterFile.html'
                }
                // location.href = './main.html?id=' + id;
            }
            else {
                alert('로그인에 실패하셨습니다.')
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (textStatus == "error") {
                return "error has occurred: " + jqXHR.status + " " + jqXHR.statusText
            }
        }
    });

    return res;
}