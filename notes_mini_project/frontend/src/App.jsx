import { useEffect, useState } from 'react'
import axios from "axios"


function App() {
  const [employee, setEmployee] = useState([])

  function getEmployee() {
     axios.get("https://backend-1-r63v.onrender.com/api/employee")
      .then((res) => {
        setEmployee(res.data.employee)
      })
  }
  // useeffect ko use isliye krte hai kyunki useeffect component ke render hone ke baad chalta hai
  useEffect(() => {
   getEmployee()
  }, [])


  // form submit hone par ye function call hoga
  function handleSubmit(e) {
    e.preventDefault()// form submit hone par page reload nahi hoga
    const { name, position, salary } = e.target.elements 
    axios.post("https://backend-1-r63v.onrender.com/api/employee", {
      name: name.value,
      position: position.value,
      salary: salary.value
    }).then((res) => {
      getEmployee()// employee data ko update karne ke liye getEmployee function call karenge
    })
  }



  // delete employee data 


  function deleteEmployee(employee_id){
    axios.delete("https://backend-1-r63v.onrender.com/api/employee/"+employee_id)
    .then(res=>{
      console.log(res.data.message)
      getEmployee()// employee data ko update karne ke liye getEmployee function call karenge
    })
  }


  // update employee data

  function updateEmployee(employee_id){
    const newsalary=prompt("Enter new salary")
    axios.patch("https://backend-1-r63v.onrender.com/api/employee/"+employee_id,{salary:newsalary})
    .then(res=>{
      console.log(res.data.message)
      getEmployee()// employee data ko update karne ke liye getEmployee function call karenge
    })
  }



  return (
    <>

      <div className="frame">
     <form className='employee-add-form' onSubmit={handleSubmit} >
        <input name='name' type="text" placeholder='Name' />
        <input name='position' type="text" placeholder='Position' />
        <input name='salary' type="text" placeholder='Salary' />
        <button >Add Employee</button>
      </form>
</div>
 <div className="notes">
        {
          employee.map((employee) => {
            return <div className="note">
              <h3>{employee.name}</h3>
              <h3>{employee.position}</h3>
              <h3>{employee.salary}</h3>

              <div className='buttons'>
                 <button onClick={()=>{updateEmployee(employee._id)}}>Update</button>
              <button onClick={()=>{deleteEmployee(employee._id)}}>Delete</button>
              </div>
            </div>
            
          })
          
        }
      </div>
      
     
    </>
  )
}

export default App
