// -----------------------------------------------------Imports------------------------------------------
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
// -------------------------------------------------------------------------------------------------------

const Uploader = () => {
  // --------------------------------------------------States-------------------------------------------
  const [selectedFile, setSelectedFile] = useState(0);
  // ---------------------------------------------------------------------------------------------------

  // --------------------------------------------------Hooks-------------------------------------------
  // ---------------------------------------------------------------------------------------------------

  // --------------------------------------------------Functions----------------------------------------
  // fileInputHandler -- function to handle the file selection
  const fileInputHandler = (e) => {
    try {
      const file = e.target.files[0];
      console.log("this is the media file", file);
      setSelectedFile(file);
    } catch (error) {
      toast.error("Error during selection");
    }
  };

  // fileUploader -- function to make the api call to the backend with the media payload
  const fileUploader = async (e) => {
    try {
      const formData = new FormData();
      formData.append("mediaFile", selectedFile);
      await axios.post("http://localhost:7878/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progress) => {
          console.log("this is the progress", progress.loaded);
        },
      });
    } catch (error) {
        
    }
  };
  // ---------------------------------------------------------------------------------------------------

  // --------------------------------------------------useEffects----------------------------------------
  // ---------------------------------------------------------------------------------------------------

  // ------------------------------------------------------------------------------------------------
  return (
    <div className="container">
      <div className="row">
        <div className="uploadTitle col-md-12 col-sm-12 col-12">
          <h1>Select a File to Upload</h1>
        </div>
        <div className="uploadElement col-md-12 col-sm-12 col-12">
          <input type="file" onChange={fileInputHandler} />
        </div>
        <div className="uploadButton col-md-12 col-sm-12 col-12">
          <button
            disabled={selectedFile ? false : true}
            type="button"
            className="btn btn-secondary"
            style={{
              background: "green",
              opacity: `${selectedFile ? 1 : 0.9}`,
              cursor: `${selectedFile ? "pointer" : "not-allowed"}`,
              color: "white",
            }}
            onClick={fileUploader}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Uploader;
