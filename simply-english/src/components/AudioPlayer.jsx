export default function AudioPlayer({AudioInfo}) {


    //TODO: Make a better looking custom audio player
    const audioRender = () => {
       const phoneticsArr = AudioInfo;
       return phoneticsArr.map((phoneticObj,idx) => 
            phoneticObj.audio ? (
                <audio controls key={idx}>
                    <source src={phoneticObj.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            ) : null
        );
    }
    return(
        <div id="audio-render">
            <h3>Audio Pronounciations</h3>
            <div id="audio-player-container">
                {audioRender()}
            </div>`
        </div>
    )
}