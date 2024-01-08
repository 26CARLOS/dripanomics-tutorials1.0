import React from 'react';
import NewsLetter from './newsLetter';

const MailchimpFormContainer = props => {

    const postUrl=  `https://dripanomicstutorials.us17.list-manage.com/subscribe/post?u=f5a334f738078e23b5188557b&id=8e94edb610`;
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe  
                url={postUrl}
                render={({subscribe, status, message}) => (

                    <NewsLetter
                        status={status}
                        message={message}
                        onValidated={formData=>subscribe(formData)}/>
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;