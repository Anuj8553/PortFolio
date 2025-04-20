import React from 'react';

const GithubProject = ({ name, desc, github }) => {
    return (
        <div className='githubproject'>
            <div className="githubproject__title">{name}</div>
            <div className="githubproject__desc">{desc}</div>
            <div className="githubproject__github">
                <a target={'_blank'} href={github} className="githubproject__github--link">
                    <img 
                        src="image.png" 
                        alt="Google Colab Logo" 
                        className="google-colab-logo" 
                    />
                </a>
            </div>
        </div>
    );
}

export default GithubProject;
