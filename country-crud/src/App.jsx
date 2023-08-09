import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [countryData, setCountryData] = useState([]);

  const getCountryData =  () => {
    fetch('http://localhost:8080/countries').then(response => response.json()).then(data => setCountryData([...data]))
  }
  
  useEffect(()=>{
    getCountryData()
  },[])

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/countries/${id}`,{ method: 'DELETE' }).then(response => console.log(response)).catch(err => console.log(err))
  }

  const handleEdit = (id) => {
    console.log(id)
  }

  return (
    <>
      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Capital</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {countryData.map(country => (
              <tr key={country.id}>
                <td>{country.name}</td>
                <td>{country.capital}</td>
                <td onClick={(e) => handleEdit(country.id)}>Edit</td>
                <td><button onClick={(e) => handleDelete(country.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  )
}

export default App
