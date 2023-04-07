import { Palette, X } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { InputColor, InputColorContainer, PopoverArrow, PopoverClose, PopoverContentContainer, PopoverTrigger } from "./style";
import { SwitchTheme } from "./components/SwitchTheme";
import { useAtom } from "jotai";
import { primaryColorAtom } from "@/App";

import * as Popover from '@radix-ui/react-popover';
import { ChangeEvent } from "react";

export function PalettePopover() {

  const theme = useTheme();
  const [primaryColorOfChoice, setPrimaryColorOfChoice] = useAtom(primaryColorAtom);

  function handleColorOfChoiceChange({target: {value}}: ChangeEvent<HTMLInputElement>) {
    setPrimaryColorOfChoice(value);
    localStorage.setItem('@githublog-primaryColor-v1', value);
  }

  return (
    <Popover.Root>
      <PopoverTrigger asChild>
        <button>
          <Palette size={20} color={theme.primary} weight="duotone" />
        </button>
      </PopoverTrigger>
      <Popover.Portal>
        <PopoverContentContainer sideOffset={5}>
          
          <h3>Tema</h3>


          <InputColorContainer tabIndex={0}>
            <label>Cor Principal: </label>
            <InputColor type="color" key={primaryColorOfChoice} defaultValue={primaryColorOfChoice} onBlur={handleColorOfChoiceChange}/>
          </InputColorContainer>


          <SwitchTheme />
          
          <PopoverClose asChild aria-label="Close">
            <button>
              <X size={18} color={theme.primary} weight="regular" />
            </button>
          </PopoverClose>
          <PopoverArrow />
        </PopoverContentContainer>
      </Popover.Portal>
    </Popover.Root>
  )
}