// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';

// DirectMessages Component
class DirectMessages extends React.Component {

    render() {
        return (
            <div>
                <ReactHelmet
                    title="DirectMessages - Slack-like chat app"
                />

                <div className="col s12 m4">
                    @todo
                </div>
                <div className="col s12 m6">
                    @todo
                </div>
            </div>
        )
    }

}

// Contexts
DirectMessages.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default DirectMessages;
