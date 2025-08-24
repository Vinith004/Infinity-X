import { Link } from "react-router-dom";
import "../Styles/sectors.css";

export default function Sectors(){
    return(
        <div className="sectors">
            <h1>Welcome to Sectors</h1>
            <div className="sectors-container">
                <div className="sectors-card"><Link to="/Sector/1">IT</Link></div>
                <div className="sectors-card"><Link to="/Sector/2">Pharma</Link></div>
                <div className="sectors-card"><Link to="/Sector/3">Bank</Link></div>
                <div className="sectors-card"><Link to="/Sector/4">Insurence</Link></div>
                <div className="sectors-card"><Link to="/Sector/5">FMCG</Link></div>
                <div className="sectors-card"><Link to="/Sector/6">Auto</Link></div>
                <div className="sectors-card"><Link to="/Sector/7">Finance</Link></div>
                <div className="sectors-card"><Link to="/Sector/8">Metal</Link></div>
                <div className="sectors-card"><Link to="/Sector/9">Cement</Link></div>
            </div>
        </div>
    ) 
}