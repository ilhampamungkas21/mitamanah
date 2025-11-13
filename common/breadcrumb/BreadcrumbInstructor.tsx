
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const BreadcrumbInstructor = () => {
  return (
    <>
       <div className="breadcrumb-wrapper style-2 style-3">
            <div className="shape-1">
                <Image src="/assets/img/breadcrumb/shape-1.png" alt="img" />
            </div>
            <div className="shape-2">
                <Image src="/assets/img/breadcrumb/shape-2.png" alt="img" />
            </div>
            <div className="dot-shape">
                <Image src="/assets/img/breadcrumb/dot-shape.png" alt="img" />
            </div>
            <div className="vector-shape">
                <Image src="/assets/img/breadcrumb/Vector.png" alt="img" />
            </div>
            <div className="container">
                <div className="page-heading">
                    <ul className="breadcrumb-items">
                        <li><Link href="/">Home</Link></li>
                        <li>Instructors</li>
                        <li className="style-2"> Instructors Details</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  );
};

export default BreadcrumbInstructor;