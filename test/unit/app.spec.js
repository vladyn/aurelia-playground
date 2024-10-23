import {bootstrap} from 'aurelia-bootstrapper';
import {StageComponent} from 'aurelia-testing';
import {PLATFORM} from 'aurelia-pal';

describe('Stage App Component', () => {
  let component;

  beforeEach(async() => {
    component = await StageComponent
      .withResources(PLATFORM.moduleName('app'))
      .inView('<app></app>');
  });

  afterEach(async() => await component.dispose());

  it('should render message', done => {
    component.create(bootstrap).then(() => {
      const view = component.element;
      const h1 = component.element.querySelector('h1').innerHTML;
      const pa = component.element.querySelector('p').innerHTML;

      expect(h1).toBe('Hello World!');
      expect(pa).toBe('You are learning: <b>Testing and Debugging </b>');
      done();
    }).catch(e => {
      console.log(e);
      done();
    });
  });
});
