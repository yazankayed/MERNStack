import React, { useState } from 'react';


const BoxForm = (props) => {
    const [color, setColor] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.youveGotColor(color);

        props.colors.push(color);
        // console.log(typeof (props.currentMsg.allcolors));
        // what should we do with the message?
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <h1>Set Color</h1>
                <textarea
                    rows="4"
                    cols="50"   
                    placeholder="Enter your color here"
                    onChange={(e) => setColor(e.target.value)}
                    value={color}
                ></textarea>
                <input type="submit" value="Send Message" />
            </form>
        </div>
    );
};

export default BoxForm;
