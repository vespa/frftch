import { menuChangeSubmenuOptions, menu, MENU_CHANGE_SUBMENU_OPTIONS } from './index';

describe('[Redux: menu]', () => {
  const options = ['option1', 'option1'];
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
  let expectedAction = {
    type: MENU_CHANGE_SUBMENU_OPTIONS,
    options,
  };
  it('should create an action to change a submenu', () => {
    expect(menuChangeSubmenuOptions(options)).toEqual(expectedAction);
  });
  it('should return correct option from reducer', () => {
    expectedAction = { options: ['option1', 'option1'] };
    expect(menu({}, menuChangeSubmenuOptions(options))).toEqual(expectedAction);
  });
  it('should return correct initalstate', () => {
    expect(menu()).toEqual(INITIAL_STATE);
  });
});
