import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }
    
}