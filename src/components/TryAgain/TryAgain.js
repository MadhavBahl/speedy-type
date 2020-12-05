import './TryAgain.css';

export const TryAgain = ({ 
    startAgain,
    words,
    characters,
    mistakes
}) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                <p><b>Characters:</b> {characters}</p>
                <p><b>Mistakes:</b> {mistakes}</p>
                <p><b>Speed</b> {words} wpm</p>
            </div>

            <button onClick={startAgain} className="start-again-btn">
                Start Again
            </button>
        </div>
    )
}