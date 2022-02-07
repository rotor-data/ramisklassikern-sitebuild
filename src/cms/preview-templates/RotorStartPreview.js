import React from 'react'
import PropTypes from 'prop-types'
import { RotorStartTemplate } from '../../templates/start'

const RotorStartPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <RotorStartTemplate
        hero={getAsset(data.hero)}
        challenge={data.challenge}
        model={data.model}
        customers={data.customers}
      />
    )



  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default RotorStartPreview