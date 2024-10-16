// src/composables/getPosts.js
import { db } from "../firebase";  // Import the initialized Firestore instance
import { collection, getDocs } from "firebase/firestore";  // Import Firestore functions

export const getPosts = async () => {
  try {
    const postsCol = collection(db, 'posts');
    console.log("Fetching posts from Firestore...");  // Debugging log
    const postSnapshot = await getDocs(postsCol);
    console.log("Fetched posts:", postSnapshot.docs);  // Log the fetched documents
    const postList = postSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return postList;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

