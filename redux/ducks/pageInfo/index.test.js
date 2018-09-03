import {
  pageChangeTitle,
  pageChangeDescription,
  pageInfo,
} from './index';

describe('[Redux: pageInfo]', () => {
  const INITIAL_STATE = {
    title: 'Novidades da moda masculina internacional',
    description: `O melhor da moda internacional
  e as peças mais recentes ds marcas internacionais
  chegaram à seleção online da Farfetch. Descubra novidades
  da moda masculina e as tendências que grandes designers
  para renovar o guarda-roupas, de Salvatore Ferragamo à Burberry.`,
  };

  it('should return correct initalstate', () => {
    expect(pageInfo()).toEqual(INITIAL_STATE);
  });

  it('should return correct initalstate', () => {
    const title = 'changed title';
    const action = pageChangeTitle(title);
    expect(pageInfo(INITIAL_STATE, action).title).toEqual(title);
  });

  it('should return correct initalstate', () => {
    const description = 'changed description';
    const action = pageChangeDescription(description);
    expect(pageInfo(INITIAL_STATE, action).description).toEqual(description);
  });
});
