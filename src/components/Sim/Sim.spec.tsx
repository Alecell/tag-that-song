import { mount } from '@cypress/react';

import Sim from './Sim';

describe('Teste', () => {
  it('Button', () => {
    mount(<Sim />);
    cy.get('div').contains('aqui');
  });
});
