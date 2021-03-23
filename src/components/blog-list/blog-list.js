import React from 'react';

import './blog-list.css';

const BlogListItem=(props)=>{
    const src="https://upload.wikimedia.org/wikipedia/en/2/20/StarCraft_II_-_Box_Art.jpg";
    const styles={
        backgroundImage:`url(${src})`
    }
    return(
        <div className="blog-item">
        <div className="blog-item-image" style={styles}/>
        <div className="blog-item-category-container">
            <div className="blog-item-category">АУДИО</div>
            <div className="blog-item-date">03.03.2021</div>
        </div>
        <div className="blog-item-title">Раздачи EGS: на#%я, а главное зачем?</div>
        <div className="blog-item-description">Коротко о самых выгодных покупках в вашей жизни</div>
    </div>
    )
}
const BlogList = (props)=>{
    const {items}=props;
    const testItem=<BlogListItem/>
    return(
        <div className="blog-container">
            <BlogListItem/>
            <BlogListItem/>
            <BlogListItem/>
        </div>
    )
}

export default BlogList;