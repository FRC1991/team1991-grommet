import React from 'react'

const theme = {
    global: {
      colors: {
        brand: '#FF8210',
      },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };

const Post = ({postItem}) => { 
  const {content, data} = postItem
    return (
    <div style={{'-moz-box-shadow': '3px 3px 5px 6px #ccc',
    '-webkit-box-shadow': '3px 3px 5px 6px #ccc',
    'box-shadow': '3px 3px 5px 6px #ccc',
    'padding': '0.5px 5px',
    'border-radius': '1rem',
    'margin': '10px'}}>
      <div style={{'background-color': '#EDEDED',
          'border-radius': '0.5rem',
          'margin-left': '5px',
          'margin-top': '10px',
          'padding-top': '5px',
          'padding-bottom': '1px',
          'padding-left': '10px',
          'line-height': '1.2'}}>
            <h2 style={{'margin': '5px'}}>{data.title}</h2>
            <h5 style={{'margin': '5px'}}>Published on: {data.date}</h5>
      </div>
      <div style={{'padding-left': '10px',
        'padding-right': '10px',
        'padding-bottom': '10px',
        'padding-top': '5px'}}>
        <h4 style={{'margin-top': '0px', 'margin-bottom': '2px'}}>{data.description}</h4>
        <h5 style={{'margin-top': '0px', 'margin-bottom': '2px'}}>Author: {data.author}</h5>
        <div style={{'width': '95%', 'padding': '10px', 'display': 'block', 'margin-left': 'auto', 'margin-right': 'auto', }}>
          <img style={{'max-width': '100%', 'max-height': '100%'}} src={data?.thumbnail}></img>
        </div>
        <div>
          {content}
        </div>
      </div>
    </div>
    )};

export default Post;
