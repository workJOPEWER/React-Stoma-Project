import React from 'react';
import Helmet from 'react-helmet';

const TitleComponent = (props) => {
  let defaultTitle = 'STOMA RM';
  return (
    <div>
      {
        props.title.map( props => <div key={props.id}>
          <Helmet>
            <title> { props.title ? props.title : defaultTitle}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
          </Helmet>
        </div> )
      }
    </div>


  );
};

export default TitleComponent;

// {"title" ? "title" : "defaultTitle"}