import "./Gallery.css"
import {  useState, useEffect } from "react";
import { leadershipPage, guzhengPage, dancePage, videoPage} from "./Data.js"

export default function Gallery(){
    const [selected, setSelected] =useState("LEADER")
    const [data, setData] = useState([])
    const list = [
        { id: "LEADER", title: "leadership", },

        { id: "GUZHENG", title: "guzheng", },

        { id: "DANCE", title: "dance", },

        { id: "FILM", title: "film",},
    ];

    useEffect(()=>{
        switch(selected){
            case "LEADER":
                setData(leadershipPage);
                break;
            case "GUZHENG":
                setData(guzhengPage);
                break;
            case "DANCE":
                setData(dancePage);
                break;
            case"FILM":
                setData(videoPage)
                break;
            default:
                setData(leadershipPage);
        }
    },[selected])

    return(
        <div className="Gallery" id="Gallery">
            <ul>
                {list.map(item =>(
                    <li key={item.id} className={selected === item.id ? "active" : ""} onClick={() => setSelected(item.id)}>
                        {item.title}
                    </li>
                ))}
            </ul>

            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt="whoop" />
                        <h3>{d.title}</h3>
                        <h4>{d.desc}</h4>
                        {d.link && <a href={d.link} target="_blank">watch now!</a>}
                    </div>
                ))}
            </div>
        </div>
    )
}
