import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function AddEditShow() {
    const location = useLocation();
    const { previousShow } = location.state || {}

    const [date, setDate] = useState(previousShow?.date || '')
    const [venue, setVenue]= useState(previousShow?.venue || '')
    const [cityAndState, setCityAndState] = useState(previousShow?.cityAndState || '')

    function changeDate(e) {
        setDate(e.target.value)
    }

    function changeVenue(e) {
        setVenue(e.target.value)
    }

    function changeCityAndState(e) {
        setCityAndState(e.target.value)
    }

 
    function handleSubmit(e) {
        e.preventDefault()
        setDate("")
        setVenue("")
        setCityAndState("")

        const show = {
            date: date,
            venue: venue,
            cityAndState: cityAndState
        }

        previousShow ? (
          fetch(`http://localhost:3000/shows/${previousShow.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': "application/json"
            },
            body: JSON.stringify(show),
          })
        ) : ( 
          fetch("http://localhost:3000/shows", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(show)
        })
        )
        }
    

        return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <input
                name="date"
                type="text"
                placeholder="date"
                onChange={changeDate}
                value={date}>
                </input>
                <input
                name="venue"
                type="text"
                placeholder="venue"
                onChange={changeVenue}
                value={venue}>     
                </input>
                <input 
                name="cityAndState"
                type="text"
                placeholder="city and state"
                onChange={changeCityAndState}
                value={cityAndState}>
                </input>
                { previousShow ? (
                  <input type='submit' value='Edit Show'/>
                ) : (
                  <input type='submit' value="Add Show" />
                )}
            </form>

        </div>
    )

}

export default AddEditShow