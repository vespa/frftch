
const MENU_CHANGE_SUBMENU_OPTIONS = 'CHANGE_SUBMENU_OPTIONS';

const INITIAL_STATE = {
  menuOptions: ['Homem', 'Mulher', 'Kids'],
  subMenuOptions: [
    'Sale',
    'Novidades',
    'Marcas',
    'Roupas',
    'Sapatos',
    'Bolsas',
    'Acessórios',
    'Bijoux & Jóias',
    'F6',
  ],
};

function menuChangeSubmenuOptions(options) {
  return {
    type: MENU_CHANGE_SUBMENU_OPTIONS,
    options,
  };
}

function reducer(state = INITIAL_STATE, action = { type: 'none' }) {
  const { type } = action;
  switch (type) {
    case MENU_CHANGE_SUBMENU_OPTIONS:
      return { ...state, options: action.options };
    default:
      return state;
  }
}

export {
  MENU_CHANGE_SUBMENU_OPTIONS,
  menuChangeSubmenuOptions,
  reducer as menu,
};
