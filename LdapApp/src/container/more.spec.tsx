import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import More from './more';
configure({adapter: new Adapter()});


describe('<More />', () => {

    let wrapper;
    beforeEach( () => {
        wrapper= shallow(<More/>);
    })
    it('should not show more items when show is false' , () =>{
        wrapper.setProps({show: false});
        expect(wrapper.contains("Delete")).toBe(false);

    })

    it('should show more items when show is true' , () =>{
        wrapper.setProps({show: true});
        expect(wrapper.contains("Delete")).toBe(true);

    })
})