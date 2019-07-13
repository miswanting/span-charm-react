import React from "react";
import ReactDOM from "react-dom";

import { Text, Link, Button, Rate, Progress } from "./components/inline";

ReactDOM.render(
    <div>
        <Text data={{ text: "123" }} style={{ color: "#f00" }} />
        <Link data={{ text: "123" }} style={{ color: "#f00" }} />
        <Button data={{ text: "123" }} style={{ color: "#f00" }} />
        <Rate data={{ item: ["一", "二", "三"] }} style={{ color: "#f00" }} />
        <Progress data={{ now: 3, max: 5 }} style={{ "backgroundColor": "#f00", width: 100 + "px" }} />
    </div>,
    document.getElementById("root")
);