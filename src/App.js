import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ShowsListContainer from "./components/ShowsListContainer";
import AddEditShow from "./components/AddEditShow";

function App() {
  const [showList, setShowList] = useState([])

  function fetchAllShows() {
    fetch("http://localhost:3000/shows")
      .then(resp => resp.json())
      .then(data => setShowList(data))
  }

  const handleRemoveShow = (id) => {
    fetch(`http://localhost:3000/shows/${id}`, {
      method: "DELETE"
    }).then(resp => resp.json())
      fetchAllShows()
    }

  useEffect(() => {
    document.title = "Show List App"
  })
 
  return (
    <div>
      <Navbar />
      <Header />
        <Routes>
            <Route path="/shows" element={<ShowsListContainer showList={showList} handleRemoveShow={handleRemoveShow} fetchAllShows={fetchAllShows}/>} />
            <Route path='/shows/addEditShow' element={<AddEditShow />} />
        </Routes>
    </div>
  )
}

export default App