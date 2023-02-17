import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
    title: string;
}

const MetaDate = ({ title }: Props) => {
    return (
        <Helmet>
            <title> {`${title} -Shpit`}</title>
        </Helmet>
    );
};

export default MetaDate;
