import React from 'react';
import { Helmet } from 'react-helmet';

const MetaDate = ({ title }) => {
    return (
        <Helmet>
            <title> {`${title} -Shpit`}</title>
        </Helmet>
    );
};

export default MetaDate;
