import React from 'react';
import Section from '../../Blog/BlogMasonary/Section';
import MasonaryContent from '../../Blog/BlogMasonary/MasonaryContent';
import MetaTags from "react-meta-tags";

const BlogMasonary = () => {
    return (
        <React.Fragment>
            <MetaTags>
                <title>Blog Masonary | CareerHub - Job Listing Template | Themesdesign</title>
            </MetaTags>
            <Section />
            <MasonaryContent />
        </React.Fragment>
    );
};

export default BlogMasonary;
