import React from 'react'
import { format } from 'date-fns'

import { Container } from './styles'
import rpcGenericImage from '../../assets/generic-program-rpc-image.png'

interface ProgrammeProps {
  title: string
  mediaId: number
  currentDateTime: number
  startTime: number
  endTime: number
  customInfo: {
    Graficos: {
      ImagemURL: string | null
      LogoURL: string | null
    }
  }
  handleProgrammeClick: (mediaId: number) => void
}

const Programme: React.FC<ProgrammeProps> = ({
  title,
  mediaId,
  customInfo,
  currentDateTime,
  startTime,
  endTime,
  handleProgrammeClick
}) => {
  const formatTime = (time: number): string => {
    return format(time, 'HH:mm')
  }

  const theProgrammeIsOnTheAir = currentDateTime >= startTime && currentDateTime < endTime

  return (
    <Container isOnTheAir={theProgrammeIsOnTheAir} onClick={() => handleProgrammeClick(mediaId)}>
      <span className="is-on-the-air">No ar</span>
      <span className="start-time">{formatTime(startTime)}</span>
      <div>
        <img src={customInfo.Graficos.LogoURL || rpcGenericImage} alt="" />
        <h1>{title}</h1>
      </div>
      <img src={customInfo.Graficos.ImagemURL || rpcGenericImage} alt="" />
    </Container>
  )
}

export default Programme
