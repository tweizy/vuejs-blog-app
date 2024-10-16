// src/composables/deletePost.js
import { db, doc, deleteDoc } from "../firebase";

export const deletePost = async (id) => {
  try {
    const postRef = doc(db, 'posts', id);  // Reference to the post by ID
    await deleteDoc(postRef);  // Delete the document
    console.log("Post deleted successfully!");
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};
