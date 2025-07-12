export default function Meanings({meaning}) {
    console.log(meaning);

    const renderDef =  () => {
        return meaning.definitions.map(definitions => 
            (
                
                <div className="meanings-item">
                    <li>{definitions.definition}</li>
                    {definitions.example && <div>
                        <h1>Example</h1>
                        <p><i>{definitions.example}</i></p>
                    </div>}
                </div>
            )
        )
    }
    return (
        <>
            <div id="meaning-container">

                <h4>{meaning.partOfSpeech}</h4>
                <hr width="300px"/>
                <ol>
                    {renderDef()}
                </ol>
            </div>
        </>
    )
}