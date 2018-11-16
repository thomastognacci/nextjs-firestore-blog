import {storage} from "./firebase";

async function uploadImageToFirebase(data) {
  const file = data;

  const storageRef = storage.ref();
  const imgRef = storageRef.child("name-of-the-image-here");

  const uploadImg = await imgRef.put(file).then(function(snapshot) {
    console.log("Uploaded a blob or file!");
    return snapshot;
  });

  const fileURL = await uploadImg.ref.getDownloadURL();
  return {data: {link: fileURL}};
}

export {uploadImageToFirebase};
