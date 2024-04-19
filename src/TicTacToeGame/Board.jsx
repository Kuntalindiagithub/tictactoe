import React , {useState} from "react";
import { Square } from "./Square";



const Board=()=>{

    const [state, setState]=useState(Array(9).fill(null));
    const [colorfill,setColorfill]=useState(Array(9).fill("#FFFFFF"));
    const [isXTurn,setIsXTurn]=useState(true);
    const [matchStatus,setMatchStatus]=useState("Started");

    const SquareClick = (index) => {
        //console.log("Square Clicked",index);

        if(state[index]==null && matchStatus=="Started"){
            const copyState = [...state];
            copyState[index]= isXTurn ? "X" : "O" ;
            state[index]=isXTurn ? "X" : "O" ;
            setState(copyState);
            setIsXTurn(!isXTurn);

        }
        
        const wonMatch=checkWinner(index);
        if(wonMatch)
        {
            //alert('Click Ok to Reload');
        }
        //console.log("State",state);
    }
    
    const checkWinner= (index) =>{
        //alert(state[index]);
        if(matchStatus=="Started"){
                
            var a,b,c;
            if(((state[0]!=null) && (state[0]==state[1]) && (state[1]==state[2])))
            {
                a=0;
                b=1;
                c=2;
            }
            if(((state[3]!=null) && (state[3]==state[4]) && (state[4]==state[5])))
            {
                a=3;
                b=4;
                c=5;
            }
            if(((state[6]!=null) && (state[6]==state[7]) && (state[7]==state[8])))
            {
                a=6;
                b=7;
                c=8;
            }
            if(((state[0]!=null) && (state[0]==state[3]) && (state[3]==state[6])))
            {
                a=0;
                b=3;
                c=6;
            }
            if(((state[1]!=null) && (state[1]==state[4]) && (state[4]==state[7])))
            {
                a=1;
                b=4;
                c=7;
            }
            if(((state[2]!=null) && (state[2]==state[5]) && (state[5]==state[8])))
            {
                a=2;
                b=5;
                c=8;
            }
            if(((state[0]!=null) && (state[0]==state[4]) && (state[4]==state[8])))
            {
                a=0;
                b=4;
                c=8;
            }
            if(((state[2]!=null) && (state[2]==state[4]) && (state[4]==state[6])))
            {
                a=2;
                b=4;
                c=6;
            }
 
            const copyColorState = [...colorfill];
            copyColorState[a]= "#008000" ;
            copyColorState[b]= "#008000" ;
            copyColorState[c]= "#008000" ;
            
            setColorfill(copyColorState);    


                if(((state[0]!=null) && (state[0]==state[1]) && (state[1]==state[2]))||
                ((state[3]!=null) && (state[3]==state[4]) && (state[4]==state[5]))||
                ((state[6]!=null) && (state[6]==state[7]) && (state[7]==state[8]))||
                ((state[0]!=null) && (state[0]==state[3]) && (state[3]==state[6]))||
                ((state[1]!=null) && (state[1]==state[4]) && (state[4]==state[7]))||
                ((state[2]!=null) && (state[2]==state[5]) && (state[5]==state[8]))||
                ((state[0]!=null) && (state[0]==state[4]) && (state[4]==state[8]))||
                ((state[2]!=null) && (state[2]==state[4]) && (state[4]==state[6])))
                {
                    
                    console.log('Won :'+state[index]);
                    setMatchStatus('Player :'+state[index]+' won the Game');
                    //console.log(matchStatus);
                    return true;
                } else{
                    return false;
                }
        }
    }

    const matchOver =() => {
        if(matchStatus == "Started")
        {
            return true;
        }else{
            return false;
        }
    }

    const restartMatch = () => {
        setState(Array(9).fill(null));
        setIsXTurn(true);
        setMatchStatus("Started");
        setColorfill((Array(9).fill("#FFFFFF")));
    }
    console.log("State",state);
    return (
        
        <div className="board-container">
            <>
            
        <><div style={{backgroundColor: "#8CC152"}} >Game Status ## {matchStatus}</div></>
        <><p></p></>
        <button onClick={restartMatch}>Restart</button>
        <><p></p></>
        <></>
        
            <div className="board-row" >
                <Square onClick={() => SquareClick(0)} value={state[0]} bgcolor={colorfill[0]} />
                <Square onClick={() => SquareClick(1)} value={state[1]} bgcolor={colorfill[1]}/>
                <Square onClick={() => SquareClick(2)} value={state[2]} bgcolor={colorfill[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={() => SquareClick(3)} value={state[3]} bgcolor={colorfill[3]}/>
                <Square onClick={() => SquareClick(4)} value={state[4]} bgcolor={colorfill[4]}/>
                <Square onClick={() => SquareClick(5)} value={state[5]} bgcolor={colorfill[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={() => SquareClick(6)} value={state[6]} bgcolor={colorfill[6]}/>
                <Square onClick={() => SquareClick(7)} value={state[7]} bgcolor={colorfill[7]}/>
                <Square onClick={() => SquareClick(8)} value={state[8]} bgcolor={colorfill[8]}/>
            </div>
            </>
        </div>
       
    );
};

export {Board} ;

