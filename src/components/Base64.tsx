import React, { useState, ChangeEvent } from "react";

const Base64: React.FC = () => {
  const [decoded, setDecoded] = useState<string>("");
  const [encoded, setEncoded] = useState<string>("");

  const onChangeDecoded = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setDecoded(v);
    try {
      const encodedUpdate = btoa(v);
      setEncoded(encodedUpdate);
    } catch {
      console.log("Couldn't encode");
    }
  };

  const onChangeEncoded = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setEncoded(v);
    try {
      const decodedUpdate = atob(v);
      setDecoded(decodedUpdate);
    } catch {
      console.log("Couldn't decode");
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