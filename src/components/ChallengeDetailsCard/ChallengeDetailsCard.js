import './ChallengeDetailsCard.css';

export const ChallengeDetailsCard = ({ cardName, cardValue }) => {
    return (
        <div className="details-card-container">
            <p className="card-name">{cardName}</p>
            <p className="card-value">{cardValue}</p>
        </div>
    )    
}
