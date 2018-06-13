// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';

// About Component
class About extends React.Component {

    render() {
        return (
            <div className="col s12 m10">
                <ReactHelmet
                    title="Slack-like chat app"
                />
            </div>
        )
    }

}

// Contexts
About.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default About;
