import React from 'react'

import Typography from '../../components/atoms/Typography/Component'

const Page: React.VFC = () => {
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
        &nbsp;&nbsp;&nbsp;&nbsp;email: 'tatsuhiro.9699@gmail.com',
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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lab:
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
