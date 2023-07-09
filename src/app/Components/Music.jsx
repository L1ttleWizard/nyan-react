import React, { useEffect } from "react";

export const Music = () => {
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "https://www.nyan.cat/music/original.mp3", text: "Nyan Cat Soundtrack" },
    { value: "https://streams.fluxfm.de/Chillhop/mp3-128/streams.fluxfm.de", text: "LO-FI" },
    { value: "https://stream.willstare.com:8850/;?type=http&nocache=9305", text: "Rain" },
  ];
  const [selected, setSelected] = React.useState(options[0].value);
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  return (
    <div>
      <select value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <audio style={{width:0,height:0}} id="player" controls="controls" preload="none" loop>
        <source id="mp3_src" src={selected} type="audio/mp3" />Your browser does not support the audio element.
      </audio>

    </div>
  );
};
