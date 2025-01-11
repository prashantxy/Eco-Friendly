'use client'

import React, { useState, useRef, useEffect } from 'react'
import { cn } from './lib/utils'
import { ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  options: SelectOption[]
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
}

const Select: React.FC<SelectProps> = ({ options, onChange, placeholder, className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelect = (option: SelectOption) => {
    setSelectedOption(option)
    setIsOpen(false)
    if (onChange) {
      onChange(option.value)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsOpen(!isOpen)
    } else if (event.key === 'Escape') {
      setIsOpen(false)
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
        return
      }
      const currentIndex = selectedOption
        ? options.findIndex((option) => option.value === selectedOption.value)
        : -1
      const nextIndex =
        event.key === 'ArrowDown'
          ? (currentIndex + 1) % options.length
          : (currentIndex - 1 + options.length) % options.length
      setSelectedOption(options[nextIndex])
    }
  }

  return (
    <div className={cn('relative', className)} ref={selectRef}>
      <SelectTrigger
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <SelectValue>
          {selectedOption ? selectedOption.label : placeholder || 'Select an option'}
        </SelectValue>
      </SelectTrigger>
      {isOpen && (
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              option={option}
              isSelected={selectedOption?.value === option.value}
              onSelect={() => handleSelect(option)}
            />
          ))}
        </SelectContent>
      )}
    </div>
  )
}

const SelectTrigger: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div
      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      role="combobox"
      tabIndex={0}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </div>
  )
}

const SelectValue: React.FC<React.HTMLAttributes<HTMLSpanElement>> = (props) => {
  return <span className="flex-grow text-left" {...props} />
}

const SelectContent: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ children, ...props }) => {
  return (
    <ul
      className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
      role="listbox"
      {...props}
    >
      {children}
    </ul>
  )
}

interface SelectItemProps extends React.HTMLAttributes<HTMLLIElement> {
  option: SelectOption
  isSelected: boolean
  onSelect: () => void
}

const SelectItem: React.FC<SelectItemProps> = ({ option, isSelected, onSelect, ...props }) => {
  return (
    <li
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        isSelected ? 'bg-accent text-accent-foreground' : ''
      )}
      role="option"
      aria-selected={isSelected}
      onClick={onSelect}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && (
          <span className="h-2 w-2 rounded-full bg-current" />
        )}
      </span>
      {option.label}
    </li>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
