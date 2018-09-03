const PAGE_CHANGE_TITLE = 'MENU_CLICK';
const PAGE_CHANGE_DESCRIPTION = 'CHANGE_SUBMENU_OPTIONS';

const INITIAL_STATE = {
  title: 'Novidades da moda masculina internacional',
  description: `O melhor da moda internacional
  e as peças mais recentes ds marcas internacionais
  chegaram à seleção online da Farfetch. Descubra novidades
  da moda masculina e as tendências que grandes designers
  para renovar o guarda-roupas, de Salvatore Ferragamo à Burberry.`,
};

function pageChangeTitle(title) {
  return {
    type: PAGE_CHANGE_TITLE,
    title,
  };
}

function pageChangeDescription(description) {
  return {
    type: PAGE_CHANGE_DESCRIPTION,
    description,
  };
}

function reducer(state = INITIAL_STATE, action = { type: 'none' }) {
  const { type } = action;
  switch (type) {
    case PAGE_CHANGE_TITLE:
      return { ...state, title: action.title };
    case PAGE_CHANGE_DESCRIPTION:
      return { ...state, description: action.description };
    default:
      return state;
  }
}

export {
  PAGE_CHANGE_TITLE,
  PAGE_CHANGE_DESCRIPTION,
  pageChangeTitle,
  pageChangeDescription,
  reducer as pageInfo,
};
