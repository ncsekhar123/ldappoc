import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from './menu';
configure({adapter: new Adapter});


describe('<Menu />', () => {

    let wrapper;
    beforeEach( () => {
        wrapper= shallow(<Menu/>);
    })
    it('should not show menu items when show is false' , () =>{
        wrapper.setProps({show: false});
        expect(wrapper.contains("Name")).toBe(false);

    })

    it('should show menu items when show is true' , () =>{
        wrapper.setProps({show: true});
        expect(wrapper.contains("Name")).toBe(true);

    })
})