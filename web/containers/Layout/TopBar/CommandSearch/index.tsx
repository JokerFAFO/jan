import { Fragment, useState, useEffect, useContext } from 'react'

import {
  Button,
  CommandModal,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandShortcut,
  CommandList,
} from '@janhq/uikit'

import { useSetAtom } from 'jotai'
import {
  MessageCircleIcon,
  SettingsIcon,
  DatabaseIcon,
  CpuIcon,
  BookOpenIcon,
} from 'lucide-react'

import ShortCut from '@/containers/Shortcut'

import { FeatureToggleContext } from '@/context/FeatureToggle'

import { MainViewState } from '@/constants/screens'

import { useMainViewState } from '@/hooks/useMainViewState'

import { showRightSideBarAtom } from '@/screens/Chat/Sidebar'

export default function CommandSearch() {
  const { setMainViewState } = useMainViewState()
  const [open, setOpen] = useState(false)
  const setShowRightSideBar = useSetAtom(showRightSideBarAtom)

  const menus = [
    {
      name: 'Getting Started',
      icon: <BookOpenIcon size={16} className="mr-3 text-muted-foreground" />,
      state: MainViewState.Welcome,
    },
    {
      name: 'Chat',
      icon: (
        <MessageCircleIcon size={16} className="mr-3 text-muted-foreground" />
      ),
      state: MainViewState.Chat,
    },
    {
      name: 'Explore Models',
      icon: <CpuIcon size={16} className="mr-3 text-muted-foreground" />,
      state: MainViewState.ExploreModels,
    },
    {
      name: 'My Models',
      icon: <DatabaseIcon size={16} className="mr-3 text-muted-foreground" />,
      state: MainViewState.MyModels,
    },
    {
      name: 'Settings',
      icon: <SettingsIcon size={16} className="mr-3 text-muted-foreground" />,
      state: MainViewState.Setting,
      shortcut: <ShortCut menu="," />,
    },
  ]

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
      if (e.key === ',' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setMainViewState(MainViewState.Setting)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <div className="relative">
        <Button
          themes="outline"
          className="unset-drag h-8 w-[300px] justify-start text-left text-xs font-normal text-muted-foreground focus:ring-0"
          onClick={() => setOpen((open) => !open)}
        >
          Search menus...
        </Button>
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <ShortCut menu="K" />
        </div>
      </div>

      <CommandModal open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {menus.map((menu, i) => {
              return (
                <CommandItem
                  key={i}
                  value={menu.name}
                  onSelect={() => {
                    setMainViewState(menu.state)
                    setOpen(false)
                  }}
                >
                  {menu.icon}
                  <span>{menu.name}</span>
                  {menu.shortcut && (
                    <CommandShortcut>{menu.shortcut}</CommandShortcut>
                  )}
                </CommandItem>
              )
            })}
          </CommandGroup>
        </CommandList>
      </CommandModal>
      <Button
        themes="outline"
        className="unset-drag justify-start text-left text-xs font-normal text-muted-foreground focus:ring-0"
        onClick={() => setShowRightSideBar((show) => !show)}
      >
        Toggle right
      </Button>
    </Fragment>
  )
}