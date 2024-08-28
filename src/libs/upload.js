import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Initialize Firebase storage
const storage = getStorage();


const upload = async (file) => {

    const date = new Date()


    // Create a reference to 'images/filename'
    const storageRef = ref(storage, `images/${date}` + file.name);
    
    // Create the upload task
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Return a promise that resolves with the download URL
    return new Promise((resolve, reject) => {
        uploadTask.on(
            'state_changed',
            (snapshot) => {

                // Get task progress
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        console.log('Upload is in an unknown state');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
                reject('Something went wrong: ' + error.message);
            },
            () => {
                // Handle successful uploads
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                }).catch((error) => {
                    reject('Failed to get download URL: ' + error.message);
                });
            }
        );
    });
};

export default upload;
