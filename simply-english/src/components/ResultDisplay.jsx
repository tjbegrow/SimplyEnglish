import Meanings from "./Meanings"

export default function ResultDisplay(props) {
    

    const audioRender = () => {
       const phoneticsArr = props.defResults.phonetics;
       return phoneticsArr.map((phoneticObj,idx) => 
            phoneticObj.audio ? (
                <audio controls key={idx}>
                    <source src={phoneticObj.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            ) : null
        );
    }

    const renderList = (list) =>{
        //TODO: use a variable to check to see if Syonyms or Antonyms need to be displayed at all.
        if (list != undefined) {
            return list.map((items) => items.map(item => <li>{item}</li>))
        }
    }

    const renderMeanings = () => {
        const meanings = props.defResults.meanings;
        return meanings.map(meaning => <Meanings meaning={meaning}/>)
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
            <div id='other-words'>
                <div className='other-words-items'>
                    <h3>Synonyms</h3>
                    <ul id="list">
                        {renderList(props.defResults.meanings.map((meaning) => meaning.synonyms))}
                    </ul>
                </div>
                <div className='other-words-items'>
                    <h3>Antonymns</h3>
                    <ul id="list">
                        {renderList(props.defResults.meanings.map((meaning) => meaning.antonyms))}
                    </ul>
                </div>
            </div>       
            
            <div id="meanings-container">
                <h3>Meanings</h3>
                {renderMeanings()}
            </div>
        </>    
        
    )
}