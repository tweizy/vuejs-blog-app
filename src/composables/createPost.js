// src/composables/createPost.js
import { db } from "../firebase";  // Import the Firestore instance from firebase.js
import { collection, addDoc } from "firebase/firestore";  // Import Firestore functions

export const addPost = async (newPost) => {
  try {
    // Reference to the 'posts' collection in Firestore
    const postsCollectionRef = collection(db, 'posts');

    // Add a new document with the post data
    const docRef = await addDoc(postsCollectionRef, newPost);

    console.log("Post added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding post: ", error);
  }
};
