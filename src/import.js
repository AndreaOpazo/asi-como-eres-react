// Imports
const firestoreService = require('firestore-export-import');
const serviceAccount = require('../serviceAccount.json');

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeApp(serviceAccount);
    console.log('Firebase Initialized');
    await firestoreService.restore('./data.json');
    console.log('Upload Success');
  }
  catch (error) {
    console.log(error);
  }
};

jsonToFirestore();