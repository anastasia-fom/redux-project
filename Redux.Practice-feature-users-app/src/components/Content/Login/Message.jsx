import React from "react";

const Message = ({status}) => {
    const showText = () => {
        let text = '';
        if (status === "succeeded") {
            console.log("Success login!");
            return text = "Success login!";
        } else if (status === "error") {
            console.log("Sorry, something went wrong");
            return text = "Sorry, something went wrong";
        }
    }
    return (
        <div>
            <p>{showText()}</p>
        </div>

    )
}

export default Message;