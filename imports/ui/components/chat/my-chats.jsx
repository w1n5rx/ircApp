// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';

// MyChats Component
class MyChats extends React.Component {

    render() {
        return (
            <div>
                <ReactHelmet
                    title="Slack-like chat app"
                />

                <div className="col s12 m4">
                    a
                </div>
                <div className="col s12 m6">
                    b
                </div>
            </div>
        )
    }

}

// Contexts
MyChats.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default MyChats;
