import React from 'react'
import { useWindowSize } from 'react-use'
import Spacer from '../../components/atoms/Spacer/Component'
import Typography from '../../components/atoms/Typography/Component'

const Page: React.VFC = () => {
  const width = useWindowSize().width
  const l = width < 1400

  if (l) {
    return (
      <div>
        <Spacer margin="8px 0px">
          <Typography size="20px" weight={300} isBlock>
            const name = '稲垣 達大'
          </Typography>
        </Spacer>
        <Spacer margin="8px 0px">
          <Typography size="20px" weight={300} isBlock>
            const nick_name = 'inatatsu'
          </Typography>
        </Spacer>
        <Spacer margin="8px 0px">
          <Typography size="20px" weight={300} isBlock>
            const birthday = '1999/09/06'
          </Typography>
        </Spacer>
        <Spacer margin="8px 0px">
          <Typography size="20px" weight={300} isBlock>
            const email = 'tatsuhiro.9699 [at] gmail.com'
          </Typography>
        </Spacer>
        <Spacer margin="8px 0px">
          <Typography size="20px" weight={300} isBlock>
            const twitter = '@_inatatsu_csg_'
          </Typography>
        </Spacer>
        <Spacer margin="8px 0px">
          <Typography size="20px" weight={300} isBlock>
            const univ = 'Kindai'
          </Typography>
        </Spacer>
        <Spacer margin="8px 0px">
          <Typography size="20px" weight={300} isBlock>
            const club = 'Kindai Computer Study Group'
          </Typography>
        </Spacer>
        <Spacer margin="8px 0px">
          <Typography size="20px" weight={300} isBlock>
            const lab = 'Electronic Commerce Laboratory'
          </Typography>
        </Spacer>
      </div>
    )
  }
  return (
    <div>
      <Typography size="48px" weight={300} isBlock>
        const inatatsu_info = {'{'}
      </Typography>
      <Typography size="48px" weight={300} isBlock>
        &nbsp;&nbsp;&nbsp;&nbsp;name: '稲垣 達大',
      </Typography>
      <Typography size="48px" weight={300} isBlock>
        &nbsp;&nbsp;&nbsp;&nbsp;nick_name: 'inatatsu',
      </Typography>
      <Typography size="48px" weight={300} isBlock>
        &nbsp;&nbsp;&nbsp;&nbsp;birthday: '1999/09/06',
      </Typography>
      <Typography size="48px" weight={300} isBlock>
        &nbsp;&nbsp;&nbsp;&nbsp;email: 'tatsuhiro.9699 [at] gmail.com',
      </Typography>
      <Typography size="48px" weight={300} isBlock>
        &nbsp;&nbsp;&nbsp;&nbsp;twitter: '@_inatatsu_csg_',
      </Typography>
      <Typography size="48px" weight={300} isBlock>
        &nbsp;&nbsp;&nbsp;&nbsp;affiliation: {'{'}
      </Typography>
      <Typography size="48px" weight={300} isBlock>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;univ: 'Kindai',
      </Typography>
      <Typography size="48px" weight={300} isBlock>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;club: 'Kindai
        ComputerStudyGroup',
      </Typography>
      <Typography size="48px" weight={300} isBlock>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lab:
        'ElectronicCommerceLaboratory',
      </Typography>
      <Typography size="48px" weight={300} isBlock>
        &nbsp;&nbsp;&nbsp;&nbsp;{'}'}
      </Typography>
      <Typography size="48px" weight={300} isBlock>
        {'}'}
      </Typography>
    </div>
  )
}

export default Page
