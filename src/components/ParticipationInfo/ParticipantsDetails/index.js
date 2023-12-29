import './index.css'

const ParticipantDetails = (props) => {
    const {eachItem} = props
    const {name, speed, startTime} = eachItem
    return (
        <div className = "participants-container" >
            <p>{name}</p>
            <p>{speed}</p>
            <p>{startTime}</p>
            <p>-</p>
        </div>
    )
        
    
}

export default ParticipantDetails