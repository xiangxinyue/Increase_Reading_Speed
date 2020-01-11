import React from "react";

export const TestingPart = (props) => {
    return(
        <div>
            <p>
                This is the test paragraph, you can see these sentences because you already <br/>
                start the first test, and we will determine which reading level you are <br/>
                in according to your reading speed of this paragraph, thanks.
            </p>
            <button onClick={props.finish}>Finish</button>
        </div>
    )
}