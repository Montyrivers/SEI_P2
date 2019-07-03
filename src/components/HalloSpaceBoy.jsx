import React from 'react'
import MIDISounds from 'midi-sounds-react'


export default class HalloSpaceBody extends React.Component {



  loadSound = () => {


    let AudioContextFunc = window.AudioContext || window.webkitAudioContext;
    let audioContext = new AudioContextFunc();

    if (navigator.requestMIDIAccess) {
      console.log('MIDI supported');
    } else {
      console.log('MIDI not supported')
    };


    const onMIDISuccess = (midiAccess) => {
      console.log(midiAccess);
      let inputs = midiAccess.inputs;
      let outputs = midiAccess.outputs;
      for (let input of midiAccess.inputs.values()) {
        input.onmidimessage = getMIDIMessage;
      }
    }

    const onMIDIFailure = () => {
      console.log('Could not access midi devices.')
    }

    const getMIDIMessage = (message) => {
      // console.log(message.data);
      let command = message.data[0];
      let note = message.data[1];
      let velocity = (message.data.length > 2) ? message.data[2] : 0



      const playTestInstrument = (note) => {
        this.midiSounds.playChordNow(927, [note], 1.5);

      }


      switch (command) {
        case 128:  //noteOff
          // console.log(command, velocity, note)


          break
        case 144: //noteOn





          playTestInstrument(note)
          // console.log(command, velocity, note);

          if (velocity > 0) {
            // console.log(command, velocity, note);



          }
          break;
        case 176: //sustain
          // console.log(command, velocity, note);
          break;
        case 224: //pitch bend
        // console.log(command, velocity, note)
      }








    }

    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);



  }
  componentDidMount() {
    this.loadSound()
  }

  render() {
    return (
      <div>
        <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3, 10, 11, 12, 13, 14, 15, 671, 672, 683, 927, 930]} />
      </div>
    )
  }


}