import React from 'react'
import moment from 'moment-timezone'

const FooterComponent = () => {
  return (
    <div
      className={`pb-3`}
      >
      <p className='mx-auto text-center text-sm'>
        &copy; {moment().format('YYYY')}{' '}
        <a
          className={`link z-0`}
          href='www.facebook/vineet_mourya.com'
          target='_blank'
          rel='noreferrer noopener'>
          Vineet Mourya
        </a>
      </p>
    </div>
  )
}

export default FooterComponent
