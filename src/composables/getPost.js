// src/composables/getPost.js
import { db, doc, getDoc } from "../firebase";

export const getPost = async (id) => {
  try {
    const postRef = doc(db, 'posts', id);  // Reference to a specific document in Firestore
    const postDoc = await getDoc(postRef);  // Fetch the document by ID
    if (postDoc.exists()) {
      return { id: postDoc.id, ...postDoc.data() };
    } else {
      console.log("No such post!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
};
