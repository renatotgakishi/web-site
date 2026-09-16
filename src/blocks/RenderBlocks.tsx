import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'
import { SobreBlockComponent } from '@/blocks/SobreBlock/Component'
import { ServicosBlockComponent } from '@/blocks/ServicosBlock/Component'
import { TrabalhosBlockComponent } from '@/blocks/TrabalhosBlock/Component'
import { DepoimentosBlockComponent } from '@/blocks/DepoimentosBlock/Component'
import { ContatoBlockComponent } from '@/blocks/ContatoBlock/Component'

import { BlogBlock } from '../blocks/BlogBlock/Component'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'

const blockComponents: any = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  sobreBlock: SobreBlockComponent,
  servicosBlock: ServicosBlockComponent,
  trabalhosBlock: TrabalhosBlockComponent,
  depoimentosBlock: DepoimentosBlockComponent,
  contatoBlock: ContatoBlockComponent,
  blogBlock: BlogBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block
          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]
            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }
  return null
}
