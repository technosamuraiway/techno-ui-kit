import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from './Pagination'

const perPageOptions = [5, 10, 250]

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
}

export default meta

type Story = StoryObj<typeof Pagination>

const Wrapper = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(perPageOptions[0])
  const TOTAL_PAGES_COUNT = 10

  return (
    <Pagination
      count={TOTAL_PAGES_COUNT}
      onChange={setPage}
      onPerPageChange={setPerPage}
      page={page}
      perPage={perPage}
      perPageOptions={perPageOptions}
    />
  )
}

export const Default: Story = {
  render: () => <Wrapper />,
}
