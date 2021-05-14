import React, {createContext, ReactNode, useReducer} from 'react';

type ProviderProps = {
  children: ReactNode;
};

type colors = {
  primaryColor: string;
  secondaryColor: string;
};

type contextProps = {
  colors: colors;
  prevColors: colors;
  setColors: (imageColors: colors) => void;
  setPrevColors: (imageColors: colors) => void;
};

export const GradientContext = createContext({} as contextProps);
export const GradientProvider = ({children}: ProviderProps) => {
  const initState = {
    colors: {
      primaryColor: 'transparent',
      secondaryColor: 'transparent',
    },
    prevColors: {
      primaryColor: 'transparent',
      secondaryColor: 'transparent',
    },
  };

  const [state, dispatch] = useReducer(gradientReducer, initState);

  const setColors = (imageColors: any) => {
    dispatch({
      type: SET_COLORS,
      payload: imageColors,
    });
  };

  const setPrevColors = (imageColors: any) => {
    dispatch({
      type: SET_PREV_COLORS,
      payload: imageColors,
    });
  };

  return (
    <GradientContext.Provider
      value={{
        colors: state.colors,
        prevColors: state.prevColors,
        setColors,
        setPrevColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};

const gradientReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_COLORS:
      return {
        ...state,
        colors: action.payload,
      };
    case SET_PREV_COLORS:
      return {
        ...state,
        prevColors: action.payload,
      };
    default:
      return {...state};
  }
};

const SET_COLORS = 'SET_COLORS';
const SET_PREV_COLORS = 'SET_PREV_COLORS';
