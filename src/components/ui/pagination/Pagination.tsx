import { FC } from 'react'

import { ArrowRightIcon } from '@/assets/ArrowRightIcon'
import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon'
import { Select, Typography } from '@/components'
import { usePagination } from '@/components/ui/pagination/usePagination'
import { clsx } from 'clsx'

import s from './Pagination.module.scss'

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
  onPerPageChange?: (itemPerPage: number) => void
  page: number
  perPage?: number
  perPageOptions?: number[]
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
  onPerPageChange,
  page,
  perPage = null,
  perPageOptions,
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
            onPerPageChange,
            perPage,
            perPageOptions,
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
      <ArrowLeftIcon />
    </button>
  )
}

const NextButton: FC<NavigationButtonProps> = ({ disabled, onClick }) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick} type={'button'}>
      <ArrowRightIcon />
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
  onPerPageChange: (itemPerPage: number) => void
  perPage: number
  perPageOptions: number[]
}

const PerPageSelect: FC<PerPageSelectProps> = ({ onPerPageChange, perPage, perPageOptions }) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value: value.toString(),
  }))

  function onPerPageChangeForType(value: number | string): void {
    onPerPageChange(value as number)
  }

  // const selectOpen = perPage > 5

  return (
    <div className={classNames.selectBox}>
      <Typography variant={'medium-text-14'}>Показать</Typography>
      <Select
        // contentStyle={s.select}
        currentValue={perPage.toString()}
        onValueChange={onPerPageChangeForType}
        options={selectOptions}
        selectWidth={'60px'}
      />
      <Typography variant={'medium-text-14'}>на странице</Typography>
    </div>
  )
}
