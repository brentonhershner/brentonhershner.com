import React, { useState } from "react";

const Base64 = () => {
  const [decoded, setDecoded] = useState("");
  const [encoded, setEncoded] = useState("");

  const onChangeDecoded = (e) => {
    const v = e.target.value;
    setDecoded(v);
    try {
      const encodedUpdate = btoa(v);
      setEncoded(encodedUpdate);
    } catch (err) {
      console.log("Couldn't encode");
    }
  };

  const onChangeEncoded = (e) => {
    const v = e.target.value;
    setEncoded(v);
    try {
      const decodedUpdate = atob(v);
      setDecoded(decodedUpdate);
    } catch (err) {
      console.log("Counldn't decode");
    }
  };

  return (
    <div>
      <div>Base64</div>
      <div>
        <div>Decoded text</div>
        <input type="text" value={decoded} onChange={onChangeDecoded} />
      </div>
      <div>
        <div>Encoded text</div>
        <input type="text" value={encoded} onChange={onChangeEncoded} />
      </div>
    </div>
  );
};

export default Base64;
