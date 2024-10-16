const fs = require('fs');
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

// Firebase config (replace with your actual Firebase credentials)
const firebaseConfig = {
    apiKey: "AIzaSyD6k-_ZTs6r8P5zUO1Gnn0D6V_s1U8nwGk",
    authDomain: "blog-vue-app-cda48.firebaseapp.com",
    projectId: "blog-vue-app-cda48",
    storageBucket: "blog-vue-app-cda48.appspot.com",
    messagingSenderId: "637687063728",
    appId: "1:637687063728:web:46ac110e5fdacd3190c775",
    measurementId: "G-V29TZBLMHJ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Read the db.json file (replace with the correct path to your db.json file)
fs.readFile('db.json', 'utf8', async (err, data) => {
  if (err) {
    console.error("Error reading db.json", err);
    return;
  }

  // Parse the JSON data from db.json
  const dbData = JSON.parse(data);

  // Access the posts array from db.json
  const posts = dbData.posts;

  // Loop through the posts and add them to Firestore
  for (const post of posts) {
    try {
      // Add each post to Firestore
      await addDoc(collection(db, 'posts'), {
        title: post.title,
        body: post.body,
        tags: post.tags,
      });

      console.log(`Post "${post.title}" added to Firestore`);
    } catch (error) {
      console.error("Error adding post to Firestore", error);
    }
  }

  console.log("Data migration completed!");
});
