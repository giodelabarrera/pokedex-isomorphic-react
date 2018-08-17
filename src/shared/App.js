import React from 'react'
import Search from './components/Search';
import Helmet from 'react-helmet'

const App = () => {
  return (
    <div>
      <Helmet>
        <title>SUPER pepe2</title>
      </Helmet>
      <Search />
    </div>
  )
}

export default App