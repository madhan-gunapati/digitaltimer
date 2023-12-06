import { Component } from "react";

class Timer extends Component{
    state={minutes:25 , seconds:59 , status:'Paused' , stopId:null}

    startTimer = ()=>{
        
        
        const stopId = setInterval(

            ()=>{
                let {minutes , seconds} = this.state
                if(seconds > 0){
                    seconds = seconds - 1
                }
                else if(minutes > 1){
                    seconds = 59
                    minutes = minutes - 1
                }
                this.setState({minutes , seconds})
            }
             ,1* 1000)

        return stopId
    }

    stopTimer = ()=>{
        const {stopId} = this.state 
        this.setState({status:'Paused'})
        clearInterval(stopId)
    }

    changeStatus = ()=>{
        const {status, stopId } = this.state
       console.log(status)
       if(status === 'Paused' ){
       
        let  newStopId = this.startTimer()
        console.log(newStopId)
        this.setState({stopId: newStopId, status:"Running"})
       }
       this.stopTimer()
       this.setState({status:'Paused'})
    }

    resetTimer = ()=>{
        this.stopTimer()
        this.setState({minutes:0 , seconds:0})
        
    }

    render(){
        const {minutes , seconds, status} = this.state
        return <div>
            <h1>Digital Timer</h1>
            <div id='timer-container'>
            <h1>{minutes}:{seconds}</h1>
            <p>{status}</p>
            <button type='button' onClick={this.changeStatus}>Start/stop</button>
            <button type="button" onClick={this.resetTimer}>Reset</button>
            </div>
            </div>
    }

}

export default Timer