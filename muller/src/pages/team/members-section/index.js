import React, { Component } from 'react'
import axios from 'axios'

import { BoldTitle } from '../../theme/typography'
import { MemberContainer, MemberImage } from './styled'
import memberImage from './member-image.png'

class MembersSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      members: [],
    }
  }
  componentDidMount () {
    axios.get('http://localhost:3001/members.json')
    .then(response => {
      console.log(response)
      this.setState({
        members: response.data,
      })
    })
    .catch(error => console.log(error))
  }

  render () {
    const { members } = this.state

    return (
      (members.map((member, key) => {
        return (
          <MemberContainer key={key}>
            <MemberImage src={memberImage}/>
            <BoldTitle>{member.name}</BoldTitle>
            <p>{member.position}</p>
          </MemberContainer>
        )
      }))
    )
  }
}

export default MembersSection
