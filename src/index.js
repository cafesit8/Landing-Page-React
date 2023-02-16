import React from 'react';
import ReactDOM from 'react-dom/client';
import {Nav} from './components/Nav'
import {Section1} from './components/Section1'
import {Section2} from './components/Section2'
import {Section3} from './components/Section3'
import {Comments} from './components/Comments'
import {Footer} from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Nav />
    <Section1 />
    <Section2 />
    <Section3 />
    <Comments />
    <Footer />
  </>
);