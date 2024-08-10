// src/services/firestoreService.ts
import { db } from '../firebaseConfig';
import { doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';

// Fetch About Me data filtered by language
export const getAboutMe = async (language: string) => {
  const docRef = doc(db, 'cvData', 'default', 'About Me', language); // Use language as the document ID
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data(); // Returns an object with fields { text }
  } else {
    throw new Error('No About Me data found');
  }
};

// Fetch Contact Info (now includes name and image)
export const getContactInfo = async () => {
  const docRef = doc(db, 'cvData', 'default', 'Contact Info', 'default');
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data(); // Returns an object with fields { name, image }
  } else {
    throw new Error('No Contact Info data found');
  }
};



export const getEducation = async (language: string) => {
  const q = query(collection(db, 'cvData', 'default', 'Education'), where('language', '==', language));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
};

export const getExperiences = async (language: string) => {
  const q = query(collection(db, 'cvData', 'default', 'Experiences'), where('language', '==', language));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
};

export const getSkills = async (language: string) => {
  const q = query(collection(db, 'cvData', 'default', 'Skills'), where('language', '==', language));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
};

export const getLanguages = async () => {
  const querySnapshot = await getDocs(collection(db, 'cvData', 'default', 'Languages'));
  return querySnapshot.docs.map(doc => doc.data());
};

export const getHobbies = async () => {
  const querySnapshot = await getDocs(collection(db, 'cvData', 'default', 'Hobbies'));
  return querySnapshot.docs.map(doc => doc.data());
};
