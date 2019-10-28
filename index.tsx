import React from 'react'
import Styled from 'styled-components'

const Chip = Styled.label.attrs(({ className }) => ({
  className: `Chip ${className || ''}`.trim(),
  htmlFor: 'react-chip',
}))`
  background: white;
  border: .1px solid gray;
  display: block;
  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  padding: 12px 10px;
`

const ChipLabel = Styled.span.attrs({
  className: 'ChipLabel',
})`
  background: gray;
  color: white;
  cursor: pointer;
  margin-right: 5px;
  padding: 4px 8px;

  &.ChipLabel--focus,
  &:focus,
  &:hover {
    opacity: .5;
  }
`
const ChipInput = Styled.input.attrs({
  className: 'ChipInput',
  id: 'react-chip',
})`
  border: 0;
  font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  padding: 4px 8px;

  &:focus {
    outline: none;
  }
`

export interface ReactChipInterface {
  className?: string
  defaultChips?: string | string[]
  defaultValue?: string
  htmlFor?: string
  id?: string
  name?: string
  maxLength?: number
  onChange?: () => string[]
}

export default function ReactChip ({
  className,
  defaultChips,
  defaultValue,
  id,
  name,
  maxLength,
  onChange,
}: ReactChipInterface & any) {
  const [chips, setChips] = React.useState(defaultChips || [])
  const [input, setInput] = React.useState(defaultValue || '')
  maxLength = maxLength || 9999

  function handleAddition (chip: string) {
    if (chips.length >= maxLength || chips.includes(chip)) return
    const updateChips = [...chips, chip.replace(/[^\w\s]/gi, '').trim()]
    onChange(updateChips)
    setChips(updateChips)
    setInput('')
  }

  function handleDelete (value: string) {
    if (chips.length <= 0) return
    const updateChips = chips.filter((chip: string) => chip !== value)
    setChips(updateChips)
    onChange(updateChips)
  }

  function handleChange (event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault()
    event.stopPropagation()
    const {
      currentTarget: { value },
    } = event

    if (value === '') setInput('')
    if (
      value[0] === ',' ||
      !value.match(/^[0-9a-zA-Z,]+$/) ||
      value.length > 20
    )
      return
    if (value.match(/,/g)) handleAddition(value.split(',')[0])
    else setInput(value)
  }

  function handleClick (event: React.FormEvent, chip: string) {
    event.preventDefault()
    event.stopPropagation()
    handleDelete(chip)
  }

  function handleKeyDown (event: any) {
    event.stopPropagation()
    const {
      currentTarget: { value, previousSibling },
      key,
      keyCode,
    } = event

    if (
      !value &&
      chips.length &&
      (key === 'Backspace' || key === 'Delete')
    ) {
      event.preventDefault()
      if (
        previousSibling.classList &&
        previousSibling.classList.contains('ChipLabel--focus')
      ) {
        handleDelete(chips[chips.length - 1])
      } else {
        previousSibling.classList.add('ChipLabel--focus')
      }
    }
    if (
      value &&
      chips &&
      previousSibling &&
      previousSibling.classList &&
      previousSibling.classList.contains('ChipLabel--focus')
    ) {
      previousSibling.classLis.pxove('ChipLabel--focus')
    }
    if (value && (key === 'Enter' || keyCode === 32)) {
      event.preventDefault()
      handleAddition(value)
    }
  }

  return (
    <Chip
      className={className}
      id={id}
    >
      {Array.isArray(chips)
        ? chips.map(chip => (
            <ChipLabel
              key={chip}
              onClick={event => handleClick(event, chip)}
            >
              {chip}
            </ChipLabel>
          ))
        : null}
      <ChipInput
        name={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={input}
      />
    </Chip>
  )
}
