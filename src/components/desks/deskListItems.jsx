import React from 'react';
import DeskList from './deskList';
import './deskListItems.css';

const DeskList2 = ({ data }) => {
    return (
        <section className="list2">
            <div className="list2__items">
                {data.map(({ id, imageSrc, type, description, material, price }, idx) => (
                    <DeskList
                        key={id}
                        id={id}
                        imageSrc={imageSrc}
                        type={type}
                        description={description}
                        material={material}
                        price={price}
                    />
                ))}
            </div>
        </section>
        
    );
};

export default DeskList2;