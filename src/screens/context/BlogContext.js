import jsonServer from "../../api/jsonServer";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogpost":
      return action.payload; // burda aşağıdaki gibi işlemler yapmıyoruz çünkü api den gelen yanıt tam olarak %100 doğru listemiz olarak gelicek
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    // case "add_blogpost":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 99999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ]; //her bir ekleme için yeni bir nesne oluşturup onu renderlıyoruz
    default:
      return state;
  }
};

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogpost");

    dispatch({ type: "get_blogpost", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogpost", { title: title, content: content }); //post ile api ye veri gönderiyorum 2. parametre göndericeğim nesne
    // dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  //Yeni bir işlevsellik eklemek istediğimizde buraya bir nesne gönderecek yeni bir fonksiyon ekleyebiliriz
  //ve ardından reducer a yeni bir durum ekleyeceğiz
  return async (id) => {
    // id parametresini dispatch e göndermek için return parantezi içine yazdık
    await jsonServer.delete(`/blogpost/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogpost/${id}`, { title: title, content: content });
    dispatch({
      type: "edit_blogpost",
      payload: { id: id, title: title, content: content },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost }, //bu nesne bu fonksiyon listesini uygulamamız içindeki diğer her şey için kullanılabilir kılan yerdir
  []
);
