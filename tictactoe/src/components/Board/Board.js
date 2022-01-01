import React, { useState } from 'react'
import './Board.css'

const Board = (props) => {
    
    var boardCopy = [...props.board]

    const buttonClicked = (index) => {
        if(props.board[index] === '_'){
            boardCopy[index] = 'x';
            if(checkUserWin(boardCopy)){
                props.setBoard(boardCopy)
                props.setDisplayMessage('YOU WON!')
                return;
            }
            var finalBoard = computerTurn(boardCopy);
            props.setBoard(finalBoard);
        }
    }
    const computerTurn = (boardCpy) => {
        var newBoard = placeTurn(boardCpy,'o');
        if(newBoard !== null){
            for(let i=0; i<newBoard.length; i++){
                if(newBoard[i] === '_')
                   newBoard[i] = '.' 
            }
            props.setDisplayMessage('you lost!')
            const lossValue = props.losses + 1;
            props.setLosses(lossValue);
            return newBoard;
        }
        newBoard = placeTurn(boardCpy,'x');
        if(newBoard !== null){
            return newBoard;
        }

        for(let i=0; i<boardCpy.length; i++){
            if(boardCpy[i] === '_'){
                boardCpy[i] = 'o'
                break;
            }
        }
        return boardCpy;
        
    }
    const placeTurn = (boardCpy, filled) => {
        const winWays = [[0,1,2] ,[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        for(let j=0; j<winWays.length; j++){
            const winway = boardCpy[winWays[j][0]] + boardCpy[winWays[j][1]] + boardCpy[winWays[j][2]];
            var str = '_' + filled + filled
            if(winway === str){
                boardCpy[winWays[j][0]] = 'o';
                return boardCpy;
            }
            str = filled + '_' + filled 
            if(winway === str){
                boardCpy[winWays[j][1]] = 'o';
                return boardCpy;
            }
            str = filled + filled + '_'
            if(winway === str){
                boardCpy[winWays[j][2]] = 'o';
                return boardCpy;
            }
        }
        return null;
    }
    const checkUserWin = (boardCpy) =>{
        const winWays = [[0,1,2] ,[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        for(let j=0; j<winWays.length; j++){
            const winway = boardCpy[winWays[j][0]] + boardCpy[winWays[j][1]] + boardCpy[winWays[j][2]];
            
            if(winway === 'xxx'){
                var newBoard = boardCpy;
                for(let i=0 ; i<newBoard.length; i++){
                    if(newBoard[i] === '_')
                        newBoard[i] = '.'
                }
                var newWins = props.wins + 1;
                props.setWins(newWins)
                return true;
            }

        }
        return false;
    }
    return (
        <div className="board">
          <button className="boardBtn" onClick={ ()=> buttonClicked(0)}>{props.board[0]}</button>     <button className = "boardBtn" onClick={()=>buttonClicked(1)}>{props.board[1]}</button>       <button className = "boardBtn" onClick={()=>buttonClicked(2)}>{props.board[2]}</button> <br/>
          <button className="boardBtn" onClick={()=>buttonClicked(3)}>{props.board[3]}</button>     <button className = "boardBtn" onClick={()=>buttonClicked(4)}>{props.board[4]}</button>       <button className = "boardBtn" onClick={()=>buttonClicked(5)}>{props.board[5]}</button> <br/>
          <button className="boardBtn" onClick={()=>buttonClicked(6)}>{props.board[6]}</button>     <button className = "boardBtn" onClick={()=>buttonClicked(7)}>{props.board[7]}</button>       <button className = "boardBtn" onClick={()=>buttonClicked(8)}>{props.board[8]}</button> <br/>
        </div>
      );
}

export default Board;