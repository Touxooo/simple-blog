import {
  collection,
  addDoc,
  query,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../../firebase";

export const createArticle = async (article) => {
  return await addDoc(collection(db, "articles"), {
    ...article,
    creationDate: new Date(),
  });
};

export const deleteArticleById = async (id) => {
  const docRef = doc(db, "articles", id);
  return await deleteDoc(docRef);
};

export const getArticleById = async (id) => {
  const docRef = doc(db, "articles", id);
  const docSnap = await getDoc(docRef);
  let article = {};

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    article = docSnap.data();
    article.id = docSnap.id;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  return article;
};

export const getArticles = async () => {
  const q = query(collection(db, "articles"));

  const querySnapshot = await getDocs(q);

  let articles = [];

  querySnapshot.forEach((doc) => {
    let article = doc.data();
    article.id = doc.id;
    articles.push(article);
  });

  console.log(articles);

  return articles;
};

export const getFilteredArticles = (articles, filter) => {
  const filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(filter.toLowerCase());
  });

  return filteredArticles;
};
