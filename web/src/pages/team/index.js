import React, { Fragment } from 'react'

import MullerLabHeader from 'pages/muller-lab-header'

import MembersSection from './members-section'

export default function TeamPage () {
  return (
    <Fragment>
      <MullerLabHeader/>
      <MembersSection/>
    </Fragment>
  )
}
