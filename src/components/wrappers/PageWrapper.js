import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

const PageWrapper = (props) => {
    return(
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default PageWrapper;