import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { toggleSidebar } from 'actions/app';

import classNames from 'classnames/bind';
import Styles from 'scss/components/_header';

const cx = classNames.bind(Styles);

class Home extends Component {
  render() {
    const { dispatch } = this.props;

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

Home.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(Home)
