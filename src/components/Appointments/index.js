import { Component } from 'react'
import AppointmentItem from '../AppointmentItem'
import {v4 as uuidv4} from 'uuid'
import "./index.css"

const intitalappointmentList= [
{
 id: '1',
 name: 'Dentist Appointment',
 date: '2025-06-27',
 isFavourite: false,
},
{
 id: '2',
 name: 'Team Standup Meeting',
 date: '2025-07-01',
 isFavourite: true,
},
{
 id: '3',
 name: 'Lunch with Sarah',
 date: '2025-07-03',
 isFavourite: false,
},
{
 id: '4',
 name: 'Project Review',
 date: '2025-07-05',
 isFavourite: true,
},
{
 id: '5',
 name: 'Yoga Class',
 date: '2025-07-08',
 isFavourite: false,
}
]
class Appointments extends Component{

    toggleIsFavourite=(id)=>{
        const {appointmentList}=this.state
        const newList=appointmentList.map(eachItem=>{
            if(eachItem.id===id){
                return {...eachItem,isFavourite:!eachItem.isFavourite}
            }
            return eachItem
    })
    this.setState({appointmentList:newList})

    }


    state={
        appointmentList:intitalappointmentList,
        name:'',
        date:'',
        showStarredOnly:false
    }
    onChangeName=(event)=>{
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }

    onChangeDate=(event)=>{
        console.log(event.target.value)
        this.setState({date:event.target.value})
    }

    onAddAppointment=event=>{
        event.preventDefault()
        const {name,date}=this.state
        const newAppointment={
            id:uuidv4(),
            name,
            date,
            isFavourite:false,
        }
        this.setState(prevState=>({
            appointmentList:[...prevState.appointmentList,newAppointment],
            name:'',
            date:'',
        }))
    }

    toggleStarred=()=>{
        this.setState(prevState=>({showStarredOnly:!prevState.showStarredOnly}))
    }




    render(){
        const {name,date}=this.state
        const {appointmentList,showStarredOnly}=this.state
        const filteredList=showStarredOnly?appointmentList.filter(eachItem=>eachItem.isFavourite):appointmentList
        return(
            <div className='container'>

                <div className='appointment-container'>


                <div className='upperContainer'>

                    <div className='formContainer'>
                        <h1 className='heading'>Add Appointments</h1>
                        <form className='form' onSubmit={this.onAddAppointment}>

                            <div className='spandiv'>
                                <label htmlFor="title" className="input-label">Enter Title</label>
                                <input placeholder='Enter Title' id='title' value={name} onChange={this.onChangeName} className='title' type='text'/>
                            </div>

                         <div className='dateDiv'>
                             <label htmlFor="date" className="date-label">Enter Date</label>


                          <input id='date' value={date} onChange={this.onChangeDate} className='date' type='date'/>
                         </div>
                          
                            <button className='button' type='submit'>Add</button>
                        </form>

                    </div>
                    <div className='imageContainer'>
                        <img className='image' src='https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png'/>

                    </div>

                </div>
                <hr className="divider" /> 
                <div className='lowerContainer'>
                    <div className='headingsection'>
                        <h1 className='headingEl'>Appointments</h1>
                        <button className={`starredbutton ${showStarredOnly ? 'active' : ''}`}onClick={this.toggleStarred}>Starred</button>

                        
                    </div>
                    <ul className='list-container'>

                {filteredList.map(item => (
            <AppointmentItem changeFavourite={this.toggleIsFavourite} key={item.id} eachItem={item} />
            ))}
                    </ul>

                </div>
                </div>
            </div>
        )
    }
}

export default Appointments;