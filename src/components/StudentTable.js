import React from "react";
import api from "../api";


function StudentTable({ students, select, refresh }) {


const remove = async (id) => {
await api.delete(`/${id}`);
refresh();
};


return (
<table className="table">
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Course</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{students.map(s => (
<tr key={s.id}>
<td>{s.name}</td>
<td>{s.email}</td>
<td>{s.course}</td>
<td>
<button className="edit" onClick={() => select(s)}>Edit</button>
<button className="delete" onClick={() => remove(s.id)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
);
}


export default StudentTable;