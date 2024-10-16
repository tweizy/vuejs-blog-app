// src/composables/updatePost.js
import { db, doc, updateDoc } from "../firebase";

export const updatePost = async (id, updatedData) => {
  try {
    const postRef = doc(db, 'posts', id);  // Reference to the post
    await updateDoc(postRef, updatedData);  // Update the document
    console.log("Post updated successfully!");
  } catch (error) {
    console.error("Error updating post:", error);
  }
};
