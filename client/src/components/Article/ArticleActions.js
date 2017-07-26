
import { Link } from 'react-router';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  onClickDelete: payload =>
    dispatch({ type: 'DELETE_ARTICLE', payload })
});

const ArticleActions = props => {
  const article = props.article;
  const del = () => {
    props.onClickDelete(agent.Articles.del(article.slug))
  };
  if (props) {
    return (
      <span>

        <Link
          to={`/editor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit"></i> Edit Article
        </Link>

        <button className="btn btn-outline-danger btn-sm" onClick={del}>
          <i className="ion-trash-a"></i>Delete Achievement
        </button>
      </span>
    );
  }

  return (
    <span>
    </span>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);
