import * as React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
// import configureStore from 'redux-mock-store';

import AddTodoForm from './index';

describe('<AddTodoForm />', () => {
  describe('render()', () => {
    test('renders component', () => {
      const submitHandler = jest.fn();
      const component = shallow(<AddTodoForm handleSubmit={submitHandler}/>);

      expect(toJson(component)).toMatchSnapshot()
    })
  });
  describe('submit form', () => {
    test('form is not submit if not set data in input', () => {
      const submitHandler = jest.fn();
      const event = Object.assign(submitHandler, {
        preventDefault: () => {}
      });
      const component = shallow(<AddTodoForm handleSubmit={submitHandler}/>);

      component.find('button').simulate('click', event);
      expect(submitHandler).not.toHaveBeenCalled();
    });
    test('set value in input and form is submit', () => {
      const submitHandler = jest.fn();
      const event = Object.assign(submitHandler, {
        preventDefault: () => {}
      });
      const value = 'test';
      const mountedComponent = mount(<AddTodoForm handleSubmit={submitHandler}/>);
      const input = mountedComponent.find('input');

      input.instance().value = value;
      input.simulate('change');

      /*checks setting data into input*/
      expect(mountedComponent.state().value).toEqual(value);

      mountedComponent.simulate('submit', event);

      /*form submission check*/
      expect(submitHandler).toHaveBeenCalled();
    });
  })
});
