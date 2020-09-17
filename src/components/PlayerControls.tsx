import React, {FunctionComponent, useState} from 'react'
import Link from 'next/link'
import {
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from '@reach/listbox'
import IconChevronRight from './images/icon-chevron-double-right.svg'
import IconDownload from './images/icon-download.svg'

type PlayerControlsProps = {
  nextLessonUrl: string
  handlerSpeed: any
  handlerDownload: any
  isPro: boolean
}

const availableSpeeds: string[] = ['0.85', '1', '1.25', '1.5', '1.75', '2']

const PlayerControls: FunctionComponent<PlayerControlsProps> = ({
  nextLessonUrl = '',
  handlerSpeed,
  handlerDownload,
  isPro,
}: PlayerControlsProps) => {
  console.log('nextLessonUrl', nextLessonUrl)
  const [speed, setSpeed] = useState<string>('1')
  const speedValueChanged = (value: string) => {
    handlerSpeed(value)
    setSpeed(value)
  }

  return (
    <div className="flex items-center justify-between mt-4">
      {isPro ? (
        <>
          <div>
            {nextLessonUrl && (
              <Link href={nextLessonUrl}>
                <a className="bg-gray-300 rounded p-2">Next lesson</a>
              </Link>
            )}
          </div>
          <div className="flex items-center">
            <ListboxInput value={speed} onChange={speedValueChanged}>
              <ListboxButton className="w-20 bg-gray-300 rounded">
                <IconChevronRight className="w-4" /> x{speed}
              </ListboxButton>
              <ListboxPopover>
                <ListboxList>
                  {availableSpeeds.map((option) => (
                    <ListboxOption key={option} value={option}>
                      {`x${option}`}
                    </ListboxOption>
                  ))}
                </ListboxList>
              </ListboxPopover>
            </ListboxInput>
            <button
              onClick={handlerDownload}
              className="ml-4 bg-gray-300 rounded p-2"
            >
              <IconDownload className="w-4" />
            </button>
          </div>
        </>
      ) : (
        <div>This stuff if for Pro members only</div>
      )}
    </div>
  )
}

export default PlayerControls