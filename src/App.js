import React from 'react';
import logo from './logo.svg';
import './App.css';
// var synth = window.speechSynthesis;

// const { ipcRenderer } = window.require("electron")


export default class App extends React.Component {

  runcall(){
    // Microsoft Eva Mobile - English (United States)
    // var arg = {voice:"Samantha", letter: "A", number: 114}
    // var message = 'Ticket number: ' + arg.letter + ': ' + arg.number + '. To counter number: 7.'
    // ipcRenderer.send('callmyname', {message});
    
    // synth.onvoiceschanged = function() {
    //   synth.getVoices();
    //   console.log('got them');
    // }

    // var utterThis = "Ticket number! A. 114. To counter number! 1."
    // var voices = speechSynthesis.getVoices()
    // if (Object.keys(voices).length) {
    //   console.log(voices);
  
    //   var voice = voices.filter((data)=>{ return (data.name==="Google UK English Female") })
    //   // if(Object.keys(voice).length===0){
    //   //     voice = voices.filter((data)=>{ return (data.name==="Fiona") })
    //   // }
    // }

    // console.log(voice);
    

    // utterThis = new SpeechSynthesisUtterance(utterThis)
    // utterThis.voice = voice[0]
    // synth.speak(utterThis)

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={ ()=>this.runcall() }>Goooooo</button>
        </header>
      </div>
    );
  }
}

