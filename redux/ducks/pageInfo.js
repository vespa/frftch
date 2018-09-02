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

function pageChangeDescription(options) {
  return {
    type: PAGE_CHANGE_DESCRIPTION,
    options,
  };
}

function reducer(state = INITIAL_STATE, action = { type: 'none' }) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}

export {
  pageChangeTitle,
  pageChangeDescription,
  reducer as pageInfo,
};
