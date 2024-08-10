// src/services/firestoreService.ts
import { db } from '../firebaseConfig';
import { doc, getDoc, collection, getDocs, query } from 'firebase/firestore';

// Function to get About Me data based on language
export const getAboutMe = async (language: string) => {
  const docRef = doc(db, 'cvData', language, 'About Me', 'default'); // Path structure: cvData/{language}/About Me/default
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error('No About Me data found');
  }
};

// Function to get Contact Info data based on language
export const getContactInfo = async (language: string) => {
  const docRef = doc(db, 'cvData', language, 'Contact Info', 'default'); // Path structure: cvData/{language}/Contact Info/default
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error('No Contact Info data found');
  }
};

// Function to get Education data based on language
export const getEducation = async (language: string) => {
  const q = query(collection(db, 'cvData', language, 'Education')); // Path structure: cvData/{language}/Education
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
};

// Function to get Experiences data based on language
export const getExperiences = async (language: string) => {
  const q = query(collection(db, 'cvData', language, 'Experiences')); // Path structure: cvData/{language}/Experiences
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
};

// Function to get Skills data based on language
export const getSkills = async (language: string) => {
  const q = query(collection(db, 'cvData', language, 'Skills')); // Path structure: cvData/{language}/Skills
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
};

// Function to get Languages data based on language
export const getLanguages = async (language: string) => {
  const q = query(collection(db, 'cvData', language, 'Languages')); // Path structure: cvData/{language}/Languages
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
};

// Function to get Hobbies data based on language
export const getHobbies = async (language: string) => {
  const q = query(collection(db, 'cvData', language, 'Hobbies')); // Path structure: cvData/{language}/Hobbies
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
};
