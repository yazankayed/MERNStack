import React from 'react';


const BoxDialog = (props) => {
    return (
        <div style={{
            display: 'flex'
        }}>

        
            
                {props.AllColrs.map((item, i) =>
                    <div
                    style={{
                            backgroundColor: item,
                            width: '100px',
                            height: '100px'
                        }}
                        key={i}></div>)}
            
        
                        </div>
    );
};

export default BoxDialog;
