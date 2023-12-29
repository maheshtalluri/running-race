import {Component} from "react"
import ParticipantDetails from "./ParticipantsDetails"
import {v4 as uuidv4} from "uuid"
import './index.css'

class ParticipationInfo extends Component {
    state = {name: "", speed: "", startTime: "", participantsList: []}

    onChangeName = event => {
        this.setState({name: event.target.value})
    }

    onChangeSpeed = event => {
        this.setState({speed: event.target.value})
    }

    onChangeStartTime = event => {
        this.setState({startTime: event.target.value})
    }

    addRunnerDetails = event => {
        event.preventDefault()
        const {name, speed, startTime} = this.state
        const newParticipanr = {
            id: uuidv4(),
            name,
            speed,
            startTime

        }

        this.setState(preState => ({participantsList: [...preState.participantsList, newParticipanr], 
        name: "",
        speed: "",
        startTime: ""
    }))
        
    }
    render() {
        const {name, speed, startTime, participantsList} = this.state
        return <div className = "partipation-bg" >
            <form className = "runner-details-card" onSubmit = {this.addRunnerDetails} >
                <div className = "runner-title" >
                <h1 className = "runner-head" >RUNNER DETAILS</h1>
                <p className = "note" >* You can add max 10 participates</p>
                </div>
                <div>
                    <div className = "input-name-container">
                    <p className = "input-name" htmlFor = "name" >Name</p>
                    <input value = {name} onChange={this.onChangeName} id = "name" type="text" placeholder="Please enter" className = "input-value" />
                    </div>
                    <div className = "input-name-container">
                    <p className = "input-name" >Speed</p>
                    <input value = {speed} onChange = {this.onChangeSpeed} type="text" placeholder="please enter" className = "input-value" />
                    </div>
                    <div className = "input-name-container">
                    <p className = "input-name" >Start Time</p>
                    <input value = {startTime} onChange={this.onChangeStartTime} type="text" placeholder="please enter" className = "input-value" />
                    </div>
                </div>

                <button type="submit" className = "addBtn" ><span className = "span-ele" >+</span>ADD RUNNER</button>
                
            </form>
            <div className = "list-details-card" >
                <h1 className="list-of-participants-heading" >LIST OF PARTICIPANTS</h1>
                <div className = "player-table" >
                    <p>Name</p>
                    <p>Speed</p>
                    <p>Start Time</p>
                    <p>End Time</p>
                </div>
                {participantsList.map(eachItem => (<ParticipantDetails eachItem = {eachItem} key = {eachItem.id}  />))}
                <hr className = "hr-line" />
                <button className = "startBtn" >Start Race</button>
            </div>
        </div>
    }
}

export default ParticipationInfo