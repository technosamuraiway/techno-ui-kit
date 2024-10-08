import { FC } from 'react'

import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons'
import { Select, Typography } from '@/components'
import { clsx } from 'clsx'

import s from './Pagination.module.scss'

import { usePagination } from './usePagination'

type PaginationConditionals =
  | {
      onPerPageChange: (itemPerPage: number) => void
      perPage: number
      perPageOptions: number[]
    }
  | {
      onPerPageChange?: never
      perPage?: null
      perPageOptions?: never
    }

export type PaginationProps = {
  count: number
  onChange: (page: number) => void
  onPageTitle: string
  onPerPageChange?: (itemPerPage: number) => void
  page: number
  perPage?: number
  perPageOptions?: number[]
  showTitle: string
  siblings?: number
} & PaginationConditionals

const classNames = {
  container: s.container,
  dots: s.dots,
  icon: s.icon,
  item: s.item,
  pageButton(selected?: boolean) {
    return clsx(this.item, selected && s.selected)
  },
  root: s.root,
  select: s.select,
  selectBox: s.selectBox,
}

export const Pagination: FC<PaginationProps> = ({
  count,
  onChange,
  onPageTitle,
  onPerPageChange,
  page,
  perPage = null,
  perPageOptions,
  showTitle,
  siblings,
}) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange,
    page,
    siblings,
  })

  const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

  return (
    <div className={classNames.root}>
      <div className={classNames.container}>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
      </div>

      {showPerPageSelect && (
        <PerPageSelect
          {...{
            onPageTitle,
            onPerPageChange,
            perPage,
            perPageOptions,
            showTitle,
          }}
        />
      )}
    </div>
  )
}

type NavigationButtonProps = {
  disabled?: boolean
  onClick: () => void
}

type PageButtonProps = {
  page: number
  selected: boolean
} & NavigationButtonProps

const Dots: FC = () => {
  return <span className={classNames.dots}>&#8230;</span>
}
const PageButton: FC<PageButtonProps> = ({ disabled, onClick, page, selected }) => {
  return (
    <button
      className={classNames.pageButton(selected)}
      disabled={selected || disabled}
      onClick={onClick}
      type={'button'}
    >
      <Typography variant={'medium-text-14'}>{page}</Typography>
    </button>
  )
}

const PrevButton: FC<NavigationButtonProps> = ({ disabled, onClick }) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick} type={'button'}>
      <ArrowLeftIcon height={'16px'} width={'16px'} />
    </button>
  )
}

const NextButton: FC<NavigationButtonProps> = ({ disabled, onClick }) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick} type={'button'}>
      <ArrowRightIcon height={'16px'} width={'16px'} />
    </button>
  )
}

type MainPaginationButtonsProps = {
  currentPage: number
  onClick: (pageNumber: number) => () => void
  paginationRange: (number | string)[]
}

const MainPaginationButtons: FC<MainPaginationButtonsProps> = ({
  currentPage,
  onClick,
  paginationRange,
}) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return <PageButton key={index} onClick={onClick(page)} page={page} selected={isSelected} />
      })}
    </>
  )
}

type PerPageSelectProps = {
  onPageTitle: string
  onPerPageChange: (itemPerPage: number) => void
  perPage: number
  perPageOptions: number[]
  showTitle: string
}

const PerPageSelect: FC<PerPageSelectProps> = ({
  onPageTitle,
  onPerPageChange,
  perPage,
  perPageOptions,
  showTitle,
}) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value: value.toString(),
  }))

  function onPerPageChangeForType(value: number | string): void {
    onPerPageChange(value as number)
  }

  return (
    <div className={classNames.selectBox}>
      <Typography variant={'medium-text-14'}>{showTitle}</Typography>
      <Select
        currentValue={perPage.toString()}
        onValueChange={onPerPageChangeForType}
        options={selectOptions}
        selectWidth={'52px'}
        triggerStyle={s.selectTrigger}
      />
      <Typography variant={'medium-text-14'}>{onPageTitle}</Typography>
    </div>
  )
}
