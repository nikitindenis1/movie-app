import React, { Component } from 'react';

export const ContentLoader = (props) => {
    return (
        <div className='content__loader'>
               <section className='first'> </section>
               <section className='second'></section>

               <span>
               <section></section>
               <section></section>
               <section></section>
               <section></section>
               </span>

               <section className='last'></section>
        </div>
    )
};
export default ContentLoader