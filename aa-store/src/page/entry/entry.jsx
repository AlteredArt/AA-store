import React from 'react';
import './entry.scss';
import SignIn from '../../component/sign-in/sign-in';
import SignUp from '../../component/sign-up/sign-up';

const EntryPage = () => (
    <div className="entry">

        <SignIn />
        <SignUp />
    </div>
);


export default EntryPage;