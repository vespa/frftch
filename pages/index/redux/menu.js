const MENU_CLICK = 'MENU_CLICK';
const CHANGE_SUBMENU_OPTIONS = 'CHANGE_SUBMENU_OPTIONS';

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

function menuClick() {
  return {
    type: MENU_CLICK,
  };
}

function changeSubmenuOptions(options) {
  return {
    type: CHANGE_SUBMENU_OPTIONS,
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
  menuClick,
  changeSubmenuOptions,
  reducer as menu,
};
