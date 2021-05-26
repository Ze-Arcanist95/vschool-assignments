import React from "react";
import Card from "./Card";
import vacationSpots from "./VacationSpotList";

function App() {
    const spotListComponent = vacationSpots.map(item => <Card key={item.id} location={item}/>)

    return (
        <div>
            {spotListComponent}
        </div>
    )
}

export default App;