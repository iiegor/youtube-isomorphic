import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import Styles from 'scss/components/_header';

const cx = classNames.bind(Styles);

export default class Home extends React.Component {
  render() {
    return (
      <header className={cx('header')}>
        <div className={cx('inner')}>
          <div className={cx('left')}>
            <Link to="/" className={cx('logo')} />

            <span className={cx('divider')}></span>

            <input type="search" className={cx('search-input')} placeholder="Search YouTube" />
          </div>

          <div className={cx('right')}>
            <button className={cx('btn-upload')}>Upload</button>

            <div className={cx('username')}>
              <span className={cx('notifications')}></span> Tyler Treadwell
            </div>
          </div>
        </div>

        <div className={cx('yt-loader')}></div>
      </header>
    );
  }
}
