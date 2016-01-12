import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Styles from 'scss/components/_sidebar';

const cx = classNames.bind(Styles);

class Sidebar extends Component {
  render() {
    return (
      <div className={cx('yt-column', 'sidebar')}>
        <h2 className={cx('title')}>Guide</h2>
      </div>
    );
  }
}
export default Sidebar;
