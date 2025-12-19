import React, { useEffect, useState } from "react";
import api from "../api";


function StudentForm({ selected, refresh, clear }) {
const [student, setStudent] = useState({ name: "", email: "", course: "" });


useEffect(() => {
if (selected) setStudent(selected);
}, [selected]);


const submit = async (e) => {
e.preventDefault();


if (student.id) {
await api.put(`/${student.id}`, student);
} else {
await api.post("", student);
}


setStudent({ name: "", email: "", course: "" });
clear();
refresh();
};


return (
<form onSubmit={submit}>
<input placeholder="Name" value={student.name}
onChange={e => setStudent({ ...student, name: e.target.value })} />
<input placeholder="Email" value={student.email}
onChange={e => setStudent({ ...student, email: e.target.value })} />
<input placeholder="Course" value={student.course}
onChange={e => setStudent({ ...student, course: e.target.value })} />
<button>{student.id ? "Update" : "Add"}</button>
</form>
);
}


export default StudentForm;