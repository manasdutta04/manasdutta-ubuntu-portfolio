import React from 'react'
//replace the # with the link to your todoist
export default function Todoist() {
    return (
        <iframe src="#" frameBorder="0" title="Todoist" className="h-full w-full"></iframe>
        // just to bypass the headers 🙃
    )
}

export const displayTodoist = () => {
    <Todoist> </Todoist>
}
