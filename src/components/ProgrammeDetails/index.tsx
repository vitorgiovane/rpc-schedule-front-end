import React from 'react'
import { format } from 'date-fns'

import rpcGenericImage from '../../assets/generic-program-rpc-image.png'

import { Container } from './styles'

interface ProgrammeDetailsProps {
  title?: string
  currentDateTime?: number
  startTime: number
  endTime: number
  customInfo: {
    Graficos: {
      ImagemURL: string | null
      LogoURL: string | null
    }
    Resumos: {
      ResumoImprensa: string
    }
    Tipo: string
  }
}

const ProgrammeDetails: React.FC<ProgrammeDetailsProps> = ({ title, customInfo, startTime, endTime }) => {
  const formatTime = (time: number): string => {
    return format(time, 'HH:mm')
  }

  return (
    <Container>
      <div className="image">
        <img src={customInfo.Graficos.ImagemURL || rpcGenericImage} alt="" />
      </div>
      <div className="details">
        <main>
          <div className="left">
            <h1>{title}</h1>
            <p>{customInfo.Resumos.ResumoImprensa}.</p>
          </div>
          <div className="right">
            {formatTime(startTime)}
            <br />
            <span>às</span>
            <br />
            {formatTime(endTime)}
          </div>
        </main>
        <div className="extra-info">{customInfo.Tipo}</div>
      </div>
    </Container>
  )
}

export default ProgrammeDetails
