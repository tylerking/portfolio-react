import React from 'react'

import { BLOCKS, INLINES} from '@contentful/rich-text-types'

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>
    },
    [INLINES.HYPERLINK]: (node,children) => {
      return <a href={node.data.uri}>{children}</a>
    }
  }
}

export default richTextOptions