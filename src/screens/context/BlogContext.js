import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ]; //her bir ekleme için yeni bir nesne oluşturup onu renderlıyoruz
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};
const deleteBlogPost = (dispatch) => {
  //Yeni bir işlevsellik eklemek istediğimizde buraya bir nesne gönderecek yeni bir fonksiyon ekleyebiliriz
  //ve ardından reducer a yeni bir durum ekleyeceğiz
  return (id) => {
    // id parametresini dispatch e göndermek için return parantezi içine yazdık
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
