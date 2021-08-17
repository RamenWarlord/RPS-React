import React, {Component} from 'react'
import Computer from './Computer'
class GameComponent extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            wins: 0,
            loss: 0,
            draw: 0,
            message: ``,
            //choices :   ['Rock','Paper','Scissors']
        }
        this.choices = ['Rock','Paper','Scissors']
        this.clickHandler = this.clickHandler.bind(this)
    }

    win(p, c){
        this.setState((prevState)=>({
            wins : prevState.wins+1,
            message : `You picked ${this.choices[p]}, the computer picked ${this.choices[c]}. You win!`
        }))
    }

    lose(p, c){
        this.setState((prevState)=>({
            loss : prevState.loss+1,
            message : `You picked ${this.choices[p]}, the computer picked ${this.choices[c]}. You lost.`
        }))
    }

    draw(p, c){
        this.setState((prevState)=>({
            draw : prevState.draw+1,
            message : `You picked ${this.choices[p]}, the computer picked ${this.choices[c]}. You drawed.`
        }))
    }
//r=0 p=1 s=2
    getRoundConclusion(playerChoice, compChoice){
        switch (playerChoice){
            case 0:
                switch(compChoice){
                    case 0:
                        this.draw(0, 0)
                        break;
                    case 1:
                        this.lose(0, 1)
                        break;
                    case 2:
                        this.win(0, 2)
                        break;
                    default:
                        console.log(`error: p = ${playerChoice} c = ${compChoice}`)
                        break;
                }
                break;
            case 1:
                switch(compChoice){
                    case 0:
                        this.win(1, 0)
                        break;
                    case 1:
                        this.draw(1, 1)
                        break;
                    case 2:
                        this.lose(1, 2)
                        break;
                    default:
                        console.log(`error: p = ${playerChoice} c = ${compChoice}`)
                        break;
                }
                break;
            case 2:
                switch(compChoice){
                    case 0:
                        this.lose(2, 0)
                        break;
                    case 1:
                        this.win(2, 1)
                        break;
                    case 2:
                        this.draw(2, 2)
                        break;
                    default:
                        console.log(`error: p = ${playerChoice} c = ${compChoice}`)
                        break;
                }
                break;
            default:
                console.log(`error: p = ${playerChoice} c = ${compChoice}`)
                break;
        }
    }

    clickHandler(playerChoice){
        let compChoice = Math.floor(Math.random() * 3)
        this.getRoundConclusion(playerChoice, compChoice)
    }

    render(){
        return (
            <div>
                <div>Wins: {this.state.wins} Losses: {this.state.loss} Draws: {this.state.draw} </div>
                <Computer clickHandler = {this.clickHandler}/>
                <div>{this.state.message}</div>
            </div>
        )
    }
}
export default GameComponent