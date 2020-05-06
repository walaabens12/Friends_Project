import React from "react"
import Card from "./Card"

function Big({ Friend }) {
    return (
        <div>
            {
                Friend.map(function (user, i) {
                    return (<Card key={Friend[i].id}
                        id={Friend[i].id}
                        name={Friend[i].name}
                        des={Friend[i].des}
                        src={Friend[i].src}
                    />)
                })
            }
        </div>

    );
}
export default Big;