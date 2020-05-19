import { IconButton, Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import React from 'react'
import styled from 'styled-components'

import { Text } from 'common/UI'

const Card = styled.div`
  overflow: hidden;
  border-radius: 0.25rem;
  background: var(--color-white);
  padding: 0.75rem;

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`

const Content = styled.div`
  padding: 0.375rem 0;
  margin: 0.375rem 0;

  border-top: 1px solid var(--color-black-lighter);
  border-bottom: 1px solid var(--color-black-lighter);
`

const Actions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const Icon = styled(IconButton)`
  padding-top: 0 !important;
  padding-bottom: 0 !important;
`

const AddressCard: React.FC = () => {
  return (
    <Card>
      <Text as="div" color="black" size="heading">
        Address Name
      </Text>

      <Content>
        John Doe <br />
        R. Richard Roe, 123 <br />
        12345-678 - Downtown <br />
        Janie - AB
      </Content>

      <Actions>
        <Button variant="contained" color="primary" size="small">
          Set as default
        </Button>

        <div>
          <Icon>
            <EditIcon color="secondary" />
          </Icon>
          <Icon>
            <DeleteIcon color="error" />
          </Icon>
        </div>
      </Actions>
    </Card>
  )
}

export { AddressCard }
