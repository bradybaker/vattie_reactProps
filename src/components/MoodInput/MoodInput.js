// imports
import { Component } from 'react';
import MoodList from '../MoodList/MoodList'

//Class
class MoodInput extends Component {
    state = {
        currentMood: '',
        moods: []
    } //end state


    addMood = () => {
        this.setState({
            moods: [...this.state.moods, this.state.currentMood]
        }) // end this.state
    } // end addMood

    handleChangeFor = (event) => {
        this.setState({
            currentMood: event.target.value,
        })
    } // end handleChangeFor


    render() {
        return (
            <div>
                <h2>Change Mood?</h2>
                <input type='text' placeholder='Current Mood' onChange={(event) => this.handleChangeFor(event)} />
                <button onClick={this.addMood}>Apply Mood</button>
                <p>Mood Input: {JSON.stringify(this.state)}</p>
                <MoodList moods={this.state.moods} />
            </div>
        ); // end return
    } // end render
} // end class


// export
export default MoodInput