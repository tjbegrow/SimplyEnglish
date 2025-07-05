import Meanings from "./Meanings"

export default function ResultDisplay() {
    return( 
        <>
            <div id="main-result">
                <h2>Word · /wɜːd/</h2>
                <audio controls>
                    <source src="/audio/word.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
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