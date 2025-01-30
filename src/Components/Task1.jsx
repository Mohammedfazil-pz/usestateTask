import React from 'react'

function Task1() {
    // filter out whose designation is software enginner

    const employees = [
        { name: "Ammu", age: 25, designation: "Developer" },
        { name: "Rahul", age: 28, designation: "Software Engineer" },
        { name: "Sneha", age: 26, designation: "UI/UX Designer" },
        { name: "Vikram", age: 30, designation: "Software Engineer" },
        { name: "Priya", age: 24, designation: "Frontend Developer" },
        { name: "Arjun", age: 27, designation: "Software Engineer" },
        { name: "Neha", age: 29, designation: "QA Engineer" },
        { name: "Rohan", age: 32, designation: "Tech Lead" },
        { name: "Meera", age: 23, designation: "Intern" },
        { name: "Suresh", age: 35, designation: "HR Manager" },
        { name: "Divya", age: 26, designation: "Full Stack Developer" },
        { name: "Kiran", age: 31, designation: "Database Administrator" },
        { name: "Ananya", age: 27, designation: "Cloud Engineer" },
        { name: "Varun", age: 33, designation: "DevOps Engineer" },
        { name: "Pooja", age: 22, designation: "Data Analyst" }
    ];
    return (
        <div className='d-flex justify-content-center m-3'>
            <table className="table w-50 text-center">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Designation</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {employees.filter((a)=>a['designation']==="Software Engineer").map((b)=>(
                        <tr>
                        <th>{b.name}</th>
                        <td>{b.age}</td>
                        <td>{b.designation}</td>
                        
                    </tr>
                    ))}
                    
                </tbody>
            </table>

        </div>
    )
}

export default Task1
