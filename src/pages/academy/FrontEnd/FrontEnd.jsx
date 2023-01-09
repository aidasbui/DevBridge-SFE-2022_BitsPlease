import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import useTheme from '/src/hooks/useTheme';
import { ACADEMIES } from '/src/constants/constants.js';
import AdmissionSection from '~/components/AdmissionSection/AdmissionSection';
import TestimonialsSection from '~/components/TestimonialsSection';
import MediaSection from '~/components/MediaSection';
import styles from './FrontEnd.module';

const cn = classNames.bind(styles);

function FrontEnd() {
  useTheme('red');

  return (
    <>
      <div className={cn('admission-section-wrapper')}>
        <AdmissionSection academy={ACADEMIES.frontend} />
      </div>
      <div className={cn('testimonials-wrapper')}>
        <TestimonialsSection academy={ACADEMIES.frontend} />
      </div>
      <div className={cn('media-wrapper')}>
        <MediaSection academy={ACADEMIES.frontend} />
      </div>
    </>
  );
}

export default FrontEnd;
