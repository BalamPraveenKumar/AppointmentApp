import "./index.css"

const AppointmentItem=(props)=>{
    const {eachItem,changeFavourite}=props
    const {name,date,id,isFavourite}=eachItem
    const starimage=!isFavourite?"https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png":"https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"

    const formatDate = (rawDate) => {
    const d = new Date(rawDate);
    return d.toLocaleDateString('en-GB', {
        month: 'long',
        year: 'numeric',
        weekday: 'long',
        day: 'numeric',
    });
  };

  const changestarButton=()=>{
    changeFavourite(id)
  }
    return(
        <li className="list-item">
            <div className="upper">
                <div className="name-div">
                    <p>{name}</p>

                </div>
                <div className="image-div">
                     <img className="image" onClick={changestarButton} src={starimage}/>

                </div>

            
           
            </div>
            <div className="lower">

            <p>{formatDate(date)}</p>
            </div>
            

        </li>
        
    )
}

export default AppointmentItem