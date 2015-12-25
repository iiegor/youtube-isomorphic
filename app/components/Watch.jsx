import React from 'react';
import classNames from 'classnames/bind';
import Styles from 'scss/components/_watch';

const cx = classNames.bind(Styles);

export default class Watch extends React.Component {
  render() {
    let videoParams = '?autoplay=1';

    return (
      <div className={cx('watch')} dangerouslySetInnerHTML={{ __html: `<iframe width="560" height="315" src="https://www.youtube.com/embed/${this.props.params.id + videoParams}" frameborder="0" allowfullscreen></iframe>` }}></div>
    );
  }
}
