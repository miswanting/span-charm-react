import React, { Component, useState } from "react";
import "span-charm/dist/span-charm.css"
// export class Window extends Component {
//     render() {
//         return <div></div>
//     }
// }
export function Window() {
    // 声明一个新的叫做 “count” 的 state 变量
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button>
        </div>
    );
}