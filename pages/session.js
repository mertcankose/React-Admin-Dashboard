import React, { useEffect } from 'react'
import { SIZES } from '../constants/index'
import Layout from '../components/layout/layout'
import Main from '../components/col/col-main'
import Extra from '../components/col/col-extra'
import useWindowSize from '../hooks/useWindowSize'
import MainContentFirst from '../components/mainContent/main-content-first'
import ThemeSelect from '../components/themeSelect/theme-select'

function Session() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>
      <ThemeSelect />
        <MainContentFirst />
      </Main>
      {size.width > SIZES.DESKTOP_SIZE && <Extra id={'session'}>Extra</Extra>}
    </Layout>
  )
}

export default Session
