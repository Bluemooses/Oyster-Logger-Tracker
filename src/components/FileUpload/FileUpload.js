import React, { Fragment, useState } from "react";
import axios from "axios";
const FileUpload = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const handleImage = (e) => {
    let fileToUpload = e.target.files[0];
    setFile(fileToUpload);
    setFileName(fileToUpload.name);
    console.log(fileToUpload);
    console.log(file, fileName);
  };
  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("/api/add-oyster", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("Problem with server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };
  return (
    <Fragment>
      <form onSubmit={uploadImage}>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={handleImage}
          ></input>

          <input type="submit" value="Add Oyster"></input>
          {/* <label className="custom-file-label">Choose File</label> */}
        </div>
      </form>
    </Fragment>
  );
};

export default FileUpload;
