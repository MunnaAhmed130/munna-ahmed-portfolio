import React from 'react';
import SkeletonElement from './SkeletonElement';

const SkeletonProjects = () => {
    return (
        <div className='project-container-col'>
            <div className="project-container">
                <SkeletonElement type="project-img" />
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <SkeletonElement type="btn" />

            </div>
        </div>
    );
};

export default SkeletonProjects;