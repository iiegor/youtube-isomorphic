import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import Styles from 'scss/components/_home';

import Subnav from './Subnav';

const cx = classNames.bind(Styles);

export default class Home extends React.Component {
  render() {
    return (
      <div style={{flex: '1 auto'}} className={cx('home')}>
        <div className={cx('yt-header')}>
          <div className={cx('inner')}>
            <h1 className={cx('promo-title')}><img src="//s.ytimg.com/yts/img/unlimited/ytu_landing_desktop_logo_850x142-vflR4OIeR.png" alt="Logotipo de YouTube Red" /></h1>
            <h2 className={cx('promo-subtitle')}>
              Your membership for an amplified video and music experience.

              <a className={cx('btn')} href="//support.google.com/youtube/answer/6305537?hl=en&ref_topic=6305525" data-sessionlink="ei=XiV9VtTiMI2gcpeXgtgD">Start free trial</a>

              <span className={cx('promo-info')}>$9.99/month 1-month free trial</span>
            </h2>
          </div>
        </div>

        <div className={cx('inner')}>
          <Subnav />

          <div className={cx('yt-content')}>
            <section>
              <h2>Recently Uploaded</h2>

              <ul className={cx('yt-video-list-horizontal')}>
                <li>
                  <Link to="/watch/QtXby3twMmI" className={cx('video-link')}>
                    <span className={cx('video-thumb')}><img src="//i.ytimg.com/vi/QtXby3twMmI/mqdefault.jpg" width="196" height="110" /></span>

                    <div className={cx('video-info')}>
                      <h3>Coldplay - Adventure Of A Lifetime (Official video)</h3>
                      <span>by Coldplay Official</span>
                      <span>28,792,139 views - 3 weeks ago</span>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/watch/qj5zT4t7S6c" className={cx('video-link')}>
                    <span className={cx('video-thumb')}><img src="//i.ytimg.com/vi/qj5zT4t7S6c/mqdefault.jpg" width="196" height="110" /></span>

                    <div className={cx('video-info')}>
                      <h3>Sigala - Sweet Lovin' (Official Video)</h3>
                      <span>by SigalaVEVO</span>
                      <span>5,054,315 views - 1 month ago</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2>Recommended</h2>

              <ul className={cx('yt-video-list-horizontal')}>
                <li>
                  <Link to="/watch/_11d1ZsEZ8g" className={cx('video-link')}>
                    <span className={cx('video-thumb')}><img src="//i.ytimg.com/vi/_11d1ZsEZ8g/mqdefault.jpg" width="196" height="110" /></span>

                    <div className={cx('video-info')}>
                      <h3>Git LFS 1.0</h3>
                      <span>by GitHub</span>
                      <span>49,246 views - 2 months ago</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
