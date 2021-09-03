import React, { useState } from 'react';


const BoxGen = (props) => {
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState([]);

    function newBox(e){
        e.preventDefault();
        setBoxes([...boxes, color]);
        setColor("")
    }

    return(
        <div className="boxGen">
            <h1>Generate Boxes</h1>
            <form onSubmit ={(e)=> newBox(e)}>
                <p><b>Choose a color:</b></p>
                <input onChange={(e)=>{
                    setColor(e.target.value);}} type="text" value={color}/>
    
                <input type = "submit" value = "Add"/>
            </form>

            <div style ={{display:"flex"}}>
                {boxes.map((color) =>{
                    return (
                    <div style={{backgroundColor: color, width: 300, height: 300}}>
                    </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BoxGen;