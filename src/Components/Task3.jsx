import React from 'react'

const Task3 = () => {
    // 1. Find the sum of salary 
    // 2. Display the name of Employee who is getting highest salary
   const employees = [
        { name: "Ammu", age: 25, designation: "Developer", salary: 60000 },
        { name: "Rahul", age: 28, designation: "Software Engineer", salary: 80000 },
        { name: "Sneha", age: 26, designation: "UI/UX Designer", salary: 70000 },
        { name: "Vikram", age: 30, designation: "Software Engineer", salary: 85000 },
        { name: "Priya", age: 24, designation: "Frontend Developer", salary: 65000 },
        { name: "Arjun", age: 27, designation: "Software Engineer", salary: 82000 },
        { name: "Neha", age: 29, designation: "QA Engineer", salary: 75000 },
        { name: "Rohan", age: 32, designation: "Tech Lead", salary: 100000 },
        { name: "Meera", age: 23, designation: "Intern", salary: 30000 },
        { name: "Suresh", age: 35, designation: "HR Manager", salary: 90000 },
        { name: "Divya", age: 26, designation: "Full Stack Developer", salary: 95000 },
        { name: "Kiran", age: 31, designation: "Database Administrator", salary: 88000 },
        { name: "Ananya", age: 27, designation: "Cloud Engineer", salary: 92000 },
        { name: "Varun", age: 33, designation: "DevOps Engineer", salary: 98000 },
        { name: "Pooja", age: 22, designation: "Data Analyst", salary: 72000 }
    ];
    
    const totalSalary=employees.reduce((a,b)=>a+b['salary'],0)
    const highestSalary=employees.reduce((a,b)=>a['salary']>b['salary']?a:b).name
    
   
  return (
    <div >
      <h1 className='fw-bolder text-center text-danger'>Total salary of all employes ={totalSalary}</h1>
      <h2 className='fw-bolder text-center text-success'>Highest Salary Earner is {highestSalary}</h2>
     
    </div>
  )
}

export default Task3
