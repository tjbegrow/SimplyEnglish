import Meanings from "./Meanings"

export default function ResultDisplay(props) {
    

    const audioRender = () => {
       const phoneticsArr = props.defResults.phonetics;
       //console.log(phoneticsArr[1]);
       //if (!phoneticsArr || phoneticsArr.length === 0) return <div>No audio found.</div>;
       return phoneticsArr.map((phoneticObj,idx) => 
            phoneticObj.audio ? (
                <audio controls key={idx}>
                    <source src={phoneticObj.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            ) : null
        );
    }

    //TODO: Synonyms & Antonymns renders

    console.log(props.defResults);
    if (props.defResults != undefined)
        //Pick a different phonetic if not on the top level... Ends up being blank sometimes.
    return( 
        <>
            <div id="main-result">
                <h2>{props.defResults.word.charAt(0).toUpperCase() + props.defResults.word.slice(1)} · {props.defResults.phonetic}</h2> 
                {audioRender()}
            </div>
            <hr/>
            <div id='other-words'>
                <div className='other-words-items'>
                    <h3>Synonyms</h3>
                    <ul id="list">
                        <li>word of Godjl;kj;lj;ljk;j;jk;jk;j</li>
                        <li>Logos</li>
                        <li>promise</li>
                    </ul>
                </div>
                <div className='other-words-items'>
                    <h3>Antonymns</h3>
                    <ul id="list">
                        <li>word of Satan</li>
                    </ul>
                </div>
            </div>       
            <h3>Meanings</h3>
            <div>
                <Meanings />
            </div>
        </>    
        
    )
}