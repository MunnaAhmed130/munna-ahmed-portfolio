import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SkeletonElement from './SkeletonElement';

const SkeletonDetails = () => {
    return (
        <div className=''>
            <Row className='w-100 m-auto details-row'>
                <Col xl={4} md={6} sm={12} className='project-demo-col'><SkeletonElement type='detail-img'></SkeletonElement></Col>
                <Col xl={4} md={6} sm={12} className='project-demo-col'><SkeletonElement type='detail-img'></SkeletonElement></Col>
                <Col xl={4} md={12} sm={12} className='project-demo-col'><SkeletonElement type='detail-img'></SkeletonElement></Col>
            </Row>
            {/* <SkeletonElement type="detail-img"></SkeletonElement> */}
        </div>
    );
};

export default SkeletonDetails;