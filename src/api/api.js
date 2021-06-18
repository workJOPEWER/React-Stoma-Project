import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://admin.stoma.md/api/"
});

export const postAPI = {
  getNews(currentPage, pageSize) {
    return instance.get(`admin/news?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
  getArticles(currentPage, pageSize) {
    return instance.get(`admin/articles?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  }
};

export const categoryAPI = {
  getCategory() {
    return instance.get(`admin/news/categories`)
      .then(response => {
        return response.data;
      });
  },
  getCategories(currentPage, pageSize, slug) {
    return instance.get(`admin/news/categories/${slug}?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  }
};

export const mailAPI = {
  sendMail(name, lastname, phone, email, subject = false, message) {
    return instance.post(`mail/send-mail`, { name, lastname, phone, email, subject, message })
      .then(response => {
        return response.data;
      });
  }
};
