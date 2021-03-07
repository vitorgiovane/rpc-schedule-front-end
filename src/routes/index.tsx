import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Schedule from '../pages/Schedule'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Schedule} />
  </Switch>
)

export default Routes
