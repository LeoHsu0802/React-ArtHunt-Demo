import React from 'react'
import Header from './src/components/header/header'
import Fetchitems from './src/components/body/fetchitems'
import Countdown from './src/components/body/timecountdown'

function app() {
  return (
    <div>
        <Header />
        <Fetchitems />
    </div>
  )
}

export default app
