import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ShowCard from "./ShowCard";


function ShowsListContainer({ showList, handleRemoveShow, fetchAllShows }) {

    useEffect(() => {
        fetchAllShows()
    }, [])
        
        return (
        <div>
            {showList.map((show, id) => {
                return <ul key={id}>
                <ShowCard 
                show={show} 
                key={show.id}
                />
                <button>
                    <Link to="/shows/addEditShow" state={{ previousShow: show }}>Edit Show</Link>
                </button>
                <button onClick={() => handleRemoveShow(show.id)}>Remove Show</button>
                </ul>
            })}
            
        </div>
        )
    }

export default ShowsListContainer;