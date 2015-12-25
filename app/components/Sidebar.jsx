import React from 'react';
import classNames from 'classnames/bind';
import Styles from 'scss/components/_sidebar';

const cx = classNames.bind(Styles);

export default class Sidebar extends React.Component {
  render() {
    let classes = [];

    if (this.props.hidden) {
      classes.push('hidden');
    }

    return (
      <div className={cx('sidebar', classes.join(' '))}>
        Sidebar!!
      </div>
    );
  }
}
