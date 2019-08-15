import { useState } from "react";
// import React from 'react'
import * as React from 'react'

// export default function App(props: any) {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//         </button>
//         </div>
//     );
// }
function App1(props: any) {
    const [count, setCount] = useState(0);
    return (
        <div>123
        </div>
    );
}
/**
 * 窗口
 */
export default class App extends React.Component<{ data: any }, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return <App1></App1>
    }
}