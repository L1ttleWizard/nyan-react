"use client";
import React, { useEffect, useState } from "react";
import { setCookie, getCookie } from "../utils/cookieUtils";
import Link from "next/link";
import '../page.css'
export default function Home() {
    const values = [
        { value: "catapi", text: "The Cat API" },
        { value: "shibeapi", text: "Shibe API" },
    ];
    const [selected, setSelected] = useState(getCookie("API"));
    const [color, setColor] = useState(getCookie("color"));
    const [time, setTime] = useState(5000);
    useEffect(() => {
        document.body.style.backgroundColor = getCookie('color');
        document.body.alignContent = "center";
        document.body.style.display = "flex";
        document.body.style.flexDirection = "column"
    })
    return (
        <>
            <div className="container">
                <h1>Website Configuration</h1>
                <p>Select an API:</p>
                <select
                    id="api-select"
                    value={selected}
                    onChange={(event) => {
                        setSelected(event.target.value);
                        setCookie("API", event.target.value, { expires: 14 });
                    }}
                >
                    {values.map((ind) => {
                        return (
                            <option key={ind.id} value={ind.value}>
                                {ind.text}
                            </option>
                        );
                    })}
                </select>
                <p>Select a color:</p>
                <input
                    type="color"
                    value={getCookie('color')}
                    id="color-select"
                    onChange={(event) => {
                        setColor(event.target.value);
                        setCookie("color", event.target.value, { expires: 14 });
                    }}
                />
                <div>Current API:<span className="violet"> {selected}</span></div>
                <div>Current Color: <span className="violet"> {color}</span></div>
                <Link className="" href="/#">Click here to redirect to Home Page</Link>
            </div>
        </>
    );
}
