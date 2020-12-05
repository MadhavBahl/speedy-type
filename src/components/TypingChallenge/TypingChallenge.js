import './TypingChallenge.css';

export const TypingChallenge = ({ 
    handleKeyPress,
    timeRemaining,
    timerStarted,
    selectedParagraph
}) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}</p>
                <p className="timer-info">{!timerStarted && 'Start typing to start the test'}</p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left ">
                    <textarea 
                        disabled={true}
                        className="textarea"
                        value={selectedParagraph}
                    >
                    </textarea>
                </div>
                <div className="textarea-right">
                    <textarea 
                        onChange={e => handleKeyPress(e.target.value)}
                        className="textarea" 
                        placeholder="Start typing here"
                    ></textarea>
                </div>
            </div>
        </div>
    )
}