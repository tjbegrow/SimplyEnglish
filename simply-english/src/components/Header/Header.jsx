import {useState} from 'react'
import './header.css'
export default function Header(props) {

    //toggle

    const [toggled, setToggled] = useState(false);
    const [historyDDOpen, setHitoryDDOpen] = useState(false);
    const toggleHistoryDD = () => setHitoryDDOpen(!historyDDOpen);
    console.log(props.HistoryItems);

    const historyMap = () => {
        return props.HistoryItems.map((search) => <li key={search}>{search}</li>);
    };

    return(
        <header>
            <nav>
                <ul>
                    <li className="nav-link"><a href="/">Home</a></li>
                    <div id="history">
                        <button onClick={toggleHistoryDD}>History</button>
                        {historyDDOpen && (
                            <ul className="dropdown-menu">
                                {historyMap()}
                            </ul>
                        )}
                    </div>
                    <li className="nav-link"><a href="/contact">Anki Export</a></li>
                </ul>
                {/* <button
                   className={`toggle-btn ${toggled ? 'toggled': ""}`}
                   onClick={() => setToggled(!toggled)} 
                >
                <div className="thumb"></div>
                </button> */}
            </nav>
        </header>
    )
}