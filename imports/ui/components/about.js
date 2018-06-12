// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';

// About Component
class About extends React.Component {

    render() {
        return (
            <section>
                <ReactHelmet
                    title="About - Chat"
                />

                <h2>About</h2>

                <p>Github Repo: <a href="https://github.com/atulmy/meteor-react-simple-chat">https://github.com/atulmy/meteor-react-simple-chat</a></p>

                <p>Demo: <a href="http://meteor-react-simple-chat.demo.atulmy.com/">http://meteor-react-simple-chat.demo.atulmy.com</a></p>
            </section>
        )
    }

}

// Contexts
About.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default About;
