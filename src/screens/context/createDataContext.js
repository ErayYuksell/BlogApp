import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    //parametre olarak her context e göre değişicek yapıları ekliyoruz
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => {} } }
        // neden böyle bir şey oluşturduğumuzu anlamadım 
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
