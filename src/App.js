import React, { useEffect, useState } from "react";
import api from "./api";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";


function App() {
const [students, setStudents] = useState([]);
const [selected, setSelected] = useState(null);


const load = () => {
api.get("").then(res => setStudents(res.data));
};


useEffect(() => {
load();
}, []);


return (
<div className="container">
<h2>Student Management System</h2>
<StudentForm selected={selected} refresh={load} clear={() => setSelected(null)} />
<StudentTable students={students} select={setSelected} refresh={load} />
</div>
);
}


export default App;