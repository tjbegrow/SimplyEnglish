import { useState } from "react";

export default function AudioPlayer({AudioInfo}) {
    //derived value to render the Audio Pronounciations Title
    let isRendered = false;

    for (var i = 0; i < AudioInfo.length; i++) {
            console.log(AudioInfo)
            if(AudioInfo[i].audio != "") {
                isRendered = true;
                break;
            } 
            if (i - 1 === AudioInfo.length) {
                isRendered =false;
                break;
            }
        }
        console.log(isRendered);
    //TODO: Make a better looking custom audio player
    const audioRender = () => {
        console.log('in audio render')
        
       const phoneticsArr = AudioInfo;
       return phoneticsArr.map((phoneticObj,idx) => 
            phoneticObj.audio ? (
                <>
                 {/* {isRendered && <h3>Audio Pronounciations</h3>} */}
                <audio controls key={idx}>
                    <source src={phoneticObj.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                </>
            ) : null
        );
    }
    const updateIsRendered = (x) => {
        setIsRendered(x)
    }
    return(
        <div id="audio-render">
            {isRendered && <h3>Audio Pronounciations</h3>}
            <div id="audio-player-container">
                {audioRender()}
            </div>
        </div>
    )
}