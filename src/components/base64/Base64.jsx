import React, { useState } from "react";

export const EncodeBase64 = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileBase64String, setFileBase64String] = useState("");
  const [decodedBase64, setDecodedBase64] = useState("");

  const onFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        debugger
      const base64 = reader.result;
      setFileBase64String(base64);
      const bytes = atob(base64);
      const byteArray = new Uint8Array(bytes.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteArray[i] = byteCharacters.charCodeAt(i);
      }
      let length = bytes.length;
      let out = new Uint8Array(length);
  
      while (length--) {
          out[length] = bytes.charCodeAt(length);
      }
  
      const blob = new Blob([out], { type: 'application/pdf' });
        // Crea una URL del Blob
    const url = window.URL.createObjectURL(blob);

    // Abre una nueva ventana emergente y carga el PDF
    const newWindow = window.open();
    newWindow.document.write(
      '<iframe width="100%" height="100%" src="' + url + '"></iframe'
    );

    // Limpia la URL
    window.URL.revokeObjectURL(url);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const encodeFileBase64 = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        setFileBase64String(base64);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const decodeFileBase64 = () => {
    if (fileBase64String) {
      const decoded = atob(fileBase64String.split(",")[1]);
      setDecodedBase64(decoded);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          height: "60px",
          width: "100%",
          color: "#FFF",
          fontSize: "30px",
        }}
      >
        Files/Image Base64 Encoding
      </div>
      <br />
      <input type="file" id="input" onChange={onFileChange} />
      <textarea
        style={{ width: "500px" }}
        maxRows={20}
        value={fileBase64String}
        onChange={encodeFileBase64}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D50201",
          height: "60px",
          width: "100%",
          color: "#FFF",
          fontSize: "30px",
        }}
      >
        Files/Image Base64 Decoding
      </div>
      <br />
      <textarea
        style={{ width: "500px" }}
        maxRows={20}
        value={fileBase64String}
      />{" "}
      <textarea
        style={{ width: "500px" }}
        maxRows={20}
        value={decodedBase64}
        onChange={decodeFileBase64}
      />
    </div>
  );
};