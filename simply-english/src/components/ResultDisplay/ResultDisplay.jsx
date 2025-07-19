import Meanings from "../Meanings/Meanings"
import AudioPlayer from "../AudioPlayer/AudioPlayer"

export default function ResultDisplay(props) {
    
    let letIfSynonyms = false;
    let letIfAntonyms = false;
    console.log(props);
    
    if (props.defResults != undefined) {
        for (const meaning of props.defResults.meanings) {
                if (meaning.synonyms.length !== 0) {
                    letIfSynonyms = true;   
                    console.log('found breaking')
                } 
                if (meaning.antonyms.length !== 0) {
                    letIfAntonyms = true;   
                    console.log('found breaking')
                }
                if (letIfAntonyms && letIfAntonyms) {
                    break;
                }
            }
    }
    

    const searchOtherWord = (e) => {
        //console.log(e.target.lastChild.textContent);
        document.getElementById("searchBox").value = e.target.lastChild.textContent;
        props.handleSearchChange(e.target.lastChild.textContent);
    } 

    const renderList = (list) =>{
        return list.map((items) => items.map(item => <li><button className="submitOtherWordBtn" type='submit' onClick={searchOtherWord}>{item}</button></li>))
    }
    
    const renderMeanings = () => {
        const meanings = props.defResults.meanings;
        return meanings.map(meaning => <Meanings meaning={meaning}/>)
    }

    //TODO: Synonyms & Antonymns renders

    //console.log(props.defResults);
    if (props.defResults != undefined)
        //Pick a different phonetic if not on the top level... Ends up being blank sometimes.
    return( 
        <>
            <div id="main-result">
                <h2>{props.defResults.word.charAt(0).toUpperCase() + props.defResults.word.slice(1)}  {props.defResults.phonetic && '· ' + props.defResults.phonetic}</h2> 
                
            </div>
            <AudioPlayer AudioInfo={props.defResults.phonetics}/>
            <div id='other-words'>
                {letIfSynonyms && <div className='other-words-items'>
                    <h3>Synonyms</h3>
                    <ul id="list">
                        {renderList(props.defResults.meanings.map((meaning) => meaning.synonyms))}
                    </ul>
                </div>}
                {letIfAntonyms && <div className='other-words-items'>
                    <h3>Antonymns</h3>
                    <ul id="list">
                        {renderList(props.defResults.meanings.map((meaning) => meaning.antonyms))}
                    </ul>
                </div>}
            </div>       
            <div id="meanings-title">
                <h3>Meanings</h3>
            </div>
            <div id="meanings-container">
                
                {renderMeanings()}
            </div>
        </>    
        
    )
}