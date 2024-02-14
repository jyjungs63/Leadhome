package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
)

type User struct {
	Id      string
	Passwd  string
	Company string
}

type UserTest struct {
	Id      string
	Company string
}

type MasterFILE struct {
	PJNO    string
	NAME    string
	DATE    string
	MANAGER string
	BTN     string
}

type List struct {
	Id    int
	Value string
}

type Data struct {
	ProjectNO string `json:pjno`
	Company   string `json:company`
}

type Insert struct {
	PJNO    string `json:pjno`
	COMPANY string `json:company`
	FILE    string `json:file`
}

type Update struct {
	PJNO    string `json:pjno`
	Company string `json:company`
}

type LogFILE struct {
	Id         string `json:id`
	Company    string `json:company`
	Rdate      string `json:rdate`
	User_event string `json:user_event`
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func dbConn(server int) (db *sql.DB) {

	dnDriver := "mysql"
	var constr string

	switch server {
	case 1:
		constr = "root:leadship!@tcp(10.15.20.108:3306)/leadsship_db"
	case 2:
		constr = "root:leadship!@tcp(10.15.20.108:3306)/leadsship_db_sub"
	default:

	}

	db, err := sql.Open(dnDriver, constr)
	if err != nil {
		panic(err.Error())
	}
	return db
}

func main() {
	http.Handle("/", http.FileServer(http.Dir("public")))
	http.Handle("/main/", http.StripPrefix("/main/", http.FileServer(http.Dir("main"))))

	//Login 화면
	http.HandleFunc("/leadLogin", ajaxleadLoginHandler)
	http.HandleFunc("/ajaxGetLog", ajaxGetLogHandler)

	http.HandleFunc("/loginCheck", ajaxloginCheckHandler)
	http.HandleFunc("/Logout", ajaxLogoutHandler)
	http.HandleFunc("/Company", ajaxCompany)

	//master File
	http.HandleFunc("/ajaxMasterFile", ajaxMasterFile)
	// http.HandleFunc("/ajaxBasicData", ajaxBasicData)
	http.HandleFunc("/ajaxInsertData", ajaxInsertData)
	http.HandleFunc("/ajaxUpdateData", ajaxUpdateData)
	http.HandleFunc("/ajaxProject", ajaxProject)
	http.HandleFunc("/ajaxState", ajaxState)
	http.HandleFunc("/ajaxSelectProject", ajaxSelectProject)

	http.ListenAndServe(":9000", nil)
}

func ajaxloginCheckHandler(w http.ResponseWriter, r *http.Request) {
	var u UserTest
	err := json.NewDecoder(r.Body).Decode(&u)

	db := dbConn(1)
	selDB, err := db.Query("SELECT status from leads_users where id = ? and company = ?", u.Id, u.Company)

	check(err)

	var rst string
	for selDB.Next() {
		var status string

		err = selDB.Scan(&status)

		check(err)

		rst = status
	}
	defer db.Close()

	var result string
	if rst == "Y" {
		result = `{"result": "success"}`
	} else {
		result = `{"result": "false"}`
	}

	empJson, err := json.Marshal(result)

	w.Write(empJson)
}

func ajaxLogoutHandler(w http.ResponseWriter, r *http.Request) {
	var u User
	err := json.NewDecoder(r.Body).Decode(&u)

	db := dbConn(1)
	rst, err := db.Exec("update leads_users set status='N', date = now() where id =? ", u.Id)

	check(err)

	nRow, err := rst.RowsAffected()
	fmt.Println("delete count: ", nRow)
	defer db.Close()

	var result string
	if nRow > 0 {
		result = `{"result": "success"}`
	} else {
		result = `{"result": "false"}`
	}

	empJson, err := json.Marshal(result)

	w.Write(empJson)
}

func ajaxleadLoginHandler(w http.ResponseWriter, r *http.Request) {

	var u User
	err := json.NewDecoder(r.Body).Decode(&u)

	db := dbConn(1)
	selDB, err := db.Query("SELECT Id, Passwd, company from leads_users where id = ?", u.Id)

	check(err)

	user := User{}
	res := []User{}

	for selDB.Next() {
		var id, passwd, company string

		err = selDB.Scan(&id, &passwd, &company)
		check(err)

		user.Id = id
		user.Passwd = passwd
		user.Company = company
		res = append(res, user)
	}

	var result string
	if user.Passwd == u.Passwd {
		result = `{"result": "success"}`
	} else {
		result = `{"result": "false"}`
	}
	if result == `{"result": "success"}` {
		rst, err := db.Exec("update leads_users set status='Y', date = now() where id =? ", u.Id)
		check(err)

		nRow, err := rst.RowsAffected()
		fmt.Println("update count: ", nRow)

		result, err := db.Exec(`INSERT INTO leads_users_log (id, company, user_event) VALUES (?, ?, ?)`, u.Id, u.Company, "login")

		check(err)
		nRow1, err := result.RowsAffected()
		fmt.Println(nRow1)
	}
	defer db.Close()

	empJson, err := json.Marshal(result)

	w.Write(empJson)
}

func ajaxGetLogHandler(w http.ResponseWriter, r *http.Request) {
	req, _ := io.ReadAll(r.Body)
	id := string(req)

	db := dbConn(1)
	selDB, err := db.Query(`SELECT * from leads_users_log where id = ?`, id)

	check(err)

	emp := LogFILE{}
	res := []LogFILE{}

	var uid, company, rdate, user_event, etc string

	for selDB.Next() {

		err = selDB.Scan(&uid, &company, &rdate, &user_event, &etc)
		if err != nil {
			panic(err.Error())
		}

		emp.Id = uid
		emp.Company = company
		emp.Rdate = rdate
		emp.User_event = user_event

		res = append(res, emp)
	}

	defer db.Close()

	empJson, err := json.Marshal(res)

	w.Write(empJson)
}

func ajaxCompany(w http.ResponseWriter, r *http.Request) {
	db := dbConn(2)
	selDB, err := db.Query(`SELECT * FROM company`)

	check(err)

	emp := List{}
	res := []List{}

	var no int
	var company string

	for selDB.Next() {

		err = selDB.Scan(&no, &company)

		check(err)

		emp.Id = no
		emp.Value = company

		res = append(res, emp)
	}

	defer db.Close()

	empJson, err := json.Marshal(res)

	w.Write(empJson)
}

func ajaxMasterFile(w http.ResponseWriter, r *http.Request) {
	req, _ := io.ReadAll(r.Body)
	company := string(req)

	db := dbConn(1)
	selDB, err := db.Query(`SELECT PROJECT_NO, json_extract(JSON, '$.Basic_Data.Project_Title'), json_extract(JSON, '$.Basic_Data.Project_Date'), json_extract(JSON, '$.Basic_Data.Project_Manager') from json_file where company = ?`, company)

	check(err)

	emp := MasterFILE{}
	res := []MasterFILE{}

	var pjno, name, date, manager string

	for selDB.Next() {

		err = selDB.Scan(&pjno, &name, &date, &manager)
		if err != nil {
			panic(err.Error())
		}

		emp.PJNO = pjno
		emp.NAME = name
		emp.DATE = date
		emp.MANAGER = manager
		emp.BTN = "click"

		res = append(res, emp)
	}

	defer db.Close()

	empJson, err := json.Marshal(res)

	w.Write(empJson)
}

// func ajaxBasicData(w http.ResponseWriter, r *http.Request) {
// 	db := dbConn(1)
// 	selDB, err := db.Query(`SELECT JSON from json_file where PROJECT_NO = 'P_00_000'`)

// 	check(err)

// 	emp := Data{}
// 	res := []Data{}

// 	var data string

// 	for selDB.Next() {
// 		err = selDB.Scan(&data)

// 		check(err)

// 		data = strings.Replace(data, "{", "", 1)
// 		data = strings.Replace(data, "}", "", 1)

// 		emp.Data = data

// 		res = append(res, emp)
// 	}

// 	defer db.Close()

// 	empJson, err := json.Marshal(res)

// 	w.Write(empJson)
// }

func ajaxInsertData(w http.ResponseWriter, r *http.Request) {
	var j Insert
	err := json.NewDecoder(r.Body).Decode(&j)

	db := dbConn(1)
	result, err := db.Exec(`INSERT INTO json_file VALUES (?, ?, ?, ?)`, j.PJNO, j.COMPANY, j.FILE, 0)

	check(err)

	nRow, err := result.RowsAffected()
	fmt.Println(nRow)

	defer db.Close()
}

func ajaxProject(w http.ResponseWriter, r *http.Request) {
	db := dbConn(1)
	selDB, err := db.Query(`SELECT PROJECT_NO, COMPANY from json_file`)

	check(err)

	emp := Data{}
	res := []Data{}

	var data, company string

	for selDB.Next() {
		err = selDB.Scan(&data, &company)

		check(err)

		emp.ProjectNO = data
		emp.Company = company

		res = append(res, emp)
	}

	defer db.Close()

	empJson, err := json.Marshal(res)

	w.Write(empJson)
}

func ajaxUpdateData(w http.ResponseWriter, r *http.Request) {
	var j Insert
	err := json.NewDecoder(r.Body).Decode(&j)

	db := dbConn(1)
	result, err := db.Exec(`UPDATE json_file SET JSON = ? WHERE PROJECT_NO = ?`, j.FILE, j.PJNO)

	check(err)

	nRow, err := result.RowsAffected()
	fmt.Println(nRow)

	defer db.Close()
}

func ajaxState(w http.ResponseWriter, r *http.Request) {
	req, _ := io.ReadAll(r.Body)
	company := string(req)

	db := dbConn(1)
	_, err := db.Exec(`UPDATE json_file SET STATUS = 0 where company = ?`, company)

	check(err)

	defer db.Close()
}

func ajaxSelectProject(w http.ResponseWriter, r *http.Request) {
	var j Update
	err := json.NewDecoder(r.Body).Decode(&j)

	db := dbConn(1)
	result, err := db.Exec(`UPDATE json_file SET STATUS = 1 where PROJECT_NO = ? and COMPANY = ?`, j.PJNO, j.Company)

	check(err)

	nRow, err := result.RowsAffected()
	fmt.Println(nRow)

	defer db.Close()
}
