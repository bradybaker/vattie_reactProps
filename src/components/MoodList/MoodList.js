// imports
import { Component } from 'react';

//Class
class MoodList extends Component {
    render() {
        return (
            <div>
                <h2>Hello from MoodList</h2>
                <p>Mood List Props: {JSON.stringify(this.props)}</p>
            </div>
        ); // end return
    } // end render
} // end class


// export
export default MoodList