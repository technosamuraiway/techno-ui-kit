import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components'

import { Tables } from './Tables'

const meta: Meta<typeof Tables.Table> = {
  component: Tables.Table,
  tags: ['autodocs'],
  title: 'Components/Table',
}

export default meta

type Story = StoryObj<typeof meta>

const TableWrapper = () => {
  const tableData = [
    {
      dateOfPayment: '12.12.2022',
      paymentType: 'Stripe',
      tableRowId: '13214',
    },
    {
      dateOfPayment: '13.10.2024',
      paymentType: 'PayPal',
      tableRowId: '13214',
    },
  ]

  return (
    <Tables.Table>
      <Tables.TableHead>
        <Tables.TableRow>
          <Tables.TableHeadCell>
            <div style={{ color: 'white', textAlign: 'start' }}>
              <Typography>Date of Payment</Typography>
            </div>
          </Tables.TableHeadCell>
          <Tables.TableHeadCell>
            <div style={{ color: 'white', textAlign: 'start' }}>
              <Typography>Payment Type</Typography>
            </div>
          </Tables.TableHeadCell>
        </Tables.TableRow>
      </Tables.TableHead>

      <Tables.TableBody>
        {tableData?.map(table => {
          return (
            <Tables.TableRow key={table.tableRowId}>
              <Tables.TableBodyCell style={{ color: 'white', textAlign: 'start' }}>
                {table.dateOfPayment}
              </Tables.TableBodyCell>
              <Tables.TableBodyCell style={{ color: 'white', textAlign: 'start' }}>
                {table.paymentType}
              </Tables.TableBodyCell>
            </Tables.TableRow>
          )
        })}
      </Tables.TableBody>
    </Tables.Table>
  )
}

export const DefaultTableStory: Story = {
  render: () => <TableWrapper />,
}
