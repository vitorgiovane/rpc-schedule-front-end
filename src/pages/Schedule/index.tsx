import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'

import Menu from '../../components/Menu'
import Programme from '../../components/Programme'
import ProgrammeDetails from '../../components/ProgrammeDetails'
import RpcLogo from '../../assets/rpc-logo.png'

import api from '../../services/api'
import { Container, MenuContainer, ProgrammeList } from './styles'

interface Programme {
  title: string
  start_time: number
  end_time: number
  media_id: number
  custom_info: {
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

const Schedule: React.FC = () => {
  const loadingProgrammeDetails = {
    title: 'Carregando...',
    start_time: 1615109400,
    end_time: 1615109400,
    media_id: 101,
    custom_info: {
      Graficos: {
        ImagemURL:
          'https://s2.glbimg.com/l8vDLy5dP-mMomtA827cWso0Kl0=/46x19/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2018/d/n/qBrFd5S56b1GKqlAQ9vQ/rpc.png',
        LogoURL:
          'https://s2.glbimg.com/l8vDLy5dP-mMomtA827cWso0Kl0=/46x19/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2018/d/n/qBrFd5S56b1GKqlAQ9vQ/rpc.png'
      },
      Resumos: {
        ResumoImprensa: 'Carregando...'
      },
      Tipo: 'Carregando...'
    }
  }
  const [programmes, setProgrammes] = useState<Programme[]>([])
  const [activeProgramme, setActiveProgramme] = useState<Programme>(loadingProgrammeDetails)
  const [scheduleDayHasStarted, setScheduleDayHasStarted] = useState(false)

  const currentDateTime = Date.now()

  const formattedCurrentDate = (): string => {
    return format(currentDateTime, 'yyyy-MM-dd')
  }

  const setProgrammesFromApi = async (): Promise<void> => {
    const response = await api.get<Programme[]>(`programmes?date=${formattedCurrentDate()}`)
    setProgrammes(response.data)
  }

  const handleProgrammeClick = (mediaId: number): void => {
    const programme = programmes.filter(programme => programme.media_id === mediaId)[0]
    setActiveProgramme(programme)
  }

  useEffect(() => {
    setProgrammesFromApi()
  }, [])

  useEffect(() => {
    if (programmes.length < 1) return

    const scheduleOftheDayHasStarted = currentDateTime >= programmes[0].start_time * 1000
    setScheduleDayHasStarted(scheduleOftheDayHasStarted)
  }, [programmes])

  const setTheActiveProgramme = (): void => {
    if (!scheduleDayHasStarted) {
      setActiveProgramme(programmes[0])
      return
    }

    programmes.forEach(programme => {
      if (currentDateTime >= programme.start_time * 1000 && currentDateTime < programme.end_time * 1000) {
        setActiveProgramme(programme)
      }
    })
  }

  useEffect(() => {
    setTheActiveProgramme()
  }, [programmes, scheduleDayHasStarted])

  return (
    <Container>
      <MenuContainer>
        <img src={RpcLogo} alt="" />
      </MenuContainer>

      <ProgrammeList>
        {programmes.map(programme => (
          <Programme
            key={programme.media_id}
            mediaId={programme.media_id}
            title={programme.title}
            currentDateTime={currentDateTime}
            startTime={programme.start_time * 1000}
            endTime={programme.end_time * 1000}
            customInfo={programme.custom_info}
            handleProgrammeClick={handleProgrammeClick}
          />
        ))}
      </ProgrammeList>
      {programmes.length > 0 && (
        <ProgrammeDetails
          title={activeProgramme?.title || loadingProgrammeDetails.title}
          currentDateTime={currentDateTime}
          startTime={activeProgramme?.start_time * 1000 || loadingProgrammeDetails.start_time}
          endTime={activeProgramme?.end_time * 1000 || loadingProgrammeDetails.end_time}
          customInfo={activeProgramme?.custom_info || loadingProgrammeDetails.custom_info}
        />
      )}
    </Container>
  )
}

export default Schedule
