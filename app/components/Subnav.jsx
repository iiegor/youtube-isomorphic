import React from 'react';
import classNames from 'classnames/bind';
import Styles from 'scss/components/_subnav';

const cx = classNames.bind(Styles);

export default class Subnav extends React.Component {
  render() {
    return (
      <nav className={cx('subnav')}>
        <div className={cx('inner')}>
          <ul>
            <li className={cx('active')}><span className={cx('yt-sprite', 'home-icon')}></span></li>
            <li className={cx()}><span className={cx('yt-sprite', 'trending-icon')}></span></li>
            <li className={cx()}><span className={cx('yt-sprite', 'subscriptions-icon')}></span></li>
          </ul>
        </div>
      </nav>
    );
  }
}
